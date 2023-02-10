import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #e50914;
  background-color: inherit;
  outline: none;
  color: #ffffffa2;
  font-size: 16px;
  height: 40px;
  transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 1px #e50914;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: inherit;
  border-radius: 4px;
  border: solid 1px #e50914;
  height: 40px;
  width: 40px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  position: relative;
`;
