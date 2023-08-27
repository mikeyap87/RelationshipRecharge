import React from 'react'
import Image from 'next/image'

function Sunshine() {
  return (
    <div id='sunshine' className='bg blue d-flex justify-content-center py-lg-0 py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-12 sm-hidden'>
            <div className='para py-4'>
              <p className='text-white my-lg-2 my-2'>
                Love is not just a feeling, it's an experience. And with every conversation we have, every word we exchange, we create a new chapter in our story. So let's keep communication open, one message at a time.
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-12'>
            <div className='h-100 w-100 position-relative'>
              <LazyImage
                width={651}
                height={291}
                className='position-absolute'
                src='/images/sunshine.svg'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-8 col-12 sm-visible'>
            <div className='para h-100 d-flex align-items-center'>
              <p className='text-white my-lg-2 my-2 text-center'>
                Love is not just a feeling, it's an experience. And with every conversation we have, every word we exchange, we create a new chapter in our story. So let's keep communication open, one message at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Sunshine)