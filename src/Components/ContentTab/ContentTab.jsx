import { Link, useLocation } from "react-router-dom";

const ContentTab = () => {
  const location = useLocation();

  const active = (path) => {
    return location.pathname.includes(path) ? "active" : "";
  };

  return (
    <ul class="content__tabs">
      <li class={`content__tab ${active("/users")}`}>
        <Link to="/users" class="content__tab-link">
          <span class="fa fa-user"></span>
          کاربران
        </Link>
      </li>
      <li class={`content__tab ${active("/infos")}`}>
        <Link to="/infos" class="content__tab-link">
          <span class="fa fa-book"></span>
          اطلاعات
        </Link>
      </li>
      <li class={`content__tab ${active("/courses")}`}>
        <Link to="/courses" class="content__tab-link">
          <span class="fa fa-store"></span>
          دوره‌ها
        </Link>
      </li>
      <li class={`content__tab ${active("/articles")}`}>
        <Link to="/articles" class="content__tab-link">
          <span class="fa fa-newspaper"></span>
          وبلاگ
        </Link>
      </li>
    </ul>
  );
};

export default ContentTab;
