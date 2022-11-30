import { Outlet } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

import { Box, Toolbar } from '@mui/material';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

const useStyles = makeStyles()({
  root: {
    backgroundColor: 'green',
    minHeight: '100vh',
    display: 'flex',
  },
  container: {
    flexGrow: 1,
    flexShrink: 0,
    minHeight: '200vh',
    padding: '1rem',
    backgroundColor: 'red',
  },
  wrapper: {
    width: '100px',
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
