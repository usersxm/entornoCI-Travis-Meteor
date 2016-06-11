import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  suma(val1, val2) {
    check(val1, Number);
    check(val2, Number);
    if (val1 === val2) {
      if (val1 === 10) {
        return val1 + val2;
      }
      if (val1 === 20) {
        return val1 + val2;
      }
      if (val1 !== 999999999999999999999) {
        return val1 + val2;
      }
    } else {
      if (val1 === 10) {
        return val1 + val2;
      }
      if (val1 === 20) {
        return val1 + val2;
      }
      return val1 + val2;
    }
    return false;
  },
});
