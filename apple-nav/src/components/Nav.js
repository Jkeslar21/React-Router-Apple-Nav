import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
      <Link to='/'><i class="fab fa-apple fa-lg nav-link"></i></Link>
      <Link to='/mac' className='nav-link'>Mac</Link>
      <Link to='/ipad' className='nav-link'>iPad</Link>
      <Link to='/' className='nav-link'>iPhone</Link>
      <Link to='/' className='nav-link'>Watch</Link>
      <Link to='/' className='nav-link'>TV</Link>
      <Link to='/' className='nav-link'>Music</Link>
      <Link to='/' className='nav-link'>Support</Link>
      <Link to='/' className='nav-link'><i class="fas fa-search fa-lg"></i></Link>
      <Link to='/' className='nav-link'><i class="far fa-clipboard fa-lg"></i></Link>
    </div>
  )
}
