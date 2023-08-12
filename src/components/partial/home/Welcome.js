import React from 'react'

function Welcome() {
  return (
    <section id='welcome' className='py-lg-5 py-2'>
      <div className="content pt-lg-4 pyt-1">
        <div className='container sm-hidden d-flex flex-column align-items-center justify-content-around'>
          <div>
            <h1 className='mt-5 fw-bold'>Welcome to Relationship Recharge!</h1>
            <h4 className='sub-heading mt-2 mb-5'>
              AI Technology, Personalized Coaching, and Virtual Therapy to Overcome Relationship Challenges and Achieve Fulfillment.
            </h4>
            <p className='mt-3 mb-5 paragraph'>
            Relationship Recharge is a revolutionary platform designed to help couples, friends, and family build stronger, healthier, and more fulfilling connections. Our innovative solution combines cutting-edge AI technology, personalized coaching, virtual therapy, and community support to address common relationship challenges and promote growth.
            </p>
          </div>
        </div>
        <div className='sm-visible pt-4'>
          <div className='container'>
            <h1 className='mt-5 fw-bold mx-5'>Welcome to Relationship Recharge!</h1>
            <h4 className='sub-heading mt-2 mb-5 mx-4'>
              AI Technology, Personalized Coaching, and Virtual Therapy to Overcome Relationship Challenges and Achieve Fulfillment.
            </h4>
            <p className='mt-3 paragraph'>
            Relationship Recharge is a revolutionary platform designed to help couples, friends, and family build stronger, healthier, and more fulfilling connections. Our innovative solution combines cutting-edge AI technology, personalized coaching, virtual therapy, and community support to address common relationship challenges and promote growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Welcome)
