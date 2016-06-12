import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.suma.onCreated(function helloOnCreated() {
  this.resultado = new ReactiveVar(0);
});
/* eslint-disable */
Template.suma.events({
  'submit .nueva-suma'(event, instance) {
    event.preventDefault();
    const target = event.target;
    const val1 = Number(target.val1.value);
    const val2 = Number(target.val2.value);
    Meteor.call('suma', val1, val2, function(error, result) {
      if (error) {
        alert('Error');
      } else {
        instance.resultado.set(result);
      }
    });
  },
});

Template.suma.helpers({
  resultado() {
    return Template.instance().resultado.get();
  },
});

Template.navbar.onRendered(function() {
  this.$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
});

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
