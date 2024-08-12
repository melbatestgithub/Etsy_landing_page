import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import soccer from '../assets/soccer.png';

const TopBody = () => {
  return (
    <Box 
      sx={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        gap: 4,
        margin: "1rem 2rem",
        flexDirection: { xs: 'column', sm: 'row' } // Stack column on extra-small screens, row on small screens and up
      }}
    >
      <Box 
        sx={{
          maxWidth: { xs: "100%", sm: "400px" }, // Full width on extra-small screens, max 400px on small screens and up
          height: { xs: "auto", sm: "220px" } // Auto height on extra-small screens, fixed height on small screens and up
        }}
      >
        <Avatar 
          src={soccer} 
          sx={{
            width: "100%", 
            height: "100%", 
            objectFit: "cover" // Ensure the image covers the area without distortion
          }} 
          alt="No image"
        />
      </Box>
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          textAlign: { xs: 'center', sm: 'left' }, // Center text on extra-small screens, align left on small screens and up
          mt: { xs: 2, sm: 0 } // Add top margin on extra-small screens
        }}
      >
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          efratul ★★★★★ (224)
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, mb: 2 }}>
          Football Field Pencil Case, Soccer Field Zipper Pouch Kid Pencil Case Back to School Sport Lover Gift Student Gift Idea
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          USD 19
        </Typography>
        <Button 
          sx={{
            background: "green", 
            color: "#000", 
            borderRadius: 8, 
            padding: 0, 
            mt: 2, 
            minWidth: { xs: '100%', sm: 'auto' } // Full width button on extra-small screens
          }}
        >
          <Typography textTransform="capitalize">Free shipping</Typography>
        </Button>
        <Button 
          sx={{
            marginTop: "2rem", 
            background: "none", 
            border: "1px solid #000", 
            borderRadius: 5, 
            padding: ".4rem 1rem", 
            minWidth: { xs: '100%', sm: 'auto' } // Full width button on extra-small screens
          }}
        >
          <Typography sx={{ textTransform: "lowercase", color: "#000" }}>Shop this item</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default TopBody;
