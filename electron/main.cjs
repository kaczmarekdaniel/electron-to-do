// Modules to control application life and create native browser window
const { log } = require("console");
const { app, ipcMain } = require("electron");
const path = require("path");
const { menubar } = require("menubar");
const { readFile } = require('fs').promises;

if (require("electron-squirrel-startup")) app.quit();

const isDevEnvironment = process.env.DEV_ENV === "true";

// enable live reload for electron in dev mode
if (isDevEnvironment) {
    require("electron-reload")(__dirname, {
        electron: path.join(
            __dirname,
            "..",
            "node_modules",
            ".bin",
            "electron"
        ),
        hardResetMethod: "exit",
    });
}



let mb;

app.on('ready', () => {
  mb = menubar({
    index: 'http://localhost:5173/',
    browserWindow: {
      width: 250,
      height: 350,
      webPreferences: {
        nodeIntegration: false, // Disable nodeIntegration in renderer processes
        contextIsolation: true, // Enable context isolation
        preload: path.join(__dirname, 'preload.js'), // Preload script for renderer processes
      },
    },
  });

  // Handle IPC event from renderer process
  ipcMain.handle('getFileContents', async (event, filePath) => {
    try {
      const fileContents = await readFile(filePath, 'utf-8');
      return JSON.parse(fileContents);
    } catch (error) {
      console.error('Error reading file:', error);
      return error;
    }
  });
});


// let mainWindow;

// const createWindow = () => {

//     // Create the browser window.
//     mainWindow = new BrowserWindow({
//         width: 1300,
//         height: 600,
//         webPreferences: {
//             preload: path.join(__dirname, 'preload.js')
//         }
//     })

//     // define how electron will load the app
//     if (isDevEnvironment) {

//         // if your vite app is running on a different port, change it here
//         mainWindow.loadURL('http://localhost:5173/');

//         // Open the DevTools.
//         mainWindow.webContents.on("did-frame-finish-load", () => {
//             mainWindow.webContents.openDevTools();
//         });

//         log('Electron running in dev mode: 🧪')

//     } else {

//         // when not in dev mode, load the build file instead
//         mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));

//         log('Electron running in prod mode: 🚀')
//     }
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.on('ready', createWindow);

// app.on('activate', () => {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
// })

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// // app.on('window-all-closed', () => {
// //     if (process.platform !== 'darwin') app.quit()
// // })

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.
