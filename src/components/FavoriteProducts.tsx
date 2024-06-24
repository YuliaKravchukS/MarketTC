import React from 'react';
import ProductCard from './ProductCard';
import ProductCarousel from './ProductCarousel';

const FavoriteProducts = () => {
  return (
    <section className=" pt-9 pb-7">
      <h6 className="text-center">Favorite</h6>
      <div className="mt-9  flex gap-1 desktop:gap-3 laptop:gap-2 tablet:gap-1  justify-center">
        <ProductCarousel />
      </div>
    </section>
  );
};

export default FavoriteProducts;