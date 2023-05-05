import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: orange;
  }
  &.active {
    color: orange;
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-right: 48px;
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

export const Header = styled.header`
  padding: 15px;
  position: fixed;
  background-color: #fff;
  width: 100vw;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
