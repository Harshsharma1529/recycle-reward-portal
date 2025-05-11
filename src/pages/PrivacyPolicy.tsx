
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';

const PrivacyPolicy = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Last Updated: May 11, 2023
          </p>
        </div>

        <div className="prose prose-lg prose-green mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              E-Waste Management ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our e-waste management services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
              please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-bold mb-2">Personal Data</h3>
            <p>
              We may collect personal identification information from you, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">Usage Data</h3>
            <p>
              We may also collect information on how the website is accessed and used. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your computer's IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Click patterns</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and maintaining our service</li>
              <li>Processing pickups and recycling requests</li>
              <li>Managing your account and providing customer support</li>
              <li>Sending you service updates and notifications</li>
              <li>Administering the rewards program</li>
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Preventing fraudulent activities</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who assist us in operating our business</li>
              <li>Recycling partners who process the e-waste you provide</li>
              <li>Law enforcement agencies when required by law</li>
              <li>Business partners for marketing purposes (with your consent)</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no 
              method of transmission over the Internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your data:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@ewastemanagement.in.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none pl-6 mb-4">
              <li>Email: privacy@ewastemanagement.in</li>
              <li>Phone: +91 22 1234 5678</li>
              <li>Address: 123 Eco Street, Green Park, Mumbai, Maharashtra 400001, India</li>
            </ul>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
