var Service = require('node-windows').Service;
// Create a new service object
var svc = new Service({
  name:'Market Profiteer',
  description: 'The api for the Market Profiteer application.',
  script: 'C:\\MarketProfiteer\\Api\\index.js'
});
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
svc.install();