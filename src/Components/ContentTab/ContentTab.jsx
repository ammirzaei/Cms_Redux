import { Link, useLocation } from "react-router-dom";

const ContentTab = () => {
  const location = useLocation();

  const active = (path) => {
    return location.pathname.includes(path) ? "active" : "";
  };

  return (
    <ul className="content__tabs">
      <li className={`content__tab ${active("/users")}`}>
        <Link to="/users" className="content__tab-link">
          <span className="fa fa-user"></span>
          کاربران
        </Link>
      </li>
      <li className={`content__tab ${active("/infos")}`}>
        <Link to="/infos" className="content__tab-link">
          <span className="fa fa-book"></span>
          اطلاعات
        </Link>
      </li>
      <li className={`content__tab ${active("/courses")}`}>
        <Link to="/courses" className="content__tab-link">
          <span className="fa fa-store"></span>
          دوره‌ها
        </Link>
      </li>
      <li className={`content__tab ${active("/articles")}`}>
        <Link to="/articles" className="content__tab-link">
          <span className="fa fa-newspaper"></span>
          وبلاگ
        </Link>
      </li>
    </ul>
  );
};

export default ContentTab;
