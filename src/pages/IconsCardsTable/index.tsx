import React, { useMemo, useState, useCallback } from 'react';

import { useForm, Controller } from 'react-hook-form';

import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';

import Icon from 'components/Icon';
import Header from 'components/Header';
import Card from 'components/Card';

import svgIcons from 'components/Icon/svgIconPaths';

import { AvailableIcons } from 'components/Icon/types';

import { useStyles } from './styles';

const IconsCardsTable: React.FC = () => {
  const classes = useStyles();
  const methods = useForm();

  const [favorites, setFavorites] = useState<AvailableIcons[]>([]);
  const [deleteds, setDeleteds] = useState<AvailableIcons[]>([]);

  const [showDeleteds, setShowDeleteds] = useState(true);
  const [showFavoriteds, setShowFavoriteds] = useState(true);

  const keys = useMemo(
    () => Object.keys(svgIcons).map((iconName) => iconName) as AvailableIcons[],
    [],
  );

  const [iconsToShow, setIconsToShow] = useState<AvailableIcons[]>(keys);

  const handleSearchIcon = useCallback(
    (data: Record<string, string>) => {
      if (data['searchicon'] === '') {
        setIconsToShow(keys);
      }

      const newIconsToShow = keys.filter((iconName) =>
        iconName.includes(data['searchicon']),
      );

      setIconsToShow(newIconsToShow);
    },
    [keys],
  );

  const FiltersRow = useMemo(
    () => (
      <Grid
        container
        item
        xs={12}
        sm={12}
        justify="space-between"
        alignItems="center"
        className={classes.filters}
      >
        <Grid item className={classes.checkboxes} xs={12} sm={6}>
          <Grid className={classes.checkboxShowDeleteds}>
            <Checkbox
              checked={showDeleteds}
              onClick={() => setShowDeleteds(!showDeleteds)}
            />
            <Typography>Show deleteds icons</Typography>
          </Grid>

          <Grid className={classes.checkboxShowDeleteds}>
            <Checkbox
              checked={showFavoriteds}
              onClick={() => setShowFavoriteds(!showFavoriteds)}
            />
            <Typography>Show favoriteds icons</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.search} xs={12} sm={6}>
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
      </Grid>
    ),
    [
      classes.searchButton,
      classes.searchField,
      classes.form,
      classes.checkboxShowDeleteds,
      classes.filters,
      classes.checkboxes,
      classes.search,
      handleSearchIcon,
      methods,
      showDeleteds,
      showFavoriteds,
    ],
  );

  return (
    <Paper elevation={2} className={classes.container}>
      <Header title="Icons table" />
      {FiltersRow}
      <Grid container className={classes.iconsBox}>
        {showFavoriteds &&
          favorites.map((iconName) => (
            <Card
              key={iconName}
              iconName={iconName}
              deleteds={deleteds}
              setDeleteds={setDeleteds}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))}
        {!showDeleteds
          ? iconsToShow.map(
              (iconName) =>
                !favorites.includes(iconName) &&
                !deleteds.includes(iconName) && (
                  <Card
                    key={iconName}
                    iconName={iconName}
                    deleteds={deleteds}
                    setDeleteds={setDeleteds}
                    setFavorites={setFavorites}
                    favorites={favorites}
                  />
                ),
            )
          : iconsToShow.map(
              (iconName) =>
                !favorites.includes(iconName) && (
                  <Card
                    key={iconName}
                    iconName={iconName}
                    deleteds={deleteds}
                    setDeleteds={setDeleteds}
                    setFavorites={setFavorites}
                    favorites={favorites}
                  />
                ),
            )}
      </Grid>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <Icon name="plus" />
      </Fab>
    </Paper>
  );
};

export default IconsCardsTable;
