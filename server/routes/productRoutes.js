const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route   POST /api/products
// @desc    Add a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, category, description, image, stock } = req.body;

    if (!name || !price || !category || !description || !image) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const newProduct = new Product({ name, price, category, description, image, stock });
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/products
// @desc    Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/products/:id
// @desc    Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
