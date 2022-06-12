import { createContext, useState, useEffect, useRef } from "react";
import {useNavigate} from 'react-router-dom';

import { storageMsgs } from "../db/StorageMsgs";

export const MessagesContext = createContext({});

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [notification, setNotification] = useState(false)
    const navigate = useNavigate();

    // set messages in the local storage
    const setLocalStorage = () => {
        if (localStorage.getItem('messages') === null) {
            localStorage.setItem('messages', JSON.stringify(storageMsgs));
        }
    }
    setLocalStorage()

    // get messages from the local storage
    useEffect(() => {
        setMessages(JSON.parse(localStorage.getItem('messages')));
    }, [])

    // leave a message
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !text) return;
        const date = new Date();
        const newMessage = {
            id: messages.length ? messages[messages.length - 1].id + 1 : 1,
            timestamp: date,
            name: name,
            message: text,
            imgBg: `hwb(${Math.floor((Math.random() * 360) + 1)} 90% 2%)`,
            likes: {
                sum: 0,
                like: false
            },
            dislikes: {
                sum: 0,
                dislike: false
            }
        }
        const updatedMessages = [...messages, newMessage]
        setMessages(updatedMessages);
        localStorage.setItem('messages', JSON.stringify(updatedMessages));
        setNotification(true);
        setTimeout(() => {
            setNotification(false);
            setName('');
            setText('');
            navigate('/');
        }, 3000);
        
    }

    // reaction like/dislike
    const handleReaction = (id, type) => {
        const reactedMessage = {
            id: messages[id].id,
            timestamp: messages[id].timestamp,
            name: messages[id].name,
            message: messages[id].message,
            imgBg: messages[id].imgBg,
            likes: {
                sum: type === 'like' ? messages[id].likes.sum + 1 : messages[id].likes.sum + 0,
                like: type === 'like' ? true : false
            },
            dislikes: {
                sum: type === 'dislike' ? messages[id].dislikes.sum + 1 : messages[id].dislikes.sum + 0,
                dislike: type === 'dislike' ? true : false
            }
        }
        console.log(reactedMessage)
        const restMessages = messages.filter(msg => msg.id !== id);

        const updatedMessages = [...restMessages, reactedMessage];
        setMessages(updatedMessages.sort((a, b) => {
            return a.id - b.id;
        }));
        localStorage.setItem('messages', JSON.stringify(updatedMessages));
    }




    return (
        <MessagesContext.Provider value={{
            name,
            setName,
            text,
            setText,
            messages,
            notification,
            handleSubmit,
            handleReaction
        }}>
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContext;