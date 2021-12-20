import React from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../globalColors';
import { RootState } from '../../../../../../../../redux';
import {
  disLikeCompany,
  ItemsProps,
  likeCompany,
} from '../../../../../../../../redux/ducks';
import {
  Button,
  DotIconSvgComponent,
  LikeHeartIcon,
  UnlikeHeartIcon,
} from '../../../../../../../ui';
import { mockSearchData } from '../../mockData';

type CompanyCardProps = {
  company: ItemsProps;
};

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const dispatch = useDispatch();

  const addressStringGenerator = () => {
    return `${company.street}. ${company.city}, ${company.state} ${company.zipCode}`;
  };

  const getLogo = () => {
    if (!company.logo) {
      return mockSearchData[0].logo;
    }
    return company.logo;
  };

  const getCsrFocus = () => {
    if (company.crsFocus.length === 0) {
      return mockSearchData[0].csr_focus;
    }
    return company.crsFocus;
  };

  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <SearchResultCard>
      <ImageGridItem>
        <ImageWrapper>
          <StyledImage src={getLogo()} alt="logo" />
        </ImageWrapper>
        <PriorityRankingWrapper>
          <PriorityRankingText>Priority Ranking</PriorityRankingText>
          <PriorityRankingData>{company.crsFocus}</PriorityRankingData>
        </PriorityRankingWrapper>
      </ImageGridItem>
      <InformationGridItem>
        <CompanyNameParagraph>{company.name}</CompanyNameParagraph>
        <CompanyAddressParagraph>
          {addressStringGenerator()}
        </CompanyAddressParagraph>
        <CompanyPhoneParagraph>{company.phone}</CompanyPhoneParagraph>
        <InformationFooterContainer>
          <InformationLeftContent>
            <CompanyCSRParagraph>CSR Focus</CompanyCSRParagraph>
            <CSRDataContainer>
              {getCsrFocus().map((csr: string[], index: number) => (
                <CSRDataWrapper key={index}>
                  {index !== 0 && (
                    <DotIconSvgComponentWrapper>
                      <DotIconSvgComponent />
                    </DotIconSvgComponentWrapper>
                  )}
                  <CompanyCSRDataParagraph>{csr}</CompanyCSRDataParagraph>
                </CSRDataWrapper>
              ))}
            </CSRDataContainer>
          </InformationLeftContent>
          <InformationRightContent>
            <InformationRightContentWrapper>
              <div>
                <RevenueStyledText>Revenue</RevenueStyledText>
              </div>
              <div>
                <StyledNumberFormat>
                  <NumberFormat
                    value={company.revenue}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$ '}
                  />
                </StyledNumberFormat>
              </div>
            </InformationRightContentWrapper>
          </InformationRightContent>
        </InformationFooterContainer>
      </InformationGridItem>
      <ProfileGridItem>
        <div>
          {company.like ? (
            <HeartIconSvgComponentWrapper
              isLike
              onClick={() => {
                dispatch(disLikeCompany({ token, id: company.id }));
              }}>
              <LikeHeartIcon />
            </HeartIconSvgComponentWrapper>
          ) : (
            <HeartIconSvgComponentWrapper
              onClick={() => {
                dispatch(likeCompany({ token, id: company.id }));
              }}>
              <UnlikeHeartIcon />
            </HeartIconSvgComponentWrapper>
          )}
        </div>
        <ProfileButtonWrapper>
          <Button buttonType="button">Profile</Button>
        </ProfileButtonWrapper>
      </ProfileGridItem>
    </SearchResultCard>
  );
};

export default CompanyCard;

