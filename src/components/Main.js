import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ProductGrid from './ProductGrid';

const MainSection = ({ searchQuery }) => {
  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Etsy's Picks</Typography>
        <Button sx={{border:"1px solid #000",borderRadius:5,color:"#000"}}>See more</Button>
      </Box>
      <ProductGrid searchQuery={searchQuery} />
    </Box>
  );
};

export default MainSection;
