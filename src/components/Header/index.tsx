import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
    </Grid>
  );
};

export default Header;
