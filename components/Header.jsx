"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ShoppingCart, ChevronDown, Search } from "lucide-react";
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/actions/userActions';
import AuthModal from "./AuthModel";
import { optimizeImageUrl } from "../lib/utils";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const debounceRef = useRef();

  const pathname = usePathname();
  const router = useRouter();

  const cartCount = useSelector((state) =>
    state.cart.cartItems.reduce((acc, item) => acc + item.qty, 0)
  );
  const userInfo = useSelector((state) => state.userLogin?.userInfo);
  const dispatch = useDispatch();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    setProfileDropdown(false);
    setMobileOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Printers",
      dropdown: [
        { name: "Home Printer", path: "/product-category/home-printer" },
        { name: "Office Printer", path: "/product-category/office-printer" },
        { name: "Laser Printer", path: "/product-category/laser-printers" },
        { name: "Inkjet Printer", path: "/product-category/inkjet-printers" },
      ],
    },
    { name: "Ink & Toner", path: "/product-category/ink-toner" },
    { name: "Blogs", path: "/blogs" },
    { name: "Support", path: "/customer-service" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const isActive = (path) => pathname === path;

      const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
          router.push(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm("");
      setSuggestions([]);
    }
  };

  // Fetch suggestions as user types
  useEffect(() => {
    if (!searchOpen) {
      setSuggestions([]);
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (searchTerm.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      setLoadingSuggestions(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?search=${encodeURIComponent(searchTerm.trim())}&limit=5`);
        const data = await res.json();
        setSuggestions(Array.isArray(data.products) ? data.products : []);
      } catch {
        setSuggestions([]);
      }
      setLoadingSuggestions(false);
    }, 300);
    return () => debounceRef.current && clearTimeout(debounceRef.current);
  }, [searchTerm, searchOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[96px]">

            {/* LOGO */}
            <Link href="/" aria-label="Home">
              <img
                src="/spglogo.png"
                alt="Elite Print Care Logo"
                width="200"
                height="74"
                className="h-12 w-auto object-contain"
                style={{ maxWidth: "200px" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-medium relative">
              {navLinks.map((item, index) =>
                item.dropdown ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(index)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 text-[#2564E5] hover:text-blue-700 transition font-semibold bg-transparent border-none outline-none cursor-pointer"
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    {dropdownOpen === index && (
                      <div className="absolute left-0 top-full w-64 bg-white rounded-xl border border-gray-200 p-4 transition-all duration-200 z-50">
                        {item.dropdown.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.path}
                            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#2564E5] transition-all duration-200"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.path}
                    className={`transition duration-200 ${
                      isActive(item.path)
                        ? "text-[#2564E5] font-bold"
                        : "text-gray-700 hover:text-[#2564E5] font-medium"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>


            {/* Right Side */}
            <div className="flex items-center gap-6">
              {/* Search Icon */}
              <button
                className="text-[#2564E5] hover:text-blue-700 transition-colors relative"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <Search size={24} />
              </button>
      {/* Search Modal/Dropdown */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/20">
          <form
            onSubmit={handleSearchSubmit}
            className="mt-24 bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 w-full max-w-md relative"
          >
            <div className="flex items-center gap-2">
              <Search size={22} className="text-[#2564E5]" />
              <input
                autoFocus
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search products by title, description, brand..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-[#2564E5] focus:ring-1 focus:ring-[#2564E5] outline-none"
              />
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-[#2564E5]"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={22} />
              </button>
            </div>
            {/* Suggestions Dropdown */}
            {searchTerm.trim().length > 1 && (
              <div className="absolute left-0 right-0 top-20 bg-white border border-gray-200 rounded-lg z-50 max-h-72 overflow-y-auto">
                {loadingSuggestions ? (
                  <div className="p-4 text-gray-600 text-center">Searching...</div>
                ) : suggestions.length > 0 ? (
                  suggestions.map((product) => (
                    <div
                      key={product._id || product.slug}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        router.push(`/product/${product.slug || product._id}`);
                        setSearchOpen(false);
                        setSearchTerm("");
                        setSuggestions([]);
                      }}
                    >
                      <img src={optimizeImageUrl(product.image || (product.images && product.images[0]) || "/printer.png", { width: 80 })} alt={product.title} className="w-10 h-10 object-contain rounded" loading="lazy" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm line-clamp-1">{product.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-1">{product.brand}</div>
                      </div>
                      <span className="text-[#2564E5] font-semibold">${product.price}</span>
                    </div>
                  ))
                ) : searchTerm.trim().length > 1 ? (
                  <div className="p-4 text-gray-500 text-center">No products found</div>
                ) : null}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#2564E5] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-2"
            >
              Search
            </button>
          </form>
        </div>
      )}

              <Link
                href="/cart"
                className="relative text-[#2564E5] hover:text-blue-700 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={24} />
                {isMounted && userInfo && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#2564E5] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>


              {isMounted && userInfo ? (
                <div className="hidden md:flex items-center relative">
                  <button
                    onClick={() => setProfileDropdown((open) => !open)}
                    className="flex items-center gap-2 bg-[#2564E5] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-white text-[#2564E5] flex items-center justify-center font-semibold text-lg uppercase">
                      {userInfo.firstName?.charAt(0) || userInfo.name?.charAt(0)}
                    </span>
                    <span className="hidden md:block text-base font-medium">
                      {userInfo.firstName || userInfo.name}
                    </span>
                  </button>
                  {profileDropdown && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-xl border border-gray-200 py-2 z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2564E5] transition-colors"
                        onClick={() => setProfileDropdown(false)}
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={logoutHandler}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100 mt-1"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="hidden md:block bg-[#2564E5] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Login / Signup
                </button>
              )}

              {/* Mobile Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-[#2564E5]"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/20 z-50">
          <div className="absolute top-0 left-0 w-full bg-white border-b border-gray-200 p-6">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#2564E5]">Menu</h2>
              <button onClick={() => setMobileOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((item, index) =>
                item.dropdown ? (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === index ? null : index
                        )
                      }
                      className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
                    >
                      {item.name}
                      <ChevronDown size={18} />
                    </button>

                    {dropdownOpen === index && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.dropdown.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 hover:text-[#2564E5]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-700 font-medium hover:text-[#2564E5]"
                  >
                    {item.name}
                  </Link>
                )
              )}

              {userInfo ? (
                <div className="mt-6 flex flex-col gap-2">
                  <Link
                    href="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 bg-[#2564E5] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-white text-[#2564E5] flex items-center justify-center font-semibold text-lg uppercase">
                      {userInfo.firstName?.charAt(0) || userInfo.name?.charAt(0)}
                    </span>
                    <span className="text-base font-medium">
                      {userInfo.firstName || userInfo.name}
                    </span>
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 bg-white rounded-lg border border-gray-200 hover:bg-red-50 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setAuthOpen(true);
                  }}
                  className="mt-6 bg-[#2564E5] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Login / Signup
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Header;
