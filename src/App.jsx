
import React from 'react'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Profile from './Profilepage/Profile';
import Dashboardlayouts from './Dashboardfile/Dashboardlayouts';
import Cardcontent from './Cardcontentfile/Cardcontent';
import Chat from './Chatpage/Chat';
import Settings from './Settingpage/Settings';



function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Dashboardlayouts/>}>
        <Route index element={<Cardcontent />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chat" element={<Chat />} />
        <Route path="settings" element={<Settings/>} />
        </Route>
     
      
      </Routes>
    </Router>
  )
}

export default App