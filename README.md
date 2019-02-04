# give-promise
A simple wrapper around `Promise` providing a more human-friendly interface

+ [What it does](#what-it-does)
  + [But ESM](#but-esm)
+ [Raison d'être](#raison-dêtre)

## What it does
Wraps this:
```js
	let resolve
	let reject
	const promise = new Promise((innerResolve, innerReject) => {
		 resolve = innerResolve;
		 reject = innerReject;
	});
```

So that you can do this:
```js
	const givePromise = require('give-promise')

	const [promise, resolve, reject] = givePromise()
```

### But ESM
Here you go:
```js
	import givePromise from 'give-promise/index.mjs'
```

If you use a module bundler like `webpack` or `rollup`, you can point `'give-promise'` to `'give-promise/index.mjs'` and then do this:
```js
	import givePromise from 'give-promise'
```

See your bundler's docs for how to setup that redirect, should be simple.

## Raison d'être
Personally, I don't like the default interface of `Promise`. Needing to wrap my code inside a constructor just seems bad to me. I found myself doing the above extraction quite frequently and therefore decided to put that into a neat little helper.

With this, you can pass around the promise and its related resolve and reject functions quite easily and intuitively.
