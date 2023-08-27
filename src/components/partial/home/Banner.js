import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from '~/components/shared/VideoPlayer'

function Banner() {

    return (
        <section id='banner' >
            <div className='curve bg blue' alt='' />
            <div className='container h-100 py-5'>
                <div className='row h-100'>
                    <div className='h-100 col-lg-6 col-12 d-flex flex-column justify-content-center'>
                        <div className='my-lg-5 my-0 mx-lg-0 mx-4'>
                            <h1 className='fw-bold heading'>
                                <span className='text green'>
                                    {"Rediscover the Magic "}
                                </span>
                                of Your Relationship
                            </h1>
                            <h5 className='sub-heading'>
                                Empowering Couples Through <span className='bold'>AI-Powered</span> Personal Relationship Guidance.
                            </h5>
                        </div>
                        <div className='d-flex justify-content-center w-75'>
                            <div className='d-flex flex-column sm-hidden'>
                                <div className='bubble-button position-relative my-3 user align-self-end one'>
                                    <Image
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
                                <div className='bubble-button position-relative my-3 bot align-self-start two'>
                                    <Image
                                        height={55}
                                        width={55}
                                        className='position-absolute top-0 start-0 translate-middle'
                                        src='/images/chatbot-avatar.webp'
                                        alt=''
                                    />
                                    <span className='m-0'>
                                        That's tough. Can you give me more details about what's going on?
                                    </span>
                                </div>
                                <div className='bubble-button position-relative my-3 user align-self-end three'>
                                    <Image
                                        height={55}
                                        width={55}
                                        className='position-absolute top-0 start-100 translate-middle'
                                        src='/images/git-avatar.svg'
                                        alt=''
                                    />
                                    <span className='m-0'>
                                        My partner doesn't listen to me and I feel ignored.
                                    </span>
                                </div>
                                <div className='bubble-button position-relative my-3 bot align-self-start four'>
                                    <Image
                                        height={55}
                                        width={55}
                                        className='position-absolute top-0 start-0 translate-middle'
                                        src='/images/chatbot-avatar.webp'
                                        alt=''
                                    />
                                    <span className='m-0'>
                                    I see. Have you tried any strategies to improve communication?
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link href='#prelaunch' className="botton-btn px-3 py-2 mx-3 btn bg green text-white fw-bold sm-visible">
                            GET STARTED FOR FREE
                        </Link>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='h-100 d-flex flex-column align-items-center'>
                            <VideoPlayer src={'/video/KidWiz.mp4'} thumbnail={'/images/bot-image.svg'} />
                            <Link href='#prelaunch' className="botton-btn px-lg-5 py-2 btn bg green text-white fw-bold sm-hidden">
                                GET STARTED FOR FREE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Banner)