import { Link } from "react-router-dom";
import MainList from "../components/MainList";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const trueIDArr = useSelector((state) => state.bookmark.trueID);

  return (
    <div>
      <div>
        <h1>컨텐츠 컴포넌트의 컨테이너 : useSelector, dispatch</h1>
        <span>trueIDArr : {trueIDArr}</span>
      </div>
      <MainList />
      <Link to="/bookmark">
        <button>북마크 모아보기</button>
      </Link>
    </div>
  );
};

export default MainContainer;
