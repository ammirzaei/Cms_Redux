import React from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { deleteCourse } from "../../Redux/store/courses";

export default function CourseBox({course}) {
  const dispatch = useDispatch();

  const onDeletedCourse = ()=>{
    swal({
      title: 'آیا از حذف این دوره مطمئن هستید؟',
      icon: 'warning',
      buttons: ['خیر', 'بله']
    }).then(result => {
      if(result) dispatch(deleteCourse(course._id));
    })
  }

  return (
    <div className="products__item">
      <img
        src="../../img/store/redux.png"
        alt="product-img-1"
        className="products__img"
      />
      <div className="products__details w-100">
        <div className="products__info">
          <h3 className="products__name">{course.title}</h3>
          <p className="products__short-desc">
            {course.desc}
          </p>
        </div>
        <div className="products__tags">
          <div className="products__boxes">
            <div className="products__price-box">
              <span className="fa fa-wallet"></span>

              <span className="product__teg-text"> قیمت : </span>
              <span className="product__teg-text products__price-value">{course.price === 0 ? 'رایگان' : course.price.toLocaleString()}</span>
            </div>
            <div className="products__category-box">
              <span className="fa fa-folder"></span>

              <span className="product__teg-text"> دسته بندی: </span>
              <span className="product__teg-text products__category">
                {course.category}
              </span>
            </div>
            <div className="products__shop-box">
              <span className="fa fa-users"></span>

              <span className="product__teg-text"> تعداد ثبت نام : </span>
              <span className="product__teg-text products__sell">{course.registersCount}</span>
            </div>
          </div>
          <div className="products__btns">
            <button className="btn btn-danger btn-lg" onClick={onDeletedCourse}>حذف</button>
            <button className="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>

      {course.discount && <div className="product__discount-Box">{course.discount}%</div>}
    </div>
  );
}
