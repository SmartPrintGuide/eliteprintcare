import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import InkTonerProductList from './InkTonerProductList'
import FeaturesSection from '../FeaturesSection'
import CategoryHero from '../CategoryHero'

function InkToner() {
    return (
        <>
            {/* <CategoryHero
                desktopImage="/inkTonerBanner.webp"
                mobileImage="/inkTonerBannerMobile.webp"
                altText="Quality Ink and Toner Cartridges - Elite Print Care"
            /> */}
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "Ink & Toner" },
                ]}
                title="Ink & Toner"
                description="Ink and toner supplies that are of high quality and consistent with the professional print quality."
            />
            <CategoryScrollSection />
            <InkTonerProductList />
            <FeaturesSection />
        </>
    )
}

export default InkToner