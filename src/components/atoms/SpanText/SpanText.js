import styled from 'styled-components';

const SpanText = styled.span`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-align: center;
  line-height: 130%;
  letter-spacing: 2px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

export default SpanText;
