import React from "react";
import { Link } from "react-router-dom";
import ArticleBox from "./../../components/ArticleBox/ArticleBox";

import "./Articles.css";
import ContentTab from "../../components/ContentTab/ContentTab";

export default function Articles() {
  return (
    <div class="col-8 content px-0">
      <div class="content__wrapper d-flex flex-column align-content-between">
        <ContentTab />

        <div class="articles">
          <div class="articles__list">
            <ArticleBox />
            <ArticleBox />
          </div>
        </div>

        <div class="new-article">
          <button
            class="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-article"
            id="btn-modal-new-article"
          >
            افزودن مقاله جدید
          </button>
        </div>
      </div>
    </div>
  );
}
