import React, { useState } from 'react'
import { Form, Input, notification, Button } from 'antd';
import Image from 'next/image'

function JoinUs() {
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
                            meta: { patch_properties: { append: { skus: ['92538', '40571'] } } },
                            email: values.email,
                            first_name: values.full_name
                        },
                        id: '01GDDKASAP8TKDDA2GRZDSVP4H'
                    }
                },
                custom_source: 'Prelaunch Sign up!'
            },
            relationships: { list: { data: { type: 'list', id: 'TkiPme' } } }
        }
        const options = {
            method: 'POST',
            headers: { revision: '2023-07-15', 'content-type': 'application/json' },
            body: JSON.stringify({ data })
        };
        // Send data to Klaviyo API using Axios GET request with base64-encoded JSON data as query parameter
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
            <section id='join_us' className='py-lg-5 py-3'>
                <div className='container py-lg-3 pt-lg-5 py-1'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='my-3 d-flex align-items-center'>
                            <h1 className='fw-bold heading text-center mt-4 mx-lg-0 mx-5'>
                                Join us in igniting the Flames of Knowledge!
                            </h1>
                        </div>
                        <p className='paragraph my-4'>
                            Together, let us ignite the flames of knowledge, and watch as the sparks of wisdom and creativity take flight. We invite you to join us in our quest to create a world where the next generation of innovators, dreamers, and leaders is nurtured and inspired – a world where the pursuit of knowledge knows no bounds.
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-6'>
                            <Image
                                width={300}
                                height={300}
                                className='img-fluid'
                                src='/images/relation-bot.svg'
                                alt=''
                            />
                        </div>
                        <div className='col-lg-3 col-6 sm-visible'>
                            <Image
                                width={300}
                                height={300}
                                className='img-fluid'
                                src='/images/join-us-1.svg'
                                alt=''
                            />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <Form onFinish={handleSubmit}>
                                <div className='content d-flex flex-column align-items-center my-3'>
                                    <Form.Item
                                        rules={
                                            [{
                                                required: true,
                                                message: 'Email is a required field!',
                                            },
                                            {
                                                type: 'email',
                                                message: 'Email is not valid!',
                                            }
                                            ]}
                                        className='d-flex justify-content-center w-100'
                                        name={'email'}
                                    >
                                        <Input className='py-3 bottom px-3 w-100' placeholder='Email...' />
                                    </Form.Item>
                                </div>
                                <div className='footer d-flex justify-content-center my-2 px-lg-5 px-1'>
                                    <Button loading={loading} className="bottom botton-btn btn bg green text-white px-3 fw-bold position-relative" htmlType="submit">
                                        SIGN UP FOR FREE TODAY!
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        <div className='col-lg-3 col-12 sm-hidden'>
                            <Image
                                width={457}
                                height={459}
                                className='img-fluid'
                                src='/images/join-us-1.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(JoinUs)