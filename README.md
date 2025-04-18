# :warning: nodecg-io is abandoned
This project is no longer actively maintained and is archived.
The domain [nodecg.io](https://codeoverflow-org.github.io/nodecg-io-docs/RELEASE/) is also not available anymore.
Use this project at your own risk - breaking APIs and security vulnerabilities are expected to happen soon.
If you wish to continue nodecg-io, please fork it.
Similar projects may or may not happen in the future [here](https://github.com/sebinside).


# nodecg-types

**⚠ This package was only intended for use with NodeCG v1 till official typings for NodeCG v2 are published in a separate package. As v2 has been released this package is practically deprecated. Only updates for eventual minor/fix version upgrades for NodeCG v1 will be ported here. Use the official `@nodecg/types` package from now on for newer projects that use NodeCG v2!**

If you are developing [NodeCG](https://nodecg.dev) bundles in TypeScript you need typings for nodecg.

The [official guide](https://www.nodecg.dev/docs/frameworks/typescript#using-type-definitions) recommends that you import them directly from the local NodeCG installation using relative paths. This can easily break if the install NodeCG version is incorrect or the user has placed your bundle somewhere other than in `nodecgInstall/bundles/yourBundle`. Also your bundle cannot be compiled if you don't have NodeCG installed.

Some people require the `nodecg` npm package directly to get around these problems. However this pulls in all the dependencies of NodeCG into your project/`node_modules` directory which are tremendous in count and size.
Because of this `npm install`s are pretty slow and also you have NodeCG stored multiple times on your disk. Once for your actual install and then one additional install for each TypeScript bundle that imports the NodeCG typings this way.

`nodecg-types` solves this by republishing just the [official NodeCG types](https://github.com/nodecg/nodecg/tree/master/types). It does not contain any other NodeCG code and only has the dependencies that are needed for the typings to work.

Note: this is an unofficial package and a temporary workaround till NodeCG 2.x is released! Please refer to [this](https://github.com/nodecg/nodecg/issues/552) issue regarding how the official NodeCG typings will be handled in the future.

## Usage

`nodecg-types` behaves the same way as the official `nodecg` npm package regarding types.

You install it using npm:

```shell
npm install nodecg-types --save
```

And then import the typings you need. The paths are completely the same meaning `nodecg-types` is a drop-in replacement and you can just exchange `nodecg` for `nodecg-types`:

```typescript
import { NodeCG } from "nodecg-types/types/server";
```
