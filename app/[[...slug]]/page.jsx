import ClientRouter from '../ClientRouter';

const routeMetadata = {
  '/': {
    title: 'Elite Print Care - Printers, Ink, Toner & Office Printer Guides',
    description: 'Elite Print Care helps you choose the right printer, ink, toner, and office printing supplies with fast shipping and expert support.',
  },
  '/product-category/all-in-one-printers': {
    title: 'All-in-One Printers | Elite Print Care',
    description: 'Shop all-in-one printers for home and office. Compare multifunction printers for copying, scanning, printing, and faxing.',
  },
  '/product-category/home-printer': {
    title: 'Best Home Printers | Elite Print Care',
    description: 'Discover the best home printers for photos, documents, and everyday use with ink and toner options.',
  },
  '/office-printer': {
    title: 'Office Printers & Business Printing Solutions | Elite Print Care',
    description: 'Explore reliable office printers built for business workflows, high-volume printing, and low running costs.',
  },
  '/product-category/large-format-printers': {
    title: 'Large Format Printers | Elite Print Care',
    description: 'Find large format printers for banners, posters, CAD drawings, and wide-format design printing.',
  },
  '/product-category/inkjet-printers': {
    title: 'Inkjet Printers | Elite Print Care',
    description: 'Shop inkjet printers for vivid color, photo-quality prints, and flexible home or office use.',
  },
  '/product-category/laser-printers': {
    title: 'Laser Printers | Elite Print Care',
    description: 'Compare laser printers for fast black-and-white and color output with durable toner performance.',
  },
  '/product-category/led-printers': {
    title: 'LED Printers | Elite Print Care',
    description: 'Discover LED printers with energy-efficient printing, reliable text quality, and compact designs.',
  },
  '/product-category/ink-toner': {
    title: 'Ink & Toner Cartridges | Elite Print Care',
    description: 'Buy ink and toner cartridges for HP, Canon, Brother, Epson and more with fast shipping and printer compatibility details.',
  },
  '/customer-service': {
    title: 'Customer Service & Support | Elite Print Care',
    description: 'Get help with your printer order, returns, setup, and support from Elite Print Care customer service.',
  },
  '/cart': {
    title: 'Shopping Cart | Elite Print Care',
    description: 'Review your cart items, update quantities, and proceed to checkout for printers, ink, and toner.',
  },
  '/checkout': {
    title: 'Secure Checkout | Elite Print Care',
    description: 'Complete your order securely for printers, ink, toner, and office supplies with fast shipping.',
  },
  '/profile': {
    title: 'My Profile | Elite Print Care',
    description: 'Manage your account, shipping details, and order history on Elite Print Care.',
  },
  '/profile/order-history': {
    title: 'Order History | Elite Print Care',
    description: 'View past purchases, shipping status, and order details from Elite Print Care.',
  },
  '/order-history': {
    title: 'Order History | Elite Print Care',
    description: 'View past purchases, shipping status, and order details from Elite Print Care.',
  },
  '/blogs': {
    title: 'Elite Print Care Blog | Printer Guides & Tips',
    description: 'Read printer buying guides, maintenance tips, and printing best practices from Elite Print Care.',
  },
  '/blogs/choosing-right-printer-home-office': {
    title: 'Choose the Right Printer for Your Home Office | Elite Print Care',
    description: 'Learn how to select the right home office printer for your workflow, budget, and print quality needs.',
  },
  '/blogs/printer-maintenance-guide': {
    title: 'Printer Maintenance Guide | Elite Print Care',
    description: 'Keep your printer running smoothly with cleaning, maintenance, and troubleshooting tips from Elite Print Care.',
  },
  '/blogs/save-printing-costs-guide': {
    title: 'Save Money on Printing Costs | Elite Print Care',
    description: 'Learn practical ways to save on ink, toner, paper, and printer operation costs with Elite Print Care advice.',
  },
  '/blogs/top-7-printing-mistakes': {
    title: 'Top 7 Printing Mistakes to Avoid | Elite Print Care',
    description: 'Avoid common printing mistakes that waste paper, ink, and time with Elite Print Care printing best practices.',
  },
  '/blogs/small-business-printing-essential-tools': {
    title: 'Small Business Printing Tools & Setup | Elite Print Care',
    description: 'Discover the essential printers and printing tools every small business needs to stay productive and cost-efficient.',
  },
  '/faq': {
    title: 'Printer FAQ | Elite Print Care',
    description: 'Find answers to common questions about printers, ink, toner, orders, shipping, and returns.',
  },
  '/about': {
    title: 'About Elite Print Care',
    description: 'Learn about Elite Print Care, your source for printers, ink, toner, and printing guides.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Elite Print Care',
    description: 'Read the Elite Print Care privacy policy for customer data, cookies, and website use.',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | Elite Print Care',
    description: 'Review Elite Print Care terms and conditions for purchases, accounts, and website use.',
  },
  '/refund-return-policy': {
    title: 'Refund & Return Policy | Elite Print Care',
    description: 'Learn how to request returns and refunds for Elite Print Care printer and supply orders.',
  },
  '/return-exchange-policy': {
    title: 'Return & Exchange Policy | Elite Print Care',
    description: 'Review Elite Print Care return and exchange eligibility, process, and timelines.',
  },
  '/shipping-policy': {
    title: 'Shipping Policy | Elite Print Care',
    description: 'Read Elite Print Care shipping details, delivery estimates, and order handling policies.',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Elite Print Care',
    description: 'Understand Elite Print Care cookie usage and tracking technology to improve your experience.',
  },
  '/accessibility-statement': {
    title: 'Accessibility Statement | Elite Print Care',
    description: 'Read Elite Print Care accessibility commitments for an inclusive website experience.',
  },
  '/disclaimer': {
    title: 'Disclaimer | Elite Print Care',
    description: 'Legal disclaimer covering Elite Print Care content, accuracy, and website use.',
  },
  '/consumer-rights': {
    title: 'Consumer Rights | Elite Print Care',
    description: 'Learn about consumer rights and protections for Elite Print Care customers.',
  },
  '/do-not-sell-or-share-my-personal-information': {
    title: 'Do Not Sell My Personal Information | Elite Print Care',
    description: 'Submit a request under privacy rights to not sell or share your personal information.',
  },
  '/track-order': {
    title: 'Track Your Order | Elite Print Care',
    description: 'Track your printer and supply order status in real time with Elite Print Care.',
  },
  '/returns-exchanges': {
    title: 'Returns & Exchanges | Elite Print Care',
    description: 'Request returns or exchanges and learn the Elite Print Care return process.',
  },
  '/help-center': {
    title: 'Help Center | Elite Print Care',
    description: 'Get support, guidance, and answers from Elite Print Care help resources.',
  },
  '/printer-buying-guide': {
    title: 'Printer Buying Guide | Elite Print Care',
    description: 'Read Elite Print Care printer buying tips, comparison advice, and recommended features.',
  },
  '/guides-resources': {
    title: 'Printer Guides & Resources | Elite Print Care',
    description: 'Explore printing guides, resources, and best practices for printers, ink, and toner.',
  },
  '/admin/login': {
    title: 'Admin Login | Elite Print Care',
    description: 'Elite Print Care admin login page.',
    robots: { index: false, follow: false },
  },
  '/admin': {
    title: 'Admin Dashboard | Elite Print Care',
    description: 'Elite Print Care admin dashboard.',
    robots: { index: false, follow: false },
  },
  '/admin/dashboard': {
    title: 'Admin Dashboard | Elite Print Care',
    description: 'Elite Print Care admin dashboard.',
    robots: { index: false, follow: false },
  },
  '/admin/categories': {
    title: 'Admin Categories | Elite Print Care',
    description: 'Manage categories in Elite Print Care admin.',
    robots: { index: false, follow: false },
  },
  '/admin/products': {
    title: 'Admin Products | Elite Print Care',
    description: 'Manage products in Elite Print Care admin.',
    robots: { index: false, follow: false },
  },
  '/admin/customers': {
    title: 'Admin Customers | Elite Print Care',
    description: 'Manage customers in Elite Print Care admin.',
    robots: { index: false, follow: false },
  },
  '/admin/orders': {
    title: 'Admin Orders | Elite Print Care',
    description: 'Manage orders in Elite Print Care admin.',
    robots: { index: false, follow: false },
  },
  '/admin/chat': {
    title: 'Admin Chat | Elite Print Care',
    description: 'Manage admin chats in Elite Print Care.',
    robots: { index: false, follow: false },
  },
  '/admin/analytics': {
    title: 'Admin Analytics | Elite Print Care',
    description: 'View Elite Print Care admin analytics and reports.',
    robots: { index: false, follow: false },
  },
  '/admin/settings': {
    title: 'Admin Settings | Elite Print Care',
    description: 'Manage Elite Print Care admin settings.',
    robots: { index: false, follow: false },
  },
};

