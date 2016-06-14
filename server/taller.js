import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  prueba(val) {
    check(val, Number);
    return val * 2;
  },
});
