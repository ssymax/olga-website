import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import ContentBox from 'components/atoms/ContentBox/ContentBox';
import ContentBoxIcon from 'components/atoms/ContentBoxIcon/ContentBoxIcon';
import mailIcon from 'assets/images/svg/mailIcon.svg';

const StyledForm = styled.form`
  padding: 15px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  div {
    position: relative;
    div {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.white};
      position: absolute;
      margin-top: 1px;
      letter-spacing: 1px;
    }
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

const StyledResponseWrapper = styled.div`
  display: flex;
  padding-left: 3px;
  justify-content: start;
  align-items: center;
  position: absolute;
  width: 140px;
  height: 40px;
  right: 18px;
  bottom: 43px;
  letter-spacing: 2px;
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Za krótkie!').max(25, 'Za długie!').required('Wymagane :)'),
  email: Yup.string().email('Niepoprawny email').required('Wymagane :)'),
  message: Yup.string().min(15, 'Za mało informacji').required('Wymagane :)'),
});

const FormContactBox = () => {
  const [response, setResponse] = useState('');
  const url = `https://formspree.io/f/${process.env.FORMSPREE_ID}`;

  return (
    <ContentBox>
      <ContentBoxIcon icon={mailIcon} />
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post(url, values)
            .then((res) => {
              if (res) {
                setResponse('Wysłano wiadomość!');
              }
              setSubmitting(false);
            })
            .catch((err) => {
              if (err) {
                setResponse('Błąd, brak połączenia.');
              }
            });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <div>
              <StyledInput
                type="text"
                name="name"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && <div>{errors.name}</div>}
              <StyledLabel>imię</StyledLabel>
            </div>
            <div>
              <StyledInput
                type="email"
                name="email"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <StyledLabel>email</StyledLabel>
            </div>
            <div>
              <StyledTextArea
                type="text"
                name="message"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && <div>{errors.message}</div>}
              <StyledLabel>wiadomość</StyledLabel>
            </div>
            <StyledButton type="submit" disabled={isSubmitting}>
              wyślij
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
      <StyledResponseWrapper>{response}</StyledResponseWrapper>
    </ContentBox>
  );
};

export default FormContactBox;
