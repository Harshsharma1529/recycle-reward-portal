
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, FileText, Database, HardDrive, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecureDisposal = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ewaste-blue-100 text-ewaste-blue-700 py-1 px-3 text-sm">
            Secure Disposal
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Secure Data Destruction & Device Disposal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your sensitive information with our certified data destruction and secure e-waste disposal services
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-ewaste-blue-200">
            <CardContent className="p-8 text-center">
              <div className="bg-ewaste-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-ewaste-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Data Destruction</h3>
              <p className="text-gray-600">
                Our data destruction processes comply with international standards to ensure complete and irreversible data removal
              </p>
            </CardContent>
          </Card>

          <Card className="border-ewaste-blue-200">
            <CardContent className="p-8 text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-ewaste-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Chain of Custody</h3>
              <p className="text-gray-600">
                Track your devices throughout the disposal process with our secure chain of custody documentation
              </p>
            </CardContent>
          </Card>

          <Card className="border-ewaste-blue-200">
            <CardContent className="p-8 text-center">
              <div className="bg-ewaste-earth-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Destruction Certificates</h3>
              <p className="text-gray-600">
                Receive detailed certificates of destruction for compliance with data protection regulations
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="bg-ewaste-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Secure Disposal Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 h-full border-l-2 border-dashed border-ewaste-blue-300"></div>
              
              <div className="space-y-12">
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      1
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-blue-700">Collection & Inventory</h3>
                    <p className="mt-2 text-gray-600">
                      We collect your devices and create a detailed inventory with device types, serial numbers,
                      and storage capacities, ensuring accountability for each item.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      2
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-blue-700">Data Sanitization</h3>
                    <p className="mt-2 text-gray-600">
                      For devices that can be reused, we perform DOD-compliant data wiping with multiple overwrites
                      to ensure all data is completely removed.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      3
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-blue-700">Physical Destruction</h3>
                    <p className="mt-2 text-gray-600">
                      For drives that cannot be sanitized or when requested, we perform physical destruction 
                      using industrial shredders or degaussers to make data recovery impossible.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      4
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-blue-700">Recycling & Disposal</h3>
                    <p className="mt-2 text-gray-600">
                      After data destruction, we responsibly recycle the materials according to environmental regulations,
                      ensuring zero landfill disposal.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      5
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-blue-700">Documentation & Certification</h3>
                    <p className="mt-2 text-gray-600">
                      We provide comprehensive destruction certificates and detailed reports for your records
                      and regulatory compliance needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Devices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Supported Devices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
              <HardDrive className="h-8 w-8 text-ewaste-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Hard Drives</h3>
                <p className="text-gray-600 text-sm">
                  HDD, SSD, SATA, IDE, and external drives from laptops, desktops, and servers
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
              <Server className="h-8 w-8 text-ewaste-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Servers & Storage Arrays</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise servers, RAID arrays, NAS devices, and storage systems
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
              <Database className="h-8 w-8 text-ewaste-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Tape Media</h3>
                <p className="text-gray-600 text-sm">
                  LTO, DLT, DAT, and other backup tape formats with secure destruction
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
              <Shield className="h-8 w-8 text-ewaste-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Mobile Devices</h3>
                <p className="text-gray-600 text-sm">
                  Smartphones, tablets, PDAs, and other mobile devices with storage
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
              <Lock className="h-8 w-8 text-ewaste-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Removable Media</h3>
                <p className="text-gray-600 text-sm">
                  USB drives, memory cards, optical discs (CD/DVD/Blu-ray)
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-start">
              <FileText className="h-8 w-8 text-ewaste-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Document Storage</h3>
                <p className="text-gray-600 text-sm">
                  Physical document destruction services also available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-ewaste-blue-600 to-ewaste-green-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Sensitive Information Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a business upgrading your IT infrastructure or an individual concerned about data privacy,
            our secure disposal services provide peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-ewaste-blue-600 hover:bg-gray-100">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SecureDisposal;
