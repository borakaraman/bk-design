import styled from 'styled-components'

const ButtonWrapper = styled.button`
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  margin: 0px;
  border-radius: 6px;
  outline: none;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, 0.88);
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    segoe ui,
    Roboto,
    helvetica neue,
    Arial,
    noto sans,
    sans-serif,
    apple color emoji,
    segoe ui emoji,
    segoe ui symbol,
    noto color emoji;
  font-size: 14px;
  box-sizing: border-box;

  &.bk-btn-disabled:disabled {
    cursor: not-allowed;
    color: #00000040;
    box-shadow: none;
    background: #0000000a;
    border-color: #d9d9d9;
  }

  &.default-type {
    background-color: #fff;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.88);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
  }

  &.default-type span {
    display: inline-block;
  }

  &.default-type:focus-visible {
    outline: 4px solid #91caff;
    outline-offset: 1px;
    transition:
      outline-offset 0s,
      outline 0s;
  }

  &.default-type:active {
    color: #0958d9;
    border-color: #0958d9;
  }

  &.default-type:hover {
    color: #4096ff;
    border-color: #4096ff;
  }

  &.primary-type {
    color: #fff;
    background-color: #1677ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  }

  &.primary-type:focus-visible {
    outline: 4px solid #91caff;
    outline-offset: 1px;
    transition:
      outline-offset 0s,
      outline 0s;
  }

  &.primary-type:active {
    color: #fff;
    background-color: #0958d9;
  }

  &.primary-type:hover {
    color: #fff;
    background-color: #4096ff;
  }

  &.dashed-type {
    background-color: #fff;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.88);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    border-style: dashed;
  }

  &.dashed-type:focus-visible {
    outline: 4px solid #91caff;
    outline-offset: 1px;
    transition:
      outline-offset 0s,
      outline 0s;
  }

  &.dashed-type:active {
    color: #0958d9;
    border-color: #0958d9;
  }

  &.dashed-type:hover {
    color: #4096ff;
    border-color: #4096ff;
  }

  &.circle-shape {
    min-width: 32px;
    padding-inline-start: 0;
    padding-inline-end: 0;
    border-radius: 50%;
  }

  &.circle-shape.large-size {
    min-width: 40px;
    padding-inline-start: 0;
    padding-inline-end: 0;
    border-radius: 50%;
  }

  &.large-size {
    font-size: 16px;
    height: 40px;
    padding: 6.428571428571429px 15px;
    border-radius: 8px;
  }

  &.circle-shape.small-size {
    min-width: 24px;
    padding-inline-start: 0;
    padding-inline-end: 0;
    border-radius: 50%;
  }

  &.small-size {
    font-size: 14px;
    height: 24px;
    padding: 0 7px;
    border-radius: 4px;
  }

  &.bk-btn-loading {
    opacity: 0.65;
    cursor: default;
  }

  &.bk-btn-block {
    width: 100%;
  }
`

export { ButtonWrapper }
