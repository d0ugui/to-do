import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  background: #fff;
  border-radius: 24px;

  margin-top: -10rem;
`;

export const Content = styled.header`
  padding: 80px 60px;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      
      input {
        height: 40px;
        font-size: 14px;
        padding: 10px 15px;

        border: none;
        border-radius: 6px;
        background: #ECEBEC;

        margin-right: 5px;
      }

      button {
        border: none;
        border-radius: 4px;

        padding: 6px;

        cursor: pointer;

        width: 40px;
        height: 40px;

        background: var(--green);

        transition: filter 0.2s;
      }

      svg {
        width: 100%;
        height: 100%;
        color: #fff;

          &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  ul {
    list-style: none;
    margin-top: 54px;

    > div { 
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid #ECEBEC;

      li {
        width: 100%;
        padding: 12px;

        input {
          margin-right: 15px;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background: none;

        svg {
          width: 22px;
          height: 22px;

          color: var(--red);

          transition: filter 0.2s;

            &:hover {
            filter: brightness(0.6);
          }
        }
      }
    }
  }

  .completed {
    li {
      text-decoration: line-through;

      input {
        outline: none;
      }
    }
  }
`;