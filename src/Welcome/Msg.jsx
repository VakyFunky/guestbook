import React, { useState } from 'react';
import Moment from 'react-moment';

import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const Msg = ({ id, imgBg, author, time, text, likes, dislikes, handleReaction }) => {
    const [like, setLike] = useState(likes.sum);
    const [dislike, setDislike] = useState(dislikes.sum);

    return (
        <div className='card'>
            <div className="card__header">
                <div className="card__header-img" style={{ backgroundColor: imgBg }}>
                    {author[0]}
                </div>
                <div className="card__header-details">
                    <div className="author">{author}</div>
                    <Moment className="time" fromNow>{time}</Moment>
                </div>
            </div>
            <div className="card__content">
                {text}
            </div>
            <div className="card__footer">
                {likes.like === true || dislikes.dislike === true ?
                    (likes.like === true) ?
                        <div className="like reacted">
                            <LikeOutlined />
                            {like}
                        </div> : <div className="like">
                            <LikeOutlined />
                            {like}
                        </div> :
                    <div className="like">
                        <LikeOutlined onClick={() => {
                            handleReaction(id, 'like')
                            setLike(like + 1)
                        }} />
                        {like}
                    </div>
                }
                {likes.like === true || dislikes.dislike === true ?
                    (dislikes.dislike === true) ?
                        <div className="like reacted">
                            <DislikeOutlined />
                            {dislike}
                        </div> : <div className="like">
                            <DislikeOutlined />
                            {dislike}
                        </div> :
                    <div className="like">
                        <DislikeOutlined onClick={() => {
                            handleReaction(id, 'dislike')
                            setDislike(dislike + 1)
                        }} />
                        {dislike}
                    </div>
                }
            </div>

        </div>
    )
}

export default Msg