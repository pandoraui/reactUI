'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var errorHandler = require('errorhandler');

// var amuiHelper = require('amui-hbs-helper')(hbs);

var rootDir = path.join(__dirname, './');
var appDir = path.join(rootDir, 'dist/docs');

console.log(process.env.NODE_ENV)

var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(appDir, './'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
// app.use(require('less-middleware')(path.join(appDir, 'public'),
//   {
//     debug: true,
//     parser: {
//       paths: ['./']
//     }
//   }
// ));

app.use(express.static(appDir));

// ./dist
//app.use(express.static(path.join(rootDir, 'dist')));
// app.use(express.static(path.join(rootDir, 'widget')));
// app.use(express.static(path.join(rootDir, 'node_modules')));

//app.use('/', routes);
router.get('/*', function(req, res) {
  var env;
  if( /debug=1/.test(req.path) ){
    env = 'develop';
  }
  console.log(req.path)
  res.render('index.html', {
    assets: '',
    env: env,
    title: 'HTML5 前端框架',
    version: '2.x',
    publishVersion: 'ibrc8418',
    staticDomain: 'http://s.amazeui.org',
    //components: componentsData,
    //componentsData: JSON.stringify(componentsData),
    header: {
      content: {
        title: 'Amaze UI'
      }
    }
  });
});

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
 });*/

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(errorHandler());
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 5001);

var server = app.listen(app.get('port'), function() {
  console.log('reactUI preview server listening on port ' + server.address().port);
});
