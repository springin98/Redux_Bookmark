import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";

import Content from "./../components/Content";
import dummy from "./../db/contents.json";

const BookmarkContainer = () => {
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

  return (
    <div>
      <h1>북마크 모아보기</h1>
      <div>
        {dummy.contents
          .filter((content) => {
            return trueIDArr.includes(String(content.id));
          })
          .map((trueContent) => (
            <Content
              key={trueContent.id}
              id={trueContent.id}
              title={trueContent.title}
              trueIDArr={trueIDArr}
              onBookmarkTrue={onBookmarkTrue}
              onBookmarkFalse={onBookmarkFalse}
            />
          ))}
      </div>
    </div>
  );
};

export default BookmarkContainer;
