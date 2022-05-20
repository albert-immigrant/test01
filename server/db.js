const path = require('path');
const _   = require('lodash');
const _db = require('underscore-db');

_.mixin(_db);
const db = _.load(path.join(__dirname + '/db.json'));
const PER_PAGE = 24;

const DatabaseHelper = {
    /* TODO: ddd Pager Logic */
    search: (search) => {
        const searchWord = search.toLowerCase();
        let data = [];

        try {
            data = _(db.users)
                .orderBy('id', 'desc')
                .filter((o) => (_.includes(o.name.toLowerCase(),searchWord)))
                .take(db.users.length)
                .value();
        } catch (e) {
            console.log(e);
            return false;
        }

        return {
            count: data.length,
            visible: data.length,
            data,
        };
    },

    newest: (page) => {
        let data = [];
        let rangeStart = (page - 1) * PER_PAGE;
        let rangeEnd = (page * PER_PAGE) - 1;

        try {
            data = _(db.users)
                .orderBy('id', 'desc')
                .filter((o, i) => (i >= rangeStart && i <= rangeEnd))
                .take(PER_PAGE)
                .value();
        } catch (e) {
            console.log(e);
            return false;
        }

        let visibleCount = page * PER_PAGE;
        return {
            count: db.users.length,
            visible: visibleCount > db.users.length? db.users.length : visibleCount,
            data,
        };
    },

    getOne: (id) => {
        let data = {};

        try {
            data = _(db.users)
                .orderBy('id', 'desc')
                .filter((o) => (o.id == id))
                .take(1)
                .value();
        } catch (e) {
            console.log(e);
            return false;
        }

        return data[0];
    }
};

module.exports = DatabaseHelper;