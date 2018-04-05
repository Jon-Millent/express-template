var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var router = require('./routers');
var app = express();

const key = 'j48g47f47ddf4fd47as4sad47dfg7wthl1'

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(key));

app.use(session({
  secret: 'j48g47f47ddf4fd47as4sad47dfg7wthl1', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 },
  resave: true,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');

router(app); //设置路由

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  let sta = 0
  // render the error page
  res.status(sta = err.status || 500);

  if(sta == 500){
    console.log(err)
  }
  res.render('error');
});

module.exports = app;
