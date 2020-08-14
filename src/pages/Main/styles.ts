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

  checkboxShowDeleteds: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: theme.spacing(7),
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
}));
