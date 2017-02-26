import { Template } from 'meteor/templating';
 
import { Tasks } from '../../../imports/api/tasks.js';
 
import './tasks.html';

Template.Tasks.helpers({
    tasks() {
        // Show newest tasks at the top
        return Tasks.find({ userId: Meteor.user()._id }, { sort: { createdAt: -1 } });
    },
});

Template.Tasks.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();
    
        // Get value from form element
        const target = event.target;
        const text = target.text.value;
    
        // Insert a task into the collection
        Tasks.insert({
            text,
            createdAt: new Date(), // current time
            userId: Meteor.user()._id,
        });
    
        // Clear form
        target.text.value = '';
    },
    'click .toggle-checked'() {
        // Set the checked property to the opposite of its current value        
        Tasks.update(this._id, {
            $set: { checked: ! this.checked },
        });             
    },
    'click .delete'() {
        if(confirm("Do you really want to delete this post?")){
            Tasks.remove(this._id);
        };
    },
});