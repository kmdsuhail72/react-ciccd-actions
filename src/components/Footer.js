import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Button,
  TextField
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#ff7043' }}>
              Foodie Blog
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Sharing delicious recipes and cooking tips since 2018. 
              Join our community of food lovers!
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <PinterestIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: '#ff7043' } }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: '#ff7043' } }}
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: '#ff7043' } }}
              >
                Contact
              </Link>
              <Link
                component={RouterLink}
                to="/add-recipe"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: '#ff7043' } }}
              >
                Submit Recipe
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to get weekly recipe updates and cooking tips
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                sx={{
                  flexGrow: 1,
                  backgroundColor: 'white',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent'
                    }
                  }
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff7043',
                  '&:hover': {
                    backgroundColor: '#ff5722'
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Foodie Blog. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Made with ❤️ for food lovers everywhere
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
