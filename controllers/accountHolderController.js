const accountHolderModel = require('../models/accountHolders.js');

const getAllAccountHolders = function(req,res) {
    let accountHolders = accountHolderModel.findAll();
    if(accountHolders){
        res.status(200).json(accountHolders);
    }else{
        res.status(404).json({error:'Account holders not found'});
    }
};

const getAccountHolderByAccountHolderId = function(req,res){
    let accountHolderId = accountHolderModel.findById(req.params.id);
    if(accountHolderId){
        res.status(200).json(accountHolderId);
    }else{
        res.status(404).json({error:'id not found'});
    }
}

const getAccountHolderByName = function (req,res) {
    let accountHolderName = accountHolderModel.findByName(req.params.name);
    if(accountHolderName){
        res.status(200).json(accountHolderName);
    }else{
        res.status(404).json({error:'name not found'});
    }
}

const getAccountHolderByEmail = function (req,res){
    let accountHolderEmail = accountHolderModel.findByEmail(req.params.email);
    if(accountHolderEmail){
        res.status(200).json(accountHolderEmail);
    }else{
        res.status(404).json({error: 'email not found'});
    }
}

const updateAccountHolderById = function (req,res){
    let accountHolder = accountHolderModel.save(req.params.id,req.body);
    if(accountHolder){
        res.status(200).json(accountHolder);
    }else{
        res.status(404).json({error: 'id not found'});
    }
}


const addAccountHolder = function (req,res){
    let accountHolder = accountHolderModel.add(req.body);
    if(accountHolder){
        res.status(200).json(accountHolder);
    }else{
        res.status(404).json({error:'data not found'});
    }
}
exports.getAllAccountHolders = getAllAccountHolders;
exports.getAccountHolderByAccountHolderId = getAccountHolderByAccountHolderId;
exports.getAccountHolderByName = getAccountHolderByName;
exports.getAccountHolderByEmail = getAccountHolderByEmail;
exports.updateAccountHolderById = updateAccountHolderById; 
exports.addAccountHolder = addAccountHolder;