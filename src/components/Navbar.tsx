import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

import { IMenuItem } from '../interfaces/menu.interface';

import { MENU_ITEMS, NAVBAR_WIDTH } from '../constants/menu';

const useStyles = makeStyles()({
  sidebar: {
    width: `${NAVBAR_WIDTH}px`,
    flexShrink: 0,
    backgroundColor: 'rgba(255,255,0,0.5)',
  },
});

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Toolbar />
      <List>
        {MENU_ITEMS.map((item: IMenuItem) => (
          <Link to={item.url} key={item.id}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>a</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
