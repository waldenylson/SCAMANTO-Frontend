import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IContainerProps {
  hasDescription: boolean;
  type?: 'success' | 'info' | 'error';
}

const containerTypesProp = {
  info: css`
    background: #ebf8f0;
    color: #3172b7;

    hr {
      margin: 10px 0;
      height: 1px;
      background: blue;
      background: -webkit-gradient(
        linear,
        0 0,
        100% 0,
        from(#ebf8f0),
        to(#ebf8f0),
        color-stop(50%, blue)
      );
      border: 0;
    }
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;

    hr {
      margin: 10px 0;
      height: 1px;
      background: green;
      background: -webkit-gradient(
        linear,
        0 0,
        100% 0,
        from(#e6fffa),
        to(#e6fffa),
        color-stop(50%, green)
      );
      border: 0;
    }
  `,
  error: css`
    background: #fddede;
    color: #c53030;

    hr {
      margin: 10px 0;
      height: 1px;
      background: red;
      background: -webkit-gradient(
        linear,
        0 0,
        100% 0,
        from(#fddede),
        to(#fddede),
        color-stop(50%, red)
      );
      border: 0;
    }
  `,
};

export const Container = styled(animated.div)<IContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 5px;
  }

  ${props => containerTypesProp[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
