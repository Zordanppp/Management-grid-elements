import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  paperIconFooter: {
    display: 'flex',
    justifyContent: 'flex-start',
  },

  footerButton: {
    color: '#FFF',
    width: 32,
    height: 32,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },

  unfavoriteButton: {
    background: theme.palette.secondary.light,
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },

  favoriteButton: {
    background: theme.palette.success.main,
    '&:hover': {
      background: theme.palette.success.dark,
    },
  },
}));
