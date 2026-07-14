"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import Home from "./Home";
import Reviews from "./Reviews";
import StatsCircles from "./StatsCircles";
import WhyChooseSection from "./WhyChooseSection";
import FeaturedServices from "./FeaturedServices";
import OurPromiseSection from "./OurPromiseSection";
import ImportantInfoSection from "./ImportantInfoSection";
import ResourceCenter from "../ResourceCenter";
import ProductGrid from "../productsCategories/ProductGrid";

const HomeMain = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams?.get("search") || null;
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    useEffect(() => {
        if (searchQuery) {
            dispatch(listProducts(searchQuery));
        }
    }, [dispatch, searchQuery]);

    // ================= SEARCH PAGE =================
    if (searchQuery) {
        return (
            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-6 py-16">

                    <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#2564E5] mb-10">
                            Search Results for{" "}
                            <span className="text-gray-700">"{searchQuery}"</span>
                        </h1>

                        <ProductGrid products={products} loading={loading} />
                    </div>

                </div>
            </div>
        );
    }

    // ================= HOME PAGE =================
    return (
        <div className="overflow-hidden">
            <Hero />
            <WelcomeSection />
            <Home />
            {/* Show new blue-themed section after products */}
            <FeaturedServices />
            <WhyChooseSection />
            <OurPromiseSection />
            <Reviews />
            <StatsCircles />
            <ImportantInfoSection />
            {/* <ResourceCenter /> */}
        </div>
    );
};

export default HomeMain;
