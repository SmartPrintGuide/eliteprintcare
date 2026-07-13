"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { listProducts } from '../redux/actions/productActions';
import ProductGrid from './productsCategories/ProductGrid';

const Search = ({ initialQuery = '' }) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const queryParam = initialQuery || searchParams?.get('query') || '';

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList || {};

  useEffect(() => {
    if (queryParam) {
      dispatch(listProducts(queryParam));
    }
  }, [dispatch, queryParam]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-[60vh]">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">
        Search Results for: <span className="text-blue-600">{queryParam}</span>
      </h2>
      {error && <div className="text-red-600">{error}</div>}
      <ProductGrid products={products || []} heading="Results" loading={loading} />
    </div>
  );
};

export default Search;
