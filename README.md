# SpaceX Launch Viewer

A React pilot that allows users to view SpaceX launches. The application fetches launch data from the SpaceX API and displays a random launch image along with other bits and bobs such as the launch name and date.

## Table of Contents

- [SpaceX Launch Viewer](#spacex-launch-viewer)
  - [Table of Contents](#table-of-contents)
  - [SpaceX Launch Server](#spacex-launch-server)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Bundle Size](#bundle-size)
  - [Responsive Screenshots](#responsive-screenshots)
  - [Credits](#credits)
  - [License](#license)

## SpaceX Launch Server

There is a Node.js server that I created to fetch the data from the SpaceX API and serve a link to a random Flickr image associated with the launch to the client. The server can be found [here](https://github.com/behnum/spacex-launch-server).

## Demo

<img src="./Vercel.png" alt="Vercel Logo" width="10%" height="10%" />

🛰️ [See it in action](https://spacex-launch-viewer.vercel.app/)

## Installation

To use this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/behnum/spacex-launch-viewer.git
    ```

2. Change into the project directory:

    ```bash
    cd spacex-launch-viewer
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the application, run the following command:

```bash
npm start
```

The application will be running at [http://localhost:3000](http://localhost:3000).

## Bundle Size

![Bundle Size](./bundlephobia.jpg)
Credits: [bundlephobia.com](https://bundlephobia.com)

## Responsive Screenshots

iPhone 12

<img src="./Responsively-Screenshots/iPhone%2012%20Pro.jpeg" alt="iPhone 12" width="30%" height="30%" />

iPad

<img src="./Responsively-Screenshots/iPad.jpeg" alt="iPad" width="30%" height="30%" />

MacBook Pro

<img src="./Responsively-Screenshots/MacBook%20Pro.jpeg" alt="MacBook Pro" width="30%" height="30%" />

## Credits

The following resources/ideas were used in the creation of this project:

- [SpaceX API](https://github.com/r-spacex/SpaceX-API) 🚀
- [Tailwind CSS](https://tailwindcss.com/) 📏
- [Stars: a CodePen by sarazond](https://codepen.io/sarazond/full/LYGbwj) 🌟
- [Glowing Gradient Button: a CodePen by Denis](https://codepen.io/deniscreative/pen/jObmdNW) 🔆
- [Din Psykolog](https://dinpsykolog.se/) for their idea / instructions for this endeavour. 💚

## License

[MIT](https://choosealicense.com/licenses/mit/)
