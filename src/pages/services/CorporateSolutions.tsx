
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, FileText, ShieldCheck, Recycle, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CorporateSolutions = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ewaste-earth-100 text-ewaste-earth-700 py-1 px-3 text-sm">
            Corporate Solutions
          </Badge>
          <h1 className="text-4xl font-bold mb-4">E-Waste Management for Businesses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive e-waste recycling and data destruction solutions for organizations of all sizes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-ewaste-earth-200 hover:shadow-md transition-all">
            <CardContent className="p-8">
              <div className="bg-ewaste-earth-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bulk E-Waste Collection</h3>
              <p className="text-gray-600 mb-4">
                Efficient collection and recycling of large volumes of electronic waste from your facility.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  On-site collection service
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Specialized containers provided
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Flexible scheduling options
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-ewaste-earth-200 hover:shadow-md transition-all">
            <CardContent className="p-8">
              <div className="bg-ewaste-earth-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Data Destruction</h3>
              <p className="text-gray-600 mb-4">
                Industry-leading data sanitization and destruction services with complete documentation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  DOD-compliant data wiping
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Physical destruction available
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Destruction certificates provided
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-ewaste-earth-200 hover:shadow-md transition-all">
            <CardContent className="p-8">
              <div className="bg-ewaste-earth-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive documentation and reporting to meet regulatory requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Detailed chain of custody records
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Environmental impact reports
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Regulatory compliance support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-ewaste-earth-200 hover:shadow-md transition-all">
            <CardContent className="p-8">
              <div className="bg-ewaste-earth-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <Recycle className="h-8 w-8 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">IT Asset Disposition</h3>
              <p className="text-gray-600 mb-4">
                End-to-end management of retiring IT assets with value recovery options.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Asset tracking and inventory
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Refurbishment and resale options
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Residual value assessment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-ewaste-earth-200 hover:shadow-md transition-all">
            <CardContent className="p-8">
              <div className="bg-ewaste-earth-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Employee Programs</h3>
              <p className="text-gray-600 mb-4">
                Engage your employees in sustainability initiatives through e-waste collection events.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  On-site collection drives
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Educational workshops
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Incentive programs
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-ewaste-earth-200 hover:shadow-md transition-all">
            <CardContent className="p-8">
              <div className="bg-ewaste-earth-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability Metrics</h3>
              <p className="text-gray-600 mb-4">
                Track and report on your organization's environmental impact and progress.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Carbon footprint reduction
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  Resource conservation metrics
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-ewaste-earth-500 mr-2"></div>
                  CSR reporting integration
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Industries We Serve */}
        <div className="bg-ewaste-earth-50 rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-2">🏢</div>
              <h3 className="font-bold">Corporate Offices</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-2">🏥</div>
              <h3 className="font-bold">Healthcare</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-2">🏫</div>
              <h3 className="font-bold">Education</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-2">🏦</div>
              <h3 className="font-bold">Financial Services</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-2">🏭</div>
              <h3 className="font-bold">Manufacturing</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-2">🏪</div>
              <h3 className="font-bold">Retail</h3>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Corporate Solutions?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-ewaste-earth-700 flex items-center">
                <ShieldCheck className="mr-2 h-6 w-6" />
                Compliance & Security
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Full compliance with E-Waste Management Rules, 2016</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>ISO 27001 certified data destruction processes</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Comprehensive documentation and certificates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-ewaste-earth-700 flex items-center">
                <Recycle className="mr-2 h-6 w-6" />
                Sustainability Impact
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Zero landfill policy ensures responsible recycling</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Detailed environmental impact reports for CSR initiatives</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Support for corporate sustainability goals and reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-ewaste-earth-700 flex items-center">
                <Building className="mr-2 h-6 w-6" />
                Operational Excellence
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Professional logistics and inventory management</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Flexible scheduling to minimize business disruption</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Dedicated account management and support</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-ewaste-earth-700 flex items-center">
                <Users className="mr-2 h-6 w-6" />
                Experience & Trust
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Trusted by 500+ corporate clients across India</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>Team of certified e-waste management professionals</span>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-ewaste-earth-100 text-ewaste-earth-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span>State-of-the-art facilities and equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-100 rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Corporate Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-ewaste-earth-200 h-12 w-12 rounded-full flex items-center justify-center font-bold text-ewaste-earth-700">
                  TC
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Tata Consultancy Services</h4>
                  <p className="text-sm text-gray-500">IT Services</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Their corporate e-waste management program has been crucial in helping us meet our sustainability goals. The detailed reporting and secure data destruction give us complete peace of mind."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-ewaste-blue-200 h-12 w-12 rounded-full flex items-center justify-center font-bold text-ewaste-blue-700">
                  HT
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">HDFC Bank</h4>
                  <p className="text-sm text-gray-500">Banking</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "As a financial institution, data security is paramount. Their certified data destruction services and comprehensive documentation have exceeded our expectations."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-ewaste-green-200 h-12 w-12 rounded-full flex items-center justify-center font-bold text-ewaste-green-700">
                  AB
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Apollo Hospitals</h4>
                  <p className="text-sm text-gray-500">Healthcare</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "The team's professionalism and thorough approach to e-waste management have made them an invaluable partner in our organization's environmental initiatives."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-ewaste-earth-600 to-ewaste-green-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement Sustainable E-Waste Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our corporate solutions team to discuss how we can help your organization manage electronic waste responsibly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-ewaste-earth-600 hover:bg-gray-100">
              Request a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Corporate Brochure
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CorporateSolutions;
