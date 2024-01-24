import styled from 'styled-components'

const GroupWrapper = styled.span`
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;

  &.bk-input-group-wrapper-disabled .bk-input-group-addon {
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    border-color: #d9d9d9;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 1;
  }
  &.bk-input-group-wrapper-status-error .bk-input-group-addon {
    color: #ff4d4f;
    border-color: #ff4d4f;
  }
  &.bk-input-group-wrapper-status-warning .bk-input-group-addon {
    color: #faad14;
    border-color: #faad14;
  }
  .bk-input-wrapper.bk-input-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    position: relative;
    display: table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }

  .bk-input-group-addon {
    position: relative;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    transition: all 0.3s;
    line-height: 1;
    display: table-cell;
    width: 1px;
    white-space: nowrap;
    vertical-align: middle;
  }

  .bk-input-group-addon:first-child {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-inline-end: 0;
  }

  .bk-input-group-addon:last-child {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-inline-start: 0;
  }
  .bk-input-wrapper.bk-input-group input.bk-input {
    border-radius: 0;
    width: 100%;
    margin-bottom: 0;
    text-align: inherit;
    display: table-cell;
  }
`
const AffixWrapper = styled.span`
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
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
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

  &:not(:last-child) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  &:not(:first-child) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }
  &::before {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: '\a0';
    box-sizing: border-box;
  }
  &.inline {
    border-radius: 6px;
  }
  & > input.bk-input {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    padding: 0;
    font-size: inherit;
    border: none;
    border-radius: 0;
    outline: none;
    width: 100%;
    margin-bottom: 0;
    text-align: inherit;
  }

  &.inline input.bk-input {
    background: transparent;
  }

  &:hover {
    border-color: #4096ff;
    z-index: 1;
  }

  &:focus-within {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  }
  & > input.bk-input:hover {
    z-index: 1;
    border-inline-end-width: 1px;
  }

  &.inline input.bk-input:focus {
    background: transparent;
  }

  &.inline input.bk-input:hover {
    background: transparent;
  }

  &.bk-input-affix-wrapper-borderless {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  & > input.bk-input:focus {
    box-shadow: none !important;
    z-index: 1;
    border-inline-end-width: 1px;
  }

  &.bk-input-affix-wrapper-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    border-color: #d9d9d9;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 1;
  }

  &.bk-input-affix-wrapper-disabled:hover {
    border-color: #d9d9d9;
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.inline.bk-input-affix-wrapper-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    border-color: #d9d9d9;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 1;
  }

  &.inline.bk-input-affix-wrapper-disabled:hover {
    border-color: #d9d9d9;
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.bk-input-affix-wrapper-status-error {
    border-color: #ff4d4f;
  }

  &.bk-input-affix-wrapper-status-warning {
    border-color: #faad14;
  }

  &.bk-input-affix-wrapper-status-error .bk-input-prefix {
    color: #ff4d4f;
  }

  &.bk-input-affix-wrapper-status-warning .bk-input-prefix {
    color: #faad14;
  }

  &.bk-input-affix-wrapper-status-error .bk-input-suffix {
    color: #ff4d4f;
  }

  &.bk-input-affix-wrapper-status-warning .bk-input-suffix {
    color: #faad14;
  }

  &.inline .ant-input-lg {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  &.inline .ant-input-sm {
    padding: 0px 7px;
    border-radius: 4px;
  }

  .ant-input-lg {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
  }

  .ant-input-sm {
    padding: 0px 7px;
  }

  &.inline.bk-input-affix-wrapper-lg .ant-input-lg {
    padding: 0;
    font-size: inherit;
    border: none;
    border-radius: 0;
    outline: none;
  }

  &.inline.bk-input-affix-wrapper-lg {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  &.inline.bk-input-affix-wrapper-sm .ant-input-sm {
    padding: 0;
    font-size: inherit;
    border: none;
    border-radius: 0;
    outline: none;
  }

  &.inline.bk-input-affix-wrapper-sm {
    padding: 0px 7px;
    border-radius: 4px;
  }

  &.bk-input-affix-wrapper-lg .ant-input-lg {
    padding: 0;
    font-size: inherit;
    border: none;
    border-radius: 0;
    outline: none;
  }

  &.bk-input-affix-wrapper-lg {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
  }

  &.bk-input-affix-wrapper-sm .ant-input-sm {
    padding: 0;
    font-size: inherit;
    border: none;
    border-radius: 0;
    outline: none;
  }

  &.bk-input-affix-wrapper-sm {
    padding: 0px 7px;
  }
  .bk-input-prefix {
    margin-inline-end: 4px;
    display: flex;
    flex: none;
    align-items: center;
    box-sizing: border-box;
  }
  .bk-input-prefix .bk-icon {
    margin-inline-end: 0;
  }

  .bk-input-suffix {
    margin-inline-start: 4px;
    display: flex;
    flex: none;
    align-items: center;
    box-sizing: border-box;
  }

  .bk-input-suffix .bk-icon {
    margin-inline-end: 0;
  }

  .bk-input-show-count-suffix {
    color: rgba(0, 0, 0, 0.45);
  }

  .bk-input-show-count-has-suffix {
    margin-inline-end: 4px;
  }
`
const StyledInput = styled.input`
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

  &.bk-input-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #00000000;
    border-color: #d9d9d9;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 1;
  }

  &.bk-input-disabled:hover {
    border-color: #d9d9d9;
    background-color: #00000000;
  }
  &.bk-input-status-error {
    border-color: #ff4d4f;
  }

  &.bk-input-status-error:hover {
    border-color: #ffa39e;
  }

  &.bk-input-status-error:focus-within {
    border-color: #ff4d4f;
    box-shadow: 0 0 0 2px rgba(255, 38, 5, 0.06);
    outline: 0;
  }

  &.bk-input-status-warning {
    border-color: #faad14;
  }

  &.bk-input-status-warning:hover {
    border-color: #ffd666;
  }

  &.bk-input-status-warning:focus-within {
    border-color: #faad14;
    box-shadow: 0 0 0 2px rgba(255, 215, 5, 0.1);
    outline: 0;
  }
  &.ant-input-sm {
    padding: 0px 7px;
    border-radius: 4px;
  }
  &.ant-input-lg {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }
`

export { GroupWrapper, AffixWrapper, StyledInput }
