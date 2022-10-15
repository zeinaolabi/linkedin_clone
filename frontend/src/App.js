import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import LoginFrom from './views/loginPage/loginPage';

// const userID = localStorage.getItem("id");
// const userType = localStorage.getItem("type");

function App() {
  // const isCompany = userID !== "" &&  userType === "1";
  // const isUser = userID !== "" &&  userType === "2";
  let openPage = <LoginFrom /> ;

  // if(isCompany){
  //   openPage = <AdminPanel /> ;
  // } 
  // else if(isUser){
  //   openPage = <InstructorPage />;
  // }
  // else{
  //   openPage = <LoginFrom /> 
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={openPage} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
