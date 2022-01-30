import { BsFillHeartFill } from "react-icons/bs";
import type { CheckupType } from "@utils/types/patient.types";

export interface ICheckupProps {
  checkup: CheckupType;
}

const Checkup = ({ checkup }: ICheckupProps) => {
  return (
    <div className="container">
      <section className="date_info">
        <div className="image">
          <BsFillHeartFill size={20} color="#ec2c2c" className="hola" />
          <p className="date">{checkup.date}</p>
          <p className="time">{checkup.time}</p>
        </div>
      </section>
      <section className="patient_info">
        <div className="general_info">
          <p className="pa">PA {checkup.bloodPressure}</p>
          <p className="rc">RC {checkup.heartRate}</p>
          <p className="annotation">
            {checkup.anotation ? checkup.anotation : "sin comentarios"}
          </p>
        </div>
        {/* <div className="buttons">
          <button>ver mas</button>
        </div> */}
      </section>
      <style jsx>{`
        .container {
          display: grid;
          width: 340px;
          grid-template-columns: 1fr 1fr;
          background-color: #fafafa;
          color: #101110;
          border-radius: 4px;
          padding: 16px 12px;
        }

        .date_info {
          display: grid;
          place-items: center;
          font-family: "Roboto", sans-serif;
        }

        .date_info > .image {
          text-align: center;
        }

        .date_info > .image p {
          font-size: 9pt;
          color: gray;
        }

        .date_info > .image > .date {
          text-transform: uppercase;
        }

        .patient_info {
          display: grid;
          grid-template-rows: 1fr auto;
        }

        .patient_info > .general_info {
          display: grid;
          font-size: 11pt;
          grid-template-areas:
            "pa rc"
            "annotation annotation";
          align-items: center;
        }

        .patient_info > .general_info .pa,
        .patient_info > .general_info .rc {
          color: #2859e0;
        }

        .patient_info > .general_info > .pa {
          grid-area: pa;
        }

        .patient_info > .general_info > .rc {
          grid-area: rc;
        }

        .patient_info > .general_info > .annotation {
          grid-area: annotation;
          color: gray;
          font-size: 11pt;
        }

        .patient_info .buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        @media (max-width: 420px) {
          .container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkup;
