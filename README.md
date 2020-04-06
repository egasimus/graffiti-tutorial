# Graffiti development environment with Nix

Thanks to the myriad interpreted languages at our disposal, creating a
terminal program on Unix can be as easy as adding the appropriate
`#!`-line to a text file, then marking the file as executable. Now, we bring
the same simplicity to building GUI apps, thanks to Graffiti, Node.js, and Nix.

## Step 1. Preparation

There is a single dependency that you'll need to install manually.
That is [Nix](https://nixos.org/nix/), an universal build tool and package
manager that will take care of all further dependencies in an efficient and
reproducible way.

* On Linux and Mac, install Nix from [here](https://nixos.org/nix/download.html).
* On Windows 10, refer to [this guide](https://nathan.gs/2019/04/12/nix-on-windows/)
  to enable Nix under WSL.
* On Windows 7, you're going to need a [VM](https://nixos.org/nixos/download.html#virtualbox-appliances).
  (And sure, I know it's not supported by Microsoft anymore. Like that ever helped.)

## Step 2. Hello Graffiti

Now we're about to get to the good part.

[Graffiti](https://github.com/cztomsik/graffiti) lets you build beautiful GUI
apps using familiar Web technologies. Unlike Electron or NW.js, Graffiti does
not bundle an entire browser engine - it just gives you a lightweight DOM
environment. This means it's faster and more secure, yet can still run
familiar frameworks like React or Mithril.

Graffiti is a native Node.js module, written in Rust. Thanks to Nix, you don't
have to manually install Node or Rust, or compile Graffiti. In a new directory,
run:

```bash
touch hello-world
chmod +x hello-world
```

Then open `hello-world` with your favorite file, and paste this:

```js
#! /usr/bin/env nix-shell
/* the following line will be parsed by nix-shell:
#! nix-shell -i graffiti/bin/graffiti
*/
document.body.appendChild(
  Object.assign(document.createElement('h1'), {
    style: 'background:green',
    textContent: 'Hello Graffiti!'
  }))
```

Save it, and run it.

## Step 3. Adding NPM modules

## Step 4. Frameworks and transpilation

## Step 5. Native dependencies

## Step 6. Packaging
