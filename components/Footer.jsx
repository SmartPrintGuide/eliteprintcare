import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AddressBlock, CompanySupportEmail, CompanyWebsiteLink, CompanyName } from '../lib/renderAddress';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Quick Links - Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#2564E5]">
            Account
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/profile" className="hover:text-[#2564E5] transition-colors">My Account</Link></li>
            <li><Link href="/profile" className="hover:text-[#2564E5] transition-colors">Order History</Link></li>
            <li><Link href="/track-order" className="hover:text-[#2564E5] transition-colors">Track Order</Link></li>
            <li><Link href="/cart" className="hover:text-[#2564E5] transition-colors">Shopping Cart</Link></li>
          </ul>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#2564E5]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/privacy-policy" className="hover:text-[#2564E5] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/shipping-policy" className="hover:text-[#2564E5] transition-colors">Shipping Policy</Link></li>
            <li><Link href="/return-exchange-policy" className="hover:text-[#2564E5] transition-colors">Returns & Exchanges</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-[#2564E5] transition-colors">Cookies Policy</Link></li>
            <li><Link href="/accessibility-statement" className="hover:text-[#2564E5] transition-colors">Accessibility</Link></li>
            <li><Link href="/disclaimer" className="hover:text-[#2564E5] transition-colors">Disclaimer</Link></li>
            <li><Link href="/consumer-rights" className="hover:text-[#2564E5] transition-colors">Consumer Rights</Link></li>
            <li><Link href="/do-not-sell-or-share-my-personal-information" className="hover:text-[#2564E5] transition-colors">Do Not Sell or Share My Info</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#2564E5]">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-[#2564E5] transition-colors">About Us</Link></li>
            <li><Link href="/customer-service" className="hover:text-[#2564E5] transition-colors">Contact us</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-[#2564E5] transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/help-center" className="hover:text-[#2564E5] transition-colors">FAQ & Help Center</Link></li>
            <li><Link href="/printer-buying-guide" className="hover:text-[#2564E5] transition-colors">Printer Buying Guide</Link></li>
            <li><Link href="/guides-resources" className="hover:text-[#2564E5] transition-colors">Guides & Resources</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#2564E5]">
            Get in Touch
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div>
              Email:
              <br />
              <CompanySupportEmail className="hover:text-[#2564E5] transition-colors" />
            </div>
            <div className="space-y-1 text-gray-600">
              <AddressBlock />
            </div>
            <div>Support: Monday–Friday, 9am–6pm ET</div>
          </div>
        </div>

      </div>

      {/* Bottom with Logo and Company Info */}
      <div className="mt-12 border-t border-gray-100 pt-8 text-center text-gray-500 text-sm flex flex-col items-center gap-2">
        <img src="/spglogo.png" alt="Elite Print Care Logo" width="130" height="48" className="h-10 w-auto mb-2" style={{ maxWidth: '130px' }} />
        <div className="font-semibold text-[#2564E5]">Elite Print Care</div>
        <div className="mb-4">All rights reserved.</div>
        {/* Legal/Disclaimer Content */}
   <div className="w-full max-w-5xl mx-auto px-4 text-xs text-gray-500 text-center leading-relaxed">
  <div className="mb-2">
    <span className="font-semibold text-gray-700">Disclaimer:</span> Elite Print Care is an independent retailer and is not affiliated with or endorsed by HP, Canon, Epson, Brother, TP-Link, ASUS, DJI, or any other manufacturer. All trademarks, logos, and product images belong to their respective owners and are used for identification purposes only.
  </div>

  <div>
    Product information and availability may change without notice. While we strive for accuracy, we cannot guarantee all details are error-free. For questions, contact us at{" "}
    <CompanySupportEmail className="underline text-[#2564E5] hover:text-blue-700" />.
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
