const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~NJg2mCyQ#6dmSepi5rM_Ol4aD8hS5gCWYNvLqPBQlB_Cjd2Y9QWU'
};
