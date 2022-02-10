import styled from 'styled-components';

export const CastAndCrewWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ListWrapper = styled.div`
  & > ul {
    display: grid;
    grid-gap: 10px;
    padding: 0 10px;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  }
`;
