import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  box-sizing: border-box;

  &.justify-start {
    justify-content: flex-start;
  }

  &.justify-center {
    justify-content: center;
  }

  &.justify-end {
    justify-content: flex-end;
  }

  &.justify-space-between {
    justify-content: space-between;
  }

  &.justify-space-around {
    justify-content: space-around;
  }

  &.justify-space-evenly {
    justify-content: space-evenly;
  }

  &.align-top {
    align-items: flex-start;
  }

  &.align-middle {
    align-items: center;
  }

  &.align-bottom {
    align-items: flex-end;
  }

  &.wrap-false {
    flex-wrap: nowrap;
  }
`

export { StyledRow }
