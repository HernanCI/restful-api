const accountsModel = require('../models/accounts.js');
const accountHoldersModel = require('../models/accountHolders.js');
//const { json } = require('express');


const deleteAccountById = function (req, res) {
    let account = accountsModel.deleteAccount(req.params.id);

    if (account) {
        if (!account.error) {
            for (let accountHolder of accountHoldersModel.findAll()) {
                for (let { index, accountsId } of accountHolder.accountsIds) {
                    if (account.id == accountsId) {
                        accountHolder.accountsIds.splice(index, 1);
                    }
                }
            }
        }
        res.status(200).json(account);
    } else {
        res.status(404).json({ error: 'id not found' });
    }
}

const deleteAccountHolderById = function (req, res) {
    let accountHolder = accountHoldersModel.deleteAccountHolderById(req.params.id);

    if (accountHolder) {
        for (let account of accountsModel.findAll()) {
            for (let index in account.accountHolderIds) {
               if(accountHolder.id == account.accountHolderIds[index]){
                   account.accountHolderIds.splice(index,1);
               }
            }
        }
        res.status(200).json(accountHolder);
    } else {
        res.status(404).json({ error: 'id not found' });
    }
}



exports.deleteAccountById = deleteAccountById;
exports.deleteAccountHolderById = deleteAccountHolderById;