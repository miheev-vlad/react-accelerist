export {
  login,
  register,
  setAuth,
  authFail,
  clearAuthError,
  clearToken,
  sendEmail,
  clearLoading,
  setNewPassword,
  setResetPasswordSuccess,
  setResetPasswordFail,
  setSendEmailSuccess,
  clearSendEmail,
} from './authentication';
export {
  setUser,
  signOut,
  setSignInInformation,
  clearSignInInformation,
} from './user';
export { toggleShowAdvancedSearch } from './search';
export {
  getCompanies,
  setCompanies,
  setError,
  setCurrentPage,
  likeCompany,
  exportExcel,
  disLikeCompany,
  cleaningLoading,
  showUploadFileToast,
  cleaningUploadFile,
  setQueryParams,
  cleaningQueryParams,
  setLocationString,
  cleaningLocationStrings,
  setFormFilterValues,
  cleaningFormFilterValues,
} from './companies';

export { default as authenticationReducer } from './authentication';
export { default as userReducer } from './user';
export { default as searchReducer } from './search';
export { default as companiesReducer } from './companies';

export type {
  RequestAuthenticationPayloadProps,
  RequestSendEmailPayloadProps,
  RequestSetNewPasswordPayloadProps,
} from './authentication';

export type {
  RequestGetCompaniesPayloadProps,
  ResponseGetCompaniesPayloadProps,
  ItemsProps,
  MetaInformationProps,
  RequestLikeCompanyPayloadProps,
  QueryParamsProps,
} from './companies';

export { nameSelector } from './user';
