import styled from 'styled-components';

export const RevieWrapp = styled.li`
  margin-bottom: 30px;
  width: 400px;

  @media screen and (min-width: 780px) {
    width: 700px;
  }
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: 20px;
`;
