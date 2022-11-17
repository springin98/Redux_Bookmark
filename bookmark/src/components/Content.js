import "./../styles/components.css";
import { useDispatch, useSelector } from "react-redux";

const Content = (props) => {
  const trueIDArr = useSelector((state) => state.bookmark.trueID);

  return (
    <div>
      <span>컨텐츠 id : {props.id} / </span>
      <span>컨텐츠 title : {props.title}</span>
      <button
        onClick={() => {
          props.trueIDArr.includes(props.id)
            ? props.onBookmarkFalse(props.id)
            : props.onBookmarkTrue(props.id);
        }}
      >
        북마크
      </button>
      <span> | </span>
      <span className={trueIDArr.includes(props.id) ? "Blue" : "Red"}>
        북마크 유무
      </span>
    </div>
  );
};

export default Content;
