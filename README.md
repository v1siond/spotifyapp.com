## SpotifyApp Searcher

This is the primary site for [SpotifyAppSearcher](https://spotifyappsearch.herokuapp.com/).  It is

a Spotify-powered  site that permits access to Artist information which include

albums, tracks, images, and more.



### Development

You are never to push to the `master` branch in this repository.  The only way to get code into the project's master branch is to:

- Create a feature branch off of master.

- Write code and tests for that code in this branch until you're happy with it.

- Open a new Pull Request requesting to merge this branch into master.


#### Setup

The setup its pretty straight forward, you need nodejs, angular, grunt, protractor, jasmine, karma and sass. With npm all the dependencies will be installed.

You could also install it using [asdf](https://github.com/asdf-vm/asdf).  This

repo has a `.tool-versions` file which will automatically switch you to 0.17.1

when you're in here, which is nice if you work on newer Elm apps.


#### Configuration


#### Stylelint


I used `Stylelint` to lint the scss files, to install just run:


`npm install -g stylelint`

`npm install stylelint stylelint-scss`

`npm install stylelint-order`


now you can lint the scss files like `stylelint app/assets/stylesheets/**/*.scss --scss syntax`


### License


This is public software done by Alexander Pulido.