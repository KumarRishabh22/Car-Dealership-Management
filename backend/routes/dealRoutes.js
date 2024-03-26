const express = require('express');
const router = express.Router();
const { getAllDeals, getDealById, addDeal, updateDeal, deleteDeal } = require('../controllers/dealController');

// Routes for deals
router.get('/', getAllDeals);
router.get('/:id', getDealById);
router.post('/', addDeal);
router.put('/:id', updateDeal);
router.delete('/:id', deleteDeal);

module.exports = router;
