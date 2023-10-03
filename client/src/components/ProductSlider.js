import React from 'react';
// import swiper react compo
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper';
// compo
import Product from '../components/Product';

const ProductSlider = ({ data }) => {
  return <Swiper>
    <>
      {data?.map(product => {
        return <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      })}
    </>

  </Swiper>;
};

export default ProductSlider;
