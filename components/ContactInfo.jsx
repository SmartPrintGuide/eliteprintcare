import React from 'react';
import {
  AddressBlock,
  CompanyName,
  CompanySupportEmail,
  CompanyWebsiteLink,
} from '../lib/renderAddress';

const ContactInfo = ({ className = '' }) => (
  <div className={className}>
    <p className="font-semibold text-blue-800">{CompanyName}</p>
    <div className="mt-2 text-gray-600 leading-relaxed">
      <AddressBlock />
    </div>
    <p className="mt-3 text-gray-600 leading-relaxed">
      Email: <CompanySupportEmail className="text-blue-700 underline" />
      <br />
      Website: <CompanyWebsiteLink className="text-blue-700 underline" />
    </p>
  </div>
);

export default ContactInfo;
