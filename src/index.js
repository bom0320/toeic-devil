import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// 이 코드는 React 애플리케이션을 초기화하고, index.html 의 파일의 root 라는 
// id 를 가진 DOM 요소에 APP 컴포넌트를 랜더링한다. 이렇게 하면 브라우저에서 React 애플리케이션이사용자에게 보여지게 됨
// index.css 파일은 전체 애플리케이션에 스타일을 적용하기 위해 가져온다.N