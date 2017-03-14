import styled from 'styled-components';

export const OnOffSwitch = styled.div`
  position: relative;
  width: 76px;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const OnOffSwitchCheckBox = styled.input`
  display: none;
  &:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px;
  }
  &:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
  }
`;

export const OnOffswitchLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #F0F0F0;
  border-radius: 20px;
`;

export const OnOffswitchInner = styled.div`
  display: block; width: 200%; margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &:before, &:after {
    display: block;
    float: left;
    width: 50%;
    height: 30px;
    padding: 0;
    line-height: 30px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
  }
  &:before {
    content: "YES";
    padding-left: 10px;
    background-color: #36B23C; color: #FFFFFF;
  }
  &:after {
    content: "NO";
    padding-right: 10px;
    background-color: #E96C6C; color: #FFFFFF;
    text-align: right;
  }
`;

export const OnOffswitchSwitch = styled.label`
  display: block; width: 17px;
  margin: 6.5px;
  background: #FFFFFF;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 42px;
  border: 2px solid #F0F0F0;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;