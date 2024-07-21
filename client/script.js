var btn = document.getElementById('btn');
var msg = document.getElementById('message');

var url = 'http://backend-service:8000/';

btn.addEventListener('click', async function(){
    const response = await fetch(url);
    await response.json();
    msg.innerHTML = JSON.stringify(response)
})