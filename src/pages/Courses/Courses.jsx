import { useEffect } from "react";

import "./Courses.css";
import CourseBox from "../../components/CourseBox/CourseBox";
import ContentTab from "../../components/ContentTab/ContentTab";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromServer } from "../../Redux/store/courses";

export default function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector((state)=> state.courses);

  useEffect(()=>{
    dispatch(getCoursesFromServer())
  },[])

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper d-flex flex-column align-content-between">
        <ContentTab />

        <div className="products products-container">
          <div className="products__list products-wrapper">
            {courses?.map((course)=> (
              <CourseBox key={course._id} course={course}/>
            ))}
          </div>
        </div>

        <div className="new-course d-flex gap-2">
          <button
            className="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-product"
          >
            افزودن دوره جدید
          </button>
          <button
            className="btn-custome btn-custome__red"
            data-bs-toggle="modal"
            data-bs-target="#add-discount-all-product"
          >
            اعمال تخفیف همه دوره‌ها
          </button>
          <button
            className="btn-custome btn-custome__green btn-modal-new-category"
            data-bs-toggle="modal"
            data-bs-target="#add-new-category"
          >
            افزودن دسته بندی
          </button>
        </div>
      </div>
    </div>
  );
}
