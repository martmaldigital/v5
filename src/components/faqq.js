import React from 'react'
import { Collapse } from 'antd'
import { FAQ } from 'pages/api/hello'

const { Panel } = Collapse;


const faqq = () => {
  return (
    <>
     <Collapse expandIconPosition='end' accordion>
        {FAQ.map((item, index) => (
              <Panel header={item.header} key={index}>
                <p className="faq-text">{item.text}</p>
              </Panel>
        ))}
        </Collapse>
    </>
  )
}

export default faqq