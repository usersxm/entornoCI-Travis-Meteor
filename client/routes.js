import './main.html';

/* eslint-disable */
Router.route('/', function () {
  this.render('index');
});

Router.onAfterAction(function() {
        document.title = 'Taller Integracion Continua';
      }
);

Router.route('/index', function () {
  this.render('index');
});

Router.route('/aboutus', function () {
  this.render('aboutus');
});

Router.route('/correlativas', function () {
  this.render('correlativas');
});
