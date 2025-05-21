import React from "react";
import { CiSearch } from "react-icons/ci";
import { User } from "./User";

export const UserSideBar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col">
      {/* heading */}
      <div className="bg-black px-3 py-2">Chat Buddy</div>
      <div className="p-3">
        <label className="input">
          <CiSearch />
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>

      {/* users */}
      <div className="h-full flex-grow overflow-y-auto">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>

      {/* footer */}
      <div className="flex items-center justify-between p-3">
        <div className="avatar avatar-online">
          <div className="w-20 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <button className="btn btn-soft btn-primary">Logout</button>
      </div>
    </div>
  );
};
