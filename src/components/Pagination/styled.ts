import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  padding: 10px;
`;

interface Props {
  readonly isActive: boolean;
}

export const Button = styled.button<Props>`
  ${({ isActive }) => isActive && `background: gray`}
`;
