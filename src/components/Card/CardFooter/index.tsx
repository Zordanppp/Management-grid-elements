import React, { useCallback } from 'react';

import clsx from 'clsx';

import { AvailableIcons } from 'components/Icon/types';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from 'components/Icon';

import { useStyles } from './styles';

interface CardFooterProps {
  iconName: AvailableIcons;
  favorites: AvailableIcons[];
  setFavorites(favorites: AvailableIcons[]): void;
}

const CardFooter: React.FC<CardFooterProps> = ({
  iconName,
  favorites,
  setFavorites,
}) => {
  const classes = useStyles();

  const handleFavoriteIcon = useCallback(
    (iconName: AvailableIcons) => {
      const index = favorites.findIndex(
        (favoriteIconName) => favoriteIconName === iconName,
      );
      const newFavorites = [...favorites];
      if (index === -1) {
        newFavorites.push(iconName);
      } else {
        newFavorites.splice(index, 1);
      }
      setFavorites(newFavorites);
    },
    [favorites, setFavorites],
  );
  return (
    <div className={classes.paperIconFooter}>
      {favorites.includes(iconName) ? (
        <Tooltip title="Unfavorite">
          <div className={clsx(classes.favoriteButton, classes.footerButton)}>
            <Icon
              name="heartOff"
              onClick={() => handleFavoriteIcon(iconName)}
            />
          </div>
        </Tooltip>
      ) : (
        <Tooltip title="Favorite">
          <div className={clsx(classes.unfavoriteButton, classes.footerButton)}>
            <Icon name="heart" onClick={() => handleFavoriteIcon(iconName)} />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default CardFooter;
