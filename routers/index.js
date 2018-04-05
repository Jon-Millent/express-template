

module.exports = function (app) {
  app.use('/', require('./home')) //主页控制器
  app.use('/api', require('./api')) //主页控制器
};
