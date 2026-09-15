import React from "react";
import SupportHeader from "./components/SupportHeader.jsx";
import MainHero from "./components/MainHero.jsx";
import PrinterSetupSection from "./components/PrinterSetupSection.jsx";
import PrinterOfflineSection from "./components/PrinterOfflineSection.jsx";
import ScannerSetupSection from "./components/ScannerSetupSection.jsx";
import InkCartridgesIssueSection from "./components/InkCartridgesIssueSection.jsx";
import DiagnosticsSection from "./components/DiagnosticsSection.jsx";
import BusinessSupportSection from "./components/BusinessSupportSection.jsx";
import Hero1 from "./components/hero/Hero1.jsx";
import Hero2 from "./components/hero/Hero2.jsx";
import Hero3 from "./components/hero/Hero3.jsx";
import Hero4 from "./components/hero/Hero4.jsx";
import Hero5 from "./components/hero/Hero5.jsx";

export const metadata = {
  title: "Smart Printer Setup & Support | Elite Print Care",
  description:
    "Get expert smart printer setup support for wireless printers, scanner setup, printer offline fixes, ink cartridge issues, diagnostics, and business printer assistance from Elite Print Care.",
  keywords: [
    "smart printer setup",
    "printer setup support",
    "wireless printer setup",
    "scanner setup",
    "printer offline troubleshooting",
    "ink cartridge issues",
    "printer diagnostics",
    "business printer support",
    "Elite Print Care",
  ],
  alternates: {
    canonical: "https://eliteprintcare.com/smart-printer-setup",
  },
  openGraph: {
    title: "Smart Printer Setup & Support | Elite Print Care",
    description:
      "Step-by-step guidance for printer setup, scanner configuration, offline repairs, cartridge issues, diagnostics, and business printer support.",
    url: "https://eliteprintcare.com/smart-printer-setup",
    siteName: "Elite Print Care",
    type: "website",
    images: [
      {
        url: "https://eliteprintcare.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Print Care Smart Printer Setup & Support",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Printer Setup & Support | Elite Print Care",
    description:
      "Get expert printer setup support, wireless configuration help, scanner setup guidance, diagnostics, and business printer assistance.",
    images: ["https://eliteprintcare.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Smart Printer Setup & Support",
    description:
      "Step-by-step smart printer setup support for wireless printers, scanner setup, printer offline fixes, ink cartridge issues, diagnostics, and business printer help.",
    url: "https://eliteprintcare.com/smart-printer-setup",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Elite Print Care",
      url: "https://eliteprintcare.com/",
    },
    about: {
      "@type": "Service",
      name: "Smart Printer Setup & Support",
      serviceType: "Printer setup, diagnostics, troubleshooting, and business support",
      provider: {
        "@type": "Organization",
        name: "Elite Print Care",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eliteprintcare.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Smart Printer Setup & Support",
          item: "https://eliteprintcare.com/smart-printer-setup",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I set up a wireless printer for the first time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start by connecting the printer to your Wi-Fi network, install the correct printer driver, add the printer from your device settings, and run a test print to confirm the connection is working.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my printer keep showing offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A printer may appear offline because of connection issues, paused print jobs, outdated drivers, or a problem with the device queue. You can restart the printer, reconnect to Wi-Fi, clear stuck jobs, and run diagnostics to restore printing.",
        },
      },
      {
        "@type": "Question",
        name: "How do I set up a scanner on my computer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Install the scanner driver or software, connect the scanner to your computer or network, and then open the scanner app to complete the setup and test a scan.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my ink cartridges are not recognized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check cartridge installation, clean the contact points, update the printer firmware, and make sure the cartridge model is compatible with your printer before replacing it.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer support for business printer environments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Elite Print Care provides business-focused printer support for setup, reliability, device management, and troubleshooting across office environments.",
        },
      },
    ],
  },
];

function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="smart-printer-setup" itemScope itemType="https://schema.org/Service">
        <SupportHeader />
        {/* <MainHero /> */}

        {/* <Hero1 /> */}
        {/* <Hero2 /> */}
        {/* <Hero3 /> */}
        {/* <Hero4 /> */}

        <Hero5 />
        <PrinterSetupSection />
        <PrinterOfflineSection />
        <ScannerSetupSection />
        <InkCartridgesIssueSection />
        <DiagnosticsSection />
        <BusinessSupportSection />
      </main>
    </>
  );
}

export default Page;