# Git Quick Pusher

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/arcAman07/git-quick-pusher?logo=github&style=for-the-badge)](https://github.com/arcAman07/)
[![GitHub last commit](https://img.shields.io/github/last-commit/arcAman07/git-quick-pusher?style=for-the-badge&logo=git)](https://github.com/arcAman07/)
[![GitHub stars](https://img.shields.io/github/stars/arcAman07/git-quick-pusher?style=for-the-badge)](https://github.com/arcAman07/git-quick-pusher/stargazers)
[![My stars](https://img.shields.io/github/stars/arcAman07?affiliations=OWNER%2CCOLLABORATOR&style=for-the-badge&label=My%20stars)](https://github.com/arcAman07/git-quick-pusher/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/arcAman07/git-quick-pusher?style=for-the-badge&logo=git)](https://github.com/arcAman07/git-quick-pusher/network)
[![Code size](https://img.shields.io/github/languages/code-size/arcAman07/git-quick-pusher?style=for-the-badge)](https://github.com/arcAman07)
[![Languages](https://img.shields.io/github/languages/count/arcAman07/git-quick-pusher?style=for-the-badge)](https://github.com/arcAman07/git-quick-pusher)
[![Top](https://img.shields.io/github/languages/top/arcAman07/git-quick-pusher?style=for-the-badge&label=Top%20Languages)](https://github.com/arcAman07/git-quick-pusher)
[![Issues](https://img.shields.io/github/issues/arcAman07/git-quick-pusher?style=for-the-badge&label=Issues)](https://github.com/arcAman07/git-quick-pusher)
[![Watchers](https://img.shields.io/github/watchers/arcAman07/git-quick-pusher?label=Watch&style=for-the-badge)](https://github.com/arcAman07/git-quick-pusher/)

<h3>A simple easy to use npm package(CLI tools) to push your code into your github repositories in a single line.</h3>

## Features

1. To connect git to your local github repository in a single line.

2. To push your code to your local github repository in a single line.

3. To create a new branch in your local github repository and push your code to it in a single line.

4. To push your code to an existing branch other than the "master" branch in a single line.

5. More Future Updates will be added as stated in UPCOMING.md and stay tuned for it.

## Installation

<h3> There are two ways of installing and using this package( CLI tool): </h3>

1). As a Command Line Interface (CLI) tool globally in your system

Clone the repository:

```
git clone https://github.com/arcAman07/git-quick-pusher.git
```

Install the dependencies:

```
npm i
```

Install the package globally on your machine:

```
npm i -g
```

2). From npm as a package installed as a dependency

```
npm i gitquickpusher
```

## Usage

1). To connect git to your local github repository for the first time:

Syntax( default branch is set to be "master")

```
quick set "<Commit Message>" <Repository Url>
```

2). To commit and push code to your local existing github repository:

Syntax( default branch is set to be "master")

```
quick push "<Commit Message>"
```

3). To create a new branch in your github repository and push your code to it:

Syntax

```
quick branch <Branch Name> "<Commit Message>"
```

4). To push your code to an already existing branch other than the "master" branch:

Syntax

```
quick send <Branch Name> "<Commit Message>"
```

5). To get help about the CLI commands in this package:

Syntax

```
quick --help
```

## In-Action

## Pre-Requisites

1. Node js installed globally in your local system.

2. Presence of any text-editors like Atom, Goland, VS Code, etc .

3. Initialise npm in your current project and then install the package in your local system.

## Contributions

Check out the CONTRIBUTING.md file to read about the contribution guidelines of this package.

## Wrap-Up

1. If you enjoyed this package and our using it in your day to day life for your projects, do star the repo.

2.
