import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AutoAwesome } from '@mui/icons-material';

import { IListItemLinkProps, IMenuItem } from '../interfaces/menu.interface';

import { MENU_ITEMS, NAVBAR_WIDTH } from '../constants/menu';
import { Link } from './RouterLink';

const useStyles = makeStyles()({
  sidebar: {
    width: NAVBAR_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    borderRight: '1px solid #333333',
    backgroundColor: '#000',
    color: '#fff',
  },
});

const ListItemLink = (props: IListItemLinkProps) => {
  const { icon, text, to } = props;

  return (
    <li>
      <ListItem button component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText>
          <Typography noWrap>{text}</Typography>
        </ListItemText>
      </ListItem>
    </li>
  );
};

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Drawer variant='persistent' open={true} classes={{ paper: classes.drawerPaper }}>
      <Box className={classes.sidebar}>
        <Toolbar>Logo</Toolbar>
        <Divider />
        <List>
          {MENU_ITEMS.map((item: IMenuItem) => (
            <ListItemLink
              to={item.url}
              text={item.text}
              icon={<AutoAwesome htmlColor='#fff' />}
              key={item.id}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Navbar;
