"use client";

import React from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

// Removed: Header, Footer, ScrollToTop are already rendered by layout.jsx
import UnderConstruction from '../components/common/UnderConstruction';
import HomeMain from '../components/home/HomeMain';
import AllInOne from '../components/productsCategories/all_InOne/AllInOne';
import HomePrinterSection from '../components/productsCategories/HomePrinterSection';
import OfficePrinterSection from '../components/productsCategories/OfficePrinterSection';
import LargeFormat from '../components/productsCategories/largeFormat/LargeFormat';
import InkjetPrinters from '../components/productsCategories/inkjetPrinters/InkjetPrinters';
import LaserPrinters from '../components/productsCategories/laserPrinters/LaserPrinters';
import LedPrinters from '../components/productsCategories/ledPrinters/LedPrinters';
import InkToner from '../components/productsCategories/inkToner/InkToner';
import CustomerMain from '../components/customerService/CustomerMain';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import OrderDetails from '../components/order/OrderDetails';
import ProfilePage from '../components/profile/ProfilePage';
import OrderHistory from '../components/profile/OrderHistory';
import BlogsMain from '../components/blogs/BlogsMain';
import ChoosingPrinterGuide from '../components/blogs/posts/ChoosingPrinterGuide';
import PrinterMaintenanceGuide from '../components/blogs/posts/PrinterMaintenanceGuide';
import SavePrintingCostsGuide from '../components/blogs/posts/SavePrintingCostsGuide';
import PrintingMistakesGuide from '../components/blogs/posts/PrintingMistakesGuide';
import SmallBusinessPrintingGuide from '../components/blogs/posts/SmallBusinessPrintingGuide';
import FAQMain from '../components/faq/FAQMain';
import ProductDetails from '../components/productsCategories/ProductDetails';
import Search from '../components/Search';
import AdminLogin from '../components/admin/Auth/AdminLogin';
import AdminDashboard from '../components/admin/Pages/AdminDashboard';
import AdminCategories from '../components/admin/Pages/AdminCategories';
import AdminProducts from '../components/admin/Pages/AdminProducts';
import AdminCustomers from '../components/admin/Pages/AdminCustomers';
import AdminOrders from '../components/admin/Pages/AdminOrders';
import AdminChat from '../components/admin/Pages/AdminChat';
import AdminAnalytics from '../components/admin/Pages/AdminAnalytics';
import AdminSettings from '../components/admin/Pages/AdminSettings';
import AdminLayout from '../components/admin/Layout/AdminLayout';

// Policy and Info Pages
import AboutMain from '../components/about/AboutMain';
import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../components/TermsAndConditions';
import RefundReturnPolicy from '../components/privacyPolicy/RefundReturnPolicy';
import ReturnExchangePolicy from '../components/privacyPolicy/ReturnExchangePolicy';
import ShippingPolicy from '../components/privacyPolicy/ShippingPolicy';
import CookiePolicy from '../components/privacyPolicy/CookiePolicy';
import AccessibilityStatement from '../components/privacyPolicy/AccessibilityStatement';
import Disclaimer from '../components/privacyPolicy/Disclaimer';
import ConsumerRights from '../components/privacyPolicy/ConsumerRights';
import DoNotSellOrShare from '../components/privacyPolicy/DoNotSellOrShare';
import TrackOrder from '../components/order/TrackOrder';
import ReturnsAndExchanges from '../components/order/ReturnsAndExchanges';
import PrinterBuyingGuide from '../components/guides/PrinterBuyingGuide';
import GuidesResources from '../components/guides/GuidesResources';

