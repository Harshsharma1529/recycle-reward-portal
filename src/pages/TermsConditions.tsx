
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';

const TermsConditions = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">
            Last Updated: May 11, 2023
          </p>
        </div>

        <div className="prose prose-lg prose-green mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              These Terms and Conditions ("Terms") govern your use of the E-Waste Management website 
              and services. By accessing our website or using our services, you agree to these Terms.
            </p>
            <p>
              Please read these Terms carefully before using our services. If you do not agree to these Terms, 
              please do not use our website or services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
            <h3 className="text-xl font-bold mb-2">Eligibility</h3>
            <p>
              You must be at least 18 years old to use our services. By using our services, you represent and 
              warrant that you meet this requirement and have the legal capacity to enter into these Terms.
            </p>

            <h3 className="text-xl font-bold mb-2 mt-4">User Account</h3>
            <p>
              Some services require you to create an account. You are responsible for maintaining the 
              confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to provide accurate and complete information when creating your account and to update 
              your information as necessary to keep it accurate and complete.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">E-Waste Collection Services</h2>
            <h3 className="text-xl font-bold mb-2">Scheduling Pickups</h3>
            <p>
              When scheduling an e-waste pickup, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information about the items to be collected</li>
              <li>Be present or have an authorized representative at the pickup location during the scheduled time</li>
              <li>Ensure the items are accessible and ready for collection</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 mt-4">Cancellations and Rescheduling</h3>
            <p>
              You may cancel or reschedule a pickup at least 24 hours before the scheduled time without penalty. 
              Late cancellations or no-shows may result in service restrictions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Rewards Program</h2>
            <p>
              Our rewards program is subject to the following terms:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Points are earned based on the type and quantity of e-waste recycled</li>
              <li>Points have no cash value and cannot be exchanged for cash</li>
              <li>Points expire 12 months after they are earned</li>
              <li>We reserve the right to modify, suspend, or terminate the rewards program at any time</li>
              <li>Fraud or misuse of the rewards program may result in account termination and forfeiture of points</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p>
              All content on our website, including but not limited to text, images, graphics, logos, and software, 
              is the property of E-Waste Management or its licensors and is protected by copyright and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on our website 
              without our express written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, E-Waste Management shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising out of or in connection with your 
              use of our services.
            </p>
            <p>
              Our liability for any claim arising out of or related to these Terms shall not exceed the amount 
              paid by you, if any, for the services giving rise to such claim.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold E-Waste Management and its officers, directors, employees, and agents 
              harmless from any claims, damages, losses, liabilities, costs, and expenses, including attorney's fees, 
              arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any material changes 
              by posting the new Terms on our website and updating the "Last Updated" date.
            </p>
            <p>
              Your continued use of our services after such changes indicates your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without 
              regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-none pl-6 mb-4">
              <li>Email: legal@ewastemanagement.in</li>
              <li>Phone: +91 22 1234 5678</li>
              <li>Address: 123 Eco Street, Green Park, Mumbai, Maharashtra 400001, India</li>
            </ul>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default TermsConditions;
