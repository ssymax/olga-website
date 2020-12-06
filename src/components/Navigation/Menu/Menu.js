import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNavWrapper = styled.nav`
  margin-right: 100px;
  height: 100%;
  display: flex;
  align-content: space-around;
  justify-content: flex-start;

  ${({theme}) => theme.mq.tablet} {
    display: none;
  }

`;

const StyledLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledItem = styled.li`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.regular};
  color: ${({ theme }) => theme.primary};
  letter-spacing: 5px;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  transition: color 1.5s ease-in-out;
  &.active {
    color: ${({ theme }) => theme.black};
    
  }
  &:hover {
    color: ${({ theme }) => theme.black};
    transition: color .2s ease-in-out;
  }
`;

const Menu = () => (
  <StyledNavWrapper>
    <StyledLinkList>
      <StyledItem>
        <StyledLink to="/o-mnie" activeClassName="active">
          o mnie
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/kwalifikacje" activeClassName="active">
          kwalifikacje
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/konsultacje" activeClassName="active">
          konsultacje
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/cennik" activeClassName="active">
          cennik
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/kontakt" activeClassName="active">
          kontakt
        </StyledLink>
      </StyledItem>
    </StyledLinkList>
  </StyledNavWrapper>
);

export default Menu;
