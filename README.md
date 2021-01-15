# codeChallengeTask 
**Main technologies used**
______________________

React Native
Typescript
React Navigation (v5)
Redux Thunk and Prisist
React Native Testing Library

**Main functionality**
______________________

Home Page contain srearch result list of Movies.
Uesr can scroll with movies list
User can see all the details related to the movie by click on the Movie card.
User can add or reomve movie from wish list

**Prerequisites**

React Native CLI to be installed. You can install it by running the command:
npm install -g react-native-cli

Simulator or emulator to run the app on.
Installation
First clone the repo using SSH or HTTPS. Here's an example using HTTPS:

git clone https://github.com/ebrahimmelngary/codeChallengeTask.git

Second run the following command to install project dependencies:

yarn install

in *IOS*

You will need to make one more step to install pods dependencies, run the following command in the project directory:

cd ios && pod install
Run on Device
run yarn android or yarn ios to run on device or emulator.
Run Unit Test
run yarn run test to run all unit test suites.

**Used dependencies**
________________________
```
    "@react-native-community/async-storage": "^1.12.1",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-native-community/netinfo": "^5.9.10",
    "@react-navigation/native": "^5.8.10",
    "@react-navigation/stack": "^5.12.8",
    "@testing-library/react-native": "^7.1.0",
    "axios": "^0.21.1",
    "react": "16.13.1",
    "react-native": "0.63.4",
    "react-native-easy-toast": "^2.0.0",
    "react-native-gesture-handler": "^1.9.0",
    "react-native-reanimated": "^1.13.2",
    "react-native-responsive-screen": "^1.4.2",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.16.1",
    "react-native-vector-icons": "^7.1.0",
    "react-redux": "^7.2.2",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0" 
    ```


Also I am using eslint and prettier for better code formatting alongside husky hooks to apply linting and formatting before each commit

