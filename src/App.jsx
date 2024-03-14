import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

  }

  const handleMarkAsRead = (id, time) => {
    const newReadinTime = readingtime + time;
    setReadingtime(newReadinTime);
    // console.log('remove Bookmark', id)
    const remaining =bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);
  }

  return (
    <>
    <Header></Header>
    <div className=" md:flex w-[90%] lg:max-w-screen-xl mx-auto">
    <Blogs handleAddToBookmark={handleAddToBookmark}
    handleMarkAsRead={handleMarkAsRead}
    ></Blogs> 
    <Bookmarks 
    handleMarkAsRead={handleMarkAsRead}
    bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
    </div>
    </>
  );
}

export default App;
