'use strict'

const Travis = require('travis-ci')

const travis = new Travis({ version: '2.0.0' })

module.exports = ({ repo, sha }) => {
  const getBuilds = () => new Promise((resolve, reject) => {
    travis
      .repos(repo[0], repo[1])
      .builds
      .get({ event_type: 'push' }, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
  })

  return getBuilds()
    .then(({ builds, commits }) => {
      if (!builds.length) throw Error('no builds found')
      const commit = commits.find(c => c.sha === sha)
      if (!commit) throw Error('commit not found')
      const build = builds.find(b => b.commit_id === commit.id)
      if (!build) throw new Error('build not found')
      return build
    })
}
