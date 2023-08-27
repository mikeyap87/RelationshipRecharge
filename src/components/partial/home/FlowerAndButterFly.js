import React from 'react'
import Image from 'next/image'

function FlowerAndButterFly() {
    return (
        <div id='flower_and_butterfly' className='bg blue d-flex justify-content-center'>
            <LazyImage
                height={513}
                width={686}
                className='img-fluid'
                src='/images/flower-and-butterfly.png'
                alt=''
            />
        </div>
    )
}

export default React.memo(FlowerAndButterFly)