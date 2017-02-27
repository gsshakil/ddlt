var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'signin') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('signin');
      }
    }
  ]
});

FlowRouter.notFound = {
    name: 'notFound',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "NotFound" });
    }
}

exposed.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Airbnb_list" });
    }
});

exposed.route('/about', {
    name: 'about',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "About" });
    }
});

exposed.route('/contact', {
    name: 'contact',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Contact" });
    }
});

loggedIn.route('/tasks', {
    name: 'tasks',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Tasks" });
    }
});







