import React from 'react'
import Image from 'next/image'

function OurVision() {
    return (
        <section id='our_vision' className='pb-5'>
            <div className='container py-lg-3 py-1'>
                <div className='heading my-3'>
                    <h1 className='fw-bold heading'>
                        Our Vision
                    </h1>
                    <p className='sub-heading'>
                        Empowering Relationships for a World of Love and Connection
                    </p>
                </div>
                <div className='row mt-1 my-5'>
                    <div className='col-lg-6 col-12'>
                        <div className='h-100 d-flex flex-column justify-content-center'>
                            <h2 className='fw-bold side-heading w-lg-90 w-100 my-3'>
                                Love, Understanding, and Empathy are the Cornerstones of Successful Partnerships.
                            </h2>
                            <p className='paragraph w-lg-75 w-100 mt-3'>
                                At Relationship Recharge, our vision is to create a world where every relationship has the opportunity to thrive, flourish, and overcome challenges. We believe that love, understanding, and empathy are the cornerstones of a successful partnership and that every couple deserves access to the tools and support needed for growth and personal development.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex justify-content-center'>
                            <LazyImage
                                height={566}
                                width={600}
                                src='/images/our-vision-1.svg'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='col-12'>
                        <h2 className='fw-bold side-heading w-lg-90 w-100 my-3 mt-5 pt-3 text-center'>
                            Revolutionizing Relationship Navigation through Cutting-Edge AI Technology
                        </h2>
                        <p className='w-lg-75 paragraph w-100 mt-3'>
                            Our innovative platform combines cutting-edge AI technology with the expertise of relationship professionals and therapists, ensuring that couples receive personalized guidance and resources tailored to their unique circumstances. As we continue to grow, we strive to revolutionize the way couples navigate their relationships, fostering a global community that values love, connection, and personal growth above all else.
                        </p>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex third-img'>
                            <div className='d-flex justify-content-center w-75 my-lg-4'>
                                <div className='d-flex flex-column'>
                                    <div className='bubble-button position-relative my-3 user align-self-end two'>
                                        <LazyImage
                                            height={55}
                                            width={55}
                                            className='position-absolute top-0 start-100 translate-middle'
                                            src='/images/git-avatar.svg'
                                            alt=''
                                        />
                                        <span className='m-0'>
                                            Hi, I'm having trouble communicating with my partner.
                                        </span>
                                    </div>
                                    <div className='bubble-button position-relative my-3 bot align-self-start one'>
                                        <LazyImage
                                            height={55}
                                            width={55}
                                            className='position-absolute top-0 start-0 translate-middle'
                                            src='/images/chatbot-avatar.svg'
                                            alt=''
                                        />
                                        <span className='m-0'>
                                            That's tough. Can you give me more details about what's going on?
                                        </span>
                                    </div>
                                    <div className='bubble-button position-relative my-3 user align-self-end four'>
                                        <LazyImage
                                            height={55}
                                            width={55}
                                            className='position-absolute top-0 start-100 translate-middle'
                                            src='/images/git-avatar.svg'
                                            alt=''
                                        />
                                        <span className='m-0'>
                                            We keep misunderstanding each other and it's causing a lot of fights.
                                        </span>
                                    </div>
                                    <div className='bubble-button position-relative my-3 bot align-self-start three'>
                                        <LazyImage
                                            height={55}
                                            width={55}
                                            className='position-absolute top-0 start-0 translate-middle'
                                            src='/images/chatbot-avatar.svg'
                                            alt=''
                                        />
                                        <span className='m-0'>
                                            That sounds frustrating. Let's work on improving your communication skills. I can give you some tips and exercises to try with your partner.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='h-100 d-flex flex-column justify-content-center'>
                            <h2 className='fw-bold side-heading w-lg-75 w-100 my-3 text-end'>
                            Empowering Individuals and Building Healthier Communities, One Relationship at a Time
                            </h2>
                            <p className='w-75 paragraph w-lg-75 w-100 mt-3 mt-3'>
                            We are dedicated to refining and expanding our offerings, always aiming to remain at the forefront of relationship support and personal development. Through our unwavering commitment to our vision, we aim to empower individuals and couples to build stronger, healthier connections and to create a world where love is nurtured and celebrated in all its forms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(OurVision)