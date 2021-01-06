import styled, { css } from 'styled-components';

const PageWrapper = styled.div`
  position: relative;
  justify-content: center;
  max-width: 100%;
  margin: 40px auto 10px auto;
  height: auto;
  display: flex;
  padding: 35px 0;
  box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
    inset 0 0 0 7px ${({ theme }) => theme.borders};

  ${({ contact }) =>
    contact &&
    css`
      background-color: ${({ theme }) => theme.primary};
      box-shadow: none;
      border: 5px solid ${({ theme }) => theme.white};
    `}
`;

export default PageWrapper;
