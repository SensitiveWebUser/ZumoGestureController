<h1 align="center">Zumo Gesture Controller Project</h1>

<div align="center">
  <strong>Zumo Gesture Controller Project</strong>
</div>
<div align="center">
Welcome to my GitHub repository! This project is a full-stack application comprising of a modern React-based frontend, Node Express backend, Arduino Zumo robot, and Raspberry Pi Pico W controller.
</div>
<br />
<div align="center">
Whether you are an experienced developer or just starting, my codebase is well-structured and easy to navigate. I hope you find this project both informative and engaging. Thank you for visiting our repository!
</div>

<br />

<div align="center">
<img alt="GitHub" src="https://img.shields.io/github/license/SensitiveWebUser/ZumoGestureController">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/SensitiveWebUser/ZumoGestureController">
<img alt="GitHub Size" src="https://img.shields.io/github/repo-size/SensitiveWebUser/ZumoGestureController">
</div>

<div align="center">
<sub>
Built with ❤︎ by
<a href="https://github.com/SensitiveWebUser">Alex Hornsby</a>
<a href="https://github.com/SensitiveWebUser/ZumoGestureController/graphs/contributors">
  contributors.
</a>
</sub>
</div>

## Table of Contents

- [Features](#features)
- [Installation](#installation)

## Features

- **React** — A JavaScript library for building user interfaces
- **Express** — A web framework for Node.js
- **Zumo Robot** — A Arduino based robot called Zumo
- **Raspberry Pi Pico W** — A Raspberry Pi Pico W controller for wireless communication with the robot and backend

## Installation

> **Note**
> All environment variables are required.

Copy and paste the `.env.local.template` file and rename to `.env.local` to run the frontend. Instructions are in the file.

> **Note**

To run the frontend, install the packages via `npm i` and then run `npm start dev`.

> **Warning**
> The backend is designed to run on a local machine. It is not designed to be deployed to a server.

To run the backend, install the packages via `npm i` and then run `npm start dev`. The backend is configured to run on `localhost:3001`.

## Dependencies

### Frontend

- [React](https://reactjs.org/)
- [react-dom](https://reactjs.org/docs/react-dom.html)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [react-i18next](https://react.i18next.com/)
- [i18next](https://www.i18next.com/)
- [i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector)
- [i18next-http-backend](https://www.npmjs.com/package/i18next-http-backend)
- [socket.io-client](https://socket.io/docs/v4/client-api/)
- [typescript](https://www.typescriptlang.org/)
- [web-vitals](https://www.npmjs.com/package/web-vitals)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [@mui/material](https://mui.com/)
- [@mui/icons-material](https://mui.com/)
- [@mui/styles](https://mui.com/)
- [@mui/react](https://mui.com/)

### Backend

- [express](https://expressjs.com/)
- [socket.io](https://socket.io/)
- [typescript](https://www.typescriptlang.org/)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [leapjs](https://www.npmjs.com/package/leapjs)
- [helmet](https://helmetjs.github.io/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [axios](https://www.npmjs.com/package/axios)

### Zumo Robot

- [Arduino IDE](https://www.arduino.cc/en/software)
- [Zumo32U4](https://pololu.github.io/zumo-32u4-arduino-library/)
- [Pololu Zumo 32U4 library](https://github.com/pololu/zumo-32u4-arduino-library/blob/master/examples/MazeSolver/TurnSensor.h)
- [WString.h](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/)

### Raspberry Pi Pico W

- [Raspberry Pi Pico W](https://www.raspberrypi.org/products/raspberry-pi-pico/)
- [Raspberry Pi Pico W SDK](https://www.raspberrypi.org/documentation/rp2040/getting-started/)
- WiFi
- WiFiClient
- WiFiServer
- LEAmDNS

## YouTube Videos

- [Zumo Gesture Controller Project](https://youtu.be/0-o580kOyuM)

## License

CC BY-NC-SA 4.0 © [SensitiveWebUser](https://github.com/SensitiveWebUser)