export const SearchResultCard = styled.div`
  display: grid;
  background: ${Colors.white};
  grid-gap: 24px;
  padding: 26px 32px;
  border-radius: 6px;
  grid-template-areas:
    'image information'
    'image profile';
  grid-template-columns: 168px 1fr;
  grid-template-rows: 1fr 36px;
  height: 268px;

  @media screen and (max-width: 1170px) {
    grid-template-areas:
      'image information'
      'profile profile';
    height: 284px;
  }

  @media screen and (max-width: 950px) {
    padding: 24px 16px;
    grid-template-columns: 124px 1fr;
    grid-gap: 20px;
  }

  @media screen and (max-width: 800px) {
    grid-gap: 14px 10px;
  }
`;

export const ImageGridItem = styled.div`
  grid-area: image;
  border: 1px solid ${Colors.green_white};
  border-radius: 6px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`;

export const InformationGridItem = styled.div`
  grid-area: information;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 156px;

  @media screen and (max-width: 1170px) {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    height: 184px;
    border: 0;
  }
`;

export const ProfileGridItem = styled.div`
  grid-area: profile;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100;
  padding: 0 32px;
  height: 156px;
  border-bottom: 1px solid ${Colors.green_white};

  @media screen and (max-width: 1170px) {
    height: 124px;
  }

  @media screen and (max-width: 950px) {
    padding: 0 22px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const PriorityRankingWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 8px 0;
  width: 100%;
`;

export const PriorityRankingData = styled.p`
  color: ${Colors.black};
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
`;

export const PriorityRankingText = styled.p`
  color: ${Colors.dark_gray};
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 2px;
`;

export const CompanyNameParagraph = styled.p`
  color: ${Colors.black};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 12px;
`;

export const CompanyAddressParagraph = styled.p`
  color: ${Colors.dark_gray}
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 4px;
`;

export const CompanyPhoneParagraph = styled.p`
  color: ${Colors.dark_gray}
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 28px;

  @media screen and (max-width: 1170px) {
    margin-bottom: 16px;
  }
`;

export const CompanyCSRParagraph = styled.p`
  color: ${Colors.dark_gray}
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
`;

export const CompanyCSRDataParagraph = styled.span`
  color: ${Colors.black};
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
`;

export const CSRDataContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;
`;

export const CSRDataWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;
`;

export const DotIconSvgComponentWrapper = styled.span`
  margin: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InformationFooterContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1170px) {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const InformationRightContent = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 12px;
  border-bottom: 1px solid ${Colors.green_white};
  width: 30%;

  @media screen and (max-width: 1170px) {
    border: 0;
    padding-bottom: 0;
    width: 100%;
  }
`;

export const InformationLeftContent = styled.div`
  display: flex;
  flex-flow: column;
  width: 70%;
  border-right: 1px solid ${Colors.green_white};
  border-bottom: 1px solid ${Colors.green_white};
  padding-bottom: 12px;

  @media screen and (max-width: 1170px) {
    border: 0;
    padding-bottom: 0;
    margin-bottom: 16px;
  }
`;

export const InformationRightContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: end;

  @media screen and (max-width: 1170px) {
    display: flex;
    flex-flow: row;
    align-items: start;
    justify-content: space-between;
    width: 100%;
  }
`;

export const StyledNumberFormat = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.black};
`;

export const RevenueStyledText = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
`;

export const HeartIconSvgComponentWrapper = styled.div.attrs(
  (props: { isLike: boolean }) => props,
)`
  width: 36px;
  height: 36px;
  border: ${({ isLike }) =>
    isLike
      ? `1px solid ${Colors.bean_red}`
      : `1px solid ${Colors.green_white}`};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background-color: rgb(255, 242, 242);
  }
`;

export const ProfileButtonWrapper = styled.div`
  width: 100%;
  padding-left: 8px;

  button {
    width: 100%;
    height: 36px;
    color: ${Colors.black};
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    border: 1px solid ${Colors.butterfly_blue};
    background-color: transparent;
    border-radius: 6px;
    padding: 9px 0;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background-color: ${Colors.butterfly_blue};
      color: ${Colors.white};
      opacity: 0.7;
    }
  }
`;
