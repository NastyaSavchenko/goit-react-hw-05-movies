import styled from 'styled-components';

export const MovieItems = styled.li`
  position: relative;
  border: solid 1px #560206;
  border-radius: 6px;
  overflow: hidden;
  max-width: 300px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    scale 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 0px 15px 2px #e50914;
    transform: scale(1.05);
  }
`;

export const RatingWrapp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  background-color: #e50914;
  width: 40px;
  height: 40px;
`;

export const Img = styled.img`
  height: 400px;
  width: 300px;
  margin-bottom: 15px;
`;

export const InfoWrapp = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  min-height: 50px;
  margin-bottom: 20px;
`;
