import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import soccer from '../assets/soccer.png';

const products = [
  {
    image: 'https://i.pinimg.com/564x/55/92/8c/55928c4b6ef80953b39dbe4a83bda12f.jpg',
    title: 'Football Field Pencil Case',
    price: 'USD 18.00',
    rating:" 20.1k",

description:"DesigningMoments"
  },
  {
    image: 'https://i.pinimg.com/564x/cd/f8/e4/cdf8e45e45b8460d05879219fee34547.jpg',
    title: 'Personalized Soccer Ball Notebook',
    price: 'USD 18.00',
    rating: "327",
description:"GorunUS"
  },
  {
    image: `https://i.pinimg.com/564x/26/6d/b9/266db94a85c68ca059e4634a5cd2407c.jpg`,
    title: 'Soccer Balls Pattern Headband',
    price: 'USD 50.79',
    rating: "31",
    description:"DreamBeadsOvi"
  },
  {
    image: 'https://i.pinimg.com/564x/75/3e/fb/753efbf2869c6deccbcae349274bf125.jpg',
    title: 'Soccer Ball Necklace new',
    price: 'USD 13.27',
    rating: "301",
description:"TheartisticMonkeyUk"
  },
  {
    image: 'https://i.pinimg.com/564x/a1/44/56/a144564cd30969d332eb7442e968e55b.jpg',
    title: 'Women\'s Personalized  ',
    price: 'USD 13.33',
    rating: "1.2k ",
description:"Kidothevillage"
    
  },
  {
    image: 'https://i.pinimg.com/564x/14/c0/8c/14c08ca6a5710408af429665e7580782.jpg',
    title: 'Goal Print in Green',
    price: 'USD 37.5',
    rating: "2.1k",
    description:"CarriageTradeCompany"
  }
];

const ProductGrid = ({ searchQuery }) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid container spacing={3}>
      {filteredProducts.map((product, index) => (
        <Grid item key={index} xs={12} sm={4} md={2}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
