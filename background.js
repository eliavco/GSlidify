chrome.runtime.onInstalled.addListener(function() {
    // add an action here
    window.addEventListener('click', () => {
        console.log("hello world");
    });
});