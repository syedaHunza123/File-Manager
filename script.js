// Function to load data from localStorage
function loadData() {
  let data = localStorage.getItem('fileData');
  return data ? JSON.parse(data) : { files: [], folders: [] }; // Initialize if empty
}

// Function to save data to localStorage
function saveData(data) {
  localStorage.setItem('fileData', JSON.stringify(data));
}


let fileData = loadData();

//Example of adding a new file (you will need to expand this significantly)
function addFile(fileName) {
    fileData.files.push({name: fileName});
    saveData(fileData);
    renderFileList();
}


// Function to render the file list in the UI
function renderFileList() {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = ''; //Clear before rendering

    fileData.files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.textContent = file.name;
        fileList.appendChild(fileItem);
    });
}

//Initial Render
renderFileList();

// Example usage:
document.getElementById('addFileButton').addEventListener('click', () => {
    const fileName = prompt('Enter file name:');
    if (fileName) {
        addFile(fileName);
    }
});
