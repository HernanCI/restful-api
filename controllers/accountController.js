const accountsModel = require('../modelsFunctions/accounts.js');

const getAllAccounts = async function (req, res) {
  let allAccounts = await accountsModel.findAll();

  if(allAccounts){
      res.status(200).json(allAccounts);
  }else{
      res.status(404).json({error: 'not found'});
  }
};

const getAccountByAccountId = async function (req, res) {
  let accountId = await accountsModel.findById(req.params.id);
  if (accountId) {
    res.status(200).json(accountId);
  } else {
    res.status(404).json({ error: 'id not found' });
  }
};

const depositById = async function (req,res){
  let account = await accountsModel.depositById(req.params.id,req.body);
  if(account){
    res.status(200).json(account);
  }else{
    res.status(404).json({error:'account not found'});
  }
}

const withdrawById = async function (req,res){
  let account = await accountsModel.withdrawById(req.params.id,req.body);
  if(account){
    res.status(200).json(account);
  }else{
    res.status(404).json({error:'account not found'});
  }
}

const transferByIds = async function (req, res){
  let transferAccounts = await accountsModel.transferByIds(req.params.id1,req.params.id2, req.body);
  if(transferAccounts){
    res.status(200).json(transferAccounts);
  }else{
    res.status(404).json({error:'account not found'});
  }
}


const deleteAccountById = async function (req, res) {
  let account = await accountsModel.deleteAccount(req.params.id);
  if (account) {
      res.status(200).json(account);
  } else {
      res.status(404).json({ error: 'id not found' });
  }
}

const addAccount = async function (req, res){
  let newAccount = await accountsModel.addAccount(req.body);
  if(newAccount){
    res.status(200).json(newAccount);
  }else{
    res.status(400).json({error:'Bad request'});
  }
}

const getBalance = async function (req,res){
  let accountBalance = await accountsModel.getBalance(req.params.id);
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
exports.deleteAccountById = deleteAccountById;
exports.addAccount = addAccount;
exports.getBalance = getBalance;