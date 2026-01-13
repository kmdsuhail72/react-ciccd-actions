import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel>Category</InputLabel>
      <Select
        value={selectedCategory}
        label="Category"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <MenuItem value="All">All Categories</MenuItem>
        {categories.map(category => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
