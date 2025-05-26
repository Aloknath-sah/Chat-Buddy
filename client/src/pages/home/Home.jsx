import React, { useEffect } from "react";
import { UserSideBar } from "./UserSideBar";
import { MessageContainer } from "./MessageContainer";

import { useDispatch, useSelector } from "react-redux";
import {
  initializeSocket,
  setOnlineUsers,
} from "../../store/slice/socket/socket.slice";
import { setNewMessage } from "../../store/slice/message/message.slice";

export const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userProfile } = useSelector((state) => state.user);
  const { socket, onlineUsers } = useSelector((state) => state.socket);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(initializeSocket(userProfile?._id));
  }, [isAuthenticated]);

  useEffect(() => {
    if (!socket) return;

    socket.on("onlineUsers", (onlineUsers) => {
      dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on("newMessage", (newMessage) => {
      dispatch(setNewMessage(newMessage));
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  return (
    <div className="flex">
      <UserSideBar />
      <MessageContainer />
    </div>
  );
};
