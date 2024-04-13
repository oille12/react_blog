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

  function upScore0(){
    setScore(()=>{
      let src = [...score]
      src[0] += 1
      return src
    })
  }

  // return 안에는 html 코드 (자바스크립트 작성하려면 {} 필요)
  return (
    <div className="App">
      <div className="black-nav">
        <img src={logo} width={'100px'} height={'100px'} alt=""/>
        <h4 style={{color:'white', fontSize:'20px'}}>{value}</h4>
      </div>

      <div className="list">
        <h4>{title[0]}<span onClick={(e)=>{
          // 자바스크립트에서 배열요소를 수정하려면 분해했다가 변경하고 다시 합쳐야 함
          e.stopPropagation()
          upScore0()
        }}> 👍</span> {score[0]}</h4>
        <p>{dateTime[0]} 작성</p>
      </div>
      <div className="list">
        <h4>{title[1]}<span onClick={()=>{
          setScore(()=>{
            let src = [...score]
            src[1] += 1
            return src
          })
        }}> 👍</span> {score[1]}</h4>
        <p>{dateTime[1]} 작성</p>
      </div>
      <div className="list">
        <h4>{title[2]}<span onClick={()=>{
          setScore(()=>{
            let src = [...score]
            src[2] += 1
            return src
          })
        }}> 👍</span> {score[2]}</h4>
        <p>{dateTime[2]} 작성</p>
      </div>
      <div className="list">
        <h4>{title[3]}<span onClick={()=>{
          setScore(()=>{
            let src = [...score]
            src[3] += 1
            return src
          })
        }}> 👍</span> {score[3]}</h4>
        <p>{dateTime[3]} 작성</p>
      </div>

      {/* 부분만 떼고 싶다 -> 컴포넌트로 만든다 */}
      { modal == true ? <Modal /> : null }

    </div>
  );
}

export default App;

// Modal 컴포넌트 분리
//  코드가 길어지면 별도의 함수로 분리해서 '컴포넌트'로 만들어준다.
function Modal(){ 
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜 작성</p>
        <p>상세 내용</p>
      </div>
    </>
  )
}

