import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  loginItem: {
    marginTop: theme.spacing(2),
  },

  formContent: {
    width: '100%',
    marginTop: theme.spacing(1),
  },

  loginButton: {
    height: 45,
    width: 100,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },

  textFieldIcon: {
    color: theme.palette.grey[700],
  },

  formDialog: {
    width: 400,
  },
}));
