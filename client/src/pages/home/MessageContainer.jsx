import React from "react";
import { User } from "./User";
import { Message } from "./Message";
import { IoIosSend } from "react-icons/io";

export const MessageContainer = () => {
  return (
    <div className=" h-screen w-full flex flex-col">
      {/* user */}
      <div className="px-3 border-b">
        <User />
      </div>

      {/* Message */}
      <div className="h-full overflow-y-auto p-3">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className="w-full flex p-3">
        <input type="text" placeholder="Type here..." className="input w-full" />
        <button className="btn btn-square">
          <IoIosSend/>
        </button>
      </div>
    </div>
  );
};
