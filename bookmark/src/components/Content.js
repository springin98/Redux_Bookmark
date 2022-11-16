import "./../styles/components.css"

const Content = (props) => {
  return (
    <div>
      <span>컨텐츠 id : {props.id} / </span>
      <span>컨텐츠 title : {props.title}</span>
      <button
      onClick={() => {
        props.trueIDArr.includes(props.id) ? props.onBookmarkFalse(props.id) : props.onBookmarkTrue(props.id)
      }}
      >북마크</button>
      <span> | </span>
      <span
      className={props.trueIDArr.includes(props.id) ? "Blue" : "Red"}
      >북마크 유무</span>
    </div>
  );
};

export default Content;
