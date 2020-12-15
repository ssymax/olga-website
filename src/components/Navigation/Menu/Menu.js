import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MobileNavContext } from '../../../context';

const StyledNavWrapper = styled.nav`
  margin-right: 100px;
  height: 100%;
  display: flex;
  align-content: space-around;
  justify-content: flex-start;
  margin-left: 0;
  ${({ theme }) => theme.mqx.tablet} {
    padding-right: 20px;
    padding-top: 20px;
    position: absolute;
    text-align: right;
    justify-content: flex-end;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: inset 0 0 0 5px ${({ theme }) => theme.white},
      inset 0 0 0 7px ${({ theme }) => theme.borders};
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open, theme }) => (open ? theme.zIndex.level8 : '-1')};
    transition: z-index 0.5s, opacity 0.5s ease-in-out;
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
  transition: color 1.2s ease-in-out;
  &.active {
    color: ${({ theme }) => theme.black};
  }
  &:hover {
    color: ${({ theme }) => theme.black};
    transition: color 0.2s ease-in-out;
  }
`;

const Menu = () => {
  const { isOpen } = useContext(MobileNavContext);
  return (
    <StyledNavWrapper open={isOpen}>
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
};

export default Menu;
