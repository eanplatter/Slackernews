This is where we will hold all of our TEMPLATES. 

Since AngularJS is a SPA framework (Single Page Application) our Single Page is our INDEX.html. Because of this
our app uses what's called TEMPLATES or PARTIALS to render other views.

These templates are just HTML files. They don't need things like a <!DOCTYPE html> or <head></head> or <body></body>.

This is because they're merely injected into the INDEX.html. Essentially, they replace the <div ng-view></div> in our index. 

PS you'll wanna delete this file as well. 