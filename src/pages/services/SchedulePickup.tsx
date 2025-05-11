
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import SchedulePickupForm from '@/components/pickup/SchedulePickupForm';
import MapLocation from '@/components/pickup/MapLocation';

const SchedulePickup = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Schedule E-Waste Pickup</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Let us know when and where to collect your electronic waste for proper recycling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SchedulePickupForm />
          </div>
          <div>
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-4">Pickup Locations</h2>
              <MapLocation />
              
              <div className="mt-8 bg-ewaste-green-50 rounded-lg p-6 border border-ewaste-green-200">
                <h3 className="text-lg font-medium mb-3">What to Expect</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Our team will arrive at your location during the selected time slot</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Please have your e-waste items ready for collection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You'll receive points based on the type and quantity of e-waste</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>A confirmation email will be sent with your pickup details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SchedulePickup;
