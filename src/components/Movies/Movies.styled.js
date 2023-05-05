import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesContainer = styled.div`
  padding-top: 96px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

export const Movie = styled.li`
  flex-basis: calc((100% - 3 * 30px) / 4);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 600;
`;

export const SearchForm = styled.form`
  margin-bottom: 30px;
`;
