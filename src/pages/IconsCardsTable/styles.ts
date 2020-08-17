import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: theme.spacing(1),
    maxWidth: 1650,
    maxHeight: 720,
  },

  form: {
    width: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
  },

  filters: {
    maxHeight: 100,
    padding: theme.spacing(1),
  },

  checkboxes: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  search: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  checkboxShowDeleteds: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: theme.spacing(5),
  },

  searchField: {
    flex: 1,
    width: '100%',
  },

  searchButton: {
    marginLeft: theme.spacing(1),
    width: 130,
    height: 55,
  },

  iconsBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    paddingTop: theme.spacing(2),
    padding: theme.spacing(1),
  },

  fab: {
    position: 'absolute',
    bottom: theme.spacing(4),
    left: '92%',
  },
}));
