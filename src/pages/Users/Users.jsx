import React from "react";
import { Link } from "react-router-dom";
import UserItem from "../../components/UserItem/UserItem";

import "./Users.css";
import ContentTab from "../../components/ContentTab/ContentTab";

export default function Users() {
  return (
    <div class="col-8 content px-0">
      <div class="content__wrapper">
        <ContentTab />

        <div class="users">
          <form action="#" class="form row justify-content-between gap-3 mx-0">
            <div class="form__box-input col-8 px-0">
              <span class="fa fa-search form__icon form__icon-search"></span>

              <input
                type="search"
                name=""
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                class="form-control form__input"
                required
              />
            </div>
            <button type="reset" class="btn-custome btn-custome--gray col-3">
              حذف کاربر
            </button>
          </form>

          <div class="users__list-container">
            <div class="users__list users__list-wrapper">
              <UserItem />
              <UserItem />
              <UserItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
