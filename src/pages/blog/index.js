import React, { useState, useEffect } from 'react'
import PatientNav from 'components/nav/patientNav'
import axios from 'axios'
import api from "config/api"
import Blogcard from '../../components/blog/blogcard'



export async function getServerSideProps() {
  const res = await axios.get(`${api}/api/blogs`)

  return {
    props: {
      blogs: res.data.data.posts.data,
    }
  }
}

const Blog = ({blogs}) => {
  
  return (
    <>
        <PatientNav/>
   <div className="blog">
        <div className="blog-main">
          <h1 className="title">Our Blog</h1>
          <div className="blogs-holder">
                  {
                    blogs.length === 0 ?
                      <p className="check-bacnk">No blogpost available, check back later</p>
                      :
                     blogs.map((blog) => (
                        <Blogcard
                          key={blog.id}
                          blog={blog}
                        />
                      ))
                     }
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog


