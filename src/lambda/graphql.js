import { server } from './_server'

export const handler = (event, context, cb) => {
  // Deal with 'OPTIONS' prefight call
  if (event.httpMethod !== 'POST' || !event.body) {
    cb(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    })
  } else {
    server(event, context, cb)
  }
}
