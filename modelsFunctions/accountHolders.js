const db = require('../models');

const findById = async function (id) {
    let accountHolder = await db.AccountHolders.findByPk(id);
    if (accountHolder) {
        let accounts = await accountHolder.getAccounts();
        let urls = [];
        accounts.forEach(account => {
            urls.push(`http://${process.env.HOST}:${process.env.PORT}/accounts/${account.dataValues.id}`);
        });
        accountHolder.dataValues.accounts = urls;
    }
    return accountHolder;
};

const findByName = async function (name) {
    let accountHolder = await db.AccountHolders.findAll({ while: { name: name } });
    if (accountHolder) {
        let accounts = await accountHolder[0].getAccounts();
        let urls = [];
        accounts.forEach(account => {
            urls.push(`http://${process.env.HOST}:${process.env.PORT}/accounts/${account.dataValues.id}`);
        });
        accountHolder[0].dataValues.accounts = urls;
    }
    return accountHolder[0];
};

const findByEmail = async function (email) {
    let accountHolder = await db.AccountHolders.findAll({ while: { email: email } });
    if (accountHolder) {
        let accounts = await accountHolder[0].getAccounts();
        let urls = [];
        accounts.forEach(account => {
            urls.push(`http://${process.env.HOST}:${process.env.PORT}/accounts/${account.dataValues.id}`);
        });
        accountHolder[0].dataValues.accounts = urls;
    }
    return accountHolder[0];
};

const findAll = async function () {
    let accountHolders = await db.AccountHolders.findAll();
    let accountHoldersArray = [];

    for (let accountHolder of accountHolders) {
        let accounts = await accountHolder.getAccounts();
        let urls = [];
        accounts.forEach(account => {
            urls.push(`http://${process.env.HOST}:${process.env.PORT}/accounts/${account.dataValues.id}`);
        });
        accountHolder.dataValues.accounts = urls;
        accountHoldersArray.push(accountHolder.dataValues);
    }
    return accountHoldersArray;
};

const save = async function (id, data) {
    let accountHolder = await db.AccountHolders.findByPk(id);
    if (accountHolder) {
        for (let [key, value] of Object.entries(data)) {
            accountHolder[key] = value;
        }
    }
    await accountHolder.save();
    return accountHolder;
}

const deleteAccountHolderById = async function (id) {
    let accountHolder = await db.AccountHolders.findByPk(id);

    if (accountHolder) {
        await db.AccountsAccountHolders.destroy({
            where: {
                accountHolderId: id
            }
        });
        await db.AccountHolders.destroy({
            where: {
                id: id
            }
        });
    }
    return accountHolder;
}

const add = async function (data) {
    let accountHolder;
    if (data.id) {
        accountHolder = {
            id: data.id,
            name: data.name,
            email: data.email,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    } else {
        accountHolder = {
            name: data.name,
            email: data.email,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }
    await db.AccountHolders.create(accountHolder);
    accountHolder = await db.AccountHolders.findAll({ where: { createdAt: accountHolder.createdAt } });
    for (let id of data.accountsIds) {
        await db.AccountsAccountHolders.create({
            accountId: id,
            accountHolderId: accountHolder[0].dataValues.id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
    return await findById(accountHolder[0].dataValues.id);
}

exports.findById = findById;
exports.findByName = findByName;
exports.findByEmail = findByEmail;
exports.findAll = findAll;
exports.save = save;
exports.deleteAccountHolderById = deleteAccountHolderById;
exports.add = add;