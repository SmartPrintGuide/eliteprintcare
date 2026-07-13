import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import LaserPrintersProductList from './LaserPrintersProductList'
import FeaturesSection from '../FeaturesSection'
import CategoryHero from '../CategoryHero'

function LaserPrinters() {
    return (
        <>
            {/* <CategoryHero
                desktopImage="/laserBanner.webp"
                mobileImage="/laserBannerMobile.webp"
                altText="High-Speed Laser Printers for Office and Business - Elite Print Care"
            /> */}
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "Laser Printers" },
                ]}
                title="Laser Printers"
                description="High speed printers designed with crisp text and bulk office printing."
            />
            <CategoryScrollSection />
            <LaserPrintersProductList />
            <FeaturesSection />
        </>
    )
}

export default LaserPrinters