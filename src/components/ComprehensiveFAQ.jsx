import React, { useState } from 'react';

export function ComprehensiveFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqCategories = [
    {
      category: "Pricing & Packages",
      faqs: [
        {
          question: "Why is your virtual office only $50/month when others charge $100+?",
          answer: "We keep costs low through direct building owner relationships since 2009, automated operations, and volume discounts from 1000+ clients. No middleman markups or agent commissions - savings passed directly to you."
        },
        {
          question: "Are there any hidden fees or setup costs?",
          answer: "No hidden fees whatsoever. $50/month includes your business address, mail reception, and building access. Optional services like mail forwarding ($100/month) are clearly priced upfront. No setup fees, no long-term contracts."
        },
        {
          question: "Do you offer price matching against competitors?",
          answer: "Yes! We guarantee Singapore's cheapest virtual office pricing. Show us any competitor's lower price for comparable CBD services, and we'll beat it by 10% or match it exactly."
        },
        {
          question: "What's the difference between $50 and $100 packages?",
          answer: "$50 package includes address + self-collection of mail. $100 package adds weekly mail forwarding up to 2kg OR unlimited mail scanning to PDF. Both include free ACRA Contact Address and building access."
        }
      ]
    },
    {
      category: "Location & Building Access",
      faqs: [
        {
          question: "Can I access International Plaza building 24/7?",
          answer: "Yes! Unlike many providers, we provide keycard access to International Plaza 24/7. Professional security desk operates round-the-clock. Perfect for after-hours mail collection or client meetings."
        },
        {
          question: "How close is Anson Road to government agencies?",
          answer: "Extremely convenient: MAS headquarters (400m, 5-min walk), URA Centre (300m), IRAS (600m), MOM (800m), Supreme Court (1km). Most government meetings reachable within 10 minutes walking."
        },
        {
          question: "Is parking available for client meetings?",
          answer: "Yes, International Plaza has multi-level parking. We can validate parking for important client meetings. Additional public parking at Anson Centre and Tanjong Pagar Centre within 200m."
        },
        {
          question: "What makes Anson Road better than other CBD locations?",
          answer: "Anson Road offers: (1) Direct MRT underground access, (2) Government agency proximity, (3) Major bank headquarters within walking distance, (4) 30-40% lower costs vs Raffles Place, (5) Less crowded than Marina Bay."
        }
      ]
    },
    {
      category: "ACRA & Government Compliance",
      faqs: [
        {
          question: "Is your virtual office address 100% ACRA compliant?",
          answer: "Absolutely. 10 Anson Road is pre-verified with ACRA database. We've handled 1000+ company registrations since 2009. ACRA, IRAS, MAS, MOM all recognize this address. Zero compliance issues guaranteed."
        },
        {
          question: "Can I use this address for ACRA company registration?",
          answer: "Yes, this is exactly what we specialize in. We provide the required registered office address and Contact Address (usually costs $200+ elsewhere, FREE for our clients). Incorporation documents handled professionally."
        },
        {
          question: "What happens if ACRA requires address verification?",
          answer: "We provide immediate address verification letters and documentation. Our building management confirms business operations. 15+ years experience handling ACRA inquiries professionally."
        },
        {
          question: "Can government agencies inspect the premises?",
          answer: "Yes, we accommodate ACRA, IRAS, MOM, and MAS inspections with advance notice. Professional meeting rooms available. Our address demonstrates genuine business substance for regulatory requirements."
        }
      ]
    },
    {
      category: "Banking & Financial Services",
      faqs: [
        {
          question: "Which Singapore banks accept your virtual office address?",
          answer: "All major banks: DBS (85% success rate with our documentation), UOB (90% success rate), OCBC (80% success rate), Standard Chartered, and most foreign banks. We provide business substance packages."
        },
        {
          question: "Do you help with bank account opening?",
          answer: "Yes! We provide: (1) Professional business substance documentation, (2) Address verification letters, (3) Meeting room access for bank manager visits, (4) Reference letters from established banking relationships."
        },
        {
          question: "Is this address suitable for FinTech companies?",
          answer: "Perfect for FinTech! Located 400m from MAS headquarters, surrounded by major banks, within MAS-defined CBD area. Our address has been used for payment services licenses, capital markets licenses, and FinTech sandbox applications."
        },
        {
          question: "Can I use this address for GST registration?",
          answer: "Yes, IRAS accepts our address for GST registration when you hit $1M+ revenue threshold. We handle all IRAS correspondence, GST audit letters, and provide address verification for tax inspections."
        }
      ]
    },
    {
      category: "Mail & Communication Services",
      faqs: [
        {
          question: "How quickly do you notify me about important mail?",
          answer: "Urgent government/legal mail: WhatsApp within 30 minutes. Banking correspondence: 1-hour notification. Regular business mail: daily email summary. Packages: immediate SMS. Court documents: priority phone call."
        },
        {
          question: "Can you scan and email my mail instead of forwarding?",
          answer: "Yes! Our $100/month package includes unlimited mail scanning to searchable PDF format. Eco-friendly option perfect for overseas business owners. Same-day scanning for urgent documents."
        },
        {
          question: "What if I receive packages or courier deliveries?",
          answer: "We accept all packages: DHL, FedEx, UPS, local couriers. Immediate SMS notification with photo confirmation. Secure storage until collection or forwarding. Experience with trade documents and time-sensitive deliveries."
        },
        {
          question: "Do you provide phone answering services?",
          answer: "Yes, professional bilingual (English/Mandarin) reception available as add-on service. Your company greeting, message taking, appointment scheduling, call forwarding to your number."
        }
      ]
    },
    {
      category: "Industry-Specific Questions",
      faqs: [
        {
          question: "Is this suitable for e-commerce businesses?",
          answer: "Perfect! Pre-approved address for Lazada, Shopee, Amazon, Qoo10 seller verification. We handle customer returns, platform correspondence, and provide professional business address for customer confidence."
        },
        {
          question: "Can law firms and professional services use this address?",
          answer: "Absolutely. Maxwell Chambers (500m away) for arbitration lawyers. We handle confidential legal documents, court correspondence, professional licensing mail. Many law firms, accountants, and consultants use our services."
        },
        {
          question: "What about international trading companies?",
          answer: "Excellent for trading! Experience with Letters of Credit, customs documentation, trade finance papers. Close to customs authorities, international courier services. Professional address for supplier/buyer communications."
        },
        {
          question: "Can management consultants use this for client meetings?",
          answer: "Yes! Professional meeting rooms with city views, high-end presentation equipment, video conferencing facilities. Impressive International Plaza location adds credibility. Nearby fine dining for client entertainment."
        }
      ]
    },
    {
      category: "Service Details & Logistics",
      faqs: [
        {
          question: "How long does it take to activate my virtual office?",
          answer: "Immediate activation after payment confirmation. You can start using the address for ACRA registration and business purposes right away. Physical keycard available same day for building access."
        },
        {
          question: "What if I need to cancel my service?",
          answer: "No long-term contracts. Cancel anytime with 30 days notice. We provide address change assistance for ACRA, IRAS, banks. Professional transition support to minimize business disruption."
        },
        {
          question: "Do you provide meeting room facilities?",
          answer: "Yes! Professional boardroom for up to 12 people, video conferencing setup, presentation equipment, city skyline views. Tea/coffee included. Book via mobile app with advance notice."
        },
        {
          question: "Can I register multiple companies at this address?",
          answer: "Yes, many clients register multiple entities. Each company needs separate virtual office subscription. Volume discounts available for 3+ companies. Consolidated mail handling for efficiency."
        },
        {
          question: "What happens during public holidays or emergencies?",
          answer: "Building security operates 24/7/365. Emergency contact number for urgent matters. Mail collection continues during holidays. Professional handling of time-sensitive documents even during disruptions."
        },
        {
          question: "How established and reliable is your service?",
          answer: "Operating since 2009 (16 years), served 1000+ companies, zero address compliance issues. Same building location since inception - no disruptions from relocations. Track record speaks for itself."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Singapore's most affordable virtual office service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  return (
                    <div 
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            openFAQ === globalIndex ? 'transform rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-6 py-4 bg-white">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Our team is ready to help you choose the perfect virtual office solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors">
              📞 Call Us Now
            </button>
            <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors">
              💬 Live Chat Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}