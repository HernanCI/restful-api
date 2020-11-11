const express = require('express');
const router = express.Router();

const accountsRouter = require('./accounts.js');
const accountHoldersRouter = require('./accountHolders.js');



router.use(express.json());

router.use('/accounts',accountsRouter);
router.use('/accountHolders',accountHoldersRouter);


module.exports = router; 