import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductDetailPage = () => {
  const location = useLocation();
  const { image, title, price, description } = location.state || {};

  return (
    <Box>
      <Header />
      <Box 
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, side-by-side on medium and up
          justifyContent: "space-around",
          marginTop: "2rem",
          padding: "0 1rem" // Add padding to the sides
        }}
      >
        <Box 
          sx={{
            position: "relative", 
            width: { xs: '100%', md: '500px' }, // Full width on small screens, fixed width on medium and up
            height: { xs: '300px', md: '500px' }, // Adjust height for responsiveness
            border: "1px solid #000", 
            overflow: "hidden", 
            marginBottom: { xs: '1rem', md: 0 } // Add margin at the bottom on small screens
          }}
        >
          <IconButton 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: 0, 
              transform: 'translateY(-50%)', 
              zIndex: 2, 
              backgroundColor: '#fff' 
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <img 
            src={image} 
            alt="Product" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
          <IconButton 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              right: 0, 
              transform: 'translateY(-50%)', 
              zIndex: 2, 
              backgroundColor: '#fff' 
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Box sx={{ maxWidth: '500px', width: '100%' }}>
          <Typography 
            sx={{ 
              fontSize: { xs: "1.2rem", md: "1.5rem" }, 
              color: "red", 
              fontWeight: "bold" 
            }}
          >
            Rare Find
          </Typography>
          <Typography 
            sx={{ 
              marginTop: 0.8, 
              fontWeight: "bold", 
              fontSize: { xs: "1.5rem", md: "1.8rem" } 
            }}
          >
            {price}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'gray', 
              marginBottom: 1, 
              fontSize: { xs: "0.9rem", md: "1rem" } 
            }}
          >
            Local taxes included (where applicable)
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: { xs: "1.2rem", md: "1.5rem" } 
            }}
          >
            {title}
          </Typography>
          <Typography 
            sx={{ 
              color: "gray", 
              fontSize: { xs: "0.9rem", md: "1rem" } 
            }}
          >
            {description} <span style={{ color: "#000" }}>★★★★★</span>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 1 }}>
            <CheckIcon />
            <Typography sx={{ color: "gray", fontSize: { xs: "0.8rem", md: "1rem" } }}>
              Return & exchange are accepted
            </Typography>
          </Box>

          <Button 
            sx={{ 
              width: '100%', 
              marginTop: 2, 
              background: "#000", 
              color: "white", 
              borderRadius: 10, 
              padding: ".4em 3rem", 
              textTransform: "capitalize", 
              fontSize: { xs: "0.9rem", md: "1rem" } // Adjust button text size
            }}
          >
            Add to cart
          </Button>
          
          <Box sx={{ marginTop: "2rem" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.2rem" } }}>Item Detail</Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Highlights</Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Made by <span style={{ color: "gray" }}>{description}</span></Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Material <span style={{ color: "gray" }}>Glass</span></Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Chain style <span style={{ color: "gray" }}>Bead</span></Typography>
            <Typography sx={{ color: '#000', marginTop: "1rem", fontWeight: "bold", fontSize: { xs: "1rem", md: "1.2rem" } }}>
              About this item
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              <span role="img" aria-label="star">Soccer Ball Necklace Football beaded</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
