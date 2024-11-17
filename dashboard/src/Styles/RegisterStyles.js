import styled from '@emotion/styled';
import {  Field } from 'formik';



export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
`;

export const Column = styled.div`
  flex: 1;
`;



export const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 0.875em;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color:gray;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;