# monorepo-example

## How to create full stack repo and with create-react-app
- Create your applications directory and add a client and a server folder.
- cd into the client folder and run: **npx create-react-app .**
  * create-react-app will by default initialize git in the client folder. You are not able to have git in nested folders so we need to remove git from the client folder and add git to our applications repo.
- To remove git from client run: **rm -rf .git**
- cd into your applications main directory and run: **git init**

You should now be able to push your fullstack app to github

## Start Application:
### Install Dependencies and run both client and server:
- Set up client:
  * $ cd client
  * $ npm install
  * $ npm start
- Set up server (in separate terminal):
  * $ cd server
  * $ npm install
  * $ npm start
