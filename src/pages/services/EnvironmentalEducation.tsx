
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Users, Calendar, FileText, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnvironmentalEducation = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ewaste-green-100 text-ewaste-green-700 py-1 px-3 text-sm">
            Environmental Education
          </Badge>
          <h1 className="text-4xl font-bold mb-4">E-Waste Education & Awareness</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the impacts of electronic waste and how to become part of the solution
          </p>
        </div>

        {/* Educational Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Educational Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-ewaste-green-300 to-ewaste-green-500 flex items-center justify-center">
                  <Book className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">E-Waste Learning Hub</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive guides, articles, and resources about electronic waste and its environmental impact.
                  </p>
                  <Button variant="outline" className="w-full border-ewaste-green-500 text-ewaste-green-500 hover:bg-ewaste-green-50">
                    Explore Resources
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-ewaste-blue-300 to-ewaste-blue-500 flex items-center justify-center">
                  <Sparkle className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Interactive Workshops</h3>
                  <p className="text-gray-600 mb-4">
                    Virtual and in-person workshops on e-waste management, recycling, and sustainability practices.
                  </p>
                  <Button variant="outline" className="w-full border-ewaste-blue-500 text-ewaste-blue-500 hover:bg-ewaste-blue-50">
                    View Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-ewaste-earth-300 to-ewaste-earth-500 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Educational Materials</h3>
                  <p className="text-gray-600 mb-4">
                    Downloadable presentations, infographics, and lesson plans for schools and organizations.
                  </p>
                  <Button variant="outline" className="w-full border-ewaste-earth-500 text-ewaste-earth-500 hover:bg-ewaste-earth-50">
                    Download Materials
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="bg-ewaste-green-50 rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-ewaste-green-100 text-ewaste-green-600 text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                  GUIDE
                </div>
                <h3 className="font-bold text-lg mb-2">Understanding E-Waste: What It Is and Why It Matters</h3>
                <p className="text-gray-600 text-sm mb-4">
                  An introduction to electronic waste, its components, and the environmental challenges it presents.
                </p>
                <a href="#" className="text-ewaste-green-600 text-sm font-medium hover:underline">Read Article →</a>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-ewaste-blue-100 text-ewaste-blue-600 text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                  INSIGHTS
                </div>
                <h3 className="font-bold text-lg mb-2">The Hidden Environmental Cost of Your Electronic Devices</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A deep dive into the resource consumption and environmental impact throughout a device's lifecycle.
                </p>
                <a href="#" className="text-ewaste-blue-600 text-sm font-medium hover:underline">Read Article →</a>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-ewaste-earth-100 text-ewaste-earth-600 text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                  HOW-TO
                </div>
                <h3 className="font-bold text-lg mb-2">5 Simple Ways to Extend Your Electronics' Lifespan</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Practical tips to maintain your devices and reduce e-waste through longer product lifecycles.
                </p>
                <a href="#" className="text-ewaste-earth-600 text-sm font-medium hover:underline">Read Article →</a>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-ewaste-green-100 text-ewaste-green-600 text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                  CASE STUDY
                </div>
                <h3 className="font-bold text-lg mb-2">How Mumbai Schools Reduced E-Waste by 75% in One Year</h3>
                <p className="text-gray-600 text-sm mb-4">
                  A success story of educational institutions implementing comprehensive e-waste management programs.
                </p>
                <a href="#" className="text-ewaste-green-600 text-sm font-medium hover:underline">Read Article →</a>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-ewaste-blue-100 text-ewaste-blue-600 text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                  POLICY
                </div>
                <h3 className="font-bold text-lg mb-2">Understanding India's E-Waste Management Rules 2022</h3>
                <p className="text-gray-600 text-sm mb-4">
                  An overview of current regulations and responsibilities for producers, consumers, and recyclers.
                </p>
                <a href="#" className="text-ewaste-blue-600 text-sm font-medium hover:underline">Read Article →</a>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-ewaste-earth-100 text-ewaste-earth-600 text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                  INNOVATION
                </div>
                <h3 className="font-bold text-lg mb-2">The Future of E-Waste: Emerging Technologies and Solutions</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Exploring cutting-edge approaches to e-waste management and circular economy innovations.
                </p>
                <a href="#" className="text-ewaste-earth-600 text-sm font-medium hover:underline">Read Article →</a>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
              View All Articles
            </Button>
          </div>
        </div>

        {/* Educational Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Educational Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 bg-ewaste-green-100 flex items-center justify-center rounded-full mr-4">
                    <Users className="h-8 w-8 text-ewaste-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ewaste-green-700">School Programs</h3>
                    <p className="text-sm text-gray-500">For students and educators</p>
                  </div>
                </div>
                
                <ul className="mb-6 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-ewaste-green-100 text-ewaste-green-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-600">Age-appropriate curriculum for grades K-12</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-ewaste-green-100 text-ewaste-green-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-600">Hands-on workshops and e-waste collection drives</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-ewaste-green-100 text-ewaste-green-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-600">Teacher training and educational resources</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 bg-ewaste-blue-100 flex items-center justify-center rounded-full mr-4">
                    <Building className="h-8 w-8 text-ewaste-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ewaste-blue-700">Corporate Training</h3>
                    <p className="text-sm text-gray-500">For businesses and organizations</p>
                  </div>
                </div>
                
                <ul className="mb-6 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-ewaste-blue-100 text-ewaste-blue-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-600">Customized workshops for employee awareness</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-ewaste-blue-100 text-ewaste-blue-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-600">Sustainability and compliance training</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 rounded-full bg-ewaste-blue-100 text-ewaste-blue-700 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-600">Implementation support for workplace e-waste programs</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-ewaste-blue-500 hover:bg-ewaste-blue-600 text-white">
                  Request Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gray-100 rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="bg-ewaste-green-100 p-4 flex justify-between items-center">
                  <div className="bg-white rounded-lg p-2 text-center min-w-16">
                    <div className="text-xs text-ewaste-green-600 font-medium">JUN</div>
                    <div className="text-xl font-bold text-ewaste-green-700">15</div>
                  </div>
                  <div className="text-ewaste-green-700 text-sm font-bold">
                    Virtual Event
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">E-Waste Management Webinar</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>10:00 AM - 11:30 AM IST</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Join our experts for a comprehensive introduction to e-waste management best practices for homes and businesses.
                  </p>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="bg-ewaste-blue-100 p-4 flex justify-between items-center">
                  <div className="bg-white rounded-lg p-2 text-center min-w-16">
                    <div className="text-xs text-ewaste-blue-600 font-medium">JUN</div>
                    <div className="text-xl font-bold text-ewaste-blue-700">22</div>
                  </div>
                  <div className="text-ewaste-blue-700 text-sm font-bold">
                    Mumbai
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">School E-Waste Drive</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>9:00 AM - 4:00 PM IST</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    A collaborative e-waste collection event with local schools including educational workshops and activities.
                  </p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="bg-ewaste-earth-100 p-4 flex justify-between items-center">
                  <div className="bg-white rounded-lg p-2 text-center min-w-16">
                    <div className="text-xs text-ewaste-earth-600 font-medium">JUL</div>
                    <div className="text-xl font-bold text-ewaste-earth-700">05</div>
                  </div>
                  <div className="text-ewaste-earth-700 text-sm font-bold">
                    Delhi
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">Corporate Sustainability Workshop</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>10:00 AM - 3:00 PM IST</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    An interactive workshop for businesses on implementing effective e-waste management programs.
                  </p>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-ewaste-green-500 text-ewaste-green-500 hover:bg-ewaste-green-50">
              View All Events
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-ewaste-green-500 to-ewaste-blue-500 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Become an E-Waste Ambassador</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of environmental advocates and help spread awareness about responsible e-waste management in your community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-ewaste-green-600 hover:bg-gray-100">
              Join the Program
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

export default EnvironmentalEducation;
