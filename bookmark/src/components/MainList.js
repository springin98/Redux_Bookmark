import dummy from "./../db/contents.json";
import Content from "./Content";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";

const MainList = (props) => {
  const trueIDArr = useSelector((state) => state.bookmark.trueID);

  const dispatch = useDispatch();
  const onBookmarkTrue = useCallback(
    (id) => dispatch(bookmarkTrue(id)),
    [dispatch]
  );
  const onBookmarkFalse = useCallback(
    (id) => dispatch(bookmarkFalse(id)),
    [dispatch]
  );

  //MainContainer.js에서 인자로 받은 useSeletor, dispatch 리듀서 함수와 리덕스 변수
  const contentsList = dummy.contents.map((content) => (
    <Content
      key={content.id}
      id={content.id}
      title={content.title}
      trueIDArr={trueIDArr}
      onBookmarkTrue={onBookmarkTrue}
      onBookmarkFalse={onBookmarkFalse}
    ></Content>
  ));

  return (
    <div>
      <h1>전체 컨텐츠 : UI 보여주는 컴포넌트</h1>
      {contentsList}
    </div>
  );
};

export default MainList;
