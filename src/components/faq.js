import Image from 'next/image';
import { Collapse } from 'antd';

import { FAQ, testimonies } from 'pages/api/hello';

const { Panel } = Collapse;

const Faq = () => {
  return (
    <>
      <div className="testimonies">
        <hr />
        <h1 className="title">
          What <span className="title work-span">Doctoora </span>Patients Have
          to Say
        </h1>
        <div className="testimonies-holder p">
          {testimonies.map((item, index) => (
            <div className="testimony p" key={`tesitimony-${index}`}>
              <p className="text">{item.text}</p>
              <div className="user-info">
                <div className="img">
                  <Image src={item.img} alt="avatar" layout="fill" />
                </div>
                <div className="user-name">
                  {item.name} <br />
                  <p className="br">{item.social}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="works">
        <hr />
        <h1 className="title">
          FAQs, Let us Answer Some of your Frequent Questions
        </h1>
        {FAQ.map((Item, index) => (
          <div className="faq-container" key={index}>
            <Collapse expandIconPosition="end" accordion>
              <Panel header={Item.header}>
                <p className="faq-text">{Item.text}</p>
              </Panel>
            </Collapse>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
