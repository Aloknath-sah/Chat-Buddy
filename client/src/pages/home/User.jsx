import React from "react";

export const User = ({ userDetails }) => {
  //console.log(userDetails)
  return (
    <div className="flex gap-5 items-center hover:bg-gray-700 p-2 cursor-pointer">
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          <img src={userDetails?.avatar} />
        </div>
      </div>
      <h2 className="line-clamp-1">{userDetails?.fullname} </h2>
      <p className="text-xs">{userDetails?.username} </p>
    </div>
  );
};
