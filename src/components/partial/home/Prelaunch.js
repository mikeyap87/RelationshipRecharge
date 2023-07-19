import React, { useState } from 'react'
import { Form, Input, Button, notification } from 'antd';
import Image from 'next/image'

function PreLaunch() {
    const [loading, setLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    async function handleSubmit(values) {
        setLoading(true)
        const data = {
            type: 'subscription',
            attributes: {
                profile: {
                    data: {
                        type: 'profile',
                        attributes: {
                            location: {
                                address1: '89 E 42nd St',
                                address2: '1st floor',
                                city: 'New York',
                                country: 'United States',
                                latitude: 'string',
                                longitude: 'string',
                                region: 'NY',
                                zip: '10017',
                                timezone: 'America/New_York'
                            },
                            properties: { pseudonym: 'Dr. Octopus' },
                            meta: { patch_properties: { append: { skus: ['92538', '40571'] } } },
                            email: 'sarah.mason@klaviyo-demo.com',
                            phone_number: '+15005550006',
                            external_id: '63f64a2b-c6bf-40c7-b81f-bed08162edbe',
                            anonymous_id: '01GDDKASAP8TKDDA2GRZDSVP4H',
                            first_name: 'Sarah',
                            last_name: 'Mason',
                            organization: 'Klaviyo',
                            title: 'Engineer',
                            image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg'
                        },
                        id: '01GDDKASAP8TKDDA2GRZDSVP4H'
                    }
                },
                custom_source: 'Homepage footer signup form'
            },
            relationships: { list: { data: { type: 'list', id: 'Y6nRLr' } } }
        }
    const options = {
        method: 'POST',
        headers: { revision: '2023-07-15', 'content-type': 'application/json' },
        body: JSON.stringify({ data })
    };
    fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=UfeDay`, options)
        .then(() => {
            setLoading(false)
            api.success({
                message: 'Success!',
                description:
                    "You're on board! Thank you for signing up for our pre-release email updates. We can't wait to share exciting news about our product with you. Stay tuned.",
            });
        })
        .catch(() => {
            setLoading(false)
        })
}

return (
    <>
        {contextHolder}
        <section id='prelaunch' className='pt-5'>
            <div className='container'>
                <h1 className='heading text-center fw-bold mx-lg-0 mx-4'>
                    Be among the first to see <br />
                    <span>Relationship Recharge in action</span>
                </h1>
                <p className='sub-heading text-center mx-lg-0 mx-4 mb-lg-0 mb-2'>Transform Your Relationship ❤️</p>
                <div className='d-flex justify-content-center pt-lg-5 pt-0'>
                    <div className='form shadow w-70 p-3 py-5 d-flex flex-column align-items-center my-5 position-relative'>
                        {/* <div className="img position-absolute top-0 translate-middle">
                                 <Image
                                    height={182}
                                    width={182}
                                    className='img-fluid'
                                    src='/images/butterfly.svg'
                                    alt=''
                                /> 
                            </div> */}
                        <p className='side-heading sm-hidden text-center fw-bold'>
                            Join us for Launch Day!
                        </p>
                        <p className='heading sm-visible text-center fw-bold'>
                            Join us for Launch Day!
                        </p>
                        <Form onFinish={handleSubmit} className='w-100 d-flex flex-column align-items-center'>
                            <Form.Item
                                name='email'
                                rules={[{
                                    required: true,
                                    type: 'email'
                                }]}
                            >
                                <Input className='py-3 px-2 my-lg-3 my-0' placeholder='Email Address' />
                            </Form.Item>
                            <Form.Item
                                name='full_name'
                                rules={[{
                                    required: true,
                                }]}
                            >
                                <Input className='py-3 px-2 my-lg-3 my-0' placeholder='Full Name' />
                            </Form.Item>
                            <p className='paragraph fw-light my-3'>
                                By submitting your details you hereby agree to our Terms & Conditions and Privacy Policy. You may always opt-out from our mailing lists in accordance with the Privacy Policy.
                            </p>
                            <Button loading={loading} htmlType='submit' className="botton-btn px-lg-5 mx-lg-0 mx-2 py-2 btn bg green text-white fw-bold mb-2">
                                GET EXCLUSIVE EARLY ACCESS
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default React.memo(PreLaunch)