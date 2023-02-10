import styled from 'styled-components';

export const CastsWrapp = styled.ul`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
  border-top: solid 1px #e50914;
`;

export const CastBox = styled.li`
  width: 100px;
  height: 250px;

  @media screen and (min-width: 780px) {
    width: 150px;
    height: 350px;
  }
`;

export const Photo = styled.img`
  height: 150px;
  margin-bottom: 15px;

  @media screen and (min-width: 780px) {
    width: 150px;
    height: 225px;
  }
`;

export const Name = styled.h3`
  font-size: 10px;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 780px) {
    font-size: 15px;
  }
`;

export const Character = styled.p`
  font-size: 8px;
  @media screen and (min-width: 780px) {
    font-size: 15px;
  }
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: 20px;
`;
