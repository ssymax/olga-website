import React, { useContext } from 'react';
import styled from 'styled-components';
import { MobileNavContext } from 'context';

const StyledBurger = styled.div`
  display: none;
  width: 40px;
  height: 32px;
  cursor: pointer;
  margin-right: 20px;

  ${({ theme }) => theme.mqx.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: ${({ theme }) => theme.zIndex.level9};
  }

  div {
    width: 40px;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    transition: transform 0.5s ease;

    &:nth-child(1) {
      background-color: ${({ theme }) => theme.black};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      transform-origin: left center;
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'transformX(100%)' : 'transformX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: opacity 0.5s ease;
    }

    &:nth-child(3) {
      background-color: ${({ theme }) => theme.black};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      transform-origin: left center;
    }
  }
`;

const Burger = () => {
  const { isOpen, handleOpen } = useContext(MobileNavContext);

  return (
    <StyledBurger open={isOpen} onClick={handleOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
