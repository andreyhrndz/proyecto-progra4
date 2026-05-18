import { Drawer, List, ListItem, ListItemText } from '@mui/material';

export const AppSidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </Drawer>
  );
};
