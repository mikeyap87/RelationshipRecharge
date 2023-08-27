import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

function WhatWeOffer() {
    return (
        <section id='what_we_offer'>
            <div className='container py-lg-3 py-1'>
                <div className='heading my-3'>
                    <h1 className='heading fw-bold'>
                        What We Offer
                    </h1>
                    <p className='sub-heading'>
                        Navigating the Complexities of Relationships
                    </p>
                </div>
                <div className='row my-5'>
                    <div className='col-lg-6 col-12'>
                        <div className='pb-3 h-100 d-flex flex-column justify-content-center'>
                            <h2 className='fw-bold side-heading my-3'>
                                Revolutionary Relationship Help for Modern Couples
                            </h2>
                            <p className='mt-3 paragraph'>
                                Relationship Recharge offers a comprehensive range of topics that cater to the unique needs of modern couples. Our innovative platform provides a safe and supportive space for couples to explore their issues and work together to build stronger, healthier relationships.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex justify-content-center'>
                            <LazyImage
                                width={396}
                                height={396}
                                className='img-fluid'
                                src='/images/what-we-offer-1.svg'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='h-100 d-flex justify-content-center align-items-center'>
                            <LazyImage
                                width={688}
                                height={459}
                                className='img-fluid'
                                src='/images/what-we-offer-2.svg'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='mt-5 h-100 d-flex flex-column justify-content-center'>
                            <h2 className='fw-bold side-heading my-3 text-center'>
                                Effective Tools to Improve Communication
                            </h2>
                            <p className='mt-3 paragraph mb-5'>
                                Our platform is designed to help couples improve communication and build trust. Whether you're struggling with misunderstandings, poor listening skills, or broken trust, Relationship Recharge provides the tools and resources you need to work through your issues and build a stronger connection with your partner.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='my-3 h-100 d-flex flex-column justify-content-center'>
                            <h2 className='fw-bold side-heading my-3'>
                                Guidance for Building Intimacy and Overcoming Financial Stress
                            </h2>
                            <p className='mt-3 paragraph'>
                                We understand that intimacy and financial stress can be major sources of conflict in relationships. That's why we offer guidance and support to help couples navigate these issues and build a more fulfilling, intimate relationship.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <LazyImage
                                width={648}
                                height={611}
                                className='img-fluid'
                                src='/images/what-we-offer-3.svg'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <LazyImage
                                width={590}
                                height={590}
                                className='img-fluid'
                                src='/images/what-we-offer-4.svg'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <h2 className='mt-5 fw-bold side-heading mb-3 text-center'>
                            Expert Guidance for Navigating Family Dynamics and Personal Growth
                        </h2>
                        <p className='mt-3 paragraph mb-5'>
                            At Relationship Recharge, we believe that personal growth and family dynamics play a critical role in building strong relationships. That's why we offer expert guidance to help couples navigate these challenges and build a stronger, more fulfilling relationship.
                        </p>
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        <div className='w-75 px-lg-5'>
                            <h2 className='mt-5 fw-bold side-heading mb-3 text-center'>
                                Relationship Recharge Community Today!
                            </h2>
                            <p className='mt-3 paragraph mb-5'>
                                Join the Relationship Recharge community today and take the first step towards building a stronger, healthier relationship with your partner. Our platform is designed to provide you with the support, guidance, and resources you need to overcome your challenges and build a lifetime of love and happiness together.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='footer d-flex justify-content-center my-5 pt-3'>
                    <Link href='#prelaunch'>
                        <button className="botton-btn px-5 py-3 btn bg green text-white px-3 fw-bold position-relative" type="submit">
                            <div className="robot position-absolute translate-middle">
                                <LazyImage
                                    width={150}
                                    height={150}
                                    className='img-fluid ml-5'
                                    src='/images/relation-bot.svg'
                                    alt=''
                                />
                            </div>
                            GET STARTED FOR FREE
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default React.memo(WhatWeOffer)