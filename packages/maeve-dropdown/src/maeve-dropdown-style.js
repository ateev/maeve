import styled from 'styled-components';

export const MaeveDropDown = styled.div`
  position: absolute;
  z-index: 10;
`;

export const MaeveDropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 377px;
  margin: 0;
  background: #f2f2f2;
  border: 1px solid #efefef;
  border-top: 0px;
`;

export const MaeveDropdownListItem = styled.li`
  padding: 4px 8px;
  font-size: 14px;
  color:  #424242;
  padding: 7px;
  border': 1px solid #ececec;
  borderTop: 0px;
  cursor: pointer;
  &:hover {
    background: #3fa9f5;
    color: #fff;
  }
`;