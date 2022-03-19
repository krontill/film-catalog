import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  border-bottom: 1px solid;
`;

export const StyledLink = styled(NavLink)`
  margin: 0 10px;

  &.active {
    color: green;
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
`;
