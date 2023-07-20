import React from 'react'

function HaveASchool() {
    return (
        <section id='have_a_school'>
            <div className='container mt-5'>
                <div className='mb-3 pb-5'>
                    <p className='mb-4 mt-5 paragraph'>
                        Relationship Recharge offers a revolutionary approach to building stronger, healthier, and more fulfilling relationships. Our AI-powered platform provides personalized guidance and support to address your unique relationship challenges and promote growth.
                    </p>
                    <p className='my-4 paragraph'>
                        Choose from our three-tiered pricing structure to find the plan that best fits your needs and budget. Whether you're looking for ongoing coaching, virtual therapy sessions, or community support, we have an option that will work for you.
                    </p>
                    <p className='my-4 paragraph'>
                        Invest in the future of your relationship and sign up for Relationship Recharge today. With our innovative solution, you'll have the tools and resources you need to nurture your connection and overcome any obstacles that come your way.</p>
                </div>
                <div className='mb-5'>
                    <button className="mb-5 botton-btn btn bg green text-white w-100">
                        CONTACT US FOR PERSONALIZED SUPPORT!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(HaveASchool)