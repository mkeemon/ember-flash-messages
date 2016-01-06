import Ember from 'ember';

export function initialize(/* container, application */) {

  ['Controller', 'Route', 'Component'].forEach(function(classType) {
    Ember[classType].reopen({
      flashMessageQueue: Ember.inject.service(),

      flashMessage: function(message) {
        if (typeof message === 'string') {
          message = {
            type: arguments[0],
            content: arguments[1]
          };
        }

        this.get('flashMessageQueue').pushMessage(message);
      },

    });
  });
}

export default {
  name: 'flash-message-queue',
  initialize: initialize
};
