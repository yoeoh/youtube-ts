import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { NAVBAR_WIDTH } from '../constants/menu';

const useStyles = makeStyles()({
  appbarRoot: {
    backgroundColor: '#000',
    color: '#fff',
    left: NAVBAR_WIDTH,
  },
});

const Header = () => {
  const { classes } = useStyles();

  return (
    <AppBar position='fixed' elevation={0} classes={{ root: classes.appbarRoot }}>
      <Toolbar>Search</Toolbar>
    </AppBar>
  );
};

export default Header;
