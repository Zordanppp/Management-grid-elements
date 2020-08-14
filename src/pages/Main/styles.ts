import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 1600,
    height: 720,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },

  title: {
    margin: 16,
    paddingLeft: 16,
    height: 60,
    color: theme.palette.primary.main,
  },

  form: {
    width: 500,
    height: 60,
    marginRight: theme.spacing(10.5),
  },

  searchField: {
    flex: 1,
  },

  searchButton: {
    marginLeft: theme.spacing(1),
    height: 56,
  },

  iconsBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    padding: theme.spacing(1),
  },

  paperIconHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
  },

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
  },

  icon: {
    marginTop: theme.spacing(2),
  },

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
