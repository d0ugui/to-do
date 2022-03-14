import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  background: #fff;
  margin-top: -120px;

  width: 75%;
  border-radius: 8px;

  padding: 20px 0;
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  h1 {
    margin: 20px 0;
  }

  a {
    text-decoration: none;
  }
`;