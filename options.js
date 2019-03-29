document.getElementById('save').addEventListener('click', () => {
    const color = document.getElementById('select').value;
    chrome.storage.sync.set({
        color: color
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get({
        color: 'indigo'
    }, function(items) {
        document.getElementById('select').value = items.color;
    }); // Hello World
});