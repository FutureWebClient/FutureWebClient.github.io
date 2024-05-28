document.addEventListener('DOMContentLoaded', function() {
    const executeButton = document.getElementById('executeButton');
    executeButton.addEventListener('click', executeCommand);
});

function executeCommand() {
    const commandInput = document.getElementById('commandInput');
    const command = commandInput.value.trim();

    // Clear input field
    commandInput.value = '';

    if (command === '') {
        return;
    }

    // Add command to output section
    const outputSection = document.getElementById('output');
    const commandElement = document.createElement('p');
    commandElement.textContent = '> ' + command;
    outputSection.appendChild(commandElement);

    // Execute command (replace with actual execution logic)
    const output = 'Command executed successfully.';
    const outputElement = document.createElement('p');
    outputElement.textContent = output;
    outputSection.appendChild(outputElement);

    // Scroll to bottom of output section
    outputSection.scrollTop = outputSection.scrollHeight;
}
