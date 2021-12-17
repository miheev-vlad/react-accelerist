import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemsProps, MetaInformationProps } from './types';

export type CompaniesStateProps = {
  items: ItemsProps[];
  meta: MetaInformationProps;
  isCompaniesLoading: boolean;
  error: any;
  uploadFileName: string;
  uploadFile: string;
  isUploadingFile: boolean;
  queryParams: QueryParamsProps;
};

export type QueryParamsProps = {
  ageRanges?: any;
  gender?: any;
  industry?: any;
  location?: any;
  revenueMin?: any;
  revenueMax?: any;
};

export type ResponseGetCompaniesPayloadProps = {
  meta: MetaInformationProps;
  items: ItemsProps[];
};

export type RequestGetCompaniesPayloadProps = {
  token: string;
  page: number;
  queryParams?: QueryParamsProps;
};

export type RequestLikeCompanyPayloadProps = {
  id: string;
  token: string;
};

export type RequestSetCurrentPagePayloadProps = {
  currentPage: string;
};

export type RequestSetQueryParamsPayloadProps = {
  queryParams: QueryParamsProps;
};

export type ResponseUploadFilePayloadProps = {
  file: string;
  name: string;
};

const initialState: CompaniesStateProps = {
  items: [],
  meta: {
    currentPage: '1',
    itemCount: 0,
    itemsPerPage: '',
    totalItems: 0,
    totalPages: 0,
  },
  isCompaniesLoading: false,
  error: undefined,
  uploadFileName: '',
  uploadFile: '',
  isUploadingFile: false,
  queryParams: {
    ageRanges: [],
    gender: '',
    industry: [],
    location: [],
    revenueMin: '',
    revenueMax: '',
  },
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    getCompanies: (
      state,
      action: PayloadAction<RequestGetCompaniesPayloadProps>,
    ) => {
      state.isCompaniesLoading = true;
      action.payload;
    },
    setCompanies: (
      state,
      action: PayloadAction<ResponseGetCompaniesPayloadProps>,
    ) => {
      state.isCompaniesLoading = false;
      state.items = action.payload.items;
      state.meta = action.payload.meta;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.isCompaniesLoading = false;
      state.isUploadingFile = false;
      state.error = action.payload;
    },
    setCurrentPage: (
      state,
      action: PayloadAction<RequestSetCurrentPagePayloadProps>,
    ) => {
      state.meta.currentPage = action.payload.currentPage;
    },
    likeCompany: (
      state,
      action: PayloadAction<RequestLikeCompanyPayloadProps>,
    ) => {
      action.payload;
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.like = true;
        }
        return item;
      });
    },
    disLikeCompany: (
      state,
      action: PayloadAction<RequestLikeCompanyPayloadProps>,
    ) => {
      action.payload;
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.like = false;
        }
        return item;
      });
    },
    exportExcel: (
      state,
      action: PayloadAction<RequestGetCompaniesPayloadProps>,
    ) => {
      state.isUploadingFile = true;
      action.payload;
    },
    showUploadFileToast: (
      state,
      action: PayloadAction<ResponseUploadFilePayloadProps>,
    ) => {
      state.isUploadingFile = false;
      state.uploadFile = action.payload.file;
      state.uploadFileName = action.payload.name;
    },
    cleaningUploadFile: state => {
      state.uploadFile = '';
      state.uploadFileName = '';
    },
    cleaningLoading: state => {
      state.isCompaniesLoading = false;
      state.isUploadingFile = false;
    },
    setQueryParams: (
      state,
      action: PayloadAction<RequestSetQueryParamsPayloadProps>,
    ) => {
      state.queryParams = action.payload.queryParams;
    },
    cleaningQueryParams: state => {
      state.queryParams = {
        ageRanges: [],
        gender: '',
        industry: [],
        location: [],
        revenueMin: '',
        revenueMax: '',
      };
    },
  },
});

export const {
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
} = companiesSlice.actions;

export default companiesSlice.reducer;
