import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../store/slice/userSlice";

export const User = ({ userDetails }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.user);
  const {onlineUsers} = useSelector(state => state.socket)
   const isUserOnline = onlineUsers?.includes(userDetails?._id)

  const handleUserClick = () => {
    dispatch(setSelectedUser(userDetails));
  };

  return (
    <div
      onClick={handleUserClick}
      className={`flex gap-5 items-center hover:bg-gray-700 p-2 cursor-pointer ${
        userDetails?._id === selectedUser?._id && "bg-gray-700"
      }`}
    >
      <div className={`avatar ${isUserOnline && 'avatar-online'}`}>
        <div className="w-12 rounded-full">
          <img src={userDetails?.avatar} />
        </div>
      </div>
      <h2 className="line-clamp-1">{userDetails?.fullname} </h2>
      <p className="text-xs">{userDetails?.username} </p>
    </div>
  );
};
