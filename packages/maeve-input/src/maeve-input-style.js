import styled from 'styled-components';

export const InputLabel = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  display: inline-block;
  width: 100%;
  color: red;
`;

export const InputField = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #cccccc;
  padding: 10px;
  box-sizing: border-box;
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  height: 64px;
  outline: none;
  border-radius: 2px;
  border: solid 1px #cccccc;
  padding: 0px 10px;
  box-sizing: border-box;
`;
