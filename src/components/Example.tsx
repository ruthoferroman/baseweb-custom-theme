import * as React from "react";
import { themedStyled } from '../theme';

const StyledDiv = themedStyled('div', ({$theme}) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: $theme.example.backgroundColor,
    height: $theme.example.height
  };
});


export default () => {
  
  return (
    <StyledDiv>
      Example
    </StyledDiv>
  );
};
