# Graffiti development environment with Nix

Thanks to the myriad interpreted languages at our disposal, creating a
terminal program on Unix can be as easy as adding the appropriate
`#!`-line to a text file, then marking the file as executable. Now, we bring
the same simplicity to building GUI apps, thanks to Graffiti, Node.js, and Nix.

## Step 1. Preparation

Clone this repository:

```
git clone https://github.com/egasimus/graffiti-nix
cd graffiti-nix
```

Install [Nix](https://nixos.org/nix/) package manager:

* [Get Nix for Linux or Mac](https://nixos.org/nix/download.html).
* [How to install Nix on Windows 10 with WSL](https://nathan.gs/2019/04/12/nix-on-windows/)
* [Official NixOS OVA](https://nixos.org/nixos/download.html#virtualbox-appliances).

Try it out:

```
./01-tutorial.js
```

## Step 2. Hello Graffiti

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
```

Save it, and run it.

## Step 3. Adding NPM modules

## Step 4. Frameworks and transpilation

## Step 5. Native dependencies

## Step 6. Packaging
