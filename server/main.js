import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  suma(arg1, arg2) {
    check(arg1, Number);
    check(arg2, Number);
    if (arg1 === arg2) {
      if (arg1 === 10) {
        return arg1 + arg2;
      }
      if (arg1 === 20) {
        return arg1 + arg2;
      }
    } else {
      if (arg1 === 10) {
        return arg1 + arg2;
      }
      if (arg1 === 20) {
        return arg1 + arg2;
      }
    }
    return false;
  },
});
