import React from 'react'

export default function SubNaviPhone() {
  return (
    <>
      <div className='iphone'>
        <div className='newLogo iphonePad xS-Position'>
          <div className='sub-nav-styling'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexs_large.svg' className='xs' />
            <p>iPhone X<span className='s-Sizing'>S</span></p>
          </div>
          <p className='new'>New</p>
        </div>
        <div className='newLogo iphonePad xR-Position'>
          <div className='sub-nav-styling'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexr_large.svg' className='xr' />
            <p>iPhone X<span className='r-Sizing'>R</span></p>
          </div>
          <p className='new'>New</p>
        </div>
        <div className='sub-nav-styling iphonePad eightPosition'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphone8_large.svg' className='eight'/>
          <p>iPhone 8</p>
        </div>
        <div className='sub-nav-styling iphonePad sevenPosition'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphone7_large.svg' className='seven' />
          <p>iPhone 7</p>
        </div>
        <div className='sub-nav-styling iphonePad iOS-Position'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/ios_large.svg' />
          <p>iOS 12</p>
        </div>
        <div className='sub-nav-styling iphonePad aPodPosition'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/airpods_large.svg' className='airpod' />
          <p>AirPods</p>
        </div>
        <div className='sub-nav-styling iphonePad accessPosition'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/accessories_large.svg' className='accessiphone' />
            <p>Accessories</p>
        </div>
        <div className='sub-nav-styling iphonePad iphoneComparePosition'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/compare_large.svg' className='compareiphone' />
          <p>Compare</p>
        </div>
      </div>
    </>
  )
}
