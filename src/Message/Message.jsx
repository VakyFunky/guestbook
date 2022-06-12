import { Link } from "react-router-dom"
import { useContext } from "react";
import { LeftOutlined , CheckCircleTwoTone } from '@ant-design/icons';

import { MessagesContext } from "../Context/MessagesContext";
import './Message.scss';

const Message = () => {

  const { name, setName, text, setText, notification, handleSubmit } = useContext(MessagesContext);

  return (
    <div className='content'>
      <Link to="/" className="btn btn__back"> <LeftOutlined />back to Guestbook</Link>
      <h2>leave a message</h2>
      
      
      <form className="form" onSubmit={handleSubmit}>
      {notification && <div className="notification">
      <CheckCircleTwoTone twoToneColor="#52c41a" />Your message is succesfully posted.
      </div>
      }
        <label>
          Name:
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)} />
        </label>
        <label className='textArea' htmlFor="message">
          Message:
          <textarea
            rows="4" 
            value={text}
            required
            onChange={(e) => setText(e.target.value)}>
          </textarea>
        </label>
        <input
          className="btn btn__submit"
          type="submit"
          value="Post"
        />
      </form>
    </div>
  )
}

export default Message