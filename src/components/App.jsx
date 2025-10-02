import {  Routes, Route } from "react-router-dom";
import SideBar from './SideBar/SideBar';
import MyCalendar from './Calendar/Calendar';
import Header from './Header/Header';
export const App = () => {
  return (
<>
<SideBar/>
<Header/>
 <Routes>
        <Route path="/" />
        <Route path="/calendar" element={<MyCalendar />} />
        
      </Routes>
</>
  );
};
