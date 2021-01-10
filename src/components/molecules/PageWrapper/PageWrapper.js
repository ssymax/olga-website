import styled, { css } from 'styled-components';

const PageWrapper = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  margin: 40px auto 10px auto;
  min-height: 100%;
  display: flex;
  padding: 35px 0;
  box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
    inset 0 0 0 7px ${({ theme }) => theme.borders};

  ${({ theme }) => theme.mqx.tablet} {
    top: 100px;
    margin-bottom: 100px;
  }

  ${({ theme }) => theme.mqx.phone} {
    top: 60px;
    margin-bottom: 60px;
  }

  ${({ contact }) =>
    contact &&
    css`
      background-color: ${({ theme }) => theme.primary};
      box-shadow: none;
      border: 5px solid ${({ theme }) => theme.white};
    `}
`;

export default PageWrapper;
