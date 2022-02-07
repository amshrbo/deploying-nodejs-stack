# deploying-nodejs-stack
- Deploying a server and client socket apps that simulates a tcp server ___that push a stream of data___ and client connects to it, created using nodejs.
- Creating a mongo relplicaset cluster, then integerating it with the client to store the streamed data into the mongo replset cluster 

## Get up and running
1. clone the repo

    ```
    git clone git@github.com:amshrbo/deploying-nodejs-stack.git
    ```

2. Run the mongo replset cluster using instructions provided in this [readme file](./replicaset_cluster)

3. Run your client and server simulation using.
    - make sure to have a .env file for storing your env vars required by the compose file
        ```
        MONGO_UN=root_un
        MONGO_PW=root_pw
        DB_NAME=your_db_name
        MONGO_URI=mongodb://root_un:root_pw@mongo-primary,mongo-worker-1:27018,mongo-worker-2:27019/?replicaSet=bosta-rs-1
        ```

    ```
    docker-compose up --build
    ```

## Stop the infrasturcture
1. Stop the client and server

    ```
    docker-compose down
    ```

2. Stop the mongo replset cluster 

    ```
    cd replicaset_cluster
    docker-compose down # use -v of you wanna get ride of the persisted data
    ```

## Mongodb cluster info
- It's a replicaSet cluster that consists of three nodes
- One primary that handels read and write operations
- The other 2 nodes are secondary that handels replication
- If the primary node fails for any specific reason, the two other nodes will vote for one of them to be the primary and the other to be the secondary (worker) node.
- The communication between nodes encrypted using keyfile auth provided by mongodb 


## Resources
- [The mongodb documentation for replicaset](https://docs.mongodb.com/manual/replication/)
- [An awesome playlist for mongodb in YouTube](https://www.youtube.com/watch?v=LBthwZDRR-c&list=PL34sAs7_26wPvZJqUJhjyNtm7UedWR8Ps)
- [A YT video on how to spin up a mongo cluster using docker compose with a keyfile auth enabled](https://www.youtube.com/watch?v=-XzMfd4XQak)
- [Using keyfile auth as handling encrypted connection between the nodes](https://docs.mongodb.com/manual/tutorial/enforce-keyfile-access-control-in-existing-replica-set/)
- [How to enable communication between to compose files services](https://tjtelan.com/blog/how-to-link-multiple-docker-compose-via-network/)

## To Do, or To Improve
- ___For a higher performance you can add another replicaset cluster and setup sharding between them.___
