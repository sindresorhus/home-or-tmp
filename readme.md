# home-or-tmp

> Get the user home directory with fallback to the system temp directory

Useful in cases where the home directory either isn't set or doesn't exist.

## Install

```
$ npm install home-or-tmp
```

## Usage

```js
import homeOrTemp from 'home-or-tmp';

console.log(homeOrTemp);
//=> '/Users/sindresorhus'

// And if there is no home directory:

console.log(homeOrTemp);
//=> '/var/folders/m3/5574nnhn0yj488ccryqr7tc80000gn/T'
```

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-home-or-tmp?utm_source=npm-home-or-tmp&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
