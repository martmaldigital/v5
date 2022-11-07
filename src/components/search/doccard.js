import { Rate } from "antd";
import { useRouter } from "next/router";


const Doccard = ({doctor}) => {
    const router = useRouter();

  return (
    <>
          <div className="doccard">
        <div className="img-holder">
          <img
            src={
              doctor === undefined || doctor.dp === null
                ? "https://res.cloudinary.com/dn5kttwc8/image/upload/v1606263550/z6l9d9dkcrjkc6ucwhfg.png"
                : doctor.dp
            }
            alt=""
          />
        </div>
        {doctor === undefined ? null : (
          <h3 className="doc-name">
            Dr {`${doctor.firstname} ${doctor.lastname}`}
          </h3>
        )}

        {doctor === undefined ? null : (
          <p className="doc-spec">{doctor.specialization}</p>
        )}

        <div className="ratings-holder">
          <Rate disabled allowHalf defaultValue={doctor.review} />
        </div>

        <div className="actions">
          <button
            className="custom-btn into-btn"
           onClick={() => router.push(`book/${doctor.doctoora_id}`)}
          >
            View Bio
          </button>
        </div>
      </div>
    </>
  )
}

export default Doccard