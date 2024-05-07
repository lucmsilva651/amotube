# AmoTube (AMOLED YouTube)

Chrome extension that makes YouTube AMOLED.

Good for your eyes, good for your screen (and your battery, if you have one)

# Read this first

### Stable relase install

- If you want to install the stable releases, go to `chrome://flags` and search for the `#extension-mime-request-handling` flag and set it to `Always prompt for install`.

### WIP: bugs and tests

- This is a WIP and sometimes the tweaks may not work. If you know anything to fix these issues, make a PR and I'll see if it is ok.

### Extension ID

- When you install [nightly](https://github.com/lucmsilva651/amotube/tree/main#alternative-1---nightly-recommended) builds, you will not have some extended update support.   
  
  - As the extension ID always changes on every installation because of the method used, you always will need to use `git pull` sometimes to pick the most recent changes around the time.

- If you install the [stable](https://github.com/lucmsilva651/amotube/tree/main#alternative-2---stable-read-this-first) version, the extension ID will always be `mipmmienhagcbdjfdfolijbhkcgmkhkn`, as I compiled with my own private key.
  
  - I created a file named `updates.xml` in this repo who will always ensure that you will have the most recent stable version. But sorry, it's not guaranteed if I will always compile the source to make the recent changes avaliable to some users, so, if you want some more things (if it will have so), just use nightly builds, as they are more raw and always includes the most recent changes in the repository (at clone time).

# Installation

### Alternative #1 - nightly (recommended)

1. Download and install [Git](https://git-scm.com) if you do not have it installed already.
2. Open your Terminal or Command Prompt
3. Clone the repo using the command `git clone https://github.com/lucmsilva651/amotube`
4. Visit `chrome://extensions/` and turn on developer mode (toggle in top right).
5. Click `Load unpacked` and select the directory you clone the repository to.

### Alternative #2 - stable ([read this first](https://github.com/lucmsilva651/amotube/blob/main/README.md#stable-relase-install))

1. Go to `chrome://extensions` and enable developer mode (toggle in top right).
2. Download the .crx from [Releases](https://github.com/lucmsilva651/amotube/releases/latest/) and drag-and-drop it onto the `chrome://extensions` page.

### Alternative #3 - stable ([read this first](https://github.com/lucmsilva651/amotube/blob/main/README.md#stable-relase-install))

1. Download the .crx from [Releases](https://github.com/lucmsilva651/amotube/releases/latest/) and extract the contents to a folder.
2. Visit `chrome://extensions/` and turn on developer mode (toggle in top right).
3. Click `Load unpacked` and select the directory you extracted the crx to.

# Screenshots

<details>

<summary>Screenshot 1 (YouTube Home Page)</summary>
  <br>

![](https://telegra.ph/file/649e1a03c2ddbc8d7fee5.jpg)

</details>

<details>
  <summary>Screenshot 2 (YouTube Video Page)</summary>
  <br>

![](https://telegra.ph/file/457d96c874e42fcb6c0c3.jpg)

</details>

# License

2024 Lucas Gabriel (lucmsilva) - [MIT License](https://github.com/lucmsilva651/amotube/?tab=MIT-1-ov-file).
