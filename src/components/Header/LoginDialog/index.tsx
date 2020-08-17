import React, { useCallback, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Controller, useForm } from 'react-hook-form';

import { useStyles } from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Icon from 'components/Icon';

interface LoginDialogProps {
  isOpen: boolean;
  setName(name: string): void;
  onToggle(): void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({
  isOpen,
  setName,
  onToggle,
}) => {
  const methods = useForm();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitLogin = useCallback(
    (data: Record<string, string>) => {
      if (data.name) {
        setName(data.name);
        onToggle();
      }
    },
    [onToggle, setName],
  );

  return (
    <Dialog open={isOpen} onClose={onToggle} maxWidth="md">
      <DialogTitle>Log in simulation</DialogTitle>
      <DialogContent>
        <form
          className={classes.formDialog}
          onSubmit={methods.handleSubmit(handleSubmitLogin)}
        >
          <Grid container direction="column" justify="space-between">
            <Grid item>
              <Controller
                as={TextField}
                control={methods.control}
                defaultValue=""
                label="name"
                variant="outlined"
                name="name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Icon
                          className={classes.textFieldIcon}
                          name="account"
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className={classes.formContent}
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                control={methods.control}
                defaultValue=""
                label="email"
                variant="outlined"
                name="email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Icon className={classes.textFieldIcon} name="email" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className={classes.formContent}
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                control={methods.control}
                type={showPassword ? 'text' : 'password'}
                defaultValue=""
                label="password"
                variant="outlined"
                name="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={(event) => {
                          event.stopPropagation();
                          setShowPassword(!showPassword);
                        }}
                        tabIndex="-1"
                      >
                        <Icon
                          className={classes.textFieldIcon}
                          name={showPassword ? 'eye' : 'eyeOff'}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className={classes.formContent}
              />
            </Grid>
            <Grid container item justify="flex-end">
              <Button
                type="button"
                variant="contained"
                color="secondary"
                className={classes.loginButton}
                onClick={onToggle}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.loginButton}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
