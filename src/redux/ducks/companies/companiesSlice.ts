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
  locationString: string;
  formFilterValues: FormFilterValuesProps;
};

export type FormFilterValuesProps = {
  gender: string;
  relations: string;
  revenue: number[];
  age: number[];
  industry: string;
  location: string;
  locations: string[];
  industries: string[];
};

export type QueryParamsProps = {
  ageRanges?: string[];
  gender?: string;
  industry?: string[];
  location?: string[];
  revenueMin?: string;
  revenueMax?: string;
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

export type RequestSetFormFilterValuesPayloadProps = {
  formFilterValues: FormFilterValuesProps;
};

export type ResponseUploadFilePayloadProps = {
  file: string;
  name: string;
};

export type RequestSetLocationPayloadProps = {
  locationString: string;
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
  locationString: '',
  formFilterValues: {
    gender: 'Male',
    relations: 'Single',
    revenue: [5.5, 50],
    age: [23, 64],
    industry: '',
    location: '',
    locations: [],
    industries: [],
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
      if (action.payload.queryParams.ageRanges) {
        state.queryParams.ageRanges = action.payload.queryParams.ageRanges;
      }
      if (action.payload.queryParams.gender) {
        state.queryParams.gender = action.payload.queryParams.gender;
      }
      if (action.payload.queryParams.industry) {
        state.queryParams.industry = action.payload.queryParams.industry;
      }
      if (action.payload.queryParams.location) {
        state.queryParams.location = action.payload.queryParams.location;
      }
      if (action.payload.queryParams.revenueMax) {
        state.queryParams.revenueMax = action.payload.queryParams.revenueMax;
      }
      if (action.payload.queryParams.revenueMin) {
        state.queryParams.revenueMin = action.payload.queryParams.revenueMin;
      }
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
    setFormFilterValues: (
      state,
      action: PayloadAction<RequestSetFormFilterValuesPayloadProps>,
    ) => {
      if (action.payload.formFilterValues.gender) {
        state.formFilterValues.gender = action.payload.formFilterValues.gender;
      }
      if (action.payload.formFilterValues.relations) {
        state.formFilterValues.relations =
          action.payload.formFilterValues.relations;
      }
      if (action.payload.formFilterValues.revenue) {
        state.formFilterValues.revenue =
          action.payload.formFilterValues.revenue;
      }
      if (action.payload.formFilterValues.age) {
        state.formFilterValues.age = action.payload.formFilterValues.age;
      }
      state.formFilterValues.industry =
        action.payload.formFilterValues.industry;
      state.formFilterValues.location =
        action.payload.formFilterValues.location;
      if (action.payload.formFilterValues.industries) {
        state.formFilterValues.industries =
          action.payload.formFilterValues.industries;
      }
      if (action.payload.formFilterValues.locations) {
        state.formFilterValues.locations =
          action.payload.formFilterValues.locations;
      }
    },
    cleaningFormFilterValues: state => {
      state.formFilterValues = {
        gender: 'Male',
        relations: 'Single',
        revenue: [5.5, 50],
        age: [23, 64],
        industry: '',
        location: '',
        locations: [],
        industries: [],
      };
    },
    setLocationString: (
      state,
      action: PayloadAction<RequestSetLocationPayloadProps>,
    ) => {
      state.locationString = action.payload.locationString;
    },
    cleaningLocationStrings: state => {
      state.locationString = '';
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
  setLocationString,
  cleaningLocationStrings,
  setFormFilterValues,
  cleaningFormFilterValues,
} = companiesSlice.actions;

export default companiesSlice.reducer;
