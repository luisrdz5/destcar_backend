const express = require('express');
const app = express();

const { config } = require('./config/index');
const destcarAPI = require('./routes/destcarAPI');
const driverAPI = require('./routes/driverAPI');
const userAPI = require('./routes/userAPI');
const paymentsAPI = require('./routes/paymentsAPI');
const tripsAPI = require('./routes/tripsAPI');
const authAPI = require('./routes/auth');

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`New UserInfo: ${userInfo}`);
});

app.use(express.json());
authAPI(app);
tripsAPI(app);
paymentsAPI(app);
driverAPI(app);
userAPI(app);
destcarAPI(app);


app.listen(config.port, function() {  
    console.log(`Listening http://localhost:${config.port}`);
  });