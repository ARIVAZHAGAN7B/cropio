import React from "react";
import "./ChatbotWidget.css"; // Import the CSS file

const ChatbotWidget = () => {
  return (
    <div className="agri-root">
      <div className="layout-container">
        <div className="content-wrapper">
          <div className="chat-container">
            <h2 className="chat-title">AgriBot: Your Farming Assistant</h2>

            <div className="input-row">
              <label className="input-label">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Type your question here..."
                    className="chat-input"
                  />
                  <div className="send-wrapper">
                    <button className="send-button">
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;
