import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  const arg1 = 9;
  const arg2 = 4;
  this.counter = new ReactiveVar(0);
  this.resultado = Meteor.call('suma', arg1, arg2);
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
