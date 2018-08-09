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
        BlazeLayout.render('layout1', { top: "Navbar", main: "Home" });
    }
});

exposed.route('/projects', {
    name: 'projects',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Projects" });
    }
});

exposed.route('/people', {
    name: 'people',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "People" });
    }
});

exposed.route('/brands', {
    name: 'brands',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Brands" });
    }
});

exposed.route('/jobs', {
    name: 'jobs',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Jobs" });
    }
});

exposed.route('/competitions', {
    name: 'competitions',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Competitions" });
    }
});

exposed.route('/products', {
    name: 'products',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Products" });
    }
});

exposed.route('/events', {
    name: 'events',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Events" });
    }
});

exposed.route('/campaigns', {
    name: 'campaigns',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Campaigns" });
    }
});

exposed.route('/learning', {
    name: 'academy',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Academy" });
    }
});

exposed.route('/apps', {
    name: 'apps',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Apps" });
    }
});
