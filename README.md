
A port of the <https://c19in.github.io/incovid19> frontend available at
<https://github.com/c19in/incovid19>.

## Testing

The website is written using react and is built using yarn (a node
alternative). To install dependencies:

```
yarn install
```

To test locally:

```
yarn start
```

(this will make a test build available locally).

To deploy:

```
yarn build
```

and sync the created `build` folder to be served by a static
server. To deploy using Github pages, sync to the `docs` folder, e.g.,

```
rsync -av --delete build/ docs/
```

and commit / push after adding any newly created files.
