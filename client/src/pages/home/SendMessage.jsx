import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessageThunk,
  sendMessageThunk,
} from "../../store/slice/message/message.thunk";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const handleSendMessage = async () => {
    await dispatch(
      sendMessageThunk({ receiverId: selectedUser?._id, message })
    );
    await dispatch(getMessageThunk({ receiverId: selectedUser._id }));
    setMessage("");
  };

  return (
    <div>
      <div className="w-full flex p-3">
        <input
          type="text"
          placeholder="Type here..."
          className="input w-full"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="btn btn-square">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};
