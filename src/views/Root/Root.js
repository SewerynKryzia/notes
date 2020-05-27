import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyles from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyles />
    <h1>Hello World!</h1>
    <Button width="450px">Close / Save</Button>
    <Button secondary>Remove</Button>
  </>
);
export default Root;
