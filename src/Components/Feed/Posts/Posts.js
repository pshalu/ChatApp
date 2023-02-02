import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import InputItems from '../InputItems/InputItems'
import './Posts.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Posts({ id, userId, name, tags, message, likeCount }) {

    const [isLiked, setIsLiked] = useState(false)

    function handleLikeClick() {
        if (isLiked === true) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    return (
        <div className='posts_container'>
            <div className='posts_header'>
                <p>
                    <Avatar>
                        {name ? name[0] : 'J'}
                    </Avatar>
                </p>
                <div className='posts_info'>
                    <p className='posts_name'>{name ? name : 'Sanya'}</p>
                    <p className='posts_des'>shalu@gmail.com</p>

                </div>
            </div>
            <div className='posts_body'>
                <p>{message}</p>
            </div>
            <div className='posts_options'>
                {/* <InputItems
                    Icon={ThumbUpIcon}
                    title='Like'

                /> */}
                <div
                    className='icons'
                    onClick={handleLikeClick}
                >
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                    <p>{isLiked ? likeCount + 1 : likeCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Posts