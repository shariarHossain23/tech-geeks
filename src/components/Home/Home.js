import React from 'react';
import useBlog from '../../Hooks/useBlog';
import Blogs from '../Blogs/Blogs';

const Home = () => {
  const [blogs,setBlogs] = useBlog();
    return (
        <div>
            {
                blogs.map(blog => <Blogs key={blog._id} blogs={blog} > </Blogs>)
            }
        </div>
    );
};

export default Home;