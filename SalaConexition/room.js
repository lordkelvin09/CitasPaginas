let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;



const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
});

let handleChannelMesagge = async (messageData, MemberId) => {
  console.log('A new message was received')
  let data = JSON.parse(messageData.text)
  //console.log('Message:', data)

  if(data.type === 'chat'){ 
    addMessageToDom(data.displayName, data.message);
  }
}

let sendMessage = async (e) => {
  e.preventDefault()

  let message = e.target.message.value
  channel.sendMessage({text:JSON.stringify({'type':'chat', 'message':message, 'displayName': displayName})})
  addMessageToDom(displayName, message)
  e.target.reset()
}

let addMessageToDom = (name, message) => {
  let messagesWrapper = document.getElementById('messages')

  let newMesagge = `<div class="message__wrapper">
                          <div class="message__body">
                              <strong class="message__author">${name}</strong>
                              <p class="message__text">${message}</p>
                          </div>
                    </div>`
  messagesWrapper.insertAdjacentHTML('beforeend', newMesagge)
  
  let lastMessage = document.querySelector('#messages .message__wrapper:last-child')
  if(lastMessage) {
    lastMessage.scrollIntoView()
  }
}

let addBotMessageToDom = (botMessage) => {
  let messagesWrapper = document.getElementById('messages')

  let newMesagge = `<div class="message__wrapper">
                        <div class="message__body">
                            <strong class="message__author">🤖 Medico</strong>
                            <p class="message__text">${botMessage}</p>
                        </div>
                    </div>`
  messagesWrapper.insertAdjacentHTML('beforeend', newMesagge)
  
  let lastMessage = document.querySelector('#messages .message__wrapper:last-child')
  if(lastMessage) {
    lastMessage.scrollIntoView()
  }
}

let removeMemberFromDom = async (MemberId) => {
  let memberWrapper = document.getElementById(`member__${MemberId}__wrapper`)
  let name = memberWrapper.getElementsByClassName('member_name')[0].textContent
  addBotMessageToDom(`${name} has left the room.`)

  memberWrapper.remove() 
}

let messageForm = document.getElementById('message__form');
messageForm.addEventListener('submit', sendMessage)
