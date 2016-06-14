/* eslint-disable */
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import './taller.html';

Template.taller.onCreated(function helloOnCreated() {
  this.tallerVal = new ReactiveVar(0);
});

Template.taller.events({
  'submit .taller-valor'(event, instance) {
    event.preventDefault();
    const val = Number(event.target.val.value);
    Meteor.call('prueba', val, function(error, result) {
      if (error) {
        alert('Error');
      } else {
        instance.tallerVal.set(result);
      }
    });
  },
});

Template.taller.helpers({
  tallerVal() {
    return Template.instance().tallerVal.get();
  },
});
