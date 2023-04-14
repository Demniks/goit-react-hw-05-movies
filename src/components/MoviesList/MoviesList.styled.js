import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesLink = styled(Link)`
display: flex;
align-items: end;
gap: 10px;
  text-decoration: none;
  color: #212121;
  font-size: 20px;
  &:hover {
    color: tomato;
  }
`;

export const MoviesItem = styled.li`
  list-style: none;
  padding: 4px;
  margin-left: 16px;
`;

export const MoviesLists = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px; 
`

export const Image = styled.img`
  width: 100px;
  height: 150px;
  display: block; 
`
