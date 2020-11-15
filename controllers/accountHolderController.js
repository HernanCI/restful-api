const accountHolderModel = require('../modelsFunctions/accountHolders.js');

const getAllAccountHolders = async function(req,res) {
    let accountHolders = await accountHolderModel.findAll();
    if(accountHolders){
        res.status(200).json(accountHolders);
    }else{
        res.status(404).json({error:'Account holders not found'});
    }
};

const getAccountHolderByAccountHolderId = async function(req,res){
    let accountHolderId = await accountHolderModel.findById(req.params.id);
    if(accountHolderId){
        res.status(200).json(accountHolderId);
    }else{
        res.status(404).json({error:'id not found'});
    }
}

const getAccountHolderByName = async function (req,res) {
    let accountHolderName = await accountHolderModel.findByName(req.params.name);
    if(accountHolderName){
        res.status(200).json(accountHolderName);
    }else{
        res.status(404).json({error:'name not found'});
    }
}

const getAccountHolderByEmail = async function (req,res){
    let accountHolderEmail = await accountHolderModel.findByEmail(req.params.email);
    if(accountHolderEmail){
        res.status(200).json(accountHolderEmail);
    }else{
        res.status(404).json({error: 'email not found'});
    }
}

const updateAccountHolderById = async function (req,res){
    let accountHolder = await accountHolderModel.save(req.params.id,req.body);
    if(accountHolder){
        res.status(200).json(accountHolder);
    }else{
        res.status(404).json({error: 'id not found'});
    }
}

const deleteAccountHolderById = async function (req,res){
    let accountHolder = await accountHolderModel.deleteAccountHolderById(req.params.id);
    if(accountHolder){
        res.status(200).json(accountHolder);
    }else{
        res.status(404).json({error: 'id not found'});
    }
}

const addAccountHolder = async function (req,res){
    let accountHolder = await accountHolderModel.add(req.body);
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
exports.deleteAccountHolderById = deleteAccountHolderById;
exports.addAccountHolder = addAccountHolder;