# AmoTube (AMOLED YouTube)

A browser extension that makes YouTube AMOLED.

Good for your eyes, good for your screen (and your battery, if you have one)

Compatible with Chrome and Firefox!

## Read this first

### Stable relase install

- On Chrome, if you want to install the stable releases, go to `chrome://flags` and search for the `#extension-mime-request-handling` flag and set it to `Always prompt for install`.

- Stable installs doesn't work anymore under Chrome because now they only allow installing directly .crx files if the extension is in the Chrome Web Store. To make this work, you will need to follow the [other method of installing the stable version](#alternative-3---stable-read-this-first).

- For Firefox, rename the `.crx` extension to `.zip` and install like any other ones.

### WIP: bugs and tests

- This is a WIP and sometimes the tweaks may not work. If you know anything to fix these issues, make a PR and I'll see if it is ok.

## Installation

### Alternative #1 (Chrome) - nightly (recommended)

1. Download and install [Git](https://git-scm.com) if you do not have it installed already.
2. Open your Terminal or Command Prompt
3. Clone the repo using the command `git clone https://github.com/lucmsilva651/amotube`
4. Visit `chrome://extensions/` and turn on developer mode (toggle in top right).
5. Click `Load unpacked` and select the directory you clone the repository to.

### Alternative #2 (Chrome) - stable ([read this first](#stable-relase-install))

1. Go to `chrome://extensions` and enable developer mode (toggle in top right).
2. Download the .crx from [Releases](https://github.com/lucmsilva651/amotube/releases/latest/) and drag-and-drop it onto the `chrome://extensions` page.

### Alternative #3 (Chrome) - stable ([read this first](#stable-relase-install))

1. Download the .crx from [Releases](https://github.com/lucmsilva651/amotube/releases/latest/) and extract the contents to a folder.
2. Visit `chrome://extensions/` and turn on developer mode (toggle in top right).
3. Click `Load unpacked` and select the directory you extracted the crx to.

### Alternative #4 (Firefox) - stable ([read this first](#stable-relase-install))

1. Go to `about:debugging` and enable developer mode (toggle in top right).
2. Download the .crx from [Releases](https://github.com/lucmsilva651/amotube/releases/latest/)
3. Rename the .crx file to change it's extension to .zip.
4. Click on "This Firefox" on the sidebar and then "Install temporary extension".
5. Select the .crx you downloaded and renamed.

### Alternative #5 (Firefox) - nightly (recommended)

1. Download and install [Git](https://git-scm.com) if you do not have it installed already.
2. Open your Terminal or Command Prompt
3. Clone the repo using the command `git clone https://github.com/lucmsilva651/amotube`
4. Make a ZIP of the entire folder with WinRAR or 7-Zip.
5. Go to `about:debugging` and enable developer mode (toggle in top right).
6. Click on "This Firefox" on the sidebar and then "Install temporary extension".
7. Select the .zip you made to install it on Firefox.

## Screenshots

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

## License

2025 Lucas Gabriel (lucmsilva) - [BSD 3-Clause License](LICENSE).