const express = require('express')
const router = express.Router()
const { getTransactions, addTransactions, deleteTransaction } = require('../controllers/transactions')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)

router
    .route('/:id')
    .delete(deleteTransaction)

module.exports = router