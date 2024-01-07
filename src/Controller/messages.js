export function showMessage(message) {
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

    // Entferne das Overlay nach 3 Sekunden
    setTimeout(() => {
        document.body.removeChild(messageOverlay);
    }, 1500);
}

