import React, { useContext } from 'react';
import { blogContext } from '../../App';
import Blogs from '../Blogs/Blogs';

const Home = () => {
  const [blogs] = useContext(blogContext);
    return (
        <div>
            {
                blogs.map(blog => <Blogs key={blog._id} blogs={blog} > </Blogs>)
            }
        </div>
    );
};

export default Home;