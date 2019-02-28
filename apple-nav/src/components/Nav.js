import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
      <Link to='/'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg' className='nav-link navLogo' /></Link>
      <Link to='/mac'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/mac/image_large.svg' className='nav-link navMac' /></Link>
      <Link to='/ipad'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/ipad/image_large.svg' className='nav-link naviPad' /></Link>
      <Link to='/iphone'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/iphone/image_large.svg' className='nav-link naviPhone' /></Link>
      <Link to='/'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/watch/image_large.svg' className='nav-link navWatch' /></Link>
      <Link to='/'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/tv/image_large.svg' className='nav-link navTV' /></Link>
      <Link to='/'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/music/image_large.svg' className='nav-link navMusic' /></Link>
      <Link to='/'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/support/image_large.svg' className='nav-link navSupport' /></Link>
      <Link to='/'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg' className='nav-link navSearch' /></Link>
      <Link to='/'><img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg' className='nav-link navBag' /></Link>
    </div>
  )
}
