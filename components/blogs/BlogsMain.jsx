import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Printer } from 'lucide-react';
const smallbusiness = "/assets/printerforsmallbusiness.png";
const savecosts = "/assets/savemoney.png";
const printingmistakes = "/assets/top7Printingmistakes.png";
const printermaintenance = "/assets/printersmaintenence.png";
const printerguide = "/assets/ultimateguide.png";


const BlogsMain = () => {
    // You can add more blogs here later
    const blogs = [
        {
            id: 1,
            title: "The Ultimate Guide to Choosing the Right Printer for Your Home Office",
            excerpt: "Setting up a productive home office requires the right tools, and one essential device you cannot overlook is your printer...",
            date: "February 12, 2026",
            author: "Elite Print Care Team",
            image: printerguide,
            slug: "choosing-right-printer-home-office",
            category: "Buying Guide"
        },
        {
            id: 2,
            title: "Why Printer Maintenance Matters — And How to Do It Right",
            excerpt: "Printers play a crucial role in home offices and professional environments. Yet many users only pay attention when something goes wrong. Learn how care for your device...",
            date: "February 11, 2026",
            image: printermaintenance,
            slug: "printer-maintenance-guide",
            category: "Maintenance Guide"
        },
        {
            id: 3,
            title: "How to Save on Printing Costs Without Compromising Quality",
            excerpt: "Printing is essential but expense. Learn smart cost-saving methods, printer settings, cartridge strategies, and best practices that help you save money...",
            date: "February 11, 2026",
            image: savecosts,
            slug: "save-printing-costs-guide",
            category: "Cost Saving Tips"
        },
        {
            id: 4,
            title: "Top 7 Printing Mistakes Everyone Makes (And How to Avoid Them)",
            excerpt: "Printing should be simple—but errors and wasted ink often get in the way. Discover the 7 most common printing mistakes and exactly how to fix them...",
            date: "February 11, 2026",
            image: printingmistakes,
            slug: "top-7-printing-mistakes",
            category: "Troubleshooting"
        },
        {
            id: 5,
            title: "Printing for Small Business: Essential Tools for Productivity",
            excerpt: "Running a small business requires efficiency. Discover the best printer types, essential tools, cost-saving strategies, and productivity tips to keep your operations flowing smoothly...",
            date: "February 11, 2026",
            image: smallbusiness,
            slug: "small-business-printing-essential-tools",
            category: "Business Productivity"
        },



    ];

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Latest Insights & <span className="text-[#2564E5]">Guides</span>
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Expert advice, buying guides, and tips to help you get the most out of your printing experience.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#2564E5] transition-colors group">
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Link href={`/blogs/${blog.slug}`}>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#2564E5] uppercase tracking-widest border border-gray-200">
                                        {blog.category}
                                    </div>
                                </Link>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} /> {blog.date}
                                    </span>
                                    {/* <span className="flex items-center gap-1">
                                        <User size={14} /> {blog.author}
                                    </span> */}
                                </div>

                                <Link href={`/blogs/${blog.slug}`}>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2564E5] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h2>
                                </Link>

                                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                                    {blog.excerpt}
                                </p>

                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2564E5] uppercase tracking-widest group-hover:gap-4 transition-all"
                                >
                                    Read Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}

                    {/* Placeholder for when you have more posts */}
                    {/* <div className="bg-gray-100 rounded-xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-300">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                            <Printer size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-500">More Coming Soon</h3>
                        <p className="text-gray-400 text-sm mt-2">Stay tuned for more printing tips and reviews.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BlogsMain;
