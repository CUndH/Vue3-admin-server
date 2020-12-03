
var express = require('express');
const { resp } = require('../resp');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json(resp({
    permissions: [
      'person:view',
    ],
    id: 2379,
    name: 'CHEN',
    nickname: 'ccc',
    phone: '13928281111',
    email: '88887777@qq.com',
  }))
});

module.exports = router;