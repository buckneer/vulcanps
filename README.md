
# VulcanPS

The backend and the frontend are divided into two repositores.


## Deployment

To deploy this project run:

```bash
    $ cd /var/www
    $ git clone git clone https://[ACCESS_TOKEN]@github.com/buckneer/vulcanps.git
    $ cd vulcanps/
```

This will download repositories

### Frontend
```bash
    $ cd frontend/
    $ npm install
```

Now you'll need to update .env files for the frontend

```bash
    $ sudo nano .env.production
```
REACT_APP_URL="https://[public ip of the vps]:5001/api"

REACT_APP_PAYPAL_ID="[your paypal id]"

after that, build the app and run it with pm2

```bash
    $ npm run build
    $ pm2 serve build/ 5001 --spa
```


### Backend
```bash
  $ cd backend/
  $ npm install
```

You'll have to edit .env file here, update it with your MySQL database

DB_HOST=[host]

DB_USER=[username]

DB_PASSWORD=[password]

DB_DATABASE=[database]

After that, run:
```bash
  $ npm run build
  $ pm2 start npm -- start 5001
```

### Finally
Check if the services are running by typing:
```bash
    $ pm2 list
```

