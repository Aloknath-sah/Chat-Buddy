import React, { useEffect } from "react";
import { User } from "./User";
import { Message } from "./Message";

import { useDispatch, useSelector } from "react-redux";
import { getMessageThunk } from "../../store/slice/message/message.thunk.js";
import { SendMessage } from "./sendMessage.jsx";

export const MessageContainer = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedUser?._id) return;
    dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
  }, [selectedUser]);

  return (
    <>
      {!selectedUser ? (
        <div className="w-full flex items-center justify-center flex-col gap-5">
          <h2>Welcome to chat buddy</h2>
          <p>Please select a user to continue your chat</p>{" "}
        </div>
      ) : (
        <div className=" h-screen w-full flex flex-col">
          {/* user */}
          <div className="px-3 border-b">
            <User userDetails={selectedUser} />
          </div>

          {/* Message */}
          <div className="h-full overflow-y-auto p-3">
            {messages?.map((messageDetails) => {
              return (
                <Message
                  key={messageDetails?._id}
                  messageDetails={messageDetails}
                />
              );
            })}
          </div>

          <SendMessage />
        </div>
      )}
    </>
  );
};
