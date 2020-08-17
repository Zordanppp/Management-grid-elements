import React, { useCallback, useMemo } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Controller, useForm } from 'react-hook-form';

import { IconProps, AvailableIcons } from 'components/Icon/types';

import { useStyles } from './styles';

interface NewIconDialogProps {
  isOpen: boolean;
  onToggle(): void;
  addeds: IconProps[];
  setAddeds(icon: IconProps[]): void;
}

const NewIconDialog: React.FC<NewIconDialogProps> = ({
  isOpen,
  addeds,
  onToggle,
  setAddeds,
}) => {
  const methods = useForm();
  const classes = useStyles();

  const handleSubmitLogin = useCallback(
    (data: Record<string, string>) => {
      const newData: IconProps = {
        name: data.name as AvailableIcons,
        svg: data.svg,
      };

      setAddeds([...addeds, newData]);
      onToggle();
    },
    [onToggle, setAddeds, addeds],
  );

  const ButtonsRow = useMemo(
    () => (
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
          Confirm
        </Button>
      </Grid>
    ),
    [classes.loginButton, onToggle],
  );

  return (
    <Dialog open={isOpen} onClose={onToggle} maxWidth="md">
      <DialogTitle>New icon</DialogTitle>
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
                required
                defaultValue=""
                label="icon name"
                variant="outlined"
                name="name"
                className={classes.formContent}
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                required
                control={methods.control}
                defaultValue=""
                label="icon SVG"
                variant="outlined"
                name="svg"
                className={classes.formContent}
              />
            </Grid>
            {ButtonsRow}
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewIconDialog;
