
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin, Building } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SchedulePickupForm: React.FC = () => {
  const [date, setDate] = useState<Date>();
  const [selectedCity, setSelectedCity] = useState<string>("");
  const { toast } = useToast();

  const ewasteTypes = [
    "Computers & Laptops", 
    "Mobile Phones", 
    "Tablets", 
    "Printers", 
    "Monitors", 
    "TVs", 
    "Gaming Consoles",
    "Home Appliances",
    "Batteries",
    "Other Electronics"
  ];

  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Vadodara",
    "Firozabad",
    "Ludhiana",
    "Rajkot",
    "Agra",
    "Siliguri",
    "Nashik",
    "Faridabad",
    "Patiala",
    "Meerut"
  ];

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pickup Scheduled!",
      description: `Your e-waste pickup has been scheduled for ${date ? format(date, "PPP") : "the selected date"} in ${selectedCity}`,
    });
    console.log('Pickup scheduled', { date, city: selectedCity });
  };

  return (
    <Card className="w-full shadow-md border border-ewaste-green-100">
      <CardHeader className="bg-gradient-to-r from-ewaste-green-500 to-ewaste-blue-500 text-white">
        <CardTitle className="text-2xl font-bold">Schedule a Pickup</CardTitle>
        <CardDescription className="text-white/90">
          Tell us what e-waste you need collected, and we'll take care of the rest
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center">
              <Building className="mr-2 text-ewaste-green-500" size={18} />
              Your Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required className="border-ewaste-green-200 focus:border-ewaste-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" required className="border-ewaste-green-200 focus:border-ewaste-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required className="border-ewaste-green-200 focus:border-ewaste-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select onValueChange={setSelectedCity} required>
                  <SelectTrigger className="border-ewaste-green-200 focus:border-ewaste-green-500">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianCities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="address">Full Address</Label>
              <div className="flex">
                <Input id="address" placeholder="123 Green St, Locality" className="rounded-r-none border-ewaste-green-200 focus:border-ewaste-green-500" required />
                <Button type="button" variant="outline" className="rounded-l-none border-l-0 border-ewaste-green-500 bg-ewaste-green-50 text-ewaste-green-600">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* E-Waste Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center">
              <Recycle className="mr-2 text-ewaste-green-500" size={18} />
              E-Waste Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wasteType">Type of E-Waste</Label>
                <Select>
                  <SelectTrigger className="w-full border-ewaste-green-200 focus:border-ewaste-green-500">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {ewasteTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Approximate Quantity</Label>
                <Input id="quantity" placeholder="e.g., 2 laptops, 3 phones" required className="border-ewaste-green-200 focus:border-ewaste-green-500" />
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="description">Additional Details</Label>
              <Textarea 
                id="description" 
                placeholder="Please provide any additional information about your e-waste..."
                className="min-h-[100px] border-ewaste-green-200 focus:border-ewaste-green-500"
              />
            </div>
          </div>

          {/* Pickup Schedule */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center">
              <CalendarIcon className="mr-2 text-ewaste-green-500" size={18} />
              Pickup Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-ewaste-green-200",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-ewaste-green-500" />
                      {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => {
                        // Disable past dates and weekends for example
                        const now = new Date();
                        now.setHours(0, 0, 0, 0);
                        return date < now;
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time Slot</Label>
                <Select>
                  <SelectTrigger className="w-full border-ewaste-green-200 focus:border-ewaste-green-500">
                    <SelectValue placeholder="Select time">
                      <span className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-ewaste-green-500" />
                        Select a time slot
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot.toLowerCase().replace(/\s+/g, '-')}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-ewaste-green-500 to-ewaste-blue-500 hover:from-ewaste-green-600 hover:to-ewaste-blue-600 text-white font-bold py-3 text-lg shadow-md hover:shadow-lg transition-all"
            >
              Schedule Pickup
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SchedulePickupForm;
