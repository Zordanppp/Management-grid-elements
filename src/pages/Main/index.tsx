import React, { useMemo, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import svgIcons from 'components/Icon/svgIconPaths';
import Icon from 'components/Icon';

import { AvailableIcons } from 'components/Icon/types';

import { useStyles } from './styles';

function App() {
  const classes = useStyles();
  const methods = useForm();

  const keys = useMemo(
    () => Object.keys(svgIcons).map((iconName) => iconName) as AvailableIcons[],
    [],
  );

  const [iconsToShow, setIconsToShow] = useState<AvailableIcons[]>(keys);

  function handleSearchIcon(data: Record<string, string>): void {
    if (data['searchicon'] === '') {
      setIconsToShow(keys);
    }

    const newIconsToShow = keys.filter((iconName) =>
      iconName.includes(data['searchicon']),
    );

    setIconsToShow(newIconsToShow);
  }

  const PaperIconHeader = useMemo(
    () => (
      <div className={classes.paperIconHeader}>
        <Tooltip title="Options">
          <IconButton>
            <Icon name="chevronDown" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton>
            <Icon name="close" />
          </IconButton>
        </Tooltip>
      </div>
    ),
    [classes.paperIconHeader],
  );

  const PaperIconFooter = useMemo(
    () => (
      <div className={classes.paperIconFooter}>
        <Tooltip title="Options">
          <Button className={classes.nextCardButton}>
            <Icon name="arrowRight" />
          </Button>
        </Tooltip>
      </div>
    ),
    [classes.paperIconFooter, classes.nextCardButton],
  );

  return (
    <Paper elevation={2} className={classes.container}>
      <Grid container justify="flex-start">
        <Typography variant="h2" className={classes.title}>
          Icons application list
        </Typography>
      </Grid>

      <Grid container justify="flex-end">
        <form
          className={classes.form}
          onSubmit={methods.handleSubmit(handleSearchIcon)}
        >
          <Grid container justify="space-between">
            <Controller
              as={TextField}
              control={methods.control}
              defaultValue=""
              label="Icon name"
              variant="filled"
              name="searchicon"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon name="search" />
                  </InputAdornment>
                ),
              }}
              className={classes.searchField}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<Icon name="search" />}
              className={classes.searchButton}
            >
              Search
            </Button>
          </Grid>
        </form>
      </Grid>
      <Grid container className={classes.iconsBox}>
        {iconsToShow.map((iconName) => (
          <Paper key={iconName} className={classes.paperIcon} elevation={4}>
            <Grid item>
              {PaperIconHeader}
              <div className={classes.paperIconContent}>
                <Typography>{iconName}</Typography>
                <Icon
                  name={iconName}
                  color="primary"
                  fontSize="large"
                  className={classes.icon}
                />
              </div>
              {PaperIconFooter}
            </Grid>
          </Paper>
        ))}
      </Grid>
    </Paper>
  );
}

export default App;
