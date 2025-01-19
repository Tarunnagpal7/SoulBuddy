import React, { useState } from 'react';
import { Star, Sun, Moon, Heart, Users, Sparkles, ScrollText, Gem, Bot as Lotus, HeartHandshake, Brain, Infinity, Calculator, Award  } from 'lucide-react';
import { Sparkle,Bot as BotIcon } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';

<BotIcon className="h-16 w-16 text-orange-500 relative" />
function ServiceCard({ icon: Icon, title, description }) {
  
  return (

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-orange-500 mr-3" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({ icon: Icon, title }) {
  return (
    <div className="flex items-center space-x-3 bg-orange-50 p-4 rounded-lg">
      <Icon className="w-5 h-5 text-orange-500" />
      <span className="text-gray-700">{title}</span>
    </div>
  );
}

function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-orange-50">\
       {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur"></div>
                    <BotIcon className="h-16 w-16 text-orange-500 relative" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Meet Your AI Astro Buddy
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get personalized astrological insights and spiritual guidance powered by advanced AI technology
                </p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => navigate('/userform')}
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-200 ease-in-out bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Try AI Astro Buddy
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
                  </button>
                </div>
              </div>
            </div>

      <header className="bg-gradient-to-b from-orange-100 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full mb-6">
              <Star className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              SoulBuddy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Your personal AI guide for spiritual wellness and astrological insights
            </p>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
            <p className="text-gray-600 mb-8">
              At SoulBuddy, we combine ancient astrological wisdom with cutting-edge AI technology
              to provide you with personalized spiritual guidance and astrological insights.
              Our AI-powered platform makes celestial knowledge accessible to everyone.
            </p>
            <img
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80"
              alt="Spiritual Journey"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Sun}
              title="Basic Astro Details"
              description="Comprehensive analysis of your birth chart and planetary positions"
            />
            <ServiceCard
              icon={Moon}
              title="Horoscope Chart"
              description="Detailed horoscope chart analysis with personalized insights"
            />
            <ServiceCard
              icon={ScrollText}
              title="Basic Panchang"
              description="Daily astrological almanac for auspicious timing"
            />
            <ServiceCard
              icon={Infinity}
              title="Vimshottari Dasha"
              description="Planetary period predictions for life events"
            />
            <ServiceCard
              icon={Gem}
              title="Gemstone Suggestions"
              description="Personalized gemstone recommendations for harmony"
            />
            <ServiceCard
              icon={Lotus}
              title="Rudraksha Suggestions"
              description="Sacred bead recommendations for spiritual growth"
            />
            <ServiceCard
              icon={HeartHandshake}
              title="Match Making"
              description="Comprehensive compatibility analysis for relationships"
            />
            <ServiceCard
              icon={Brain}
              title="General Predictions"
              description="Future insights based on planetary movements"
            />
            <ServiceCard
              icon={Calculator}
              title="Numerology"
              description="Life path analysis through numbers"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <BenefitCard icon={Sparkles} title="Personalized Guidance" />
            <BenefitCard icon={Brain} title="AI-Powered Insights" />
            <BenefitCard icon={Heart} title="Emotional Wellness" />
            <BenefitCard icon={Users} title="Relationship Harmony" />
            <BenefitCard icon={Award} title="Expert Analysis" />
            <BenefitCard icon={Star} title="Spiritual Growth" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SoulBuddy</h3>
              <p className="text-gray-400">
                Your trusted companion for spiritual and astrological guidance
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@soulbuddy.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-orange-500">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SoulBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DashBoard;