import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { User } from "./User";
import { useDispatch, useSelector } from "react-redux";
import {
  getOtherUsersThunk,
  logoutUserThunk,
} from "../../store/slice/user.thunk";

export const UserSideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { otherUsers, userProfile } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);

  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
  };

  useEffect(() => {
    if (!searchValue) {
      setUsers(otherUsers);
    } else {
      setUsers(
        otherUsers.filter((user) => {
          return (
            user?.username
              ?.toLowerCase()
              ?.includes(searchValue?.toLowerCase()) ||
            user?.fullName?.toLowerCase()?.includes(searchValue?.toLowerCase())
          );
        })
      );
    }
  }, [searchValue, otherUsers]);

  useEffect(() => {
    (async () => {
      await dispatch(getOtherUsersThunk());
    })();
  }, [dispatch, userProfile]);

  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col">
      {/* heading */}
      <div className="bg-black px-3 py-2">Chat Buddy</div>
      <div className="p-3">
        <label className="input">
          <CiSearch />
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>

      {/* users */}
      <div className="h-full flex-grow overflow-y-auto flex flex-col gap-3">
        {users?.map((userDetails) => {
          return <User key={userDetails?._id} userDetails={userDetails} />;
        })}
      </div>

      {/* footer */}
      <div className="flex items-center justify-between p-3">
        <div className="avatar avatar-online">
          <div className="w-20 rounded-full">
            <img src={userProfile?.avatar} alt="user Avatar" />
          </div>
          <h2>{userProfile?.username} </h2>
        </div>
        <button onClick={handleLogout} className="btn btn-soft btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};
