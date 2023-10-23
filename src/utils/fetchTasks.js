export async function loadDirectoryContents() {
    const path = './todo.json'; // Replace this with the desired directory path
    try {
      const directoryContents = await window.api.getFileContents(path);
      console.log('Directory contents:', directoryContents);
      return directoryContents;
    } catch (error) {
      console.error('Error retrieving directory contents:', error);
      return {"error": error};
    }
  }
  