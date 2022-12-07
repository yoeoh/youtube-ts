import { Outlet } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

import { Box, Toolbar } from '@mui/material';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { NAVBAR_WIDTH } from '../constants/menu';

const useStyles = makeStyles()({
  root: {
    maxWidth: '100vw',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
  },
  container: {
    padding: '1rem',
    marginLeft: NAVBAR_WIDTH,
    backgroundColor: '#000',
    color: '#fff',
    maxWidth: '100%',
    width: '100%',
  },
});

const Root = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Navbar />
      <Box className={classes.container} component='main'>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Root;
