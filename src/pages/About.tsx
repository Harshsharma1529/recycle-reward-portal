
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Badge } from '@/components/ui/badge';
import CollaboratingCompanies from '@/components/CollaboartingCompanies';
import { Recycle, Award, Shield, Building } from 'lucide-react';

const About = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ewaste-green-100 text-ewaste-green-700 py-1 px-3 text-sm">About Us</Badge>
          <h1 className="text-4xl font-bold mb-4">Revolutionizing E-Waste Management in India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to create a sustainable future by transforming how electronic waste is handled across the country.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-ewaste-green-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-ewaste-green-100 p-3 rounded-full mr-4">
                <Recycle className="h-8 w-8 text-ewaste-green-500" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              To create a zero e-waste society where electronic products are reused, recycled, and disposed of properly, minimizing environmental impact and maximizing resource recovery.
            </p>
          </div>

          <div className="bg-ewaste-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-ewaste-blue-100 p-3 rounded-full mr-4">
                <Award className="h-8 w-8 text-ewaste-blue-500" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-700">
              To provide accessible, efficient, and environmentally responsible e-waste management solutions that empower individuals and organizations to contribute to a sustainable future.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="w-24 h-1 bg-ewaste-green-500 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
            <p>
              E-Waste Management was founded in 2021 by a group of environmental engineers and tech enthusiasts who saw the growing problem of electronic waste in India. With the rapid increase in technological adoption, we recognized the urgent need for responsible disposal solutions.
            </p>
            <p>
              Starting with just a few collection centers in major cities, we quickly expanded our operations across the country, developing partnerships with recycling facilities, local governments, and corporate entities. Our innovative approach to incentivizing recycling through rewards has helped us engage thousands of users.
            </p>
            <p>
              Today, we're proud to be one of India's leading e-waste management platforms, having processed over 500 tonnes of electronic waste and awarded millions of reward points to our users. Our commitment to environmental sustainability and technological innovation continues to drive our mission forward.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-ewaste-green-500 to-ewaste-blue-500 text-white rounded-xl p-10 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Impact</h2>
            <p className="text-white/80 mt-2">The difference we've made together</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Tonnes of E-Waste Recycled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-lg">Registered Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Recycling Partners</div>
            </div>
          </div>
        </div>

        {/* Collaborating Companies */}
        <CollaboratingCompanies />
      </div>
    </AppLayout>
  );
};

export default About;
