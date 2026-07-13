import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import AllInOneProductList from './AllInOneProductList'
import FeaturesSection from '../FeaturesSection'
import CategoryHero from '../CategoryHero'

function AllInOne() {
    return (
        <>


            {/* <CategoryHero
                desktopImage="/all_in_one.webp"
                mobileImage="/all_in_one_mobile.webp"
                altText="All in one printers - Elite Print Care"
            /> */}
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "All In One Printers" },
                ]}
                title="All In One Printers"
                description="Print, scan, copy and fax all in one convenient portable device."
            />
            <CategoryScrollSection />
            <AllInOneProductList />
            <FeaturesSection />
        </>
    )
}

export default AllInOne