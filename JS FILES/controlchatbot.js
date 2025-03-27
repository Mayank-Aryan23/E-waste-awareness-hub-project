// Get chatbot elements
// Get chatbot elements
const chatbotBtn = document.getElementById("chatbotBtn");
const chatbotContainer = document.getElementById("chatbot");
const chatbox = document.getElementById("chatbox");
const closeBtn = document.getElementById("closeBtn");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Create Expand Button
const expandBtn = document.createElement("button");
expandBtn.textContent = "Expand";
expandBtn.classList.add("expand-btn");
document.querySelector(".chatbot-header").appendChild(expandBtn);

// Toggle Chatbot Open/Close

// Close chatbot
closeBtn.addEventListener("click", () => {
    chatbotContainer.classList.remove("open");
    setTimeout(() => {
        chatbotContainer.style.display = "none";
    }, 300);
});

// Toggle Expand/Collapse Chatbot
expandBtn.addEventListener("click", () => {
    chatbotContainer.classList.toggle("expanded");
    expandBtn.textContent = chatbotContainer.classList.contains("expanded") ? "Minimize" : "Expand";
});

// Function to display messages in the chatbox
// Function to display messages in the chatbox
function appendMessage(sender, message) {
  const msgContainer = document.createElement("div"); // Create a container for each message
  msgContainer.classList.add(sender);
  
  const msgElement = document.createElement("p"); // Create paragraph for message
  msgElement.textContent = message;
  
  msgContainer.appendChild(msgElement);
  chatbox.appendChild(msgContainer);

  chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll to the latest message
}


// Show chatbot and display welcome message on first open
chatbotBtn.addEventListener("click", () => {
    chatbotContainer.style.display = "flex";  
    chatbotContainer.classList.add("open");  
    
    // Show welcome message only if it's the first time opening
    if (!chatbox.querySelector(".bot")) {
        setTimeout(() => {
            appendMessage("bot", "Hey! How can I help you?");
        }, 500);
    }
});

// Close chatbot
closeBtn.addEventListener("click", () => {
    chatbotContainer.classList.remove("open");
    setTimeout(() => {
        chatbotContainer.style.display = "none";
    }, 300);
});

// Handle sending user message
sendBtn.addEventListener("click", () => {
    sendMessage();
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;  // Ignore empty messages

    appendMessage("user", message);  // Show user's message
    userInput.value = "";  // Clear input field

    // Call Gemini API to get response
    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBm01x3CVU6-a-c0RUZI1cZM4HEyBt380g", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [{ text: message }]
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data); // Debugging: Check API response in console

        // Extract the bot response from the actual API structure
        const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't understand that.";
        appendMessage("bot", botReply);
    })
    .catch(error => {
        console.error("Error:", error);
        appendMessage("bot", "Oops! Something went wrong. Try again.");
    });
}
