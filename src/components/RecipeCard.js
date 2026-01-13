import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Rating
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: 6
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={recipe.image}
        alt={recipe.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Chip
            label={recipe.category}
            color="primary"
            size="small"
            sx={{ fontWeight: 'bold' }}
          />
          <Rating value={recipe.rating} precision={0.1} readOnly size="small" />
        </Box>
        
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {recipe.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {recipe.description}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">
              {recipe.prepTime}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <WhatshotIcon fontSize="small" />
            <Typography variant="body2">
              {recipe.cookTime}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <RestaurantIcon fontSize="small" />
            <Typography variant="body2">
              {recipe.servings} servings
            </Typography>
          </Box>
        </Box>
        
        <Button
          component={Link}
          to={`/recipe/${recipe.id}`}
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            backgroundColor: '#ff7043',
            '&:hover': {
              backgroundColor: '#ff5722'
            }
          }}
        >
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
