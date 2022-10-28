import dayjs from 'dayjs';



const Blogcard = ({blog}) => {


  return (  
      <div className="blogcard">
        <div className="blogcard-details">
          <h1 className="details-title">
            {blog.title}
          </h1>
          <div>
          <a href = {`https://v5-1.vercel.app/blog/${blog.slug}`} >
          <p className="desc" dangerouslySetInnerHTML={{ __html: `${blog.content.substring(0, 200)}...<em>Read more</em>`}}></p>
          </a>
          </div>
          <div className="person">
            <div className="img-holder">
              <img
                src={blog === undefined || blog.author_image === null || blog.author_image === '' ? 'https://res.cloudinary.com/dn5kttwc8/image/upload/v1606263550/z6l9d9dkcrjkc6ucwhfg.png'
                  :
                  blog.author_image}
                alt={blog.author} />
            </div>
            <div className="person-name">
              <h3 className="name">{blog.author}</h3>
              <p className="person-timing">
                {dayjs(blog.created_at).format('DD-MM-YYYY')}
              </p>
            </div>
          </div>
        </div>
        <div className="img-holder main-img">
          <img src={blog.image} alt={blog.title} />
        </div>

      </div>
  )

}

export default Blogcard
