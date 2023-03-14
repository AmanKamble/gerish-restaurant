import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__header-h1'>The key to fine diming.</h1>
        <p className='p__opensans' style={{ margin: '2rem 0 0 0' }}>
          Set tellus lobortis sed senectus vivamus molestie.
        </p>
        <p className='p__opensans' style={{ margin: '0 0 2rem 0' }}>
          Condimentum volutpat morbi facilisis quam scelerisque spien. Et, penatibus aliquam amet tellus. <span>( dummy text )</span>
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
};

export default Header;
