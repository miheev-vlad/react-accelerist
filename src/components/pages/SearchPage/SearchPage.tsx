import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { RootState } from '../../../redux';
import {
  cleaningUploadFile,
  getCompanies,
  setCurrentPage,
} from '../../../redux/ducks';
import { AdvancedSearchSection, SearchResultSection } from './components';

const Toast = ({ uploadFileName }: any) => {
  return (
    <div>
      <p>File {uploadFileName} upload</p>
    </div>
  );
};

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();

  const { currentPage, totalItems, itemCount, itemsPerPage, totalPages } =
    useSelector((state: RootState) => state.companies.meta);

  const isCompaniesLoading = useSelector(
    (state: RootState) => state.companies.isCompaniesLoading,
  );

  const changePage = ({ selected }: any) => {
    dispatch(setCurrentPage({ currentPage: (selected + 1).toString() }));
  };

  const uploadFileName = useSelector(
    (state: RootState) => state.companies.uploadFileName,
  );

  const token = useSelector((state: RootState) => state.auth.token);

  const queryParams = useSelector(
    (state: RootState) => state.companies.queryParams,
  );

  const showAdvancedSearch = useSelector(
    (state: RootState) => state.search.showAdvancedSearch,
  );

  const showUploadNotify = () =>
    toast.success(Toast({ uploadFileName }), {
      hideProgressBar: true,
      autoClose: 4000,
    });

  useEffect(() => {
    if (uploadFileName.trim()) {
      showUploadNotify();
    }
    dispatch(cleaningUploadFile());
  }, [dispatch, uploadFileName]);

  useEffect(() => {
    dispatch(getCompanies({ token, page: +currentPage, queryParams }));
  }, [currentPage, dispatch, queryParams, token]);

  const companies = useSelector((state: RootState) => state.companies.items);

  return (
    <SearchPageContainer>
      <ToastContainer />
      {!showAdvancedSearch && (
        <SearchResultSection
          companies={companies}
          currentPage={currentPage}
          totalItems={totalItems}
          itemCount={itemCount}
          itemsPerPage={itemsPerPage}
          totalPages={totalPages}
          isCompaniesLoading={isCompaniesLoading}
          changePage={changePage}
        />
      )}
      {showAdvancedSearch && <AdvancedSearchSection />}
    </SearchPageContainer>
  );
};

export default SearchPage;

export const SearchPageContainer = styled.div`
  width: 100%;
`;
