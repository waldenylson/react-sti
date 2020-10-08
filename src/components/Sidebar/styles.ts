import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  z-index: 1;
  height: 100vh;
  background: #323846;
  color: #ccd1dd;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.default};
  h1 {
    margin-top: 2rem;
    letter-spacing: 0.5rem;
  }
  > button {
    background: none;
    margin-bottom: 2rem;
    svg {
      color: #ccd1dd;
    }
  }
`;

export const Nav = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    width: 100%;
    a {
      color: inherit;
      width: 100%;
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 1.5rem 1rem;
      margin-bottom: 1rem;
      svg {
        transition: color 0.2s ease;
        margin-right: 1rem;
      }
      &.is-active {
        color: #fff;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: ${({ theme }) => theme.radii.default};
        box-shadow: ${({ theme }) => theme.shadows.default};
      }
      &:hover {
        background: #3b414e;
        border-radius: ${({ theme }) => theme.radii.default};
      }
      span {
        font-weight: normal;
      }
    }
  }
`;
