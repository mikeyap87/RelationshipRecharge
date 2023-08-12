import React from 'react'
import Slider from '~/components/shared/MobileView/Slider'
import Link from 'next/link'

const slides = [
    {
        title: "Revolutionary Relationship Help for Modern Couples.",
        desc: "Relationship Recharge offers a comprehensive range of topics that cater to the unique needs of modern couples. Our innovative platform provides a safe and supportive space for couples to explore their issues and work together to build stronger, healthier relationships.",
        img: '/images/what-we-offer-1.svg',
    },
    {
        title: "Effective Tools to Improve Communication and Build Trust.",
        desc: "Our platform is designed to help couples improve communication and build trust. Whether you're struggling with misunderstandings, poor listening skills, or broken trust, Relationship Recharge provides the tools and resources you need to work through your issues and build a stronger connection with your partner.",
        img: '/images/what-we-offer-2.svg',
    },
    {
        title: "Guidance for Building Intimacy and Overcoming Financial Stress.",
        desc: "We understand that intimacy and financial stress can be major sources of conflict in relationships. That's why we offer guidance and support to help couples navigate these issues and build a more fulfilling, intimate relationship.",
        img: '/images/what-we-offer-3.svg',
    },
    {
        title: "Expert Guidance for Navigating Family Dynamics and Personal Growth.",
        desc: "At Relationship Recharge, we believe that personal growth and family dynamics play a critical role in building strong relationships. That's why we offer expert guidance to help couples navigate these challenges and build a stronger, more fulfilling relationship.",
        img: '/images/what-we-offer-4.svg',
    },
]

function WhatWeOffer() {
    return (
        <section id='what_we_offer'>
            <div className='container py-1'>
                <div className='heading my-3'>
                    <h1 className='heading fw-bold mb-4'>
                        What We Offer
                    </h1>
                    <p className='sub-heading'>
                        Navigating the Complexities of Relationships
                    </p>
                </div>
                <Slider slides={slides} />
                <div className='footer d-flex justify-content-center my-0 mb-4'>
                    <Link href='#prelaunch' className="botton-btn px-5 py-3 btn bg green text-white fw-bold" type="submit">
                        GET STARTED FOR FREE
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default React.memo(WhatWeOffer)
