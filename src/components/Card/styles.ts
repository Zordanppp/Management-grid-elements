import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  paperIconContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paperIcon: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(0.5),
    width: 200,
    height: 180,
    transition: '0.2s',
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },

  icon: {
    marginTop: theme.spacing(2),
  },
}));
