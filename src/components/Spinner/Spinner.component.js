import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
  0% {
    height: 50px;
  }

  50% {
    height: 10px;
  }

  100% {
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > * {
    animation: ${pulse} 1s infinite;
  };
`;

export const Bar = styled.div`
  height: 50px;
  width: 8px;
  border-radius: 4px;
  background: black;
  margin: 0 3px;
`;

class Spinner extends Component {
  render() {
    return (
      <Wrapper>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Wrapper>
    )
  }
}

export default Spinner;