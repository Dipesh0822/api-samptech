const app = require('./connection/expressConnection');
const admin = require('./connection/angularConnection');
const fs = require('fs');
const http = require('http');
const https = require('https');
var path = require('path');
var compression = require('compression');
_redis = module.exports = require("redis");
_redis_client = module.exports = _redis.createClient(6379);
require('./connection/mongoConnection');
const PORT = process.env.PORT || 4001;
const ADMIN_PORT = process.env.PORT || 4002;
// Http Server 
var httpServer = http.createServer(app);
var adminHttpServer = http.createServer(admin);
// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/samptechnologies.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/samptechnologies.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/samptechnologies.com/chain.pem', 'utf8');
const credentials = {
	key: privateKey,
  cert: certificate,
  ca: ca
};
const httpsServer = https.createServer(credentials, app);
const adminHttpsServer = https.createServer(credentials,admin);
// compress responses
app.use(compression())
app.use('/web',require('./api/web/1'))
app.use('/ui',require('./api/admin/1'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

admin.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/index.html'));
});

// httpServer.listen(PORT,() => {
//   console.log("HTTP Server running on port 80")
// });

// adminHttpServer.listen(4002,() => {
//   console.log("HTTP Server running on port 80")
// });

httpsServer.listen(PORT, () => {
	console.log('HTTPS Server running on port 443 - 4001');
});

adminHttpsServer.listen(ADMIN_PORT, () => {
	console.log('HTTPS Server running on port 443 - 4002');
});
