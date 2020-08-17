import React, { useCallback } from 'react';
import { AvailableIcons } from 'components/Icon/types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from 'components/Icon';

import { CardHeaderProps } from '../types';

import { useStyles } from './styles';

const CardHeader: React.FC<CardHeaderProps> = ({
  iconName,
  deleteds,
  setDeleteds,
}) => {
  const classes = useStyles();

  const handleDeleteIcon = useCallback(
    (iconName: AvailableIcons) => {
      const index = deleteds.findIndex(
        (favoriteIconName) => favoriteIconName === iconName,
      );
      const newDeleteds = [...deleteds];
      if (index === -1) {
        newDeleteds.push(iconName);
      } else {
        newDeleteds.splice(index, 1);
      }
      setDeleteds(newDeleteds);
    },
    [deleteds, setDeleteds],
  );

  return (
    <div className={classes.paperIconHeader}>
      <Tooltip title="Options">
        <IconButton>
          <Icon name="chevronDown" />
        </IconButton>
      </Tooltip>
      <Tooltip title={deleteds.includes(iconName) ? 'Activate' : 'Deactivate'}>
        <IconButton onClick={() => handleDeleteIcon(iconName)}>
          <Icon name={deleteds.includes(iconName) ? 'moonNew' : 'close'} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default CardHeader;
