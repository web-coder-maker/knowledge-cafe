import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
import './Bookmarks.css'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3'>
            <div className='reading-box ml-4 rounded-xl p-4 mt-4 mb-4'>
                <h3 className='text-4xl text-center'>Reading Time: {readingTime}</h3>
            </div>
            <div className="bg-slate-200 ml-4 pt-5 pb-5 pl-3 pr-3 rounded-xl">

                <h2 className="text-3xl text-center">bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;