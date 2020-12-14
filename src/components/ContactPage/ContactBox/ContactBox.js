import styled from 'styled-components';

const ContactBox = styled.div`
  display: flex;
  margin-top: 50px;
  width: 380px;
  height: 480px;
  border: 2px solid ${({ theme }) => theme.white};
  ${({ theme }) => theme.mqx.bigDesktop} {
    width: 360px;
  }
  ${({ theme }) => theme.mqx.desktop} {
    width: 320px;
  }
  ${({ theme }) => theme.mqx.bigTablet} {
    width: 480px;
  }
  ${({ theme }) => theme.mqx.tablet} {
    width: 85vw;
  }
  ${({ theme }) => theme.mqx.bigPhone} {
    width: 90vw;
  }
`;

export default ContactBox;
