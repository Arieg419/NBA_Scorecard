const { app, BrowserWindow, ipcMain, Tray } = require("electron");
const { autoUpdater } = require("electron-updater");
const isDev = require("electron-is-dev");
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS
} = require("electron-devtools-installer");
const path = require("path");
require("dotenv").config();

let tray;
let window;

const iconPath = path.join(__dirname, "nba-transparent.png");

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();

  // Center window horizontally below the tray icon
  const x = Math.round(
    trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
  );

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4);

  return { x, y };
};

const showWindow = () => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.show();
  window.focus();
};

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide();
  } else {
    showWindow();
  }
};

const createTray = () => {
  // get icon here path.join(__dirname, "./assets", "icons", "addnotebook.png")
  tray = new Tray(iconPath);
  tray.on("right-click", toggleWindow);
  tray.on("double-click", toggleWindow);
  tray.on("click", event => {
    toggleWindow();

    // Show devtools when command clicked
    if (window.isVisible() && process.defaultApp && event.metaKey) {
      window.openDevTools({
        mode: "detach"
      });
    }
  });
};

function createWindow() {
  // Check for software updates
  // autoUpdater.checkForUpdates();

  // Create the browser window.
  window = new BrowserWindow({
    width: 363,
    height: 354,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: false,
    webPreferences: {
      // Prevents renderer process code from not running when window is
      // hidden
      backgroundThrottling: false,
      webSecurity: false
    }
  });

  window.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  window.openDevTools({
    mode: "detach"
  });

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));

  // Hide the window when it loses focus
  window.on("blur", () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide();
    }
  });
}

// Don't show the app in the doc
app.dock.hide();

app.on("ready", () => {
  createTray();
  createWindow();
});

ipcMain.on("show-window", () => {
  showWindow();
});

//-------------------------------------------------------------------
// Auto updates
//-------------------------------------------------------------------
const sendStatusToWindow = text => {
  if (tray) {
    tray.webContents.send("auto-update", text);
  }
};

autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow("Checking for update...");
});
autoUpdater.on("update-available", info => {
  sendStatusToWindow("Update available.");
});
autoUpdater.on("update-not-available", info => {
  sendStatusToWindow("Update not available.");
});
autoUpdater.on("error", err => {
  sendStatusToWindow(`Error in auto-updater: ${err.toString()}`);
});
autoUpdater.on("download-progress", progressObj => {
  sendStatusToWindow(
    `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${
      progressObj.percent
    }% (${progressObj.transferred} + '/' + ${progressObj.total} + )`
  );
});
autoUpdater.on("update-downloaded", info => {
  sendStatusToWindow("Update downloaded; will install now");
});

autoUpdater.on("update-downloaded", info => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 500 ms.
  // You could call autoUpdater.quitAndInstall(); immediately
  autoUpdater.quitAndInstall();
});
