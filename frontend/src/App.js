import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import LoginFrom from './views/signInPages/loginPage';
import RegisterationForm from './views/signInPages/registerationPage';
import UserLandingPage from './views/userPages/userLandingPage';

const userID = localStorage.getItem("id");
const userType = localStorage.getItem("type");

function App() {
  // const isCompany = userID !== "" &&  userType === "1";
  const isUser = userID !== "" &&  userType === "2";
  let openPage = <RegisterationForm /> ;

  if(isUser){
    openPage = <UserLandingPage /> ;
  } 
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
          <Route path="/register" element={<RegisterationForm />} />
          <Route path="/login" element={<LoginFrom />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
