import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const scrollToSection = section => {
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -85
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToSection('Featured')}>
          Home
        </ListItem>
        <ListItem button onClick={() => scrollToSection('VenueInfo')}>
          Event Info
        </ListItem>
        <ListItem button onClick={() => scrollToSection('Highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToSection('Pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToSection('Location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;