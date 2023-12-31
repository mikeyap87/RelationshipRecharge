import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
    return (
        <footer id='footer' className='py-lg-5 3 px-lg-0 px-3 pt-lg-0 pt-3 mt-lg-0 mt-3'>
            <div className='container py-lg-5 py-3 my-3'>
                <div className='row'>
                    <div className='col-lg-4 col-6 py-lg-0 py-3 text-center'>
                        <h4>Relationship Recharge</h4>
                        <p className='my-1'>
                            <Link className='text-dark text-decoration-none' href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </p>
                        <p className='my-1'>
                            <Link className='text-dark text-decoration-none' href="/terms-and-conditions">
                                Terms and Conditions
                            </Link>
                        </p>
                    </div>
                    <div className='col-lg-4 col-6 py-lg-0 py-3 text-center'>
                        <h4>Resource</h4>
                        <p className='my-1'>
                            <Link className='text-dark text-decoration-none' target='_blank' href="#">
                                Educational Blog
                            </Link>
                        </p>
                    </div>
                    <div className='col-lg-4 col-12 py-lg-0 py-3'>
                        <div className='d-flex flex-column justify-content-center'>
                            <h4 className='text-center'>Contact</h4>
                            <Link target='_blank' href='tel:1-(530) 325-0852' className='my-1 text-dark text-decoration-none text-center'>
                                1-(530) 325-0852
                            </Link>
                            <Link target='_blank' href='mailto:info@relationshiprecharge.ai' className='my-1 text-dark text-decoration-none text-center'>
                                info@relationshiprecharge.ai
                            </Link>
                            <div className='my-2 d-flex justify-content-center'>
                                <Link className='text-center text-dark text-decoration-none' target='_blank' href="https://www.facebook.com/RelationshipRechargeAI">
                                    <Image
                                        height={30}
                                        width={30}
                                        className='img-fluid mx-1'
                                        src='/icons/facebook.svg'
                                        alt=''
                                    />
                                </Link>
                                <Link className='text-dark text-decoration-none' target='_blank' href="https://www.instagram.com/relationshiprecharge/">
                                    <Image
                                        height={30}
                                        width={30}
                                        className='img-fluid mx-1'
                                        src='/icons/instagram.svg'
                                        alt=''
                                    />
                                </Link>
                                <Link className='text-dark text-decoration-none' target='_blank' href="https://twitter.com/RelateRecharge/">
                                    <Image
                                        height={30}
                                        width={30}
                                        className='img-fluid mx-1'
                                        src='/icons/twitter.svg'
                                        alt=''
                                    />
                                </Link>
                                <Link className='text-dark text-decoration-none' target='_blank' href="https://twitter.com/relationshiprecharge/">
                                    <Image
                                        height={30}
                                        width={30}
                                        className='img-fluid mx-1'
                                        src='/icons/linkedin.svg'
                                        alt=''
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer)