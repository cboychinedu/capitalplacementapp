# Build Commands 
$ npm run build 

# Install pm2 
$ sudo npm install -g pm2 

# Install serve 
$ sudo npm install -g serve 

# Run the command to run the react app from the 
# build folder 
$ pm2 start app.config.json 

# List the running pm2 process 
$ pm2 list 

# View the logs 
$ pm2 logs app.config.json 