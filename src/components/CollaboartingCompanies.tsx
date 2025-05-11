
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Building, Shield, Award } from 'lucide-react';

const CollaboratingCompanies = () => {
  const corporatePartners = [
    {
      id: 1,
      name: "EcoTech Recycling Ltd.",
      type: "Corporate",
      description: "Leading electronics recycling company with state-of-the-art facilities",
      icon: <Factory className="h-10 w-10 text-ewaste-green-500" />
    },
    {
      id: 2,
      name: "GreenCircuit Solutions",
      type: "Corporate",
      description: "Specializes in PCB and semiconductor recycling",
      icon: <Building className="h-10 w-10 text-ewaste-blue-500" />
    },
    {
      id: 3,
      name: "Mumbai Municipal Corporation",
      type: "Government",
      description: "Local government body supporting e-waste management",
      icon: <Shield className="h-10 w-10 text-ewaste-earth-500" />
    },
    {
      id: 4,
      name: "Delhi Waste Management Authority",
      type: "Government",
      description: "Regional authority for waste management and recycling",
      icon: <Shield className="h-10 w-10 text-ewaste-earth-500" />
    },
    {
      id: 5,
      name: "Bangalore Clean Tech Initiative",
      type: "Non-Profit",
      description: "Non-profit organization promoting sustainable e-waste solutions",
      icon: <Award className="h-10 w-10 text-ewaste-green-500" />
    },
    {
      id: 6,
      name: "Digital Disposals Inc.",
      type: "Corporate",
      description: "Secure data destruction and electronics recycling",
      icon: <Building className="h-10 w-10 text-ewaste-blue-500" />
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Recycling Partners</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We collaborate with leading corporations, municipal authorities, and organizations across India
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {corporatePartners.map(partner => (
          <Card key={partner.id} className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <div className="mr-4">
                  {partner.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{partner.name}</CardTitle>
                  <CardDescription>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      partner.type === 'Government' ? 'bg-ewaste-earth-100 text-ewaste-earth-700' : 
                      partner.type === 'Non-Profit' ? 'bg-ewaste-green-100 text-ewaste-green-700' :
                      'bg-ewaste-blue-100 text-ewaste-blue-700'
                    }`}>
                      {partner.type}
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{partner.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <p className="text-gray-600">
          Want to become a recycling partner? <a href="/contact" className="text-ewaste-green-500 hover:underline">Contact us</a>
        </p>
      </div>
    </div>
  );
};

export default CollaboratingCompanies;
