import React from 'react'

export default function SubNaviPhone() {
  return (
    <>
      <div className='iphone'>
        <div className='newLogo iphonePad'>
          <div className='sub-nav-styling'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexs_large.svg' className='xs' />
            <p>iPhone XS</p>
          </div>
          <p className='new'>New</p>
        </div>
        <div className='newLogo iphonePad'>
          <div className='sub-nav-styling'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphonexr_large.svg' className='xr' />
            <p>iPhone XR</p>
          </div>
          <p className='new'>New</p>
        </div>
        <div className='sub-nav-styling iphonePad'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphone8_large.svg' className='eight'/>
          <p>iPhone 8</p>
        </div>
        <div className='sub-nav-styling iphonePad'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/iphone7_large.svg' className='seven' />
          <p>iPhone 7</p>
        </div>
        <div className='sub-nav-styling iphonePad'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/ios_large.svg' />
          <p>iOS 12</p>
        </div>
        <div className='sub-nav-styling iphonePad'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/airpods_large.svg' className='airpod' />
          <p>AirPods</p>
        </div>
        <div className='sub-nav-styling iphonePad'>
            <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/accessories_large.svg' className='accessiphone' />
            <p>Accessories</p>
        </div>
        <div className='sub-nav-styling iphonePad'>
          <img src='https://www.apple.com/v/iphone/home/z/images/chapternav/compare_large.svg' className='compareiphone' />
          <p>Compare</p>
        </div>
      </div>
    </>
  )
}
