/// <reference path="./web-gtm-sandboxed-apis.d.ts" />

const callInWindow = require('callInWindow');
const copyFromWindow = require('copyFromWindow');
const getContainerVersion = require('getContainerVersion');
const getType = require('getType');
const isConsentGranted = require('isConsentGranted');
const logToConsole = require('logToConsole');

/*==============================================================================
==============================================================================*/

const shopify = copyFromWindow('Shopify');
if (getType(shopify) !== 'object') {
  log({
    Name: 'ShopifyCustomerPrivacyAPI',
    Type: 'Message',
    Message: 'Not a Shopify environment. Aborting.'
  });

  return data.gtmOnFailure();
}

const customerPrivacyApi = copyFromWindow('Shopify.customerPrivacy');
if (getType(customerPrivacyApi) !== 'object') {
  callInWindow(
    'Shopify.loadFeatures',
    [{ name: 'consent-tracking-api', version: '0.1' }],
    (error) => {
      if (error) {
        log({
          Name: 'ShopifyCustomerPrivacyAPI',
          Type: 'Message',
          Message: 'Shopify Customer Privacy API has failed to load.'
        });

        return data.gtmOnFailure();
      }

      updateConsent(data);
    }
  );
} else {
  updateConsent(data);
}

/*==============================================================================
  Vendor related functions
==============================================================================*/

function addMetaFields(data, updatedConsent) {
  if (data.metaFieldsList && data.metaFieldsList.length > 0) {
    updatedConsent.metafields = data.metaFieldsList;
  }

  return updatedConsent;
}

function addCustomStoreFrontData(data, updatedConsent) {
  const customStorefrontFields = [
    'checkoutRootDomain',
    'storefrontRootDomain',
    'storefrontAccessToken'
  ];

  customStorefrontFields.forEach((field) => {
    if (data[field]) {
      updatedConsent.headlessStorefront = true;
      updatedConsent[field] = data[field];
    }
  });

  return updatedConsent;
}

function setTrackingConsent(consent) {
  log({
    Name: 'ShopifyCustomerPrivacyAPI',
    Type: 'Message',
    Message: 'Updating Shopify Customer Privacy API.',
    Consent: consent
  });

  callInWindow('Shopify.customerPrivacy.setTrackingConsent', consent, () => {
    log({
      Name: 'ShopifyConsentAPI',
      Type: 'Message',
      Message: 'Consent has been set successfully.'
    });

    return data.gtmOnSuccess();
  });
}

function updateConsent(data) {
  const isGCM = data.consentSource === 'gcm';
  const updatedConsent = {};

  if (data.hasOwnProperty('gcmAnalyticsConsent') || data.hasOwnProperty('manualAnalyticsConsent')) {
    updatedConsent.analytics = isGCM
      ? isConsentGranted(data.gcmAnalyticsConsent)
      : isManualConsentGranted(data.manualAnalyticsConsent);
  }

  if (data.hasOwnProperty('gcmMarketingConsent') || data.hasOwnProperty('manualMarketingConsent')) {
    updatedConsent.marketing = isGCM
      ? isConsentGranted(data.gcmMarketingConsent)
      : isManualConsentGranted(data.manualMarketingConsent);
  }

  if (
    data.hasOwnProperty('gcmPreferencesConsent') ||
    data.hasOwnProperty('manualPreferencesConsent')
  ) {
    updatedConsent.preferences = isGCM
      ? isConsentGranted(data.gcmPreferencesConsent)
      : isManualConsentGranted(data.manualPreferencesConsent);
  }

  addMetaFields(data, updatedConsent);
  addCustomStoreFrontData(data, updatedConsent);

  setTrackingConsent(updatedConsent);
}

/*==============================================================================
  Helpers
==============================================================================*/

function isManualConsentGranted(value) {
  return [true, 'true', 'granted'].indexOf(value) !== -1;
}

function log(dataToLog) {
  if (!determinateIsLoggingEnabled()) return;
  logToConsole(dataToLog);
}

function determinateIsLoggingEnabled() {
  const containerVersion = getContainerVersion();
  const isDebug = !!(
    containerVersion &&
    (containerVersion.debugMode || containerVersion.previewMode)
  );

  if (!data.logType) {
    return isDebug;
  }

  if (data.logType === 'no') {
    return false;
  }

  if (data.logType === 'debug') {
    return isDebug;
  }

  return data.logType === 'always';
}
