import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Card_A, Card_B, Card_Main, Card_Tool, Card_Team } from "../components/Card";

export default function ProjectPage() {
  const { state } = useLocation();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (!state?.projectName) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/projectDetails/${encodeURIComponent(state.projectName)}`);
        setDetail(res.data);
      } catch (err) {
        console.error("Error fetching detail:", err);
      }
    };

    fetchData();
  }, [state?.projectName]);

  if (!detail) return <p className="text-center mt-10">กำลังโหลดข้อมูล...</p>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-cyan-900 text-3xl font-bold mb-8">{detail.name}</h1>


      <Card_Main 
        Name={"Highlights / Features"} 
        desc={detail.highlight}
        url={detail.doc}
        project={detail.name}
        image={detail.image}
        git={detail.github}
      />

      <Card_Tool used={detail.used} />

      <Card_A 
        Name={"Outcomes"} 
        desc={detail.outcomes}
      />

      <div className="flex gap-5">
        <Card_B Name={"Advantages"} color={"green"} desc={detail.advantage} />
        <Card_B Name={"Limitations"} color={"red"}  desc={detail.limitation}/>
      </div>

      <Card_Team desc={detail.teammate} />

    </div>
  );
}
