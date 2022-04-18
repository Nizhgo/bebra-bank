import styled from "styled-components";

const FilledButton = styled.button`
  background: #5257D3;
  border-radius: 20px;
  min-width: 100px;
  text-align: center;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 10px;
  padding-inline: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  :hover {
    background-color: #3a3da9;
    scale: 1.05;
  }

  :disabled {
    background-color: #313146;
  }
`;

const DashButton = styled.button`
  border: 1.81852px dashed #d5d5d5;
  color: #d5d5d5;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: center;
  child-align: middle;
  cursor: pointer;

  :hover {
    border: 1.81852px dashed #FFFFFF;
    color: #FFFFFF;
  }

`


export {FilledButton, DashButton};