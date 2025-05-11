
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileText, Video, PieChart, Download, BookOpen, Link as LinkIcon } from 'lucide-react';

const EducationalResources = () => {
  const articles = [
    {
      id: 1,
      title: "The Growing Problem of E-Waste",
      description: "Learn about the environmental impact of electronic waste and why proper recycling is crucial.",
      category: "Environmental Impact",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Hazardous Materials in Electronics",
      description: "Understand what makes e-waste dangerous and how proper disposal prevents environmental contamination.",
      category: "Health & Safety",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "The Circular Economy of Electronics",
      description: "How recycling electronics contributes to a more sustainable economic model.",
      category: "Sustainability",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541976620977-877e140b24c8?q=80&w=300&auto=format&fit=crop",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Inside an E-Waste Recycling Facility",
      description: "Take a virtual tour of a state-of-the-art electronics recycling facility.",
      duration: "10:23",
      thumbnail: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "How to Prepare Your Electronics for Recycling",
      description: "Step-by-step guide to safely prepare your e-waste before recycling.",
      duration: "7:45",
      thumbnail: "https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "The Journey of a Recycled Smartphone",
      description: "Follow the transformation of an old smartphone into new resources.",
      duration: "12:18",
      thumbnail: "https://images.unsplash.com/photo-1585998790352-d63202dead46?q=80&w=300&auto=format&fit=crop",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "E-Waste Management Guide",
      description: "Comprehensive PDF guide for responsible electronic waste disposal.",
      type: "PDF",
      size: "2.4 MB",
      icon: <FileText className="h-10 w-10 text-ewaste-green-500" />,
    },
    {
      id: 2,
      title: "Electronics Recycling Infographic",
      description: "Visual representation of the recycling process and environmental benefits.",
      type: "Image",
      size: "1.1 MB",
      icon: <PieChart className="h-10 w-10 text-ewaste-blue-500" />,
    },
    {
      id: 3,
      title: "E-Waste Facts and Statistics",
      description: "Current data and projections about electronic waste globally.",
      type: "PDF",
      size: "3.7 MB",
      icon: <FileText className="h-10 w-10 text-ewaste-green-500" />,
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Educational Resources</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Learn more about e-waste recycling and its environmental impact
          </p>
        </div>

        <Tabs defaultValue="articles" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles">
              <BookOpen className="mr-2 h-4 w-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="videos">
              <Video className="mr-2 h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="resources">
              <Download className="mr-2 h-4 w-4" />
              Downloads
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-ewaste-green-600">{article.category}</span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500 mb-4">{article.description}</p>
                    <Button variant="link" className="p-0 text-ewaste-blue-500 hover:text-ewaste-blue-600">
                      Read Article <LinkIcon className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="h-12 w-12 bg-ewaste-green-500 rounded-full flex items-center justify-center">
                        <div className="ml-1 border-t-8 border-b-8 border-b-transparent border-t-transparent border-l-12 border-l-white"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500 mb-4">{video.description}</p>
                    <Button variant="outline" className="w-full">
                      <Video className="mr-2 h-4 w-4" /> Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-lg text-center">{resource.title}</CardTitle>
                    <CardDescription className="text-center">{resource.type} • {resource.size}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4 text-center">{resource.description}</p>
                    <Button className="w-full bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Join Our Environmental Workshops</CardTitle>
            <CardDescription>
              Learn more about e-waste recycling through our interactive workshops
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-ewaste-green-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-ewaste-green-700">Next Online Workshop:</h3>
                <h4 className="text-xl font-bold mt-2">E-Waste Management at Home and Office</h4>
                <p className="mt-2 text-gray-600">June 15, 2023 • 2:00 PM - 3:30 PM</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Video className="h-4 w-4 mr-1" />
                  <span>Online via Zoom • Free Registration</span>
                </div>
              </div>
              <Button className="mt-4 md:mt-0 bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                Register Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default EducationalResources;
