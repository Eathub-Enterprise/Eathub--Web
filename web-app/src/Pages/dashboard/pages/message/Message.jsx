import React from "react";
import "./message.css";

const Message = () => {
  return (
    <div className="message-section">
      <div className="message-drop-list">
        <div className="message-dropdwn">
          <select name="" id="">
            <option value="msg">Overview: All-time</option>
          </select>
        </div>
        <div className="message-dropdwn">
          <select name="" id="">
            <option value="msg">Filter: All-time</option>
          </select>
        </div>
        <div className="message-dropdwn">
          <select name="" id="">
            <option value="msg">Workspace: All-time</option>
          </select>
        </div>
      </div>
      <div className="message-header">
        <h1>Messages</h1>
        <button className="msg-btn">New Message</button>
      </div>
      <div className="message-container">
        <div className="msg-section">
          <aside className="msg-1">
            <div className="msg-head">
              <input type="text" placeholder="Search messages" />
            </div>
          </aside>
          <aside className="msg-2">
            <div className="msg-head">
              <h5>Eathub Black Friday is Here!</h5>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Message;
