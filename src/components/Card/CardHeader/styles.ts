import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  paperIconHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
  },
}));
