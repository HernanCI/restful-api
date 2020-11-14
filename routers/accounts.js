const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountController.js');
const globalController = require('../controllers/globalController.js');

//Account getters
router.get('/', accountsController.getAllAccounts);
router.get('/:id', accountsController.getAccountByAccountId);
router.get('/balance/:id',accountsController.getBalance);

//Account deposit
router.patch('/deposit/:id', accountsController.depositById);

//Account withdraw
router.patch('/withdraw/:id', accountsController.withdrawById);

//Account transfer
router.patch('/:id1/:id2', accountsController.transferByIds);

//Account delete
router.delete('/:id', accountsController.deleteAccountById);

//Account add (POST)
router.post('/',accountsController.addAccount);


module.exports = router;