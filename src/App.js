import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<span children={'없는 페이지'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// class name: 
export default App;


// App 컴포넌트의 UI 정의 
// BrowserRouter : 라우터를 구성하기 위한 최상위 컴포넌트 
// 애플리케이션에서 URL 변경을 감지하고, 이에 따른 컴포넌트 랜더링

// Header: 페이지 상단에 표시될 컴포넌트
 
// Routers: 라우팅 설정을 포함, Route 컴포넌넌트를 사용하여 URL 경로와 해당 경로에서 랜더링할 컴포넌트 지정 
// Router path = "/" element=<Day /> : 기본 경로(/) 에서 DayList 컴포넌트 정의