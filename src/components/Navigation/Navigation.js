import React from 'react';

import NavigationToggle from './NavigationToggle';
import NavigationMenu from './NavigationMenu';

const links = [
  { title: 'About Hyker', href: '#' },
  { title: 'Your Benefits', href: '#' },
  { title: 'Popular Hikes', href: '#' },
  { title: 'Stories', href: '#' },
  { title: 'Book Now', href: '#' },
];

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavigationToggle />
      <NavigationMenu links={links} />
    </div>
  );
};

export default Navigation;
