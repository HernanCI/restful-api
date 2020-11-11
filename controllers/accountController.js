const accountsModel = require('../models/accounts.js');

const getAllAccounts = function (req, res) {
  let allAccounts = accountsModel.findAll();
  if(allAccounts){
      res.status(200).json(allAccounts);
  }else{
      res.status(404).json({error: 'not found'});
  }
};

const getAccountByAccountId = function (req, res) {
  let accountId = accountsModel.findById(req.params.id);
  if (accountId) {
    res.status(200).json(accountId);
  } else {
    res.status(404).json({ error: 'id not found' });
  }
};

const depositById = function (req,res){
  let account = accountsModel.depositById(req.params.id,req.body);
  if(account){
    res.status(200).json(account);
  }else{
    res.status(404).json({error:'account not found'});
  }
}

const withdrawById = function (req,res){
  let account = accountsModel.withdrawById(req.params.id,req.body);
  if(account){
    res.status(200).json(account);
  }else{
    res.status(404).json({error:'account not found'});
  }
}

const transferByIds = function (req, res){
  let transferAccounts = accountsModel.transferByIds(req.params.id1,req.params.id2, req.body);
  if(transferAccounts){
    res.status(200).json(transferAccounts);
  }else{
    res.status(404).json({error:'account not found'});
  }
}

const addAccount = function (req, res){
  let newAccount = accountsModel.addAccount(req.body);
  if(newAccount){
    res.status(200).json(newAccount);
  }else{
    res.status(400).json({error:'Bad request'});
  }
}

const getBalance = function (req,res){
  let accountBalance = accountsModel.getBalance(req.params.id);
  if(accountBalance){
    res.status(200).json(accountBalance);
  }else{
    res.status(404).json({error:'id not found'});
  }
}
exports.getAllAccounts = getAllAccounts;
exports.getAccountByAccountId = getAccountByAccountId;
exports.depositById = depositById;
exports.withdrawById = withdrawById; 
exports.transferByIds = transferByIds; 
exports.addAccount = addAccount;
exports.getBalance = getBalance;