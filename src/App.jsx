
import Header from './components/Header'
import Bookmarks from './components/Bookmarks'
import './App.css'
import Blogs from './components/Blogs'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmard = blog => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) => {
    // console.log('marking as read');
    setReadingTime(readingTime + time);

    // removing from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id!==id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmard = {handleAddToBookmard} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
