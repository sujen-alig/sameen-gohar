// Initialize data from localStorage if available
let successCount = localStorage.getItem('successCount') ? parseInt(localStorage.getItem('successCount')) : 0;
let failureCount = localStorage.getItem('failureCount') ? parseInt(localStorage.getItem('failureCount')) : 0;
let failureLog = JSON.parse(localStorage.getItem('failureLog')) || [];

// Function to update the failure log and save it to localStorage
function updateFailureLog(reason) {
    const timestamp = new Date().toLocaleString();
    failureLog.push({ reason, timestamp });

    // Save to localStorage
    localStorage.setItem('failureLog', JSON.stringify(failureLog));

    // Update failure log on the page
    renderFailureLog();
}

// Function to render failure log
function renderFailureLog() {
    const failureList = document.getElementById('failure-list');
    failureList.innerHTML = '';

    failureLog.forEach((log, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${log.timestamp}: ${log.reason}`;
        failureList.appendChild(listItem);
    });
}

// Function to update the analytics on the page
function updateAnalytics() {
    const successRate = (successCount / (successCount + failureCount)) * 100 || 0;
    const failureRate = (failureCount / (successCount + failureCount)) * 100 || 0;

    document.getElementById('total-success').textContent = successCount;
    document.getElementById('total-failure').textContent = failureCount;
    document.getElementById('success-rate').textContent = successRate.toFixed(2) + '%';
    document.getElementById('failure-rate').textContent = failureRate.toFixed(2) + '%';
}

// Success button handler
document.getElementById('success-btn').addEventListener('click', () => {
    successCount++;
    localStorage.setItem('successCount', successCount);
    updateAnalytics();
});

// Failure button handler
document.getElementById('failure-btn').addEventListener('click', () => {
    const reason = prompt('Please enter the reason for failure:');
    if (reason) {
        failureCount++;
        localStorage.setItem('failureCount', failureCount);
        updateFailureLog(reason);
        updateAnalytics();
    }
});

// Initial render
renderFailureLog();
updateAnalytics();
