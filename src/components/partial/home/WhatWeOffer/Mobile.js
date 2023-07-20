import React from 'react'
import Slider from '~/components/shared/MobileView/Slider'
import Link from 'next/link'

const slides = [
    {
        title: "Revolutionary Relationship Help for Modern Couples.",
        desc: "At KidWiz, we believe that every child is unique and deserves an education that caters to their individual strengths and interests. That's why we offer a comprehensive range of topics that go beyond the traditional classroom subjects. Our interactive and engaging lessons are designed to spark curiosity, foster creativity, and develop critical thinking skills in children ages 5-12.",
        img: '/images/what-we-offer-1.svg',
    },
    {
        title: "Effective Tools to Improve Communication and Build Trust",
        desc: "In addition to our standard curriculum, we also offer a unique feature that sets us apart from other educational platforms: parental role-playing scenarios. This innovative tool allows parents to practice real-life scenarios with their children, teaching them valuable life skills such as conflict resolution, decision-making, and communication. By practicing these scenarios in a safe and controlled environment, children are better equipped to handle challenging situations they may encounter in the real world.",
        img: '/images/what-we-offer-2.svg',
    },
    {
        title: "Guidance for Building Intimacy and Overcoming Financial Stress",
        desc: "We understand that intimacy and financial stress can be major sources of conflict in relationships. That's why we offer guidance and support to help couples navigate these issues and build a more fulfilling, intimate relationship.",
        img: '/images/what-we-offer-3.svg',
    },
    {
        title: "Expert Guidance for Navigating Family Dynamics and Personal Growth",
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