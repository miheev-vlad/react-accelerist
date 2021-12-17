import { apiCompaniesInstance } from '../../../api';

type GetCompaniesProps = {
  token: string;
  page: number;
  queryParams?: any;
};

type LikeCompanyProps = {
  id: string;
  token: string;
};

export function requestGetCompanies(getCompaniesData: GetCompaniesProps) {
  const { token, page, queryParams } = getCompaniesData;
  const apiAuth = apiCompaniesInstance({ token });

  return apiAuth.get('/', {
    params: {
      page,
      limit: 12,
      ...queryParams,
    },
  });
}

export function requestLikeCompany(likeCompanyData: LikeCompanyProps) {
  const { token, id } = likeCompanyData;
  const apiAuth = apiCompaniesInstance({ token });

  return apiAuth.get(`/${id}/like`);
}

export function requestDisLikeCompany(likeCompanyData: LikeCompanyProps) {
  const { token, id } = likeCompanyData;
  const apiAuth = apiCompaniesInstance({ token });

  return apiAuth.get(`/${id}/dislike`);
}

export function requestExportExcel(getCompaniesData: GetCompaniesProps) {
  const { token, page } = getCompaniesData;
  const apiAuth = apiCompaniesInstance({ token });

  return apiAuth.get('/excel', {
    params: {
      page,
      limit: 105,
    },
  });
}
