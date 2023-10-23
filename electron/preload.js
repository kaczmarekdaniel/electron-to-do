const { contextBridge, ipcRenderer } = require("electron");





const api = {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    getFileContents: async (path) => {
        try {
          const directoryContents = await ipcRenderer.invoke('getFileContents', path);
          return directoryContents;
        } catch (error) {
          console.error('Error retrieving directory contents:', error);
          return [];
        }
      }
};

contextBridge.exposeInMainWorld("api", api);

