import Head from 'next/head'
import Layout from '~/components/shared/Layout';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Relationship Recharge - Terms and Conditions</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Layout>
                <div className='py-5'>
                    <div className='container'>
                        <h1 className='heading fw-bold text-center '>
                            Terms and Conditions
                        </h1>
                        <p className='text-center'>
                            Welcome to KidWiz. By accessing and using our website and services, you agree to comply with the following terms and conditions.
                        </p>
                        <div className='py-3'>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Acceptance of Terms
                            </h3>
                            <p>
                                By using KidWiz, you agree to these terms and conditions in full. If you disagree with any part of these terms and conditions, you must not use our website or services.
                            </p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Changes to Terms and Conditions
                            </h3>
                            <p>
                                We may make changes to these terms and conditions at any time without notice. By continuing to use KidWiz after any changes have been made, you agree to be bound by the revised terms and conditions.
                            </p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Use of Our Services
                            </h3>
                            <p>
                                Our services are intended for personal, non-commercial use only. You agree to use KidWiz in accordance with all applicable laws and regulations.
                            </p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Liability
                            </h3>
                            <p>
                                KidWiz is provided "as is" and we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose. You acknowledge that any reliance you place on such information is strictly at your own risk.
                            </p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Intellectual Property
                            </h3>
                            <p>
                                All content and materials on KidWiz, including but not limited to, software, text, graphics, logos, images, and videos, are the property of KidWiz and are protected by copyright laws. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from KidWiz.
                            </p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                User Content
                            </h3>
                            <p>
                                By submitting any content, including but not limited to, comments, reviews, or feedback, you grant KidWiz a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any form, media, or technology. You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to grant the foregoing license to KidWiz.
                            </p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Termination
                            </h3>
                            <p>
                                We reserve the right to terminate your use of KidWiz at any time and for any reason without notice.</p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Governing Law
                            </h3>
                            <p>
                                These terms and conditions shall be governed by and construed in accordance with the laws of the State of California, without giving effect to its conflict of law provisions.
                            </p>
                            <h3 className='my-1 sub-heading fw-bold'>
                                Entire Agreement
                            </h3>
                            <p>
                                These terms and conditions constitute the entire agreement between you and KidWiz and supersede all prior agreements and understandings, whether written or oral, relating to the use of our website and services.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
