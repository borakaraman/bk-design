import styled from 'styled-components'

const StyledIcon = styled.span`
  line-height: 0;

  &.bkicon-icon-only > .bk-icon {
    margin-inline-end: 8px;
  }

  :not(.circle-shape) > .bk-icon {
    margin-inline-end: 8px;
  }

  .large-size .bkicon {
    font-size: 18px;
  }

  .small-size .bkicon {
    font-size: 14px;
  }

  .bkicon {
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .bkicon svg {
    display: inline-block;
  }

  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .bkicon-spin {
    animation: loadingCircle 1s infinite linear;
  }
`
export { StyledIcon }
