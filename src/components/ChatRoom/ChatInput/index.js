import React, { useRef, useState, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";

import Typing from "../Typing";
import { capatalize } from "../../../utils";
import { sendMessage } from "../../../store/slices/messageSlice";

import { chatSocket as socket, emit } from "../../../socket";

import styles from "./style.module.scss";
const { chatInputContainer } = styles;

function ChatInput({ chatId, messageContainerRef, user }) {
  const dispatch = useDispatch();
  const [typing, setTyping] = useState(false);
  const [chatMessage, setMessage] = useState("");

  const typingTimoutId = useRef(null);
  const inputRef = useRef(null);
  const controller = useRef({ abort: () => {} });

  function scrollChatToBottom() {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }

  function handleSubmit() {
    const payload = {
      chatId: chatId,
      message: chatMessage,
    };

    if (payload.message) {
      const promise = dispatch(sendMessage(payload));
      controller.current.abort = promise.abort;

      promise.unwrap().then((message) => {
        emit(socket, "sendMessage", message);

        scrollChatToBottom();
        setMessage("");
      });
    }
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function startTyping(event) {
    if (event.key !== "Enter") {
      clearTimeout(typingTimoutId.current);
      emit(socket, "typing", { chatId, user });
    }
    else {
      event.preventDefault();
      handleSubmit();
    }
  }

  function stopTyping() {
    typingTimoutId.current = setTimeout(() => {
      emit(socket, "typingOff", { chatId, user });
    }, 700);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "";
    }

    socket.on("startTyping", (data) => {
      if (data.chatId === chatId && data.user._id !== user._id) {
        setTyping(data.user);
      }
    });

    socket.on("stopTyping", (data) => {
      if (data.chatId === chatId && data.user._id !== user._id) {
        setTyping(false);
      }
    });

    return () => {
      controller.current.abort();
    };
  }, [chatId, user._id]);

  return (
    <div className={chatInputContainer}>
      <input
        type="text"
        ref={inputRef}
        value={chatMessage}
        onKeyUp={stopTyping}
        onKeyDown={startTyping}
        onChange={handleChange}
        placeholder="Type a message"
      />

      <button onClick={handleSubmit}>
        <IoMdSend />
      </button>

      {typing && (
        <Typing
          name={`${capatalize(typing.firstName)} ${capatalize(typing.lastName)}`}
        />
      )}
    </div>
  );
}

export default React.memo(ChatInput);
