# Catalano Nicolas

### Installation

1. Clone the repo

   ```shcompose
   git clone https://github.com/murtagh95/react-node.git
   ```

2. Change directory to ComparteRide

   ```sh
   cd react-node
   ```

3. Build containers with docker-compose

   ```sh
   docker-compose build
   ```

4. Start containers

   ```sh
   docker-compose up -d

## Usage

* Open <http://127.0.0.1:$(NGINX_PORT)> and register your user.

## Create a .env file and paste the following text

```sh
# NGINX
APP_PORT=
SERVER_NAME=
NGINX_PORT=
DB_PORT=
ENVIRONMENT=
```
