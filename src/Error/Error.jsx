import { Link } from "react-router-dom";
import { LeftOutlined } from '@ant-design/icons';

const Error = () => {
  return (
    <div className='content'>
      <h1 style={{textAlign:'center'}}>oups! </h1>
      <h3 style={{textAlign:'center'}}>
      <Link to="/" className="btn"> <LeftOutlined />back to Guestbook</Link>
      </h3>
      
    </div>
  )
}

export default Error