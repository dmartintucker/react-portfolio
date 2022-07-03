import { useParams } from "react-router-dom";

import work from "../data";

const Work = () => {
  const id = useParams().id;
  const workData = work.filter((w) => w.id === id)[0];
  const bannerImg = require(`../assets/${workData.img}`);

  return (
    <main className="container">
      <div className="flex-section" style={{ alignItems: "center" }}>
        <img style={{ width: "min(100%, 480px)" }} src={bannerImg} alt="" />
      </div>
      <div className="flex-section">
        <h2>{workData.title}</h2>
      </div>

      {workData.content.map((d) => {
        return (
          <div className="flex-section">
            <h4>{d.sectionName}</h4>
            {d.content.map((c) => {
              return <p>{c}</p>;
            })}
          </div>
        );
      })}
    </main>
  );
};

export default Work;
