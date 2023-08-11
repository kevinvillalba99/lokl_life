// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://develop.api.lokl.life/api/v1/',
  unit_value: 114000,

  redirect_url_success_wompi_pse: 'https://lokl.life/payment/successful',
  owner_wompi_pse: '646fcef8c158685da367ec02',
  project_wompi_pse: '63261a94c8011a8a836fda23',

  redirect_url_success_wompi_credit:
    'https://develop-property.lokl.life/payment/successful',
  owner_wompi_credit: '64a6b2e7a604a10b8f557ca8',
  project_wompi_credit: '632511ecd407318f2592f945',

  bearer_token_transactions: 'pub_prod_zRN1PD4eVHzk7UvTCnBWL0hMQIHITjnn',
  api_url_financial_institutions:
    'https://production.wompi.co/v1/pse/financial_institutions',
  api_url_wompi_transactions: 'https://production.wompi.co/v1/transactions/',
  url_dash: 'https://apidash.lokl.life/get_info_pms',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
