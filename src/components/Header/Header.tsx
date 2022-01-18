import * as React from 'react';
import { StyledHeader, StyledLink } from './styled';
import { routes } from '../../routes';

export const Header = () => (
  <StyledHeader>
    <nav>
      {routes.map((route) => (
        <StyledLink key={route.path} to={route.path}>
          {route.title}
        </StyledLink>
      ))}
    </nav>
  </StyledHeader>
);
