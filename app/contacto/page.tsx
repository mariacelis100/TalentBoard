'use client';

import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import MapSection from './MapSection';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <ContactForm />
            <ContactInfo />
          </div>
          <div>
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  );
}