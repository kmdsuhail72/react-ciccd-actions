import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteIcon from '@mui/icons-material/Favorite';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Head Chef & Founder',
      bio: 'Professional chef with 15+ years of experience',
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Food Photographer',
      bio: 'Makes every dish look irresistible',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      name: 'Emma Wilson',
      role: 'Recipe Developer',
      bio: 'Creates healthy and delicious recipes',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#ff7043' }}>
          About Foodie Blog
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Sharing the joy of cooking since 2018
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <RestaurantIcon sx={{ fontSize: 60, color: '#ff7043', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                500+ Recipes
              </Typography>
              <Typography>
                From quick weeknight dinners to gourmet feasts
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <GroupIcon sx={{ fontSize: 60, color: '#ff7043', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                50,000+ Community
              </Typography>
              <Typography>
                Food lovers sharing recipes and tips
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <FavoriteIcon sx={{ fontSize: 60, color: '#ff7043', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Made with Love
              </Typography>
              <Typography>
                Every recipe tested and perfected
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Foodie Blog started as a small passion project in 2018 when our founder, 
          Sarah Johnson, wanted to share her family recipes with the world. 
          What began as a simple blog has grown into a thriving community of 
          food enthusiasts from all corners of the globe.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is simple: to make cooking accessible, enjoyable, and 
          delicious for everyone. Whether you're a complete beginner or an 
          experienced home cook, you'll find recipes that inspire you to get 
          in the kitchen and create something wonderful.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={3}>
          {teamMembers.map((member) => (
            <Grid item xs={12} md={4} key={member.name}>
              <Card sx={{ textAlign: 'center', height: '100%' }}>
                <CardContent>
                  <Avatar
                    src={member.image}
                    sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography color="primary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;