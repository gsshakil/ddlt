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

exposed.route('/projects/add', {
    name: 'project-add',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "ProjectAdd" });
    }
});

exposed.route('/people', {
    name: 'people',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "People" });
    }
});

exposed.route('/people/details', {
    name: 'peopleDetails',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "PeopleDetails" });
    }
});

exposed.route('/brands', {
    name: 'brands',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Brands" });
    }
});

exposed.route('/brand/details', {
    name: 'brandDetails',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "BrandDetails" });
    }
});

exposed.route('/jobs', {
    name: 'jobs',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Jobs" });
    }
});

exposed.route('/jobs/add', {
    name: 'job-add',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "JobPost" });
    }
});

exposed.route('/competitions', {
    name: 'competitions',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Competitions" });
    }
});

exposed.route('/competitions/add', {
    name: 'competition-add',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "CompetitionAdd" });
    }
});

exposed.route('/products', {
    name: 'products',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Products" });
    }
});

exposed.route('/products/add', {
    name: 'product-add',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "ProductAdd" });
    }
});

exposed.route('/events', {
    name: 'events',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Events" });
    }
});

exposed.route('/events/add', {
    name: 'event-add',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "EventAdd" });
    }
});

exposed.route('/campaigns', {
    name: 'campaigns',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Campaigns" });
    }
});

exposed.route('/campaigns/add', {
    name: 'campaign-add',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "CampaignAdd" });
    }
});

exposed.route('/learning', {
    name: 'academy',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Academy" });
    }
});

exposed.route('/learning/add', {
    name: 'course-add',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "CourseAdd" });
    }
});

exposed.route('/apps', {
    name: 'apps',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Apps" });
    }
});

exposed.route('/settings/profile', {
    name: 'settings',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "AccountSettings" });
    }
});

exposed.route('/settings/social', {
    name: 'social',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "SocialProfiles" });
    }
});

exposed.route('/settings/password', {
    name: 'password',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Password" });
    }
});

exposed.route('/settings/email', {
    name: 'email',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "EmailNoifications" });
    }
});

