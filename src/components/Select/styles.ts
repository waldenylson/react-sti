import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 15px;

  select {
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
    color: #f6f6f6;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;
    &:focus {
      border-color: #7289da;
    }
    option {
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: #333;
    }
  }
`;
