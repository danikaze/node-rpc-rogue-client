# Bootstrap for a node-rpc roguelike client

This repository has everything prepared to just focus on the roguelike client implementation and forget about the development environment.

## Objective

Implement an A.I. for a client to play automatically taking decisions based on what's in the environment.

The game is a extremelly simple [rogue-like](https://en.wikipedia.org/wiki/Roguelike), where the players will be spawned into a small dungeon and they need to survive.

The game ends when there's only one player alive (_Battle Royale style_) or, because depending on the implementation of each client they might not be killing each other, after a pre-defined number of turns.

In case that the time limit is reached and more than one player is alive, the player with more _treasures_ wins.

## Installation

Just clone this repository (a fork is recommended in case any update is published, so you can rebase) and install the environment:

```
npm install
```

Then you can just head and implement the required functions in `src/implementation`.

## Developing

Running the following command:

```
npm run build
```

will generate a bundle of your client inside the `app` folder, which is the one to use when importing it as a RPC (_Remote Procedure Call_) implementation.

All the needed information is in the `model` folder, but in case more help is required, you can check the `example-data` folder where there are several examples of the data being sent by the server for each method.
