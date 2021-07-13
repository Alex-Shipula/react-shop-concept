import React from 'react';


import NavigationItem from './NavigationItem';


const NavigationItems = () => {
  return (
    <ul className="nav-list">
      <NavigationItem
        link="/productlist/actors"
        exact>Actors</NavigationItem>
      <NavigationItem
        link="/productlist/heroes"
        exact>Heroes</NavigationItem>
      <NavigationItem link="/contact" exact>Contact</NavigationItem>
      <NavigationItem link="/" exact>Home</NavigationItem>
    </ul>
  )
}

export default NavigationItems;
