const express = require('express');
const router = express.Router();
const accountHoldersController = require('../controllers/accountHolderController.js');

//AccountHolders getters
router.get('/', accountHoldersController.getAllAccountHolders);
router.get('/:id', accountHoldersController.getAccountHolderByAccountHolderId);
router.get('/name/:name', accountHoldersController.getAccountHolderByName);
router.get('/email/:email', accountHoldersController.getAccountHolderByEmail);

//AccountHolders patch
router.patch('/:id', accountHoldersController.updateAccountHolderById);

//AccountHolders delete
router.delete('/:id',accountHoldersController.deleteAccountHolderById); 

//AccountHolders add
router.post('/', accountHoldersController.addAccountHolder);


module.exports = router;