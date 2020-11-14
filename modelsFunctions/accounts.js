const db = require('../models');

const findAll = async function () {
    let accounts = await db.Accounts.findAll();
    let accountArray = [];

    for(let account of accounts){
        let accountHolders = await account.getAccountHolders();
        let urls = [];
        accountHolders.forEach(accountHolder => {
            urls.push(`http://${process.env.HOST}:${process.env.PORT}/accountHolders/${accountHolder.dataValues.id}`);
        });
        account.dataValues.accountHolders = urls;
        accountArray.push(account.dataValues);
    }
    return accountArray;
}

const findById = async function (id) {
    let account = await db.Accounts.findByPk(id);
    if (account) {
        let accountHolders = await account.getAccountHolders();
        let urls = [];
        accountHolders.forEach(accountHolder => {
            urls.push(`http://${process.env.HOST}:${process.env.PORT}/accountHolders/${accountHolder.dataValues.id}`);
        });
        account.dataValues.accountHolders = urls;
    }
    return account;
}

exports.findAll = findAll;
exports.findById = findById;