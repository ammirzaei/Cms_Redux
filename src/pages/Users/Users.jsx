import React, { useEffect } from "react";
import UserItem from "../../components/UserItem/UserItem";

import "./Users.css";
import ContentTab from "../../components/ContentTab/ContentTab";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServer } from "../../Redux/store/users";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users);

  useEffect(()=>{
    dispatch(getUsersFromServer());
  },[])

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper">
        <ContentTab />

        <div className="users">
          <form action="#" className="form row justify-content-between gap-3 mx-0">
            <div className="form__box-input col-8 px-0">
              <span className="fa fa-search form__icon form__icon-search"></span>
              <input
                type="search"
                name=""
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                className="form-control form__input"
                required
              />
            </div>
            <button type="reset" className="btn-custome btn-custome--gray col-3">
              حذف کاربر
            </button>
          </form>

          <div className="users__list-container">
            <div className="users__list users__list-wrapper">
              {users?.map((user)=> (
                 <UserItem key={user._id} user={user}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
