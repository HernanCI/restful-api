const accountHolders = [
    {
        id: 1,
        name: 'Hernan Castro',
        email: 'hernan.castro@uabc.edu.mx',
        accountsIds: [1, 3],
    },
    {
        id: 2,
        name: 'Pablo Guzman',
        email: 'pguzman98@uabc.edu.mx',
        accountsIds: [2],
    },
    {
        id: 3,
        name: 'Billy Joel',
        email: 'BillyJ@uabc.edu.mx',
        accountsIds: [1, 3],
    },
];

const findById = function (id) {
    return accountHolders.find((e) => {
        return e.id == id;
    });
};

const findByName = function (name) {
    return accountHolders.find((e) => {
        return e.name == name;
    });
};

const findByEmail = function (email) {
    return accountHolders.find((e) => {
        return e.email == email;
    });
};

const findAll = function () {
    return accountHolders;
};

const save = function (id, data) {
    let accountHolder = accountHolders.find((e) => {
        return e.id == id;
    });
    if (accountHolder) {
        for (let [key, value] of Object.entries(data)) {
            accountHolder[key] = value;
        }
    }
    return accountHolder;
}

const deleteAccountHolderById = function (id) {
    let accountHolder = accountHolders.find((e) => {
        return e.id == id;
    });

    if (accountHolder) {
        accountHolders.splice(accountHolders.indexOf(accountHolder), 1);
    }
    return accountHolder;
}

const add = function (data) {
    if (data) {
        accountHolders.push(data);
    }
    return data;
}

exports.findById = findById;
exports.findByName = findByName;
exports.findByEmail = findByEmail;
exports.findAll = findAll;
exports.save = save;
exports.deleteAccountHolderById = deleteAccountHolderById;
exports.add = add;

