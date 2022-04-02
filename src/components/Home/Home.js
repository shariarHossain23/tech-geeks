import React from 'react';
import useBlog from '../../Hooks/useBlog';

const Home = () => {
  const [blogs,setBlogs] = useBlog();
  console.log(blogs);
    return (
        <div>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;