import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'; // 일부분만 갱신

// html 코드를 작성하려면 return() 안에 작성해야 한다.
// css 코드를 사용하려면 위에 보이는 것처럼 import './App.css'
// class => className 이라고 바꿔서 사용해야 한다. 
//  ㄴ 자바스크립트에 class 라는 명령어가 이미 있기 때문.
// - 대시 표시는 뺄셈 취급하므로 대문자로 작성해야 한다. (ex. font-size => fontSize)
// 변수 사용시 {} 이용
// style은 object 자료형으로 작성 => {키:값}
// return() 안의 가장 바깥에는 하나의 태그만 존재 

// 리액트 장점 
//  데이터 바인딩 : 변수가 바뀌면 화면이 바뀌는 useState (웹페이지를 다시 불러울 필요가 없음)
//  import React, {useState} from 'react';
//  리액트는 화면에 보여줄 값을 변수에 보관하지 않고 'state' 에 보관
//  변수는 값이 변경되어도 화면에 반영되지 않지만, 
//  useState를 사용하면 값이 바뀌면 화면도 따라서 바뀐다.(=데이터바인딩)
//  따라서, 변경될만한 값은 useState로 보관하고, 변경이 안될 값은 변수에 보관


function App() {
  // 여기에 자바스크립트 작성 가능
  let 변수 = '블로그 글 목록' // html안에서 사용하려면 {} 필요
  // useState : 값이 바뀌면 화면도 같이 바뀌게 하는 기능
  let [value, setValue] = useState('서버에서 실시간으로 받는 값')
  let [title, setTitle] = useState(['제목1','제목2','제목3','제목4'])
  let [dateTime, setDateTime] = useState(['2024.04.13','2024.04.12','2024.03.29','2024.02.28'])
  let [score, setScore] = useState([0,0,0,0])
  // useState로 false [modal, setModal]
  let [modal, setModal] = useState(false)
  let [curIdx, setCurIdx] = useState(0)


  // return 안에는 html 코드 (자바스크립트 작성하려면 {} 필요)
  return (
    <div className="App">
      <div className="black-nav">
        <img src={logo} width={'100px'} height={'100px'} alt=""/>
        <h4 style={{color:'white', fontSize:'20px'}}>{value}</h4>
      </div>

    {/* 
        리액트에서 {} 안의 반복문은 for가 아니라 map
        for(){}에서 중과롷가 중복되기 때문에 map으로 제공한다.
        배열.map()

        // 중괄호 안에서 반복문은 map == forEach
        // title 배열 갯수만큼 반복
        // map 가장 바깥 태그에 구분할 수 있는 key 적어주기
    */}

      {title.map(function(element, idx){
        return(
          <div className='list' key={idx}>
            <h4 onClick={()=>{
              setCurIdx(idx)
              setModal(true)
            }}>{element} <span onClick={(e)=>{
              // 자바스크립트에서 배열요소 수정하려면 분해했다가 변경후 합침
              e.stopPropagation();
              setScore(()=>{
                let src = [...score]
                src[idx] += 1
                return src
              })
            }}> 👍</span> {score[idx]}</h4>
            <p>{dateTime[idx]} 작성</p>
          </div>
        )
      })}

      {/* 부분만 떼고 싶다 -> 컴포넌트로 만든다 
      
          modal값이 false면 안보이게, true면 보이게
          {}안에 자바스크립트 코드 넣어야 하는데 if, for는 {}를 사용하므로 중복되어서 사용 불가능
          => if는 삼항연산자로, for는 map으로 제공

          // 제목을 클릭하면 모달창이 등장
          // h4태그에 onClick을 넣고 setModal을 true로 넣게

          // 다음 컨포넌트에 값 넘겨줄때는 props 라는 것을 사용
          // 컴포넌트에 값을 전달한다 
      */}

      { modal == true ? <Modal idx={curIdx} title={title} date={dateTime} /> : null }

    </div>
  );
}

export default App;

// Modal 컴포넌트 분리
//  코드가 길어지면 별도의 함수로 분리해서 '컴포넌트'로 만들어준다.
function Modal(props){ 
  return (
    <>
      <div className='modal'>
        <h4>{props.title[props.idx]}</h4>
        <p>{props.date[props.idx]}</p>
        <p>상세 내용</p>
      </div>
    </>
  )
}

