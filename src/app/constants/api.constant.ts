export enum Environment {
  Development = 'development',
  Production = 'production'
}

export const SERVER_URLS = {
  [Environment.Development]: 'https://api.dimriapps.com',
  [Environment.Production]: 'https://api.dimriapps.com'

  // [Environment.Development]: 'https://dimri-real-dev.azurewebsites.net',
  // [Environment.Production]:  'https://dimri-app-dev.azurewebsites.net'
}
export const WP_SERVER_URLS = {
  [Environment.Development]: 'https://dimridev.wpengine.com',
  [Environment.Production]: 'https://dimri.co.il/'
}

export enum API_ENDPOINTS {
  GET_STATUS = '/myApartment/getApartmentProgress/',
  GET_FILES = '/user/getFiles',
  SEND_QUESTION = '/user/sendQuestion',
  GET_ALL_QUESTIONS = '/user/getAllQuestons',
  GET_QUESTION = '/generals/questions',
  AMOUNTPAID = '/payments/amountPaid',
  BALANCE_LIST = '/payments/balance',
  SUPPLIERS = '/myApartment/suppliers',
  TOOL_TIP = '/services/generalsService/tooltip?key=',
  TOOL_TIP_ALL = '/generals/tooltips',
  TERMS_OF_USE = '/wp-json/wp/v2/pages?include=49',
  DICTIONARY_TABLE = '/wp-json/app/GetTable?table_id=2',
  GENERRATE_OTP = '/auth/generateOtp',
  VALIDATE_OTP = '/auth/validateOtp',
  LOGIN = '/auth/login',
  PROFILE_DATA = '/profile',
  SILENT_LOGIN = '/user/silentLogin',
  FORGOT_PASSWORD = '/auth/forgotPassword',
  GET_PAYMENT_OVERVIEW = '/payments',
  GET_PAYMENT_SCHEDULE = '/payments/paymentsList',
  GET_GUARANTEES = '/payments/guarantees',
  CONTRACT_OVERVIEW = '/myApartment/contractDetails',
  FINISHING_MATERIALS = '/myApartment/tenantChanges',
  SET_PASSWORD = '/user/setPassword'

  //   SUBSCRIPTIONS_EDIT = '/subscriptions/edit',
  //   SUBSCRIPTIONS_CATALOG_FETCH = '/subscriptions/catalog',
  //   SUBSCRIPTIONS_CATALOG_ADD = '/subscriptions/catalog/add',
  //   ADMIN_TENANTS_FETCH = '/admin/tenants',
  //   ADMIN_TENANTS_SYNC = '/admin/tenants/sync',
  //   ADMIN_USERS_FETCH = '/admin/users',
  //   ADMIN_USERS_INVITE = '/admin/users/invite',
  //   ADMIN_USERS_DELETE = '/admin/users/delete',
  //   ADMIN_USERS_EDIT = '/admin/users/edit',
  //   ADMIN_LOGS_ADD = '/admin/logs/add',
  //   ADMIN_LOGS_FETCH = '/admin/logs',
  //   ADMIN_CATALOG_MS_AND_SELECTED_FETCH = '/admin/subscriptions/catalog/ms-and-selected',
  //   ADMIN_CATALOG_MS_FETCH = '/admin/subscriptions/catalog/ms',
  //   ADMIN_CATALOG_FETCH = '/admin/subscriptions/catalog',
  //   ADMIN_CATALOG_DELETE = '/admin/subscriptions/catalog/delete',
  //   ADMIN_CATALOG_ADD = '/admin/subscriptions/catalog/add',
  //   ADMIN_SERVICES_FETCH = '/admin/services'
}

export const ERROR_CODE = {
  wrongInput: 400,
  unauthorized: 401,
  forbidden: 403,
  pageNotFound: 404,
  serverError: 500
}
