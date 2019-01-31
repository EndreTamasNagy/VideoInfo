//import electron as dependency
const electron = require('electron');

//main process with app object
// const {property1, property2,..} = object;
const {app, BrowserWindow}=electron;

app.on('ready', ()=>{
    // when the browser window object is created, basically a window is created. 
    const mainWindow = new BrowserWindow({});

    //loads a valid URL into the specified window object
    mainWindow.loadFile('index.html') //from official guide
    //mainWindow.loadURL('file://${__dirname}\\index.html'); //look into current working directory


    //console.log('App is now ready');
});

