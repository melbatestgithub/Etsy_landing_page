import React from 'react';
import { Card, CardContent, Box, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, price, rating, description }) => {
  return (
    <Link to={`/product-detail`} state={{ image, title, price, rating, description }} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{ color: "gray", fontSize: ".9rem" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontWeight: "bold" }}>★★★★★</Typography> 
              ( {rating})
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {price}
          </Typography>
          <Typography sx={{ fontSize: ".9rem", color: "gray" }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
