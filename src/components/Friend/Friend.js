import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, username, id} = props.friend;

    const navigate = useNavigate();
    const showFreindDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);

    }
    return (
        <div className='friend-container'>
           <h3>{name}</h3> 
           <button onClick={showFreindDetail}>{username} ID: {id}</button>
        </div>
    );
};

export default Friend;