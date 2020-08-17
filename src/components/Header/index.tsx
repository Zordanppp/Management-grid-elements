import React, { useState } from 'react';

import Icon from 'components/Icon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import useDisclosure from 'hooks/useDisclosure';

import LoginDialog from './LoginDialog';

import { useStyles } from './styles';

interface HeaderProps {
  title: string;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ title, userName }) => {
  const classes = useStyles();

  const [name, setName] = useState<string>(userName || '');

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Grid item xs={12} className={classes.container}>
      <Grid item className={classes.title} xs={9}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid container item className={classes.account} xs={3}>
        {name ? (
          <>
            <Typography variant="h5">Olá, {name}</Typography>
            <Tooltip title="Options" className={classes.accountIcon}>
              <IconButton>
                <Icon name="accountCircle" fontSize="large" />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Typography variant="h5">Log in</Typography>
            <Tooltip
              title="login"
              className={classes.accountIcon}
              onClick={onToggle}
            >
              <IconButton>
                <Icon name="arrowRight" fontSize="large" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Grid>
      <LoginDialog isOpen={isOpen} onToggle={onToggle} setName={setName} />
    </Grid>
  );
};

export default Header;
