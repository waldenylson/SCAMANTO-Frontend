import styled from 'styled-components';

export const Container = styled.div`
  max-height: 64px;

  color: #808080;

  background: inherit;

  div.grow {
    flex-grow: 1;
  }

  div.userspace-button {
    margin-left: 15px;
  }

  div.user-informations {
    display: flex;

    align-items: flex-end;
    flex-direction: column;

    margin-left: 0.4rem;
    margin-right: 0.4rem;

    text-transform: none;

    span {
      font-weight: 400;
    }

    p {
      font-weight: 700;
    }
  }
`;
