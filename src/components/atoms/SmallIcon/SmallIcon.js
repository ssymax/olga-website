import styled from 'styled-components';

const SmallIcon = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export default SmallIcon;
