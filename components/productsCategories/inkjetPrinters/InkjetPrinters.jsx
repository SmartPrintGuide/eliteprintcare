import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import InkjetPrintersProductList from './InkjetPrintersProductList'
import FeaturesSection from '../FeaturesSection'
import CategoryHero from '../CategoryHero'

function InkjetPrinters() {
    return (
        <>
            {/* <CategoryHero
                desktopImage="/inkjetBanner.webp"
                mobileImage="/inkjetBannerMobile.webp"
                altText="Best Inkjet Printers for Photos and Colors - Elite Print Care"
            /> */}
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "Inkjet Printers" },
                ]}
                title="Inkjet Printers"
                description="Ideal in quality color photographs and general printing of documents."
            />
            <CategoryScrollSection />
            <InkjetPrintersProductList />
            <FeaturesSection />
        </>
    )
}

export default InkjetPrinters