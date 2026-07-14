import React from 'react';
import {
  COMPANY_NAME,
  COMPANY_ADDRESS_LINE1,
  COMPANY_ADDRESS_LINE2,
  COMPANY_COUNTRY,
  COMPANY_SUPPORT_EMAIL,
  COMPANY_WEBSITE,
  COMPANY_WEBSITE_TEXT,
} from './siteConfig';

export const AddressBlock = ({ includeName = false, className = '' }) => (
  <address className={className}>
    {includeName && (
      <>
        <span>{COMPANY_NAME}</span>
        <br />
      </>
    )}
    <span>{COMPANY_ADDRESS_LINE1}</span>
    <br />
    <span>{COMPANY_ADDRESS_LINE2}</span>
    <br />
    <span>{COMPANY_COUNTRY}</span>
  </address>
);

export const ContactBlock = ({ className = '' }) => (
  <div className={className}>
    <div>{COMPANY_NAME}</div>
    <div>{COMPANY_ADDRESS_LINE1}</div>
    <div>{COMPANY_ADDRESS_LINE2}</div>
    <div>{COMPANY_COUNTRY}</div>
    <div>
      Email: <CompanySupportEmail />
    </div>
    <div>
      Website: <CompanyWebsiteLink />
    </div>
  </div>
);

export const CompanySupportEmail = ({ className = 'text-[#2564E5] underline' }) => (
  <a href={`mailto:${COMPANY_SUPPORT_EMAIL}`} className={className}>
    {COMPANY_SUPPORT_EMAIL}
  </a>
);

export const CompanyWebsiteLink = ({ className = 'text-[#2564E5] underline' }) => (
  <a href={COMPANY_WEBSITE} className={className}>
    {COMPANY_WEBSITE_TEXT}
  </a>
);

export const CompanyName = COMPANY_NAME;
export const CompanyEmail = COMPANY_SUPPORT_EMAIL;
export const CompanyWebsite = COMPANY_WEBSITE;
export const CompanyWebsiteText = COMPANY_WEBSITE_TEXT;
export const CompanyAddressLine1 = COMPANY_ADDRESS_LINE1;
export const CompanyAddressLine2 = COMPANY_ADDRESS_LINE2;
export const CompanyCountry = COMPANY_COUNTRY;
