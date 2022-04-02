import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogContext } from '../../App';
import './blogdetail.css';
const Blogdetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blogs] = useContext(blogContext);
    const blog = blogs.find(blog => blog._id === id);
    return (
        <div>
            <div className='linear-gradient'>
                <button className='back-btn' onClick={()=> navigate(-1)}>back</button>
            </div>
        </div>
    );
};

export default Blogdetails;