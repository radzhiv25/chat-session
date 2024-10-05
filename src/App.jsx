import ChatSession from "./components/ChatSession"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { useState } from 'react'

function App() {
  const [selectedSession, setSelectedSession] = useState(null);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  const closeSessionDetails = () => {
    setSelectedSession(null);
  };

  return (
   <div className="p-5 flex flex-col h-full">
    <Navbar />
    <div className="my-2 p-2 flex md:flex-row flex-col gap-2 border rounded">
    <Sidebar onSessionClick={handleSessionClick} />
    <ChatSession session={selectedSession} onClose={closeSessionDetails} />
    </div>
    <Footer />
   </div>
  )
}

export default App
