const { StatusCodes: status } = require('http-status-codes');
const { apiResponse } = require("../utils/apiResponse.utils");
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const fs = require('fs');
const data = require('../../data.json');

module.exports = {
    index: async () => {
        try {
            return apiResponse(status.OK, 'OK', 'Hello World!');
        } catch (e) {
            throw apiResponse(e.code || status.INTERNAL_SERVER_ERROR, e.status || 'INTERNAL_SERVER_ERROR', e.message);
        }
    },
    showData: async () => {
        try {
            return apiResponse(status.OK, 'OK', 'Success get data', data);
        } catch (e) {
            throw apiResponse(e.code || status.INTERNAL_SERVER_ERROR, e.status || 'INTERNAL_SERVER_ERROR', e.message);
        }
    },
    addData: async () => {
        try {
            const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
            data.names.push(randomName);
            fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

            return apiResponse(status.OK, 'OK', 'Data added successfully!', { name: randomName });
        } catch (e) {
            throw apiResponse(e.code || status.INTERNAL_SERVER_ERROR, e.status || 'INTERNAL_SERVER_ERROR', e.message);
        }
    },
};
