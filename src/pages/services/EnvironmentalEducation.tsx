
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Video, FileText, Link, Download, FileQuestion, MapPin } from 'lucide-react';

const EnvironmentalEducation = () => {
  const educationalResources = {
    articles: [
      {
        title: "The Growing E-Waste Crisis in India",
        excerpt: "India is one of the largest producers of electronic waste, generating over 3 million tonnes annually...",
        date: "May 10, 2023",
        readTime: "7 min read",
        category: "E-Waste Crisis"
      },
      {
        title: "Understanding the Environmental Impact of Improper E-Waste Disposal",
        excerpt: "When e-waste is not properly recycled, it can release harmful toxins into the soil and water...",
        date: "March 22, 2023",
        readTime: "5 min read",
        category: "Environmental Impact"
      },
      {
        title: "Reducing Your Electronic Carbon Footprint",
        excerpt: "Simple steps to minimize your environmental impact through responsible electronic usage...",
        date: "February 15, 2023",
        readTime: "4 min read",
        category: "Sustainable Living"
      },
    ],
    videos: [
      {
        title: "Inside an E-Waste Recycling Facility",
        duration: "12:34",
        thumbnail: "ewaste-facility.jpg",
        views: "25K"
      },
      {
        title: "The Lifecycle of a Smartphone",
        duration: "8:45",
        thumbnail: "smartphone-lifecycle.jpg",
        views: "18K"
      },
      {
        title: "How to Safely Prepare Electronics for Recycling",
        duration: "5:23",
        thumbnail: "prepare-recycling.jpg",
        views: "12K"
      },
    ],
    guides: [
      {
        title: "Complete Guide to E-Waste Management",
        pages: 24,
        format: "PDF"
      },
      {
        title: "How to Identify Recyclable Electronic Components",
        pages: 16,
        format: "PDF"
      },
      {
        title: "Safety Guidelines for Handling E-Waste",
        pages: 12,
        format: "PDF"
      },
    ]
  };

  const upcomingEvents = [
    {
      title: "E-Waste Awareness Workshop",
      date: "June 15, 2023",
      location: "Mumbai Community Center",
      type: "Workshop"
    },
    {
      title: "Electronics Recycling Drive",
      date: "July 8, 2023",
      location: "Delhi University Campus",
      type: "Collection Drive"
    },
    {
      title: "Green Tech Innovation Summit",
      date: "August 22-23, 2023",
      location: "Bangalore International Convention Center",
      type: "Conference"
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Environmental Education</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn about the importance of proper e-waste management and how you can contribute to a more sustainable future with our educational resources.
          </p>
        </div>

        <Tabs defaultValue="resources" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resources">Educational Resources</TabsTrigger>
            <TabsTrigger value="programs">School Programs</TabsTrigger>
            <TabsTrigger value="events">Events & Workshops</TabsTrigger>
          </TabsList>

          <TabsContent value="resources" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Materials</CardTitle>
                <CardDescription>
                  Access free educational content about e-waste management and sustainability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Articles Section */}
                  <div>
                    <h3 className="text-lg font-medium flex items-center mb-4">
                      <FileText className="mr-2 h-5 w-5 text-ewaste-green-500" />
                      Featured Articles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {educationalResources.articles.map((article, idx) => (
                        <Card key={idx} className="hover:shadow-md transition-all">
                          <CardHeader className="pb-2">
                            <div className="text-xs text-ewaste-blue-600 font-medium mb-1">{article.category}</div>
                            <CardTitle className="text-md">{article.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between text-xs text-gray-500">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Videos Section */}
                  <div>
                    <h3 className="text-lg font-medium flex items-center mb-4">
                      <Video className="mr-2 h-5 w-5 text-ewaste-green-500" />
                      Educational Videos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {educationalResources.videos.map((video, idx) => (
                        <div key={idx} className="group cursor-pointer">
                          <div className="bg-gray-100 rounded-md aspect-video relative mb-2 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-colors">
                              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                                <div className="h-0 w-0 border-t-8 border-t-transparent border-l-14 border-l-ewaste-green-600 border-b-8 border-b-transparent ml-1"></div>
                              </div>
                            </div>
                          </div>
                          <h4 className="font-medium text-sm">{video.title}</h4>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{video.duration}</span>
                            <span>{video.views} views</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Downloadable Guides */}
                  <div>
                    <h3 className="text-lg font-medium flex items-center mb-4">
                      <BookOpen className="mr-2 h-5 w-5 text-ewaste-green-500" />
                      Downloadable Guides
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {educationalResources.guides.map((guide, idx) => (
                        <Card key={idx} className="hover:shadow-md transition-all">
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium mb-1">{guide.title}</h4>
                                <p className="text-sm text-gray-500">{guide.pages} pages • {guide.format}</p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-1" /> Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>School & Community Programs</CardTitle>
                <CardDescription>
                  Educational initiatives for schools and communities to promote e-waste awareness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">School Programs</h3>
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">E-Waste Heroes</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            An interactive program for students to learn about e-waste management through games, activities, and practical demonstrations.
                          </p>
                          <div className="text-sm">
                            <div className="flex items-center">
                              <FileQuestion className="h-4 w-4 mr-2 text-ewaste-green-500" />
                              <span>Age group: 10-15 years</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-2 text-ewaste-green-500" />
                              <span>Available in: All major cities</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">Green Technology Workshop</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Hands-on workshops where high school students learn to repurpose electronic components into innovative projects.
                          </p>
                          <div className="text-sm">
                            <div className="flex items-center">
                              <FileQuestion className="h-4 w-4 mr-2 text-ewaste-green-500" />
                              <span>Age group: 15-18 years</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-2 text-ewaste-green-500" />
                              <span>Available in: Select cities</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Community Initiatives</h3>
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">Community Recycling Champions</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Train community members to become e-waste recycling advocates and organize local collection drives.
                          </p>
                          <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                            Register Your Community
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">Corporate Sustainability Training</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Educational programs tailored for businesses to implement sustainable e-waste management practices.
                          </p>
                          <Button className="bg-ewaste-blue-500 hover:bg-ewaste-blue-600 text-white">
                            Request Information
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events & Workshops</CardTitle>
                <CardDescription>
                  Join us in person to learn more about e-waste management and sustainable practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between">
                          <div>
                            <span className="inline-block px-2 py-1 bg-ewaste-green-100 text-ewaste-green-700 rounded text-xs font-medium mb-2">
                              {event.type}
                            </span>
                            <h3 className="text-lg font-medium">{event.title}</h3>
                            <div className="text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                              Register
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="text-center pt-4">
                    <Button variant="outline" className="mx-auto">
                      View All Events
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default EnvironmentalEducation;
