import React from "react";
import { CiSearch } from "react-icons/ci";
import { User } from "./User";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../store/slice/user.thunk";

export const UserSideBar = () => {
  const dispatch = useDispatch();
  const { otherUsers } = useSelector((state) => state.user);
  //console.log("otheruser", otherUsers);
  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
  };
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
      <div className="h-full flex-grow overflow-y-auto flex flex-col gap-3">
        {otherUsers?.map((userDetails) => {
          return (
            <User key={userDetails._id} userDetails={userDetails} />
          )
        })}
      </div>

      {/* footer */}
      <div className="flex items-center justify-between p-3">
        <div className="avatar avatar-online">
          <div className="w-20 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <button onClick={handleLogout} className="btn btn-soft btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};
