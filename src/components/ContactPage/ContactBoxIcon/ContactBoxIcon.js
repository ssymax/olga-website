import styled from 'styled-components';

const ContactBoxIcon = styled.div`
  width: 80px;
  height: 60px;
  position: absolute;
  background: ${({ theme }) => theme.primary};
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  padding: 0 10px;
  transform: translate(20px, -32px);
`;

export default ContactBoxIcon;
