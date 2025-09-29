import {  Routes, Route } from "react-router-dom";
import SideBar from './SideBar/SideBar';
import MyCalendar from './Calendar/Calendar';
export const App = () => {
  return (
<>
<SideBar/>
 <Routes>
        <Route path="/" />
        <Route path="/calendar" element={<MyCalendar />} />
        
      </Routes>
</>
  );
};
