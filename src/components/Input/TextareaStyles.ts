import styled from 'styled-components'

const AffixWrapper = styled.span`
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  box-sizing: border-box;

  &::before {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: '\a0';
  }

  &:hover {
    z-index: 1;
    border-color: #4096ff;
  }

  &:focus {
    z-index: 1;
  }

  &:focus-within {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  }

  .bk-textarea {
    font-size: inherit;
    border: none;
    outline: none;
  }

  &.bk-textarea-allow-clear .bk-textarea {
    padding-inline-end: 24px;
  }

  &.bk-textarea-show-count .bk-textarea {
    height: 100%;
  }

  .bk-textarea-suffix {
    margin-inline-start: 4px;
    margin: 0;
    display: flex;
    flex: none;
    align-items: center;
    box-sizing: border-box;
  }

  &.bk-textarea-show-count .bk-textarea-data-count {
    position: absolute;
    bottom: -22px;
    inset-inline-end: 0;
    color: rgba(0, 0, 0, 0.45);
    white-space: nowrap;
    pointer-events: none;
  }

  .bk-icon {
    position: absolute;
    inset-inline-end: 8px;
    inset-block-start: 8px;
    margin-inline: 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.25);
    font-size: 12px;
    vertical-align: -1px;
    cursor: pointer;
    transition: color 0.3s;
  }
`
const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  margin: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5714285714285714;
  vertical-align: bottom;
  transition:
    all 0.3s,
    height 0s;
  resize: vertical;

  &:focus-within {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  }

  &:hover {
    border-color: #4096ff;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    user-select: none;
    text-overflow: ellipsis;
  }

  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`

export { AffixWrapper, StyledTextarea }
