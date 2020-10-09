import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    margin-bottom: 6rem;
  }
  ul {
    margin-right: 3rem;
    background: #323846;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.radii.default};
    box-shadow: ${({ theme }) => theme.shadows.default};

    li {
      margin-bottom: 2rem;
      strong {
        margin-right: 0.5rem;
      }
    }
  }
`;