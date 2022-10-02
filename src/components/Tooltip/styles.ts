import styled, { css } from 'styled-components';

interface IToolTipProps {
  toolTipPosition?: 'top' | 'bottom';
}

const toolTipPositionProp = {
  top: css`
    span {
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);

      &::before {
        bottom: 20px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  `,
  bottom: css`
    span {
      top: calc(100% + 30px);
      left: 45%;
      transform: translateY(-50%) translateX(-50%);

      &::before {
        bottom: 95%;
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
      }
    }
  `,
};

export const Container = styled.div<IToolTipProps>`
  display: flex;

  position: relative;

  span {
    color: #fff;

    text-align: center;
    max-width: 160px;
    background: #000000;
    padding: 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    white-space: nowrap;

    position: absolute;

    &::before {
      content: '';
      border-style: solid;
      border-color: #000000 transparent;
      border-width: 6px 6px 0 6px;

      position: absolute;
    }
  }

  ${props => toolTipPositionProp[props.toolTipPosition || 'top']}

  &:hover span {
    opacity: 0.9;
    visibility: visible;
  }
`;
