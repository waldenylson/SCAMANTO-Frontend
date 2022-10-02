import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 64px;
  width: 35%;

  padding-left: 20px;

  align-items: center;
  justify-content: center;

  background: inherit;

  form.search-bar {
    flex: 1;
    display: flex;

    align-items: center;
    justify-content: center;

    height: 60%;
    width: 100%;

    margin-right: 5px;

    color: #80868b;

    border: 1px solid #dfe1e5;
    border-radius: 60px;

    font-size: 14px;

    &:hover {
      outline: none;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    }

    &:focus-within {
      outline: none;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    }

    div.search-buttons {
      display: flex;
      align-items: center;
      justify-content: space-around;

      margin-left: 5px;

      width: 88px;
    }
  }

  input {
    flex: 1;
    height: 80%;
    border: 0px solid transparent;

    background: inherit;

    border-radius: 10px;
    padding: 0px 0px 1px 15px;

    overflow: hidden;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 60%;
    width: 44px;

    border: none;

    background: inherit;

    border-top: 0px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;

    font-size: 24px;

    &.clear-input-search {
      width: 7%;

      border-right: 1px solid #dfe1e5;
    }

    &.advanced-search-button {
      color: inherit;
    }

    &.search-button {
      padding-right: 13px;
    }
  }
`;
