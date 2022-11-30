import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  appbarRoot: {
    backgroundColor: 'rgba(0,0,255,0.5)',
  },
});

const Header = () => {
  const { classes } = useStyles();

  return (
    <AppBar position='fixed' elevation={1} classes={{ root: classes.appbarRoot }}>
      <Toolbar classes>Logo</Toolbar>
    </AppBar>
  );
};

export default Header;
