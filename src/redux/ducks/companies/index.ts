import reducer from './companiesSlice';

export * from './operations';

export type {
  RequestGetCompaniesPayloadProps,
  ResponseGetCompaniesPayloadProps,
  RequestLikeCompanyPayloadProps,
  QueryParamsProps,
  ResponseUploadFilePayloadProps,
} from './companiesSlice';

export * from './types';

export default reducer;
