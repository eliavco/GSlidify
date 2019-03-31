document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get({
        color: 'indigo'
    }, function(items) {
        document.getElementById('btn').style.backgroundColor = items.color;
    }); // Hello World
});

document.getElementById('btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    if (document.getElementById('btn').style.backgroundColor == 'blue'){
        document.getElementById('btn').style.backgroundColor = 'indigo';
    }else{
        document.getElementById('btn').style.backgroundColor = 'blue';
    }
    console.log("Hello " + name);
});