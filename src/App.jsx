import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <div>
    <Header/>
     <main>
     <Outlet/>
     </main>
   </div>
  );
}

export default App;