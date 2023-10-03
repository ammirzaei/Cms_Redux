import React from "react";

import "./Courses.css";
import CourseBox from "../../components/CourseBox/CourseBox";
import { Link } from "react-router-dom";
import ContentTab from "../../components/ContentTab/ContentTab";

export default function Courses() {
  return (
    <div class="col-8 content px-0">
      <div class="content__wrapper d-flex flex-column align-content-between">
        <ContentTab />

        <div class="products products-container">
          <div class="products__list products-wrapper">
            <CourseBox />
            <CourseBox />
          </div>
        </div>

        <div class="new-course d-flex gap-2">
          <button
            class="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-product"
          >
            افزودن دوره جدید
          </button>
          <button
            class="btn-custome btn-custome__red"
            data-bs-toggle="modal"
            data-bs-target="#add-discount-all-product"
          >
            اعمال تخفیف همه دوره‌ها
          </button>
          <button
            class="btn-custome btn-custome__green btn-modal-new-category"
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
