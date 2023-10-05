import { useEffect } from "react";
import ArticleBox from "./../../components/ArticleBox/ArticleBox";

import "./Articles.css";
import ContentTab from "../../components/ContentTab/ContentTab";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "../../Redux/store/articles";

export default function Articles() {
  const dispatch = useDispatch();
  const articles = useSelector((state)=> state.articles);

  useEffect(()=>{
    dispatch(getArticlesFromServer());
  },[])

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper d-flex flex-column align-content-between">
        <ContentTab />

        <div className="articles">
          <div className="articles__list">
            {articles.map((article)=>(
              <ArticleBox key={article._id} article={article}/>
            ))}
          </div>
        </div>

        <div className="new-article">
          <button
            className="btn-custome btn-custome__blue"
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
