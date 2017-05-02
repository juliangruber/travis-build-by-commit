
# travis-build-by-sha

Fetch the travis build for given commit sha.

## Usage

```js
const fetch = require('travis-build-by-sha')

fetch({
  repo: ['juliangruber', 'travis-watch'],
  sha: 'a38ad2430f05fc7d6ab4f165fa5a19632132c095'
}).then(build => console.log({ build }))
```

```bash
$ node example.js
{ build: 
   { id: 216634685,
     repository_id: 12666653,
     commit_id: 62339610,
     number: '67',
     event_type: 'push',
     pull_request: false,
     pull_request_title: null,
     pull_request_number: null,
     config: 
      { language: 'node_js',
        node_js: [Object],
        sudo: false,
        '.result': 'configured',
        group: 'stable',
        dist: 'precise' },
     state: 'passed',
     started_at: '2017-03-30T06:05:17Z',
     finished_at: '2017-03-30T06:06:22Z',
     duration: 134,
     job_ids: [ 216634686, 216634687 ] } }

```

## Installation

```bash
$ npm install travis-build-by-commit
```

## API

### fetch({ repo, sha })

## License

MIT
