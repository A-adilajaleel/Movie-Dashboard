import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
     
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Movie Dashboard. All rights reserved.
        </p>
        
        
        <div className="flex justify-center space-x-4 mt-4 text-gray-400">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer