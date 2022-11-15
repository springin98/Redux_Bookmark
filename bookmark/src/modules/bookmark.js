const BOOKMARKTRUE = "bookmark/BOOKMARKTRUE";
const BOOKMARKFALSE = "bookmark/BOOKMARKFALSE";
//액션명은 대문자
//액션명 앞에 경로를 넣으면, 나중에 이름이 겹치지 않는다.

export const bookmarkTrue = (id) => ({
  type: BOOKMARKTRUE,
  //type은 액션 이름이라고 생각하면 된다.
  id: id,
  //인자로 받은 id를 여기에 저장한다.
  //인자는 이따가 dummy의 id를 넣어줄 것이다.
});

export const bookmarkFalse = (id) => ({
  type: BOOKMARKFALSE,
  id: id,
});
//선언과 동시에 내보낸다. export const
//액션은 리덕스 스토어 안에 있는 변수 값을 바꾸는 애라고 생각하면 된다.
//여기서 변수는 초기값이다.

const initialID = {
  trueID: [],
};
//초기값을 설정한다.
//여기에 북마크 설정된 id 값이 배열로 들어갈 것이다.
//반드시 객체 형태로 해야 한다. 문법 규칙이다. 객체로 받기 때문에.

function bookmark(state = initialID, action) {
  //state는 상태를 말한다. 이것도 문법이라고 생각.
  //처음 값을 위에서 정의한 initialID를 넣는다.
  switch (action.type) {
    case BOOKMARKTRUE:
      return {
        ...state, //현재 상태를 반환한다.
        trueID: state.trueID.concat(action.id),
      };
    //BOOKMARKTRUE가 실행되면
    //trueID 배열 위에 action.id 아까 인자로 받은 id를 추가한다.
    case BOOKMARKFALSE:
      return {
        ...state,
        trueID: state.trueID.filter((id) => id !== action.id),
      };
    //BOOKMARKFALSE가 실행되면
    //trueID 배열에 인자로 받은 id가 있는지 확인하고, 있으면 없앤다.
    default:
      return state;
  }
}

export default bookmark;
//export default는 1개만 존재

//이제 리덕스 함수 bookmark를 실행하기 위해 container로 넘어간다.
