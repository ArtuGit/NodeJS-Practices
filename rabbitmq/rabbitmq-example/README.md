```
docker run -d -p 5672:5672 -p 15672:15672 \
--name rabbitmq-server rabbitmq:management

docker logs rabbitmq-server

docker exec -it rabbitmq-server bash

rabbitmqctl version

rabbitmq-plugins list
```

Management portal at http://localhost:15672/ (Creds: guest/guest)