const routeKeywords = {
  '/': [
    'eliteprintcare',
    'printer guides',
    'printer buying guide',
    'best printers',
    'printer supplies',
    'office printer reviews',
  ],
  '/product-category/all-in-one-printers': [
    'all-in-one printers',
    'multifunction printers',
    'printer copier scanner fax',
    'home office printers',
    'best all-in-one printer',
  ],
  '/product-category/home-printer': [
    'home printers',
    'best home printer',
    'photo printer',
    'compact printers',
    'home printing solutions',
  ],
  '/office-printer': [
    'office printers',
    'business printers',
    'high volume printer',
    'network printer',
    'business printing solutions',
  ],
  '/product-category/large-format-printers': [
    'large format printers',
    'wide format printer',
    'banner printer',
    'CAD printer',
    'poster printer',
  ],
  '/product-category/inkjet-printers': [
    'inkjet printers',
    'color printer',
    'photo printer',
    'wireless printer',
    'Epson printer',
  ],
  '/product-category/laser-printers': [
    'laser printers',
    'fast printer',
    'business laser printer',
    'laser toner',
    'monochrome printer',
  ],
  '/product-category/led-printers': [
    'LED printers',
    'energy efficient printer',
    'LED printer technology',
    'compact LED printer',
  ],
  '/product-category/ink-toner': [
    'ink cartridges',
    'toner cartridges',
    'HP ink',
    'Canon toner',
    'printer ink replacement',
  ],
  '/customer-service': [
    'customer service',
    'printer support',
    'order help',
    'return support',
  ],
  '/cart': [
    'shopping cart',
    'printer cart',
    'checkout summary',
    'saved items',
  ],
  '/checkout': [
    'checkout',
    'secure checkout',
    'payment',
    'order payment',
  ],
  '/profile': [
    'profile',
    'account settings',
    'order history',
    'personal details',
  ],
  '/profile/order-history': [
    'order history',
    'purchase history',
    'past orders',
    'order tracking',
  ],
  '/order-history': [
    'order history',
    'purchase history',
    'past orders',
    'order tracking',
  ],
  '/blogs': [
    'printer blog',
    'printing tips',
    'printer guides',
    'printing advice',
  ],
  '/blogs/choosing-right-printer-home-office': [
    'home office printer',
    'printer buying guide',
    'best printer for home office',
    'printer recommendations',
  ],
  '/blogs/printer-maintenance-guide': [
    'printer maintenance',
    'printer cleaning tips',
    'printer troubleshooting',
    'printer care',
  ],
  '/blogs/save-printing-costs-guide': [
    'save printing costs',
    'printer cost savings',
    'ink saving tips',
    'toner cost reduction',
  ],
  '/blogs/top-7-printing-mistakes': [
    'printing mistakes',
    'printer troubleshooting',
    'print quality issues',
    'avoid printing errors',
  ],
  '/blogs/small-business-printing-essential-tools': [
    'small business printing',
    'business printer tools',
    'printer setup',
    'office printing tips',
  ],
  '/faq': [
    'printer FAQ',
    'printer questions',
    'printer support answers',
    'order questions',
  ],
  '/about': [
    'about Elite Print Care',
    'company information',
    'printer guide company',
  ],
  '/privacy-policy': [
    'privacy policy',
    'data privacy',
    'customer privacy',
  ],
  '/terms-and-conditions': [
    'terms and conditions',
    'website terms',
    'purchase terms',
  ],
  '/refund-return-policy': [
    'refund policy',
    'return policy',
    'refund options',
  ],
  '/return-exchange-policy': [
    'exchange policy',
    'return policy',
    'product exchange',
  ],
  '/shipping-policy': [
    'shipping policy',
    'delivery policy',
    'shipping details',
  ],
  '/cookie-policy': [
    'cookie policy',
    'website cookies',
    'tracking policy',
  ],
  '/accessibility-statement': [
    'accessibility statement',
    'digital accessibility',
    'accessible website',
  ],
  '/disclaimer': [
    'disclaimer',
    'legal disclaimer',
    'website disclaimer',
  ],
  '/consumer-rights': [
    'consumer rights',
    'customer rights',
    'privacy rights',
  ],
  '/do-not-sell-or-share-my-personal-information': [
    'do not sell my information',
    'privacy request',
    'opt out of data sale',
  ],
  '/track-order': [
    'track order',
    'order tracking',
    'shipment status',
  ],
  '/returns-exchanges': [
    'returns',
    'exchanges',
    'return request',
  ],
  '/help-center': [
    'help center',
    'support resources',
    'customer help',
  ],
  '/printer-buying-guide': [
    'printer buying guide',
    'printer comparison',
    'best printer buying tips',
  ],
  '/guides-resources': [
    'printer guides',
    'printing resources',
    'office printing help',
  ],
  '/admin/login': [
    'admin login',
    'admin access',
    'dashboard login',
  ],
  '/admin': [
    'admin dashboard',
    'admin panel',
    'site admin',
  ],
  '/admin/dashboard': [
    'admin dashboard',
    'admin panel',
    'site admin',
  ],
  '/admin/categories': [
    'admin categories',
    'manage categories',
    'category management',
  ],
  '/admin/products': [
    'admin products',
    'manage products',
    'product management',
  ],
  '/admin/customers': [
    'admin customers',
    'manage customers',
    'customer management',
  ],
  '/admin/orders': [
    'admin orders',
    'manage orders',
    'order management',
  ],
  '/admin/chat': [
    'admin chat',
    'manage chat',
    'support chat',
  ],
  '/admin/analytics': [
    'admin analytics',
    'site analytics',
    'dashboard reports',
  ],
  '/admin/settings': [
    'admin settings',
    'site settings',
    'configuration',
  ],
};

