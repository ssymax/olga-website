import styled, { css } from 'styled-components';

const PageHeader = styled.h1`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 16px);
  font-size: ${({ theme }) => theme.font.size.header};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: 0 20px;
  z-index: ${({ theme }) => theme.zIndex.level6};
  background-color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  letter-spacing: 5px;

  ${({ theme }) => theme.mqx.tablet} {
    position: absolute;
    font-size: ${({ theme }) => theme.font.size.maslow};
    padding: 0 10px;
    transform: translate(-50%, 28px);
    top: 100px;
  }

  ${({ theme }) => theme.mqx.phone} {
    top: 60px;
  }

  ${({ contact }) =>
    contact &&
    css`
      border: 2px solid ${({ theme }) => theme.borders};
    `}
`;

export default PageHeader;
