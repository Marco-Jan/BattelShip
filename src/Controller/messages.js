// messages.js
let messageQueue = [];
let isShowingMessage = false;

export function showMessage(message) {
  messageQueue.push(message);
  if (!isShowingMessage) {
    showNextMessage();
  }
}

function showNextMessage() {
  if (messageQueue.length > 0) {
    const message = messageQueue.shift();
    displayMessage(message);
  } else {
    isShowingMessage = false;
  }
}

function displayMessage(message) {
  const messageOverlay = document.createElement("div");
  messageOverlay.id = "message-overlay";
  messageOverlay.style.position = "fixed";
  messageOverlay.style.top = "0";
  messageOverlay.style.left = "0";
  messageOverlay.style.width = "100%";
  messageOverlay.style.height = "100%";
  messageOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  messageOverlay.style.display = "flex";
  messageOverlay.style.justifyContent = "center";
  messageOverlay.style.alignItems = "center";
  messageOverlay.style.zIndex = "1000";

  const messageContent = document.createElement("div");
  messageContent.textContent = message;
  messageContent.style.background = "white";
  messageContent.style.padding = "20px";
  messageContent.style.borderRadius = "10px";

  messageOverlay.appendChild(messageContent);

  document.body.appendChild(messageOverlay);

  setTimeout(() => {
    document.body.removeChild(messageOverlay);
    isShowingMessage = false;
    showNextMessage();
  }, 1500);
  isShowingMessage = true;
}
