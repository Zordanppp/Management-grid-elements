import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    minHeight: '12vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    background: theme.palette.primary.main,
  },

  title: {
    margin: theme.spacing(2),
    color: theme.palette.grey[100],
  },

  account: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: theme.spacing(2),
    color: theme.palette.grey[100],
  },

  accountIcon: {
    color: theme.palette.grey[100],
    margin: theme.spacing(1),
  },
}));
