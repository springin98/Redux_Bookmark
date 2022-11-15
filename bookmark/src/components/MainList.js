import dummy from "./../db/contents.json";
import Content from "./Content";

const MainList = (props) => {
  //MainContainer.js에서 인자로 받은 useSeletor, dispatch 리듀서 함수와 리덕스 변수
  const contentsList = dummy.contents.map((content) => (
    <Content
      key={content.id}
      id={content.id}
      title={content.title}
      trueIDArr={props.trueIDArr}
      onBookmarkTrue={props.onBookmarkTrue}
      onBookmarkFalse={props.onBookmarkFalse}
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
