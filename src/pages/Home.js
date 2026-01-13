import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  
  const categories = ['All', ...new Set(recipes.map(recipe => recipe.category))];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || recipe.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 'bold',
            color: '#ff7043',
            mb: 2
          }}
        >
          Welcome to Foodie Blog
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Discover delicious recipes from around the world
        </Typography>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          placeholder="Search recipes..."
          variant="outlined"
          fullWidth
          sx={{ flex: 2 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        <FormControl sx={{ flex: 1, minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            label="Category"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Featured Recipes */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          Featured Recipes
        </Typography>
        
        {filteredRecipes.length > 0 ? (
          <Grid container spacing={3}>
            {filteredRecipes.map(recipe => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No recipes found. Try a different search term or category.
            </Typography>
          </Box>
        )}
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ 
        backgroundColor: '#fff3e0',
        p: 4,
        borderRadius: 2,
        textAlign: 'center',
        mt: 6
      }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          Subscribe to Our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Get weekly recipe inspiration delivered to your inbox
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <TextField
            placeholder="Your email address"
            variant="outlined"
            sx={{ width: 300 }}
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
      </Box>
    </Container>
  );
};

export default Home;
