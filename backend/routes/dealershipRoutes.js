const express = require('express');
const router = express.Router();
const { getAllDealerships, getDealershipById, addDealership, updateDealership, deleteDealership } = require('../controllers/dealershipController');

// Routes for dealerships
router.get('/', getAllDealerships);
router.get('/:id', getDealershipById);
router.post('/', addDealership);
router.put('/:id', updateDealership);
router.delete('/:id', deleteDealership);

module.exports = router;
