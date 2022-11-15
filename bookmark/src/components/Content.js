import { useEffect, useRef, useState } from "react";

const Content = (props) => {
  const [bookmarkBoolean, setBookmarkBoolean] = useState(false);

  const bookmarkClick = () => {
    if (bookmarkBoolean === false) {
      props.onBookmarkTrue(props.id);
    } else {
      props.onBookmarkFalse(props.id);
    }
  };
  //bookmarkBoolean 값을 확인하고, false이면 모듈 리듀서 함수 onBookmakrTrue를 실행한다.
  //onBookmarkTrue는 현재 id 값을 받고, trueIDArr에 id 를 추가한다.
  //true이면 onBookmarkFalse를 실행한다.
  //onBookmarkFalse는 id 값이 trueIDArr에 있는지 확인하고, 있으면 삭제한다.
  //trueIDArr 는 북마크에 추가된 id를 배열로 갖는다.

  const bookmarkColor = useRef(null);
  const changeColor = () => {
    if (bookmarkBoolean === true) {
      bookmarkColor.current.style.color = "blue";
    } else {
      bookmarkColor.current.style.color = "red";
    }
  };
  //색을 바꿔주는 함수이다.

  useEffect(() => {
    setBookmarkBoolean(props.trueIDArr.includes(props.id));
    changeColor();
  });
  //렌더링이 될 때마다 실행된다.
  //treuIDArr에 id 값이 있으면 bookmarkBoolean 값을 true로 바꾸고, 색도 변경한다.

  return (
    <div>
      <span>컨텐츠 id : {props.id} / </span>
      <span>컨텐츠 title : {props.title}</span>
      <button onClick={() => bookmarkClick()}>북마크</button>
      <span> | </span>
      <span ref={bookmarkColor}>북마크 유무</span>
    </div>
  );
  //북마크 버튼을 클릭하면 bookmakrClick 함수를 즉시 실행한다.
};

export default Content;