export default function ClientRouter() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const router = useRouter();

  // Simple pattern matching for dynamic routes
  if (pathname === '/') return renderWithShell(<HomeMain />);
  if (pathname === '/product-category/all-in-one-printers') return renderWithShell(<AllInOne />);
  if (pathname === '/product-category/home-printer') return renderWithShell(<HomePrinterSection />);
  if (pathname === '/product-category/office-printer') return renderWithShell(<OfficePrinterSection />);
  if (pathname === '/product-category/large-format-printers') return renderWithShell(<LargeFormat />);
  if (pathname === '/product-category/inkjet-printers') return renderWithShell(<InkjetPrinters />);
  if (pathname === '/product-category/laser-printers') return renderWithShell(<LaserPrinters />);
  if (pathname === '/product-category/led-printers') return renderWithShell(<LedPrinters />);
  if (pathname === '/product-category/ink-toner') return renderWithShell(<InkToner />);
  if (pathname === '/customer-service') return renderWithShell(<CustomerMain />);
  if (pathname === '/cart') return renderWithShell(<Cart />);
  if (pathname === '/checkout') return renderWithShell(<Checkout />);
  if (pathname.startsWith('/order/')) {
    const id = pathname.split('/')[2];
    return renderWithShell(<OrderDetails id={id} />);
  }
  if (pathname === '/profile') return renderWithShell(<ProfilePage />);
  if (pathname === '/profile/order-history' || pathname === '/order-history') return renderWithShell(<OrderHistory />);

  if (pathname === '/blogs') return renderWithShell(<BlogsMain />);
  
  if (pathname.startsWith('/blogs/')) {
    const slug = pathname.split('/')[2];
    const blogMap = {
      'choosing-right-printer-home-office': <ChoosingPrinterGuide />,
      'printer-maintenance-guide': <PrinterMaintenanceGuide />,
      'save-printing-costs-guide': <SavePrintingCostsGuide />,
      'top-7-printing-mistakes': <PrintingMistakesGuide />,
      'small-business-printing-essential-tools': <SmallBusinessPrintingGuide />,
    };
    if (blogMap[slug]) return renderWithShell(blogMap[slug]);
    return renderWithShell(<UnderConstruction />);
  }
  
  if (pathname === '/faq') return renderWithShell(<FAQMain />);

  if (pathname.startsWith('/product/')) {
    const slug = pathname.split('/')[2];
    return renderWithShell(<ProductDetails productSlug={slug} />);
  }

  if (pathname === '/search') {
    const query = searchParams?.get('query') || '';
    return renderWithShell(<Search initialQuery={query} />);
  }

  // Admin routes (simple handling)
  if (pathname === '/admin/login') return <AdminLogin />;
  if (pathname === '/admin' || pathname === '/admin/dashboard') return <AdminLayout><AdminDashboard /></AdminLayout>;
  if (pathname === '/admin/categories') return <AdminLayout><AdminCategories /></AdminLayout>;
  if (pathname === '/admin/products') return <AdminLayout><AdminProducts /></AdminLayout>;
  if (pathname === '/admin/customers') return <AdminLayout><AdminCustomers /></AdminLayout>;
  if (pathname === '/admin/orders') return <AdminLayout><AdminOrders /></AdminLayout>;
  if (pathname === '/admin/chat') return <AdminLayout><AdminChat /></AdminLayout>;
  if (pathname === '/admin/analytics') return <AdminLayout><AdminAnalytics /></AdminLayout>;
  if (pathname === '/admin/settings') return <AdminLayout><AdminSettings /></AdminLayout>;

  // Static pages mapped to actual components
  const staticMap = {
    '/about': AboutMain,
    '/privacy-policy': PrivacyPolicy,
    '/terms-and-conditions': TermsAndConditions,
    '/refund-return-policy': RefundReturnPolicy,
    '/return-exchange-policy': ReturnExchangePolicy,
    '/shipping-policy': ShippingPolicy,
    '/cookie-policy': CookiePolicy,
    '/accessibility-statement': AccessibilityStatement,
    '/disclaimer': Disclaimer,
    '/consumer-rights': ConsumerRights,
    '/do-not-sell-or-share-my-personal-information': DoNotSellOrShare,
    '/track-order': TrackOrder,
    '/returns-exchanges': ReturnsAndExchanges,
    '/help-center': FAQMain,
    '/printer-buying-guide': PrinterBuyingGuide,
    '/guides-resources': GuidesResources,
  };

  if (staticMap[pathname]) return renderWithShell(React.createElement(staticMap[pathname]));

  return renderWithShell(<UnderConstruction />);

  function renderWithShell(node) {
    // layout.jsx already provides Header, ScrollToTop, Footer - just return the page content
    return node;
  }
}