function getKeywordsForPath(path) {
  if (routeKeywords[path]) return routeKeywords[path];
  if (path.startsWith('/blogs/')) {
    return [
      'printer blog',
      'printing tips',
      'printer guides',
      'printing advice',
      'printer reviews',
    ];
  }
  if (path.startsWith('/product/')) {
    return [
      'printer product details',
      'printer specs',
      'printer features',
      'buy printer online',
      'printer comparison',
    ];
  }
  if (path.startsWith('/admin')) {
    return [
      'admin area',
      'admin dashboard',
      'site management',
    ];
  }
  return [
    'eliteprintcare',
    'printers',
    'ink cartridges',
    'toner cartridges',
    'printer supplies',
    'printer buying guide',
  ];
};

const defaultMetadata = {
  title: 'Elite Print Care - Printers, Ink, Toner, and Office Supplies',
  description: 'Find the best printers, ink, toner, and printing guides at Elite Print Care. Shop home and office printing supplies with expert support.',
};

const productMetadata = {
  title: 'Printer Product Details | Elite Print Care',
  description: 'Explore printer product details, specs, and buying information from Elite Print Care.',
};

function getPathFromParams(params) {
  const slugArray = params?.slug;
  return slugArray && slugArray.length ? `/${slugArray.join('/')}` : '/';
}

function getMetadataForPath(path) {
  if (routeMetadata[path]) return routeMetadata[path];
  if (path.startsWith('/blogs/')) {
    return routeMetadata['/blogs'];
  }
  if (path.startsWith('/product/')) {
    return productMetadata;
  }
  if (path.startsWith('/admin')) {
    return { ...routeMetadata['/admin'], robots: { index: false, follow: false } };
  }
  return defaultMetadata;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const path = getPathFromParams(resolvedParams);
  const pageMeta = getMetadataForPath(path);
  const canonicalUrl = `https://eliteprintcare.com${path}`;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: getKeywordsForPath(path),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      title: pageMeta.title,
      description: pageMeta.description,
      url: canonicalUrl,
      siteName: 'Elite Print Care',
      images: [
        {
          url: 'https://eliteprintcare.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Elite Print Care - Printers, Ink, Toner, and Office Supplies',
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      images: ['https://eliteprintcare.com/twitter-image.jpg'],
    },
    robots: pageMeta.robots || {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function CatchAllPage() {
  return <ClientRouter />;
}
