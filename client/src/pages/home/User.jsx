import React from "react";

export const User = () => {
  return (
    <div className="flex gap-5" >
      <div className="avatar avatar-online">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>
      <h2>Full name</h2>
      <p>Username</p>
    </div>
  );
};
