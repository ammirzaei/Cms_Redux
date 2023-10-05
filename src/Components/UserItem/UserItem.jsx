import React from "react";
import image from '../../../src/assets/react.svg';
import { useDispatch } from "react-redux";
import { deleteUserFromServer } from "../../Redux/store/users";
import swal from "sweetalert";

export default function UserItem({user}) {
  const dispatch = useDispatch();

  const onDeleted = ()=>{
    swal({
      title: 'آیا از حذف این کاربر مطمئن هستید؟',
      icon: 'warning',
      buttons: ['خیر', 'بله']
    }).then(result => {
      if(result) dispatch(deleteUserFromServer(user._id));
    })
  }
  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src={image}
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0">{user.firstname} {user.lastname}</p>
          <p lang="en" className="users__email">
            {user.email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button className="btn-custome btn-custome__red" onClick={onDeleted}>حذف</button>
      </div>
    </div>
  );
}
