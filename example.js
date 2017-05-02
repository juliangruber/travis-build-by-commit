'use strict'

const fetch = require('.')

fetch({
  repo: ['juliangruber', 'travis-watch'],
  sha: 'a38ad2430f05fc7d6ab4f165fa5a19632132c095'
}).then(build => console.log({ build }))
