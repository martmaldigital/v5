import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Image from 'next/image';
import api from "config/api"

const Related = ({relate}) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        getConditions();
       },[])
    
    const getConditions = 
        () => {
          axios
            .post(`${api}/api/search`,{
                specialization: "General Practitioner",
                location: "Video Consultation",
                visit_type: "Video Consultation",
            })
            .then((res) => {
              setResult(res.data.data.professional);
            })
            .catch((err) => {
              message.error("Get : Something went wrong!");
            });
        };
 
  return (
    <>
    {
        result &&
        result.map((item, index) => (
        <div className="relateddoctor" key={index}>       
       { 
       item.doctoora_id !== relate ?
        (
        <>
        <div className="img">
          <Image
            src={item.dp}
            alt="doctor"
            layout="fill"
          />
        </div>
        <p className="relateddoctor-name">
        {item.title} {item.firstname} {item.lastname}
          </p>
        <div className="location">
          <div className="eimg">
          <Image
            src="/img/location.svg"
            alt="address"
            layout="fill"
          />
          </div>
          <span>
            {item.city}, {item.state}.
              </span>
        </div>
        <a href={`https://v5-1.vercel.app/book/${item.doctoora_id}`}>
        <button className='custom-btn action-btn'
        >
          View Bio
        </button>
        </a>
        </>
       ): null
      }
    </div>
        ))
    }
    </>
  )
}

export default Related