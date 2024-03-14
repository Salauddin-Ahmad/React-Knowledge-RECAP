import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingtime, }) => {
  return (
      <div className="md:w-1/3 bg-slate-100 p-4 m-4 rounded-xl">
        <div> Time read {readingtime} </div>
        <h1 className="text-2xl text-center bggray">Bookmarked: {bookmarks.length}</h1>
        {
            bookmarks.map((bookmark, index ) => 
            <Bookmark 
            key={index}
            bookmark={bookmark}
            >
            </Bookmark>)
        }
      </div>
   
  );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime: PropTypes.number.isRequired
};

export default Bookmarks;
