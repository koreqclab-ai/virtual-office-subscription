import React, { useEffect } from 'react';

export function MainContent({ onGetStartedClick }) {
  useEffect(() => {
    // Add FAQ Schema for Rich Snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a premium virtual office address in Singapore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A premium virtual office address in Singapore provides a prestigious business address at International Plaza, Anson Road CBD for ACRA company registration, professional mail handling, and enhanced business credibility without the cost of physical office rental."
          }
        },
        {
          "@type": "Question", 
          "name": "Is Anson & Co ACRA compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Anson & Co provides 100% ACRA-compliant registered office addresses at 10 Anson Road, International Plaza. Our premium CBD address meets all regulatory requirements for Singapore company registration and business registration."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I start using my virtual office address?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Your premium virtual office address is ready immediately after payment confirmation. You can start using the address for ACRA registration and business purposes right away."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the premium virtual office address service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our premium service includes: ACRA-compliant business address, unlimited mail reception, professional mail handling, free Contact Address for ACRA, and choice of mail forwarding, scanning, or self-collection options."
          }
        }
      ]
    };

    // Add schema to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const services = [
    {
      icon: "🏢",
      title: "ACRA Virtual Office Singapore Address", 
      description: "Official ACRA virtual office Singapore at prestigious International Plaza, Anson Road CBD. Best virtual office Singapore for company registration and business credibility at cheapest rates"
    },
    {
      icon: "📮",
      title: "Professional Virtual Office Singapore Mail Service",
      description: "Professional mail handling with unlimited reception, secure storage, and flexible collection options. Best virtual office Singapore mail service for maintaining business image"
    },
    {
      icon: "🔒", 
      title: "Singapore Business Address Service",
      description: "Use our virtual office Singapore Anson Road for ACRA Contact Address while protecting your personal residential address. Cheapest virtual office Singapore with instant credibility"
    },
    {
      icon: "💰",
      title: "Cheapest Virtual Office Singapore",
      description: "Get a Grade A building address at International Plaza, Anson Road CBD without paying premium office rental rates. Cheapest virtual office Singapore - Save 90% vs traditional office"
    }
  ];

  const pricingPlans = [
    {
      name: "Self Collection",
      price: "S$50",
      period: "/month",
      popular: false,
      features: [
        "Office address @ International Plaza",
        "Free Contact Address for ACRA",
        "Unlimited mail reception",
        "Unlimited self collection",
        "FREE weekly mail forwarding for 1st Month"
      ]
    },
    {
      name: "Mail Forwarding", 
      price: "S$100",
      period: "/month",
      popular: true,
      features: [
        "Office address @ International Plaza",
        "Free Contact Address for ACRA",
        "Unlimited mail reception",
        "Unlimited self collection",
        "FREE weekly mail forwarding up to 2kg"
      ]
    },
    {
      name: "Mail Scanning",
      price: "S$100", 
      period: "/month",
      popular: false,
      features: [
        "Office address @ International Plaza",
        "Free Contact Address for ACRA", 
        "Unlimited mail reception",
        "Unlimited self collection",
        "FREE Unlimited mail scanning to searchable PDF"
      ]
    }
  ];

  return (
    <main>
      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🏆 Singapore's Most Affordable CBD Virtual Office | Trusted by 1000+ Companies Since 2009
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Get Your Singapore Business Address
              <span className="block text-amber-600 font-bold">From Just $50/Month at Anson Road CBD</span>
            </h1>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl lg:text-2xl text-gray-700 mb-6 font-medium leading-relaxed">
                Skip expensive office rent. Get a prestigious International Plaza address with professional mail handling, ACRA registration support, and instant credibility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Instant ACRA Setup</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Bank Account Support</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Professional Mail Service</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onGetStartedClick('explore-locations')}
                className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                🚀 Start Your Business Today - Only $50/month
              </button>
              <button 
                onClick={() => onGetStartedClick('consultation')}
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-all duration-300"
              >
                💬 Get Free Business Address Consultation
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ⚡ Instant setup • No long-term contracts • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Best Virtual Office Singapore Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              ACRA virtual office Singapore at International Plaza, Anson Road CBD • Cheapest virtual office Singapore location • Professional virtual office Singapore trusted by 1000+ companies since 2009
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Virtual Office Singapore Anson Road Location
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Virtual office Singapore CBD at International Plaza, Anson Road • Best virtual office Singapore Tanjong Pagar area • MRT-accessible • Perfect for ACRA company registration and client meetings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Virtual Office Singapore Anson Road Address</h3>
              <p className="text-gray-600 font-light mb-4">10 Anson Road, #18-08 International Plaza, Singapore 079903</p>
              <p className="text-amber-600 font-medium">Virtual office Singapore CBD location • Direct MRT access • Grade A building</p>
              <p className="text-sm text-gray-500 mt-2">100% ACRA virtual office Singapore • Instant business credibility • Cheapest virtual office Singapore used by 1000+ companies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Why 1000+ Smart Business Owners Choose Us Over Competitors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't risk your business with unreliable providers. Join successful companies who trust Singapore's most established virtual office service.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <p className="text-sm text-gray-700 font-semibold">ACRA Compliance</p>
              <p className="text-xs text-gray-500 mt-1">Risk-free registration</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-amber-600 mb-2">16</div>
              <p className="text-sm text-gray-700 font-semibold">Years Experience</p>
              <p className="text-xs text-gray-500 mt-1">Since 2009 in Singapore</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-amber-600 mb-2">1000+</div>
              <p className="text-sm text-gray-700 font-semibold">Happy Clients</p>
              <p className="text-xs text-gray-500 mt-1">Active businesses</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-amber-600 mb-2">24h</div>
              <p className="text-sm text-gray-700 font-semibold">Setup Time</p>
              <p className="text-xs text-gray-500 mt-1">Start immediately</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank Approved</h3>
                <p className="text-gray-600 text-sm">All major Singapore banks (DBS, UOB, OCBC) accept our address for business accounts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Trusted</h3>
                <p className="text-gray-600 text-sm">ACRA, IRAS, MAS, and MOM all recognize our International Plaza address</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CBD Prime Location</h3>
                <p className="text-gray-600 text-sm">International Plaza, Anson Road - Grade A building with direct MRT access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 border border-red-300 rounded-lg px-4 py-2 mb-6">
              <span className="text-red-700 font-semibold text-sm">⏰ Limited Time: Skip Setup Fees (Save $100) - Only 20 Spots Left This Month!</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Singapore's Most Affordable CBD Virtual Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium mb-4">
              Pay 90% less than traditional office rent. Grade A International Plaza address from just $50/month.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>✅ No hidden fees</span>
              <span>✅ No long-term contracts</span>
              <span>✅ Cancel anytime</span>
              <span>✅ 30-day guarantee</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border-2 ${
                  plan.popular 
                    ? 'border-amber-600 transform lg:scale-105' 
                    : 'border-gray-100 hover:border-amber-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 MOST POPULAR - Best Value
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  {plan.popular && (
                    <p className="text-sm text-amber-600 font-medium mb-4">⭐ Recommended for most businesses</p>
                  )}
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-xl text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  {plan.price === "S$50" && (
                    <p className="text-sm text-green-600 font-medium">💰 Save $2400/month vs traditional office</p>
                  )}
                  {plan.price === "S$100" && (
                    <p className="text-sm text-green-600 font-medium">💰 Complete solution • No additional costs</p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => onGetStartedClick('subscribe')}
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 transform hover:-translate-y-1 shadow-lg'
                      : 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50 hover:transform hover:-translate-y-1'
                  }`}
                >
                  {plan.popular ? '🚀 Start Now - Most Popular' : '📞 Choose This Plan'}
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  ⚡ Instant activation • 30-day guarantee
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why 1000+ Business Owners Trust Us With Their Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Real stories from real business owners who chose Singapore's most affordable virtual office
            </p>
            <div className="mt-6 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">4.9/5</div>
                <div className="text-sm text-gray-500">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">1000+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">16</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-gray-700 font-medium italic mb-6 text-lg leading-relaxed">
                "Saved my startup $30,000 in first year vs traditional office rent. DBS approved our business account in 2 weeks with their documentation package. Professional service, unbeatable price."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-lg">JT</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">James Tan</p>
                  <p className="text-sm text-gray-600">FinTech Startup Founder</p>
                  <p className="text-xs text-amber-600">⭐ DBS Bank Account Approved</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-gray-700 font-medium italic mb-6 text-lg leading-relaxed">
                "Perfect location for client meetings. International Plaza impresses every visitor. Underground MRT access means never late for appointments. Worth every penny at $50/month."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-lg">LL</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Ling Ling Wong</p>
                  <p className="text-sm text-gray-600">Management Consultant</p>
                  <p className="text-xs text-amber-600">⭐ 2 Years Client</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-gray-700 font-medium italic mb-6 text-lg leading-relaxed">
                "Mail scanning service is game-changer for my overseas business. Every document digitized same day. IRAS audit correspondence handled professionally. Couldn't run my business without them."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-lg">SM</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">E-commerce Business Owner</p>
                  <p className="text-xs text-amber-600">⭐ IRAS Compliance Success</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-gray-700 font-medium italic mb-6 text-lg leading-relaxed">
                "Cheapest virtual office in Singapore, hands down. Compared 15 providers before choosing. Same building quality as $200/month competitors. Amazing value for CBD location."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-lg">DR</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">David Rodriguez</p>
                  <p className="text-sm text-gray-600">Trading Company Director</p>
                  <p className="text-xs text-amber-600">⭐ Price Comparison Winner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-gray-700 font-medium italic mb-6 text-lg leading-relaxed">
                "ACRA registration completed in 1 day with their address. UOB business account opened in 10 days. Professional setup that banks actually trust. Highly recommend for serious businesses."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-lg">AS</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Amanda Seah</p>
                  <p className="text-sm text-gray-600">Legal Services Firm</p>
                  <p className="text-xs text-amber-600">⭐ UOB Account Approved</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                <span className="text-amber-400">★★★★★</span>
              </div>
              <p className="text-gray-700 font-medium italic mb-6 text-lg leading-relaxed">
                "16 years in business speaks volumes. When COVID hit, they never missed a single mail delivery. Reliable, professional, and incredibly affordable. My secret competitive advantage."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-lg">CL</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Christopher Lee</p>
                  <p className="text-sm text-gray-600">Tech Consultancy CEO</p>
                  <p className="text-xs text-amber-600">⭐ 5 Years Client</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Join Singapore's Most Successful Virtual Office Community</h3>
            <p className="text-amber-100 mb-6">1000+ businesses can't be wrong. See why smart entrepreneurs choose us over expensive alternatives.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-amber-100 text-sm">Bank Account Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-amber-100 text-sm">ACRA Compliance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24hr</div>
                <div className="text-amber-100 text-sm">Average Setup Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$29.4K</div>
                <div className="text-amber-100 text-sm">Average Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Your virtual office is ready immediately after payment is done
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onGetStartedClick('subscribe')}
              className="bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Subscribe Now
            </button>
            <button 
              onClick={() => onGetStartedClick('view-plans')}
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-all duration-300"
            >
              View Plan Details
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}