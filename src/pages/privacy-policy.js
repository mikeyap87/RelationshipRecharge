import Head from 'next/head'
import Layout from '~/components/shared/Layout';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Relationship Recharge - Privacy Policy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className='py-5'>
          <div className='container'>
            <h1 className='heading fw-bold text-center'>
              Privacy Policy
            </h1>
            <p className='text-center'>
            Relationship Recharge takes your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, use our services, or interact with us. By using our services, you agree to the terms of this Privacy Policy.
            </p>
            <h3 className='my-2 sub-heading fw-bold'>
              Information Collection and Use
            </h3>
            <p>
              We collect personal information such as your name, email address, and payment information when you sign up for our services. We use this information to create and manage your account, process payments, and provide you with customer support.
              We may also collect non-personal information such as your IP address, browser type, and device information. We use this information to analyze how our services are being used and to improve our services.
            </p>
            <h3 className='my-2 sub-heading fw-bold'>
              Sharing of Information
            </h3>
            <p>
              We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.
              We may share non-personal information with third parties for analytics and advertising purposes.
            </p>
            <h3 className='my-2 sub-heading fw-bold'>
              Security
            </h3>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
            <h3 className='my-2 sub-heading fw-bold'>
              Your Choices
            </h3>
            <p>
              You may opt-out of receiving promotional emails from us by following the instructions in the email. You may also update or delete your account information at any time by logging into your account.
              Third-Party Websites
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read their privacy policies before providing any personal information.
              Changes to This Privacy Policy
              We may update this Privacy Policy from time to time. Any changes will be posted on our website with a revised effective date. Your continued use of our services after the effective date constitutes your agreement to the updated Privacy Policy.
            </p>
            <h3 className='my-2 sub-heading fw-bold'>
              Contact Us
            </h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at support@krelationshiprecharge.ai.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
