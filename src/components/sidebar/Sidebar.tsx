import { SiderbarBox } from "./ui";
import * as React from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <SiderbarBox role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/' },
          { text: 'About', icon: <InfoIcon />, link: 'about' },
          { text: 'Contact', icon: <ContactMailIcon />, link: 'contact' },
          { text: 'Products', icon: <StorefrontIcon />, link: 'products' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Optional: You can add more items or sections here */}
    </SiderbarBox>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}> {<MenuIcon/>} </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Sidebar;
