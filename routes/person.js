
var express = require('express');
const { tableResp } = require('../resp');
var router = express.Router();

const mock = [{
  id: 1,
  name: '陈',
  nickname: 'chen',
  phone: 13591911234,
  email: '8888@qq.com',
  gender: 0,
},{
  id: 2,
  name: '王',
  nickname: 'wang',
  phone: 13591911234,
  email: '8888@qq.com',
  gender: 1,
},{
  id: 3,
  name: '张',
  nickname: 'zhang',
  phone: 13591911234,
  email: '8888@qq.com',
  gender: 2,
}];

router.get('/list', function (req, res, next) {
  res.json(tableResp(+req.query.page, +req.query.size, mock))
});

module.exports = router;