import React from 'react'

export default function SubNaviPhone() {
  return (
    <>
      <div className='iphone'>
        <div className='newLogo'>
          <div className='sub-nav-styling'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexs_large.svg' />
            <p>iPhone XS</p>
          </div>
          <p className='new'>New</p>
        </div>
        <div className='newLogo'>
          <div className='sub-nav-styling'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexr_large.svg' />
            <p>iPhone XR</p>
          </div>
          <p className='new'>New</p>
        </div>
        <div className='sub-nav-styling'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphone8_large.svg' />
          <p>iPhone 8</p>
        </div>
        <div className='sub-nav-styling'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphone7_large.svg' />
          <p>iPhone 7</p>
        </div>
        <div className='sub-nav-styling'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/ios_large.svg' />
          <p>iOS 12</p>
        </div>
        <div className='sub-nav-styling'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/airpods_large.svg' />
          <p>AirPods</p>
        </div>
        <div className='sub-nav-styling mini'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/accessories_large.svg' className='miniResize' />
            <p>Accessories</p>
        </div>
        <div className='sub-nav-styling'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/compare_large.svg' />
          <p>Compare</p>
        </div>
      </div>
    </>
  )
}
