import styled from 'styled-components';

export const CastAndCrewWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const RecommendationWrapper = styled.div`
  & > ul {
    display: grid;
    grid-gap: 10px;
    padding: 0 10px;
    grid-template-columns: repeat(3, calc((100% / 3) - 40px));
  }
`;
