# Filend Frontend ReactJS

Welcome to the Filend Frontend ReactJS repository! This repository houses three powerful applications built with ReactJS that cater to various communication needs:


1. <b>Filend</b> - Experience seamless WebRTC-based file sharing, enabling you to effortlessly share files in real-time.

2. <b>Chat Me Up</b> - Engage in real-time communication with Chat Me Up, a dynamic chat application featuring WebSocket technology for both one-on-one and group conversations.

3. <b>Meet Me Up</b> - Embrace virtual meetings with Meet Me Up, a Google Meet Clone that brings high-quality video conferencing and collaboration to your fingertips.


Get started with these cutting-edge applications and enhance your communication experience today!


## Related Repositories
- [Filend Backend NodeJS](https://github.com/AbubakarWebDev/Filend-Backend-NodeJS): This repository holds the backend signaling server code, and also chat application socket code that integrates with this frontend application. For a complete understanding and to see our WebRTC implementation in action, be sure to check out the backend repo as well.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com), and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```
node@18.13.0 or higher
npm@9.2.0 or higher
git@2.39.0 or higher
```

## Clone the repo

```shell
git clone https://github.com/AbubakarWebDev/Filend-Frontend-ReactJS.git
cd Filend-Frontend-ReactJS
```

## Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm run dev
```


## Setting Up Environment Variables

To run the applications smoothly, you'll need to set up environment variables. Here's how you can do it:

1. Locate the `.env.example` files in the application root directory

2. Duplicate the `.env.example` file and rename the duplicate to `.env`.

3. Open the newly created `.env` file in a text editor of your choice.

4. Customize the environment variables according to your requirements and environment. These variables may include API keys, database connection strings, and other configuration settings needed for the applications to function correctly.

5. Save the `.env` file after making your changes.

Please ensure that you **do not** commit your `.env` files to version control, as they may contain sensitive information. Make sure to add `.env` to your `.gitignore` file to prevent accidental commits.

By customizing your `.env` files, you can configure the applications to work with your specific environment, enabling seamless operation.


## Contribution

Please feel free to contribute to this open-source project, report issues, and suggest improvements. Let's make file sharing smarter and more convenient together!


## License

This project is licensed under the [MIT License](LICENSE).
