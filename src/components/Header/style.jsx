import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerColor};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  color: #fff;

  padding: 5rem 1rem 14rem;

  display: flex;
  justify-content: center;

  h1 {
    font-weight: 400;
    font-size: 34px;

    span {
      font-weight: 600;
    }
  }
`;