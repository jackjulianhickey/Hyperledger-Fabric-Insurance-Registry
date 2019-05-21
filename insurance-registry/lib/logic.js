'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


/**
 * Contracting an insurance offer
 * @param {org.acme.insuranceregistry.MakeInsuranceOffer} insurance
 * @transaction
 */

async function makeInsuranceOffer(insurance) {
    let assetRegistry = await getAssetRegistry('org.acme.insuranceregistry.InsuranceOffer');

    num_id = (Math.floor(Math.random() * ( 999999 - 100000) + 100000)).toString(10)

    var factory = getFactory()
    var insuranceId = insurance.privateIndividual.id + '' + num_id
    var insuranceOfferAsset = factory.newResource('org.acme.insuranceregistry', 'InsuranceOffer', insuranceId)
    insuranceOfferAsset.privateIndividual = insurance.privateIndividual
    insuranceOfferAsset.insuranceCompany = insurance.insuranceCompany
    insuranceOfferAsset.privateAsset = insurance.privateAsset
    insuranceOfferAsset.durationInMonths = insurance.privateAsset.durationInMonths
    insuranceOfferAsset.monthlyCost = (insurance.privateAsset.value * 0.1) / 12

    insurance.privateAsset.numInsuranceOffers += 1;

    await assetRegistry.add(insuranceOfferAsset)
}


/**
 * Accepting an insurance offer
 * @param {org.acme.insuranceregistry.AcceptInsuranceOffer} offer
 * @transaction
 */

async function acceptInsuranceOffer(offer) {
    let insuranceOfferAssetRegistry = await getAssetRegistry('org.acme.insuranceregistry.InsuranceOffer');
    let privateAssetRegistry = await getAssetRegistry('org.acme.insuranceregistry.PrivateAsset');
    let privateIndividualParticipantRegistry = await getParticipantRegistry('org.acme.insuranceregistry.PrivateIndividual');
    let insuranceCompanyParticipantRegistry = await getParticipantRegistry('org.acme.insuranceregistry.InsuranceCompany');

    var costToDebit = offer.offer.monthlyCost;

    if (offer.offer.privateIndividual.balance < costToDebit) {
        throw new Error('Not enough funds in balance')
    }
    offer.offer.privateIndividual.balance -= costToDebit
    offer.offer.insuranceCompany.balance += costToDebit
    offer.offer.insuranceCompany.insuranceContracts += 1
    offer.offer.status = "accepted";
    offer.offer.privateAsset.status = "insured";

    await insuranceOfferAssetRegistry.update(offer.offer);
    await privateAssetRegistry.update(offer.offer.privateAsset)
    await privateIndividualParticipantRegistry.update(offer.offer.privateIndividual)
    await insuranceCompanyParticipantRegistry.update(offer.offer.insuranceCompany)

}

/**
 * Remove pending insurance offer
 * @param {org.acme.insuranceregistry.RejectPendingOffers} reject
 * @transaction
 */

async function rejectPendingOffers(reject) {
    let individualResource = "resource:org.acme.insuranceregistry.PrivateIndividual#" + reject.privateIndividual.id;
    let privateAssetResource = "resource:org.acme.insuranceregistry.PrivateAsset#" + reject.privateAsset.id
    let assetRegistry = await getAssetRegistry('org.acme.insuranceregistry.InsuranceOffer');
    let pendingOffers = await query('selectOpenAssetOffersToIndividual', { privateIndividual: individualResource, privateAsset: privateAssetResource });

    for (let n = 0; n < pendingOffers.length; n++) {
        pendingOffers[n].status = "rejected";
        await assetRegistry.update(pendingOffers[n]);        
    }
}

/**
 * Remove pending insurance offer
 * @param {org.acme.insuranceregistry.RiskAnalysis} asset
 * @transaction
 */
