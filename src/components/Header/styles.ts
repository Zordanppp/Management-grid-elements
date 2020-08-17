import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    minHeight: '12vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(2),
    background: theme.palette.primary.main,
  },

  title: {
    margin: theme.spacing(2),
    color: theme.palette.grey[100],
  },
}));
