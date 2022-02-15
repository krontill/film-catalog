import styled from 'styled-components';

interface Props {
  readonly isActive: boolean;
}

export const Button = styled.button<Props>`
  ${({ isActive }) => isActive && `background: gray`}
`;
