import React from 'react';
import Nav from './Nav';
import SubNavMac from './SubNavMac';
import { Route } from 'react-router-dom';

export default function NavWrapper() {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route path='/mac' exact component={SubNavMac}/>
    </>
  )
}
