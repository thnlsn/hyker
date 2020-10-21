import React from 'react';

const NavigationMenu = ({ links }) => {
  console.log(links[0].title);
  return (
    <nav className='navigation__nav'>
      <ul className='navigation__list'>
        {links.map((link) => (
          <li className='navigation__item'>
            <a href={link.href} className='navigation__link'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
