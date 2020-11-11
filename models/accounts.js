const accounts = [
    {
        accountId: 1,
        balance: 3000.00,
        accountHolderIds: [1, 3],
    },
    {
        accountId: 2,
        balance: 9000.00,
        accountHolderIds: [2],
    },
    {
        accountId: 3,
        balance: 12000.00,
        accountHolderIds: [1, 3],
    },
];

const findById = function (accountId) {
    return accounts.find((e) => {
        return e.accountId == accountId;
    });
};

const findAll = function () {
    return accounts;
};


const depositById = function (id, amount) {
    let account = accounts.find((e) => {
        return e.accountId == id;
    });
    if (account && amount) {
        account.balance += amount.amount;
    }
    return account;
}

const withdrawById = function (id, amount) {
    let account = accounts.find((e) => {
        return e.accountId == id;
    });
    if (account && amount) {
        (amount.amount <= account.balance) ? account.balance -= amount.amount : '';
    }
    return account;
}

const transferByIds = function (id1, id2, amount) {
    let account1 = accounts.find((e) => {
        return e.accountId == id1;
    });
    let account2 = accounts.find((e) => {
        return e.accountId == id2;
    });
    if (account1 && account2 && amount) {
        if (amount.amount <= account1.balance) {
            account1.balance -= amount.amount;
            account2.balance += amount.amount;
        } else {
            return { error: 'Account 1 does not have enough balance' };
        }
        return [account1, account2];
    }
}

const deleteAccount = function (id) {
    let account = accounts.find((e) => {
        return e.accountId == id;
    });

    if (account) {
        if (account.balance == 0) {
            accounts.splice(accounts.indexOf(account), 1);
        } else {
            return { error: 'There is available balance in the account' };
        }
    }
    return account;
}

const addAccount = function (data) {
    if (data.accountId && data.balance >= 0 && data.accountHolderIds.length > 0) {
        accounts.push(data);
    }
    return data;
}

const getBalance = function (id) {
    let account = accounts.find((e) => {
        return e.accountId = id;
    });

    return account.balance;
}

exports.findById = findById;
exports.findAll = findAll;
exports.depositById = depositById;
exports.withdrawById = withdrawById;
exports.transferByIds = transferByIds;
exports.deleteAccount = deleteAccount;
exports.addAccount = addAccount;
exports.getBalance = getBalance;