//import electron as dependency
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

//main process with app object
// const {property1, property2,..} = libary;
const {app, BrowserWindow, ipcMain}=electron;

//define globally
let mainWindow;

app.on('ready', ()=>{
    // when the browser window object is created, basically a window is created. 
    mainWindow = new BrowserWindow({fullscreen: true});

    //loads a valid URL into the specified window object
    mainWindow.loadFile('index.html') //from official guide
    //mainWindow.loadURL('file://${__dirname}\\index.html'); //look into current working director
    //console.log('App is now ready');
});

ipcMain.on('video:submit', (event, path)=>{
    ffmpeg.ffprobe(path, (err, metadata)=>{
        //console.log('Video duration is : ', metadata.format.duration);
        mainWindow.webContents.send('video:fetch_metadata', metadata.format.duration);
        //debugger
    });
});

