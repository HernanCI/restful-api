const db = require('../models');

const findAll = async function () {
    let accounts = await db.Accounts.findAll();
    let accountArray = [];

    for (let account of accounts) {
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

const depositById = async function (id, amount) {
    let account = await db.Accounts.findByPk(id);
    if (account && amount) {
        account.balance += amount.amount;
        await account.save();
    }
    return account;
}

const withdrawById = async function (id, amount) {
    let account = await db.Accounts.findByPk(id);
    if (account && amount) {
        (amount.amount <= account.balance) ? account.balance -= amount.amount : '';
        await account.save();
    }
    return account;
}

const transferByIds = async function (id1, id2, amount) {
    let account1 = await db.Accounts.findByPk(id1);
    let account2 = await db.Accounts.findByPk(id2);

    if (account1 && account2 && amount) {
        if (amount.amount <= account1.balance) {
            account1.balance -= amount.amount;
            account2.balance += amount.amount;
            await account1.save();
            await account2.save();
        } else {
            return { error: 'Account 1 does not have enough balance' };
        }
        return [account1, account2];
    }
}

const deleteAccount = async function (id) {
    let account = await db.Accounts.findByPk(id);

    if (account) {
        if (account.balance == 0) {
            await db.AccountsAccountHolders.destroy({
                where: {
                    accountId: id
                }
            });
            await db.Accounts.destroy({
                where: {
                    id: id
                }
            });
        } else {
            return { error: 'There is available balance in the account' };
        }
    }
    return account;
}

const addAccount = async function (data) {
    let account;
    if (data.balance >= 0 && data.accountHoldersIds.length > 0) {
        if (data.id) {
            account = {
                id: data.id,
                balance: data.balance,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        } else {
            account = {
                balance: data.balance,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        }
        await db.Accounts.create(account);
        account = await db.Accounts.findAll({ where: { createdAt: account.createdAt } });
        for (let id of data.accountHoldersIds) {
            await db.AccountsAccountHolders.create({
                accountId: account[0].dataValues.id,
                accountHolderId: id,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
    }
    return await findById(account[0].dataValues.id);
}

const getBalance = async function (id) {
    let account = await db.Accounts.findByPk(id);
    return account.dataValues.balance;
}

exports.findAll = findAll;
exports.findById = findById;
exports.depositById = depositById;
exports.withdrawById = withdrawById;
exports.transferByIds = transferByIds;
exports.deleteAccount = deleteAccount;
exports.addAccount = addAccount;
exports.getBalance = getBalance;