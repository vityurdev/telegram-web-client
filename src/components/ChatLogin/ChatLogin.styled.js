import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 150px;
  margin-bottom: 100px;
`;

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 20px;
  border-radius: 300px;
  border: 1px solid lightgray;
  box-sizing: content-box;
  margin: 5px 0;
  font-size: 18px;
  font-family: "Segoe UI", sans-serif;
  position: relative;

  &:focus {
    outline: none;
    border-color: fuchsia;
    border-width: 1px;
    transition: border ease 0.1s, box-shadow ease 0.1s;
    box-shadow: 1px 1px 10px 2px fuchsia;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 10px;
  color: red;
  font-weight: 600;
`;

export const Button = styled.button`
  padding: 10px 20px;
  width: fit-content;
  background: pink;
  border: none;
  border-radius: 300px;
  font-size: 14px;
  margin-top: 20px;
  font-family: "Segoe UI", sans-serif; 

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  ${props => props.disabled && css`
    color: gray;
  `};
  
  }
`;

