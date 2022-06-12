import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MessageProvider } from "./Context/MessagesContext";
import Welcome from "./Welcome/Welcome";
import Message from "./Message/Message";
import Error from "./Error/Error"

import './App.scss';

function App() {
  return (
    <Router>
      <MessageProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </MessageProvider>
    </Router>
  );
}

export default App;
