# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 'npm install sass' to import sass dependency

DO NOT PUT 'npm node install sass' @GBlackwell1

### AWS Deployment

The AWS server only provides the necessary computing infrastructure to host websites, it doesn't actually serve the website to the end-user. We use NGINX for serving the frond-end code. More info on the same can be found at, https://www.nginx.com/resources/glossary/nginx/#:~:text=NGINX%20is%20open%20source%20software,for%20maximum%20performance%20and%20stability.

The domain name acquired for the lab is hci-uofsc.com. This domain is mapped to the Ubuntu VM mentioned below. Any requests made to hci-uofsc.com or www.hci-uofsc.com are pointed to this Virtual Machine. Check out the Domains & DNS tab in AWS Lightsail Home to know more. You can also purchase new domains here.

Login to the AWS Lightsail server and open the Ubuntu VM created for the website. Click on the "Connect using SSH" button after you click on the name, or directly click on the terminal symbol next to the name to get started.

![image](https://user-images.githubusercontent.com/111925268/220500874-29fa00ed-1b58-401f-ab84-45cf696e985b.png)

Login to the super user
  
    su hi3techlab
  
Cd to the root folder

    cd ~
  
Create a new folder for the website (Note: this needs to be done once per project, skip this step if you aleady have a folder.)

    mkdir website
  
Cd in to the project folder

    cd website
  
Clone the GitHub repo in the server (Note: this needs to be done once per project, skip this step if you've done this before.)

    git clone https://github.com/hi3techlab/hci3-website.git
  
You need a personal access token for logging in to GitHub. Info on how to create one can be found at, https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token (Classic tokens should be fine)

Cd in to the local git repo

    cd hci3-website
  
Update the repository

    sudo git pull
  
To install the required node modules run (Note: Do this every time there's an update to the repo)

    npm i
    
To update the front-end run

    npm run build

To make the build files available to NGINX, we need to create a symbolic link between the project's build folder and the hci-uofsc.com directory in NGINX. Consider this to be a live copy and paste. Any changes made to the build folder will be replicated in the hci-uofsc.com directory. (Note: this needs to be done once per project, skip this step if you've done this before.)

    sudo ln -s /home/hi3techlab/website/hci3-website/build/* /var/www/hci-uofsc.com/
    
Test the NGINX configuration

    sudo nginx -t
    
If the test is successful, restart the NGINX server

    sudo systemctl restart nginx
    
The changes should be propogated in less than a minute. For more info on front-end deployment on AWS, please refer to https://github.com/Olafaloofian/React-Frontend-Lightsail-Deployment
