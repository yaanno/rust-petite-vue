Rust and Petite-Vue
======================

Inspired by [Jack Herrington's experiment](https://github.com/jherr/rscs-vs-php)

Ingredients:
- Rust & Rocket server
- `petite-vue` (~8kB)

Result:
- 100/100 Lighthouse score (even with using `v-effect`, see below)

# Running

Grab the `data` server from Jack's repo and run the server:
  
```bash
% cd data
% binserve
```

This will serve the pokemon data on port 8080. You can use [binserve](https://github.com/mufeedvh/binserve) or any other fast static server.

Then run the following in this repo (assuming you have Rust and Cargo):

## Rust (Rocket)

```bash
cd rust
cargo run -r
```

Serves on: `http://locahost:8000/`

## Caveats

You can actuall do a lot with `petite-vue`, however replacing the initially rendered html fragment (see `/templates/partial.html.tera`) with a fetched one will result an initial flash because vue will replace the whole data table. However you can add a small mod to `/templates/index.html.tera`:

Instead of this:
```html
<main class="p-5" id="root" v-scope>
```

Use this:
```html
<main class="p-5" id="root" v-scope v-effect={fetchData()}>
```

The drawback here is of course an initial fetch and content replace after the server render - the flash I mentioned will not appear though.

As you can see in the templates you can do a lot by mixing `tera` and vue style props like `v-model` etc.
