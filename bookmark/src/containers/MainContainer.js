import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MainList from "../components/MainList";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";
//임포트 해주는 거 잊지 말 것.

const MainContainer = () => {
  const trueIDArr = useSelector((state) => state.bookmark.trueID);
  //Selector는 보여주기 위한 애라고 생각하면 된다.

  const dispatch = useDispatch();
  const onBookmarkTrue = useCallback(
    (id) => dispatch(bookmarkTrue(id)),
    [dispatch]
  );
  const onBookmarkFalse = useCallback(
    (id) => dispatch(bookmarkFalse(id)),
    [dispatch]
  );
  //Dispatch는 바꿔주기 위한 애이다.

  //여기서 useSelector는 bookmark모듈의 trueID 값을 넘겨준다.
  //onBookmarkTrue는 bookmark모듈의 액션인 BOOKMARKTRUE를 실행시켜, 값을 바꾼다.

  return (
    <div>
      <div>
        <h1>컨텐츠 컴포넌트의 컨테이너 : useSelector, dispatch</h1>
        <span>trueIDArr : {trueIDArr}</span>
      </div>
      <MainList
        trueIDArr={trueIDArr}
        onBookmarkTrue={onBookmarkTrue}
        onBookmarkFalse={onBookmarkFalse}
        //위에서 정의한 애들을 props로 넘겨준다.
      />
      <Link to="/bookmark">
        <button>북마크 모아보기</button>
      </Link>
    </div>
  );
};

export default MainContainer;
