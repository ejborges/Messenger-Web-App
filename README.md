Simple Chat Room Web App
========================
A simple web app where users can connect to this app's server and interact with others in the chat app through the browser.

##Getting Started
1. Install [Git](http://git-scm.com/)
    * Required by Bower, for whatever reason...
    * Recommended install options
        1. In the **Select Components** section: leave as default: Windows Explorer integration, Git Bash Here, ...
        2. In the **Adjusting your PATH environment** section: select `Use Git from the Windows Command Prompt`
        3. In the **Configure the line ending conversions** section: select `Checkout as-is, commit as-is`
        4. Install the damn thing
2. Install [Node.JS](http://nodejs.org/), this is what will run our server.
    * This will **require** to restart your computer.
    * Node will also provide us the `npm install` command, which fetches and downloads any project dependency (chunk of code) needed to make the project work
3. After restart, right click on the root folder for this project and select `Git Bash` to open the Git command line
4. `npm install -g nodemon`: It is recommended that while developing the app you run the server with [nodemon](http://nodemon.io/). To do so, run this command in Git Bash: `npm install -g nodemon`
    * Nodemon watches for any file change in your project and restarts your server automatically so you can quickly see the changes you made.
5. `npm install -g bower`: [Bower](http://bower.io/) is required in order to download some additional packages required by our app
    * Bower is similar to `npm` in that it fetches and downloads dependencies as well, but provides additional packages not found in npm
    * Instead of looking in package.json for dependencies, bower looks in **bower.json**
6. `npm install`: Git Bash should already be open to this project's root directory, so run `npm install`
    * This command looks at **package.json** and downloads all the dependencies listed along with executing any other command you defined.
    * A bit on [package.json](https://www.npmjs.org/doc/files/package.json.html)
        * Must be written in [.json](http://www.json.org/) format to work
        * Must include a `name` and `version` property
            * `name` can be any string
            * `version` must be a string in the form of #.#.# or [Major].[Minor].[Patch]
        * If your project requires external dependencies, include the `dependencies` property
            * The value for the key `dependencies` must be of type object
            * Node will try to download any key-value pair within `dependencies`
                * **key**s should be the **name** of the dependency you want node to download
                * **value**s should be the **version** of the package that you need
        * Search online for many of the available packages node can get for you
7. After `npm install` finishes successfully:
    1. navigate into the server folder and open a command window from that directory
	    * This can be done by clicking on the address bar in the File Explorer window and typing `cmd` or Shift+Right click on the server folder and click on `Open command window here`
    2. in the command window, execute the command `node server.js`
	    * This will start the node server
		* Optionally, you could run the command `nodemon server.js` which will run the server using nodemon, which is easier for development
	3. once the server is up and running, open your web browser and go to [localhost:3000](localhost:3000) if the server port number is set for port 3000.
	    * You can open multiple windows to this address and run multiple instances of this application
		* You can also connect to this server from any other device connected to the same local network, just replace **localhost** with the IPv4 address of the computer the server is running on.
		
##Making the app (this section is not complete)
1. **server.js** is where all your server side code will live

2. **index.html** is where the structure of your app will live
    1. set up index.html as blank .html file with `<meta>`
    2. load `<script>` and `<link>`

3. **app.js** is where the app/angular config code will live
    1. `.config()` -> `$routeProvider.when().otherwise();`
    2. `.run()`

4. **home.js** is where all your home view logic will live
    1. `angular.module('app')`
    2. `.controller();`
    3. go to **app.js** and fill in the controller name for /home

5. **index.css** is where your app's styling will live
    1. set up flexbox

6. **home.html** is where your home view structure code lives, use flexbox
    1. static header (title, whatever...)
    2. dynamic body (messages from all)
    3. static footer (type message input, username input)