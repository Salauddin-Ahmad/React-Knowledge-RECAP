import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img,
           posted_date, reading_time, hashtags} = blog;

    return (
        <div className='mb-14'>
            <img className='rounded' src={cover} alt="${title}" />
            <div className='flex gap-4'>

               <div className=''> 
                <img className='w-20 my-4' src={author_img} alt=""/>
                </div>
                <div className='w-[65%] my-4 '>
                <h1 className='text-2xl'>{author}</h1>
                <h1 className='text-sm'>{posted_date}</h1>
                </div>

                <div className='flex my-6 items-start'>
                    <h1 className='text-base'>{reading_time} min read</h1>
                    <button onClick={() => handleAddToBookmark(blog)} 
                    className='mt-1 ml-1 text-red-700 text-xl'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>

            </div>
            <h2 className='text-3xl'>{title}</h2>
           <p className='py-2'>
            {
                hashtags.map((hash, idx)  =>
                     <span key={idx}><a className='pr-2' href="">#{hash}</a></span>)
            }
           </p>
           <button
           onClick={() => handleMarkAsRead(id, reading_time)}
           className='text-purple-700 font-bold underline'>Mark as read</button>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}