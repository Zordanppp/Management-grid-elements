import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from 'components/Icon';

import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

import { useStyles } from './styles';

import { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  svg,
  iconName,
  deleteds,
  favorites,
  setDeleteds,
  setFavorites,
}) => {
  const classes = useStyles();

  return (
    <Paper key={iconName} className={classes.paperIcon} elevation={4}>
      <Grid item>
        <CardHeader
          deleteds={deleteds}
          setDeleteds={setDeleteds}
          iconName={iconName}
        />
        <div className={classes.paperIconContent}>
          <Typography>{iconName}</Typography>
          <Icon
            name={iconName}
            svg={svg}
            color="primary"
            fontSize="large"
            className={classes.icon}
          />
        </div>
        <CardFooter
          iconName={iconName}
          setFavorites={setFavorites}
          favorites={favorites}
        />
      </Grid>
    </Paper>
  );
};

export default Card;
