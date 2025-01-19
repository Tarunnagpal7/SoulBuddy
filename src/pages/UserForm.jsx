import React, { useState } from "react";
import { ArrowLeft, Clock, MapPin, User,Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell } from 'recharts';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];
const ZODIAC_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', 
  '#D4A5A5', '#9B59B6', '#3498DB', '#E67E22', '#1ABC9C',
  '#F1948A', '#BB8FCE'
];

const LoadingAnimation = () => (
  <div className="flex flex-col items-center justify-center p-8">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin" />
      <Sun className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 animate-pulse" />
    </div>
    <p className="mt-4 text-lg font-serif text-orange-600 animate-pulse">
      Reading the Celestial Messages...
    </p>
  </div>
);
const formatAstrologicalText = (text) => {
  if (!text) return [];
  const sections = text.split(/(\*\*.*?\*\*)/g);
  
  return sections.map((section, index) => {
    if (section.startsWith('**') && section.endsWith('**')) {
      // Format headings (text between asterisks)
      return {
        type: 'heading',
        content: section.slice(2, -2),
        key: `heading-${index}`
      };
    } else if (section.trim()) {
      // Format regular paragraphs
      return {
        type: 'paragraph',
        content: section.trim(),
        key: `para-${index}`
      };
    }
    return null;
  }).filter(Boolean);
};

const style = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .animate-slideIn {
    opacity: 0;
    animation: slideIn 0.5s ease-out forwards;
  }
`;

const HoroscopeWheel = () => {
  const data = new Array(12).fill(1);
  return (
    <div className="relative w-64 h-64 mx-auto">
      <PieChart width={256} height={256}>
        <Pie
          data={data}
          cx={128}
          cy={128}
          innerRadius={60}
          outerRadius={120}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ZODIAC_COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Sun className="w-8 h-8 text-orange-500 animate-pulse" />
      </div>
    </div>
  );
};

function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    date: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    state: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/astrologer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.outputs[0].outputs[0].results.message.data.text);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </button>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 transition-all duration-500 hover:shadow-xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center font-serif bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
          Discover Your Cosmic Path
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-orange-500" />
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <label className="block text-sm font-medium text-gray-700">Birth Date</label>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="number"
                  name="date"
                  placeholder="Day"
                  min="1"
                  max="31"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                <input
                  type="number"
                  name="month"
                  placeholder="Month"
                  min="1"
                  max="12"
                  required
                  value={formData.month}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                <input
                  type="number"
                  name="year"
                  placeholder="Year"
                  min="1900"
                  max="2025"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Birth Time</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  name="hour"
                  placeholder="Hour (0-23)"
                  min="0"
                  max="23"
                  required
                  value={formData.hour}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                <input
                  type="number"
                  name="minute"
                  placeholder="Minute (0-59)"
                  min="0"
                  max="59"
                  required
                  value={formData.minute}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
              </div>
              <select
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select State</option>
                {INDIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Enter your city"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 hover:from-orange-600 hover:via-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
              >
                {loading ? "Reading the Stars..." : "Reveal Your Cosmic Path"}
              </button>
            </div>
          </form>
        </div>

        {loading && <LoadingAnimation />}

        {result && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 transform transition-all duration-500 hover:shadow-xl animate-fadeIn">
          <h3 className="text-3xl font-serif text-center mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Your Celestial Reading
          </h3>
          
          <div className="grid grid-cols-1  gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-xl mb-4 text-orange-800">Personal Cosmic Profile</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 flex items-center">
                    <User className="w-4 h-4 mr-2 text-orange-500" />
                    {formData.name}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    Born: {`${formData.date}/${formData.month}/${formData.year} at ${formData.hour}:${formData.minute}`}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    Location: {`${formData.city}, ${formData.state}`}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-md">
                <HoroscopeWheel />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl shadow-md overflow-auto max-h-[600px]">
              <h4 className="font-semibold text-xl mb-4 text-orange-800">Astrological Insights</h4>
              <div className="prose prose-orange max-w-none space-y-6">
                {formatAstrologicalText(result).map((section) => (
                  <div 
                    key={section.key} 
                    className="animate-fadeIn"
                    style={{ animationDelay: `${section.key.split('-')[1] * 0.1}s` }}
                  >
                    {section.type === 'heading' ? (
                      <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                        <Sun className="w-5 h-5 text-orange-500" />
                        {section.content}
                      </h3>
                    ) : (
                      <p className="text-gray-700 leading-relaxed font-sans text-lg pl-6 border-l-4 border-orange-200 py-2 hover:border-orange-400 transition-colors duration-300">
                        {section.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
    </div>
  );
}

export default UserForm;