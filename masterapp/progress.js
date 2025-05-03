// progress.js
document.addEventListener('DOMContentLoaded', function () {
    let successCount = localStorage.getItem('successCount') ? parseInt(localStorage.getItem('successCount')) : 0;
    let failureCount = localStorage.getItem('failureCount') ? parseInt(localStorage.getItem('failureCount')) : 0;

    const totalCount = successCount + failureCount;
    const progressPercent = (successCount / totalCount) * 100 || 0;

    document.getElementById('progress-success').textContent = successCount;
    document.getElementById('progress-failure').textContent = failureCount;
    document.getElementById('progress-percent').textContent = progressPercent.toFixed(2) + '%';
});
