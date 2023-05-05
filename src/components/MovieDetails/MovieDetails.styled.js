import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieCardContainer = styled.div`
  padding-top: 96px;
`;

export const GoBackButton = styled(Link)`
  display: flex;
  width: 100px;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  padding: 5px 15px;
  margin-bottom: 24px;
  border: 1px solid black;
  border-radius: 8px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: orange;
    border-color: orange;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
`;

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MoviePoster = styled.img`
  width: 240px;
  display: flex;
  margin-right: 24px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 24px;
`;

export const UserScore = styled.p`
  margin-bottom: 24px;
`;

export const OverviewTitle = styled.h2`
  margin-bottom: 24px;
`;

export const Overview = styled.p`
  margin-bottom: 24px;
`;

export const GenresTitle = styled.h3`
  margin-bottom: 24px;
`;

export const GenresList = styled.ul`
  display: flex;
`;

export const Genre = styled.li`
  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const AdditionalInfo = styled.div`
  border-bottom: 1px solid grey;
`;
