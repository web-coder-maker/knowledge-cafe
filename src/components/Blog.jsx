import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmard, handleMarkAsRead}) => {
    const {id,title, cover, author, author_img, posted_date, reading_time, hashtags,content} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the ${title}`} />
            <div className="flex items-center justify-between mb-4">
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p> {posted_date} </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmard(blog)} className='ml-2 text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <p className='text-justify'>{content}</p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-blue-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmard: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;