import { useContext } from "react";
import { Link } from "react-router-dom";
import { MessageOutlined } from '@ant-design/icons';

import { MessagesContext } from "../Context/MessagesContext";
import Msg from "./Msg";
import './Welcome.scss';

const Welcome = () => {

  const {messages, handleReaction} = useContext(MessagesContext)

  return (
    <div className='welcome content'>
      <h1>Guestbook</h1>
      <div className="row">
        <p className="p-text">See what people wrote about us and feel free to leave a message.</p>
        <Link to="/message" id="btn__add" className="btn btn__add">
          <MessageOutlined />
          leave a message
        </Link>
      </div>
      <div className='messages'>
        {messages.map((message) => (
          <Msg
            key={message.id}
            id={message.id}
            time={message.timestamp}
            author={message.name}
            text={message.message}
            imgBg = {message.imgBg}
            likes={message.likes}
            dislikes={message.dislikes}
            handleReaction={handleReaction}
          />
        ))}
      </div>
    </div>
  )
}

export default Welcome