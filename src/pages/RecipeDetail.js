import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Rating,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import recipes from '../data/recipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <Container>
        <Typography>Recipe not found</Typography>
      </Container>
    );
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back to Recipes
      </Button>

      <Grid container spacing={4}>
        {/* Recipe Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={recipe.image}
            alt={recipe.title}
            sx={{
              width: '100%',
              height: 400,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>

        {/* Recipe Info */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
            <Chip 
              label={recipe.category} 
              color="primary" 
              sx={{ fontWeight: 'bold' }}
            />
            <IconButton onClick={handleFavorite}>
              {isFavorite ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </Box>

          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            {recipe.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {recipe.description}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={recipe.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({recipe.rating}/5)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <AccessTimeIcon color="action" />
              <Typography variant="body2">Prep Time</Typography>
              <Typography variant="h6" fontWeight="bold">
                {recipe.prepTime}
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <WhatshotIcon color="action" />
              <Typography variant="body2">Cook Time</Typography>
              <Typography variant="h6" fontWeight="bold">
                {recipe.cookTime}
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <RestaurantIcon color="action" />
              <Typography variant="body2">Servings</Typography>
              <Typography variant="h6" fontWeight="bold">
                {recipe.servings}
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">Difficulty</Typography>
              <Typography variant="h6" fontWeight="bold">
                {recipe.difficulty}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              By {recipe.author} • {recipe.date}
            </Typography>
          </Box>
        </Grid>

        {/* Ingredients and Instructions */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Ingredients
            </Typography>
            <List>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  <ListItemIcon>•</ListItemIcon>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Instructions
            </Typography>
            <List>
              {recipe.instructions.map((step, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={`Step ${index + 1}`}
                      secondary={step}
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                        mb: 1
                      }}
                    />
                  </ListItem>
                  {index < recipe.instructions.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipeDetail;
