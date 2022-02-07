## Creating a replicaset cluster on mongodb

### 1. Create .env file and store on it
```
MONGO_UN=your_root_un
MONGO_PW=your_root_complicated_password
```

### 2. run the compose file
```
docker-compose up --build
```

### 3. get into the one of your nodes and initiate the cluster
3.1. Get into the container

```
docker exec -it mongo-primary bash
```

3.2. Connect to the mongodb running instance

```
mongosh -u your_root_un -p your_root_complicated_password
```

3.3 Initiate the replicaset

```
rs.initiate({"_id" : "bosta-rs-1","members" : [{"_id" : 0,"host" : "mongo-primary:27017"},{"_id" : 1,"host" : "mongo-worker-1:27017"},{"_id" : 2,"host" : "mongo-worker-2:27017"}]});
```

### 4. Exit from mongosh then reconnect to the whole cluster

```
mongosh mongodb://your_root_un:your_root_complicated_password@mongo-primary,mongo-worker-1:27018,mongo-worker-2:27019/?replicaSet=bosta-rs-1
```

___The above replicaset URI use it when you connect using any other client such as nodejs___

