// Mock data for Shecare360 IVF Landing Page

export const heroData = {
  headline: "Your IVF Journey, Our Expert Care",
  subheadline: "From your first consultation to holding your baby - we're with you every step. Trusted by 3,500+ families in Chandigarh Tricity.",
  ctaText: "Start Your Journey",
  meriSakhiPhone: "+91 98774-35627"
};

export const trustIndicators = {
  consultations: "3,500+",
  rating: "4.6",
  successRate: "78%",
  yearsExperience: "10+"
};

export const whyChooseUs = [
  {
    title: "Not Just a Hospital",
    description: "We're your support system - guiding you to make the most informed decisions with compassion and expertise.",
    icon: "Heart"
  },
  {
    title: "Network of Excellence",
    description: "Access to the best IVF specialists and top-rated fertility centers across Chandigarh Tricity.",
    icon: "Network"
  },
  {
    title: "Meri Sakhi - Your Personal Guide",
    description: "A dedicated care companion supporting you for 15 days, answering questions, and providing emotional support.",
    icon: "Users"
  },
  {
    title: "Zero Hidden Costs",
    description: "Transparent pricing with customized fertility plans tailored to your unique needs and budget.",
    icon: "DollarSign"
  },
  {
    title: "Holistic Approach",
    description: "Beyond IVF - we offer nutritional support, mental wellness, yoga, and Ayurvedic care for complete well-being.",
    icon: "Sparkles"
  },
  {
    title: "End-to-End Support",
    description: "From initial consultation to post-pregnancy care - we're with you throughout your entire journey.",
    icon: "Smile"
  }
];

export const ivfProcess = [
  {
    step: 1,
    title: "Free Consultation",
    description: "Connect with our fertility experts to understand your unique situation and explore options."
  },
  {
    step: 2,
    title: "Customized Plan",
    description: "Receive a personalized fertility roadmap with transparent costs and realistic timelines."
  },
  {
    step: 3,
    title: "Hospital Matching",
    description: "We connect you with the best IVF center and specialists from our trusted network."
  },
  {
    step: 4,
    title: "Meri Sakhi Support",
    description: "Your dedicated care companion guides you through every appointment, procedure, and emotion."
  },
  {
    step: 5,
    title: "Holistic Care",
    description: "Access nutrition, mental wellness, and yoga support to optimize your fertility journey."
  },
  {
    step: 6,
    title: "Ongoing Support",
    description: "From pregnancy care to post-natal support - we celebrate every milestone with you."
  }
];

export const partnerHospitals = [
  {
    name: "Cloudnine Hospital",
    location: "Chandigarh",
    specialization: "Advanced IVF & Fertility"
  },
  {
    name: "Motherhood Hospital",
    location: "Mohali",
    specialization: "Reproductive Medicine"
  },
  {
    name: "Fortis Hospital",
    location: "Mohali",
    specialization: "IVF & Infertility"
  },
  {
    name: "Max Healthcare",
    location: "Mohali",
    specialization: "Fertility Solutions"
  }
];

export const testimonials = [
  {
    name: "Priya S.",
    age: 32,
    location: "Chandigarh",
    story: "After 4 years of trying, Shecare360 helped us navigate our IVF journey with so much care. The Meri Sakhi support was a blessing - someone to talk to during the tough times. We're now proud parents of a beautiful baby girl.",
    rating: 5
  },
  {
    name: "Anita & Rajesh",
    age: 35,
    location: "Mohali",
    story: "What made the difference was how they connected us with the right doctor and explained everything transparently. No hidden costs, no false promises - just honest guidance. Our son is 6 months old now!",
    rating: 5
  },
  {
    name: "Simran K.",
    age: 29,
    location: "Panchkula",
    story: "The holistic approach really helped. Along with IVF treatment, they provided nutritional support and yoga sessions that prepared my body. The entire team made us feel supported, not alone.",
    rating: 5
  }
];

export const faqData = [
  {
    question: "How is Shecare360 different from going directly to an IVF clinic?",
    answer: "We're not a hospital - we're your support system. We help you make informed decisions by connecting you with the best specialists, providing transparent cost information, and offering emotional support through Meri Sakhi. You get unbiased guidance focused on YOUR best outcome."
  },
  {
    question: "What is the Meri Sakhi service?",
    answer: "Meri Sakhi is your personal care companion who supports you for 15 days during your fertility journey. She helps coordinate appointments, answers your questions, provides emotional support, and ensures you never feel alone in this process."
  },
  {
    question: "Do I have to pay extra for your services?",
    answer: "Our consultation and guidance services are designed to be affordable and transparent. We believe in zero hidden costs, and our goal is to help you access the best care within your budget."
  },
  {
    question: "Which hospitals and doctors do you work with?",
    answer: "We have a network of verified IVF specialists and top-rated fertility centers across Chandigarh, Mohali, and Panchkula. All our partner doctors have 5+ years of experience and proven success rates."
  },
  {
    question: "What is your IVF success rate?",
    answer: "Success rates vary based on individual factors like age, health conditions, and treatment type. Our partner clinics have success rates ranging from 60-80%. During your consultation, we'll provide realistic expectations based on your specific situation."
  },
  {
    question: "Do you provide support after IVF treatment?",
    answer: "Absolutely! We provide complete pregnancy care and post-natal support. Our holistic approach means we're with you from consultation through pregnancy and beyond."
  },
  {
    question: "How quickly can I start my IVF consultation?",
    answer: "You can book a free consultation within 24-48 hours. Simply fill out the form or call our Meri Sakhi helpline at +91 98774-35627."
  },
  {
    question: "What if I have PCOS or other fertility issues?",
    answer: "We specialize in managing PCOS, endometriosis, and various fertility challenges. Our holistic approach includes medical treatment, nutritional support, and lifestyle modifications to optimize your fertility."
  }
];

export const servicesOffered = [
  "Natural Pregnancy Support",
  "IVF Treatment Coordination",
  "ICSI (Intracytoplasmic Sperm Injection)",
  "IUI (Intrauterine Insemination)",
  "Egg Freezing",
  "PCOS/PCOD Management",
  "Male Infertility Support",
  "Nutritional Counseling",
  "Mental Wellness Support",
  "Yoga & Meditation",
  "Ayurvedic Treatments",
  "Pregnancy Care"
];

// Form submission mock
export const submitLeadForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted:', formData);
      resolve({ success: true, message: 'Thank you! Our team will contact you within 24 hours.' });
    }, 1000);
  });
};