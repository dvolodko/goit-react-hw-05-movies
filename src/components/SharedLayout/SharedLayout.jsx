import React, { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { StyledLink, Container, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
