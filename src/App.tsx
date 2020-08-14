import React from 'react';

import Main from './pages/Main';

import { useStyles } from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Main />
    </div>
  );
}

export default App;
