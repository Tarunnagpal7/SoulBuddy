import React from 'react';
import { Sun, MessageCircle} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header Navigation */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <Sun className="h-8 w-8 text-orange-500" />
              <h1 className="ml-2 text-xl font-semibold text-orange-900">
                SoulBuddy
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center shadow-md transition duration-200 ease-in-out transform hover:scale-105" onClick={()=>navigate("/userform")}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </header>

     
    </div>
  );
}

export default Header;