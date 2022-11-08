import React from 'react'
import PatientNav from 'components/nav/patientNav'
import api from "config/api"
// import Blogcard from 'components/blog/blogcard'
import Headtags from 'components/seo'
import {Row, Col} from "antd"
import dynamic from 'next/dynamic'

const Blogcard = dynamic(() => import('components/blog/blogcard'))

export async function getServerSideProps() {
  const res = await fetch(`${api}/api/blogs`)
const data = await res.json()
  return {
    props: {
      blogs: data.data.posts.data,
    }
  }
}

const Blog = ({blogs}) => {
  
  return (
    <>
    <Headtags
        title="Doctoora - Blog - Find Answers To Top Health Questions By Expert Doctors in Nigeria"
        desc="Instant and unlimited access to frequently updated health advisory content curated from our healthcare specialists and experts."
        keywords="the best healthcare services in Nigeria, good doctors in Nigeria, Quality Healthcare You can trust, Healthcare Cover, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
        <PatientNav/>
   <div className="blogpost">
        <div className="blogpost-main">
          <h1 className="title">Our Blog</h1>
          <div className="blogpost-footer">
                  <p className='footnote'>A healthy lifestyle is essential to your overall well-being, check out our articles on healthy living this week. We're confident you'll love them!</p>
                  <Row gutter={16}>
                    {
                      blogs.length === 0 ?
                      <p className="check-back">No blogpost available, check back later</p>
                      :
                      blogs.map((blog) => (
                        <Col lg={8} sm={12} xs={24} key={blog.id}>
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
      </div>
    </>
  )
}

export default Blog


