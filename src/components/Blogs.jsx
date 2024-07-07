import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmard, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3 mt-4">
            {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog = {blog} handleAddToBookmard = {handleAddToBookmard} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    
    handleAddToBookmard: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;