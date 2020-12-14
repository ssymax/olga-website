import React from 'react';
import styled from 'styled-components';
import ContactBox from '../ContactBox/ContactBox';
import ContactBoxIcon from '../ContactBoxIcon/ContactBoxIcon';
import mailIcon from '../../../assets/images/svg/mailIcon.svg';

const StyledForm = styled.form`
  padding: 40px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  div {
    position: relative;
  }
`;

const StyledInput = styled.input`
  height: 40px;
  border: none;
  width: 280px;
  outline: none;
  :focus {
    padding-left: 10px;
  }
  :not(:focus) {
    padding-left: 10px;
    padding-top: 10px;
  }
`;

const StyledTextArea = styled.textarea`
  width: 280px;
  height: 180px;
  border: none;
  outline: none;
  resize: none;
  :focus {
    padding-left: 10px;
    padding-top: 12px;
  }
  :not(:focus) {
    padding-left: 10px;
    padding-top: 12px;
  }
`;

const StyledLabel = styled.label`
  left: 10px;
  top: 11px;
  position: absolute;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  letter-spacing: 3px;

  ${StyledInput}:focus ~ & {
    text-align: center;
    font-size: 14px;
    top: -11px;
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.primary};
    padding: 2px;
    letter-spacing: 2px;
  }

  ${StyledInput}:not(:placeholder-shown) ~ & {
    text-align: center;
    font-size: 14px;
    top: -11px;
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.primary};
    padding: 2px;
    letter-spacing: 2px;
  }

  ${StyledTextArea}:focus ~ & {
    text-align: center;
    font-size: 14px;
    top: -11px;
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.primary};
    padding: 2px;
    letter-spacing: 2px;
  }

  ${StyledTextArea}:not(:placeholder-shown) ~ & {
    text-align: center;
    font-size: 14px;
    top: -11px;
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.primary};
    padding: 2px;
    letter-spacing: 2px;
  }
`;

const StyledButton = styled.button`
  width: 140px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.black};
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  transform: translateX(-50%);
  &:hover {
    border: 2px solid ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const FormContactBox = () => (
  <ContactBox>
    <ContactBoxIcon icon={mailIcon} />
    <StyledForm>
      <div>
        <StyledInput type="text" name="name" placeholder=" " required />
        <StyledLabel>imię</StyledLabel>
      </div>
      <div>
        <StyledInput type="email" name="email" placeholder=" " required />
        <StyledLabel>email</StyledLabel>
      </div>
      <div>
        <StyledTextArea type="text" name="message" placeholder=" " required />
        <StyledLabel>wiadomość</StyledLabel>
      </div>

      <StyledButton>Wyślij</StyledButton>
    </StyledForm>
  </ContactBox>
);

export default FormContactBox;
