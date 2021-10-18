# Brewery Finder React Hooks Tutorial

Fork and clone the repository and the do the following to run the app.

```
$ yarn
```

```
$ yarn start
```

If you want to run the application as a docker container run the following
```
$ docker build -t sample:dev .
```

```
$ docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```
