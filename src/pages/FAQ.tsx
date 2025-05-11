
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is e-waste?",
          answer: "E-waste or electronic waste refers to discarded electronic devices such as computers, televisions, smartphones, and home appliances that are no longer wanted, working, or repairable."
        },
        {
          question: "Why is e-waste recycling important?",
          answer: "E-waste contains hazardous materials like lead, mercury, and cadmium that can harm the environment and human health if not disposed of properly. Recycling e-waste helps recover valuable materials, reduce pollution, and conserve natural resources."
        },
        {
          question: "How does your e-waste collection service work?",
          answer: "Our service allows you to schedule a pickup for your e-waste items. We'll come to your location, collect the items, ensure they're properly recycled, and reward you with points that can be redeemed for various benefits."
        }
      ]
    },
    {
      category: "Scheduling & Pickup",
      questions: [
        {
          question: "Which cities do you operate in?",
          answer: "We currently operate in over 100 cities across India, including all major metropolitan areas like Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Kolkata, as well as many tier 2 and tier 3 cities."
        },
        {
          question: "Is there a minimum amount of e-waste required for pickup?",
          answer: "While there's no strict minimum, we recommend accumulating at least a small box of e-waste items before scheduling a pickup for efficiency. For very small items like a single phone or battery, we encourage using our drop-off locations."
        },
        {
          question: "How much does the pickup service cost?",
          answer: "Our basic pickup service is free of charge. We believe that making e-waste recycling accessible is essential for environmental protection. However, for specialized services like secure data destruction, there may be additional fees."
        }
      ]
    },
    {
      category: "Rewards Program",
      questions: [
        {
          question: "How do I earn points through the rewards program?",
          answer: "You earn points based on the type and quantity of e-waste you recycle through our platform. Different items have different point values, with larger items generally earning more points."
        },
        {
          question: "What can I redeem my points for?",
          answer: "Points can be redeemed for a variety of rewards including gift cards from popular retailers in India, discounts on eco-friendly products, and environmental initiatives like tree planting."
        },
        {
          question: "Do points expire?",
          answer: "Points are valid for 12 months from the date they are earned. We send notifications before points are due to expire so you have time to redeem them."
        }
      ]
    },
    {
      category: "Data Security",
      questions: [
        {
          question: "How do you ensure data security when recycling devices?",
          answer: "We follow industry-standard data destruction protocols for all devices that may contain personal information. This includes secure wiping of data storage components and physical destruction when necessary."
        },
        {
          question: "Can I get a certificate of data destruction?",
          answer: "Yes, we offer certificates of data destruction for our secure data destruction services. This is particularly useful for businesses and organizations that need to comply with data protection regulations."
        }
      ]
    },
    {
      category: "Corporate Services",
      questions: [
        {
          question: "Do you offer e-waste management services for businesses?",
          answer: "Yes, we provide comprehensive e-waste management solutions for businesses of all sizes, including bulk collections, compliance reporting, and asset management services."
        },
        {
          question: "How can my company partner with you for e-waste recycling?",
          answer: "We offer partnership programs for companies interested in sustainable e-waste management. Contact our corporate solutions team through the Contact page for more information about how we can collaborate."
        }
      ]
    }
  ];

  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our e-waste management services, rewards program, and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Input
              placeholder="Search for a question..."
              className="pr-10 border-ewaste-green-200 focus:border-ewaste-green-500"
            />
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute right-0 top-0 h-full text-gray-400 hover:text-ewaste-green-500"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-10">
          {faqCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="border rounded-lg overflow-hidden">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${idx}-${index}`}>
                    <AccordionTrigger className="px-6 py-4 hover:bg-ewaste-green-50 hover:no-underline">
                      <span className="text-left font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="max-w-2xl mx-auto mt-16 bg-ewaste-green-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help you with any questions or concerns you may have.
          </p>
          <div className="flex justify-center">
            <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FAQ;
