import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider} from 'react-query';
import LoginFrom from './views/signInPages/loginPage';
import RegisterationForm from './views/signInPages/registerationPage';
import UserJobsPage from './views/userPages/userJobsPage';
import NotificationsPage from './views/userPages/notificationsPage';
import SearchResultPage from './views/userPages/searchResultPage';

const userID = localStorage.getItem("id");
const userType = localStorage.getItem("type");
const queryClient = new QueryClient();

function App() {
  // const isCompany = userID !== "" &&  userType === "1";
  const isUser = userID !== "" &&  userType === "2";
  let openPage;

  if(isUser){
    openPage = <UserJobsPage />;
  } 
  // else if(isUser){
  //   openPage = <InstructorPage />;
  // }
  else{
    openPage = <LoginFrom /> 
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={openPage} />
          <Route path="/register" element={<RegisterationForm />} />
          <Route path="/login" element={<LoginFrom />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/jobs" element={<UserJobsPage />} />
          <Route path="/search_result" element={<SearchResultPage />} />

        </Routes>
      </Router>
    </div>
    </QueryClientProvider>
  );
}

export default App;
