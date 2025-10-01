import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#10101C] py-8 text-center text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Tyvek Lanka. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-[#FF4560] mx-2">Privacy Policy</a> |
          <a href="#" className="hover:text-[#FF4560] mx-2">Terms of Use</a> |
          <a href="#" className="hover:text-[#FF4560] mx-2">Contact Sales</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;