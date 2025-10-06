import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { submitLeadForm } from '../mock';
import { Loader2 } from 'lucide-react';

const LeadForm = ({ variant = 'default', onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    location: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.age || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    if (formData.phone.length !== 10) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const result = await submitLeadForm(formData);
      toast({
        title: "Success!",
        description: result.message
      });
      setFormData({ name: '', phone: '', age: '', location: '' });
      if (onSuccess) onSuccess();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const isCompact = variant === 'compact';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${isCompact ? 'bg-white p-6 rounded-lg shadow-lg' : ''}`}>
      {!isCompact && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your IVF Journey Today</h3>
          <p className="text-gray-600">Fill in your details and we'll contact you within 24 hours</p>
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="name">Full Name*</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number*</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="10-digit mobile number"
          value={formData.phone}
          onChange={handleChange}
          maxLength={10}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="age">Age*</Label>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="Your age"
            value={formData.age}
            onChange={handleChange}
            min="18"
            max="60"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location*</Label>
          <Input
            id="location"
            name="location"
            type="text"
            placeholder="City"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-6 text-lg"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Get Free Consultation'
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to receive calls/messages from Shecare360
      </p>
    </form>
  );
};

export default LeadForm;