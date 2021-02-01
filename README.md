## Cors Cheese Server
An express proxy-server to avoid same-origin policy bug when working with API's in front end development. Project forked from github.com/15Dkatz

This project is an example of how to set up a proxy server to help frontends running in the browser beat the same origin policy.

The idea is to use express middleware to apply `res.header('Access-Control-Allow-Origin', '*');` around requests to another server, with a more strict CORS setting.

That way, a server-to-server request could be completed, where the browser's same-origin policy would block it.

See the original article for a full walkthrough: [https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9z](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)

### Run the server
```
npm i
node local.js
```

Then visit `localhost:5000/cheeses`.

#### Enjoy!
