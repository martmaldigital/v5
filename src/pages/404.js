import React from 'react'
import Headtags from 'components/seo'
import Link from 'next/link'

const Index = () => {
  return (
    <>
     <div className="error">
     <Headtags
        title="Doctoora - Error 404 "
        desc="Doctoora - Error 404"
      />
        <div className="error-main">
          <h1 className="title">
            ERROR 404!!!
          </h1>
          <p className="footnote">
            There seems to be a problem somewhere either the page has moved or does not exist
          </p>
          <Link href='/'>
          <p className="go-back">
            Go Back
          </p>
          </Link>
          <div className="img-holder">
            <img src="/img/error.svg" alt="error" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index