import React, {useEffect, useState} from 'react'
import PatientNav from 'components/nav/patientNav'
import axios from 'axios'
import api from "config/api"
import Blogcard from 'components/blog/blogcard'
import { Row, Col, message, notification } from 'antd'
import  { useRouter } from "next/router";
import dayjs from 'dayjs';

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc
  })
}


const Blogpost = () => {

const [loading, isLoading] = useState(false);
 const [blog, setBlog] = useState({});
const [blogs, setBlogs] = useState([]);


  const router = useRouter();
  const {slug} = router.query;


  useEffect(() => {
    getBlog();
    getBlogs();
   },[])


const getBlog = async () => {
  try {
    isLoading(true)
    const res = await axios.get(`${api}/api/blogs/${slug}`);
    if (res.data.status === 'success' && res.data.data.post.slug === slug) {
       setBlog(res.data.data.post)
       isLoading(false)
      document.title = `Doctoora - ${res.data.data.post.title}`
    } else {
      openNotificationWithIcon('warning', 'Blog not found!')
      router.push('/blog')
    }
  } catch (err) {
    isLoading(false)
    message.error('Get Blog: Something went wrong!')
    
  }
}

const getBlogs = () => {
  isLoading(true)
  axios.get(`${api}/api/blogs`).then((res) => {
      setBlogs(res.data.data.posts.data)
      isLoading(false)
  }).catch((err) => {
    message.error('Get Blogs: Something went wrong!')
      blogs,
      isLoading(false)
  })
}


  return (
    <>
    <PatientNav />
       <div className="blogpost">
        {
          loading ?
            <div>
            </div>
            :
            <>
              <div className="blogpost-main">
                <div className="back-holder">
                  <a href="#" onClick={(e) => router.push('/blog')
}>
                    <img src="/img/left.svg" alt="" />
             Back
            </a>
                </div>
                <div className="blogpost-top">
                  <div className="blogcard-details">
                    <h1 className="details-title">
                      {blog.title}
                    </h1>
                    <div className="person">
                      <div className="img-holder">
                        <img
                          src={blog === undefined || blog.author_image === null || blog.author_image === '' ? 'https://res.cloudinary.com/dn5kttwc8/image/upload/v1606263550/z6l9d9dkcrjkc6ucwhfg.png'
                            :
                            blog.author_image}
                          alt="" />
                      </div>
                      <div className="person-name">
                        <h3 className="name">{blog.author}</h3>
                        <p className="person-timing">
                        {dayjs(blog.created_at).format('DD-MM-YYYY')}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="img-holder">
                    <img src={blog.image} alt="blog-image" />
                  </div>
                </div>
                <div className="blogpost-middle">
                  <p dangerouslySetInnerHTML={{ __html: blog.content }}>

                  </p>
                </div>
                <div className="blogpost-footer">
                 <div className="blogpost-footer-top">
                    {
                      blogs.length > 0 && <p className="also-like">
                        You may also like:
                    </p>
                    }
                  </div>
                  <Row gutter={16}>
                    {
                      blogs.slice(0, 4).map((blog) => (
                        <Col lg={8} xs={24} key={blog.id}>
                          <Blogcard
                             key={blog.id}
                            blog={blog}
                          />
                        </Col>
                      ))
                    }
                  </Row>
                 </div>
                </div>
            </>
        }
      </div>
    </>
  )
}

export default Blogpost
