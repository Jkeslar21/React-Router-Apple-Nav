import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav';
import SubNavMac from './SubNavMac';
import SubNaviPad from './SubNaviPad';
import SubNaviPhone from './SubNaviPhone';

export default function NavWrapper() {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route path='/mac' exact component={SubNavMac}/>
      <Route path='/ipad' exact component={SubNaviPad}/>
      <Route path='/iphone' exact component={SubNaviPhone}/>
    </>
  )
}
