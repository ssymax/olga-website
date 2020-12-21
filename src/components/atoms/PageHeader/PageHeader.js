import styled, { css } from 'styled-components';

const PageHeader = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 28%);
  font-size: ${({ theme }) => theme.font.size.header};
  padding: 0 20px;
  z-index: ${({ theme }) => theme.zIndex.level7};
  background-color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  letter-spacing: 5px;
  border: 2px solid ${({ theme }) => theme.borders};

  ${({ theme }) => theme.mqx.tablet} {
    font-size: ${({ theme }) => theme.font.size.maslow};
    padding: 0 10px;
    transform: translate(-50%, 25px);
  }

  ${({ contact }) =>
    contact &&
    css`
      border: 2px solid ${({ theme }) => theme.borders};
    `}
`;

export default PageHeader;
