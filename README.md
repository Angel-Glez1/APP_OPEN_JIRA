# Next JS Open Jira App

Para correr localmente, se necesita la base de datos (es necesario tener Docker Destokp Instalado )
```
docker-compose up -d
```

* El -d, significa  __detached__

* MongoDB URL local
```
mongodb://localhost:27017/entriesdb
```

# Configuracion de las variables de entorno
Renombrar el archivo __.env.example__ a __.env__


## Llenar la base de datos
llamar a 
```[GET] http://localhost:3000/api/seed```