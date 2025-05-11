
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond to your inquiry as soon as possible.",
    });
  };

  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help with any questions about our e-waste management services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ewaste-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-ewaste-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      123 Eco Street, Green Park<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ewaste-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-ewaste-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Support</h3>
                    <p className="text-gray-600">
                      Customer Service: +91 22 1234 5678<br />
                      Pickup Scheduling: +91 22 8765 4321<br />
                      Corporate Inquiries: +91 22 2468 1357
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ewaste-earth-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-ewaste-earth-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@ewastemanagement.in<br />
                      Customer Support: support@ewastemanagement.in<br />
                      Corporate Solutions: corporate@ewastemanagement.in
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ewaste-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-ewaste-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="mr-2 text-ewaste-green-500" />
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="border-ewaste-green-200 focus:border-ewaste-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="border-ewaste-green-200 focus:border-ewaste-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select>
                      <SelectTrigger className="border-ewaste-green-200 focus:border-ewaste-green-500">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="pickup">Pickup Service</SelectItem>
                        <SelectItem value="rewards">Rewards Program</SelectItem>
                        <SelectItem value="corporate">Corporate Solutions</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please type your message here..." 
                      required 
                      rows={6}
                      className="border-ewaste-green-200 focus:border-ewaste-green-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white font-medium py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 h-80 bg-gray-200 rounded-lg overflow-hidden">
          {/* This would be replaced with an actual map component */}
          <div className="h-full w-full bg-[#E8F5E9] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ewaste-green-50 opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <MapPin className="h-10 w-10 mx-auto text-ewaste-green-600 animate-bounce" />
                <div className="bg-white px-4 py-2 rounded-lg shadow-md mt-2">
                  <p className="font-bold">E-Waste Management Headquarters</p>
                  <p className="text-sm">123 Eco Street, Mumbai</p>
                </div>
              </div>
            </div>
            
            {/* Map grid lines for effect */}
            <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
              {Array.from({ length: 12 * 6 }).map((_, i) => (
                <div key={i} className="border border-ewaste-green-200/30"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
