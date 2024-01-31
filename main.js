
let ism = document.getElementById('ism')
let phone = document.getElementById('phone')
let btn = document.getElementById('btn')

btn.addEventListener('click', ()=> {
  sendtelegram(ism.value+ ' ' + phone.value)
})

// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6979441409:AAEMkMiu9Pqaw6gAxlyji6OqU5FVs5CuTMw"; let chat_id = 676892705; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { 
  window.location.href = 'ok.html';
}); };