async function riskAnalysis(asset) {
    let assetRegistry = await getAssetRegistry('org.acme.insuranceregistry.PrivateAsset');
    let score = 0

    if (asset.privateAsset.privateIndividual.noClaimsYears == 1) {
        score += 1
    }

    if (asset.privateAsset.privateIndividual.noClaimsYears == 2) {
        score += 2
    }

    if (asset.privateAsset.privateIndividual.noClaimsYears > 2) {
        score += 4
    }

    if (asset.privateAsset.description == 'Phone') {
        score +=2
    }

    if (asset.privateAsset.description == 'House') {
        score +=3
    }

    if (asset.privateAsset.description == 'Car') {
        score +=2
    }

    if (asset.privateAsset.value < 10000.0) {
        // return new Error(asset.privateAsset.value)
        score += 1
    }

    if (asset.privateAsset.value < 1000.0) {
        score += 1
    }
    // return new Error("made it to the end ", asset.privateAsset.value)

    asset.privateAsset.riskAnalysisScore = score

    assetRegistry.update(asset.privateAsset)

}

/**
 * Remove pending insurance offer
 * @param {org.acme.insuranceregistry.CreateNewAsset} asset
 * @transaction
 */
async function createNewAsset(asset) {
    let assetRegistry = await getAssetRegistry('org.acme.insuranceregistry.PrivateAsset');
    var factory = getFactory()

    num_id = (Math.floor(Math.random() * ( 999999 - 100000) + 100000)).toString(10)

    var assetID = asset.privateIndividual.id + num_id;
    var newAsset = factory.newResource('org.acme.insuranceregistry', 'PrivateAsset', assetID)
    newAsset.privateIndividual = asset.privateIndividual;
    newAsset.description = asset.description;
    newAsset.value = asset.value;
    newAsset.durationInMonths = asset.durationInMonths;

    await assetRegistry.add(newAsset)
}

/**
 * Contracting an insurance offer
 * @param {org.acme.insuranceregistry.CreateClaim} claim
 * @transaction
 */

async function makeClaim(claim) {
    let assetResource = "resource:org.acme.insuranceregistry.PrivateAsset#" + claim.privateAsset.id;
    let assetInsuranceOffer = await query('selectInsuranceCompanyByInsuredAsset', { privateAsset: assetResource });

    await sleep(2000);

    num_id = (Math.floor(Math.random() * ( 999999 - 100000) + 100000)).toString(10)

    // throw new Error(assetInsuranceOffer[0].insuranceCompany)

    let assetRegistry = await getAssetRegistry('org.acme.insuranceregistry.Claim');

    var factory = getFactory()
    var claimId = claim.privateIndividual.id + '' + num_id
    var newClaim = factory.newResource('org.acme.insuranceregistry', 'Claim', claimId)
    newClaim.privateIndividual = claim.privateIndividual
    newClaim.privateAsset = claim.privateAsset
    newClaim.insuranceCompany = assetInsuranceOffer[0].insuranceCompany
    newClaim.description = claim.description
    newClaim.claimValue = claim.claimValue

    await assetRegistry.add(newClaim)
}

/**
* Contracting an insurance offer
* @param {org.acme.insuranceregistry.ProcessClaim} claim
* @transaction
*/
async function processClaim(claim) {
    let claimsAssetRegistry = await getAssetRegistry('org.acme.insuranceregistry.Claim');
    let privateIndividualParticipantRegistry = await getParticipantRegistry('org.acme.insuranceregistry.PrivateIndividual');

    if ( claim.status == "denied" ) {
        claim.processClaim.status = claim.status
        await claimsAssetRegistry.update( claim.processClaim )
        return true
    }

    var costToPay = claim.processClaim.claimValue;
    claim.processClaim.privateIndividual.balance += costToPay;
    claim.processClaim.status = claim.status

    await claimsAssetRegistry.update(claim.processClaim);
    await privateIndividualParticipantRegistry.update(claim.processClaim.privateIndividual);
    return true

}