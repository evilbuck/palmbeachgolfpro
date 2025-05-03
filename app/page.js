'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu, X, CheckCircle2, Trophy, Calendar, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Trophy className="h-10 w-10 text-[#D4AF37]" />,
      title: "Professional Instruction",
      description: "Learn from certified PGA professionals with years of tournament experience and teaching expertise."
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-[#D4AF37]" />,
      title: "Personalized Coaching",
      description: "Custom lesson plans tailored to your specific needs, skill level, and goals."
    },
    {
      icon: <Calendar className="h-10 w-10 text-[#D4AF37]" />,
      title: "Flexible Scheduling",
      description: "Book lessons at times that work for you, including evenings and weekends."
    },
    {
      icon: <Users className="h-10 w-10 text-[#D4AF37]" />,
      title: "Group Clinics",
      description: "Join our specialized group sessions focusing on specific aspects of the game."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MEASUREMENT_ID');
        `}
      </Script>

      <Navigation />
      <Hero />
      <FeatureSection features={features} />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </main>
  );
}