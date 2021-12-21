import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../../../../../../../redux';
import { exportExcel } from '../../../../../../../../redux/ducks';
import {
  MailIconSvgComponent,
  SaveListIconSvgComponent,
  UploadIconSvgComponent,
} from '../../../../../../../ui';

const Toast = () => {
  return (
    <div>
      <p>Export to Excel...</p>
    </div>
  );
};

const ActivityBar: React.FC = () => {
  const dispatch = useDispatch();

  const showExportNotify = () => toast.info(Toast, { autoClose: 4000 });

  const token = useSelector((state: RootState) => state.auth.token);
  const isUploadingFile = useSelector(
    (state: RootState) => state.companies.isUploadingFile,
  );

  return (
    <ActivityBarContainer>
      <IconWrapper>
        <SaveListIconSvgComponent />
        <IconTextWrapper>
          Save<IconTextSpan> List</IconTextSpan>
        </IconTextWrapper>
      </IconWrapper>
      <ExcelIconWrapper
        isUploadingFile={isUploadingFile}
        onClick={() => {
          if (isUploadingFile) {
            return;
          }
          showExportNotify();
          dispatch(exportExcel({ token, page: 1 }));
        }}>
        <UploadIconSvgComponent />
        <IconTextWrapper>
          Export<IconTextSpan> to Excel</IconTextSpan>
        </IconTextWrapper>
      </ExcelIconWrapper>
      <IconWrapper>
        <MailIconSvgComponent />
        <IconTextWrapper>
          <IconTextSpan>Accelerist </IconTextSpan>Support
        </IconTextWrapper>
      </IconWrapper>
    </ActivityBarContainer>
  );
};

export default ActivityBar;

export const ActivityBarContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 37px;

  &:hover {
    opacity: 0.65;
  }
`;

export const IconTextWrapper = styled.span`
  margin-left: 10px;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
`;

export const IconTextSpan = styled.span`
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const ExcelIconWrapper = styled.div.attrs(
  (props: { isUploadingFile: boolean }) => props,
)`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: ${({ isUploadingFile }) =>
    isUploadingFile ? 'not-allowed' : 'pointer'};
  margin-right: 37px;

  &:hover {
    opacity: 0.65;
  }
`;
