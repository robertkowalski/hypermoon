'use strict'

const uuid = require('uuid/v4')

function simulateIncomingData (cb) {
  const users = [ 'testuser4321', 'testuser1111' ]
  const user = users[Math.floor(Math.random() * users.length)]

  const ts = Date.now()
  const stub = {
    '_id': uuid(),
    'username': user,
    'ts': ts,
    'entry': [
      '0',
      user,
      'on',
      [
        '189',
        0,
        ts,
        'EOS.USD',
        Math.random * 10000,
        1,
        500,
        1,
        user
      ]
    ]
  }

  cb(null, stub)
}

function work (first) {
  setTimeout(() => {
    simulateIncomingData((err, data) => {
      if (err) {
        console.error('ouch', err)
      }

      console.log('hyper hyper!', data)
      work()
    })
  }, first ? 0 : 500)
}

work(true)

module.exports = work
