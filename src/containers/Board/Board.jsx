import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../utils/animations';

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
  animation: ${fadeIn} 300ms linear;
`;

function BoardContainer() {
  return <Wrapper>board</Wrapper>;
}

export default BoardContainer;
