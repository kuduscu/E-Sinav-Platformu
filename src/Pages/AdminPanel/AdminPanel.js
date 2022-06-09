import React from "react";
import NewQuestion from "../../components/NewQuestion/NewQuestion";
import Ogrenciler from "../../components/Ogrenciler/Ogrenciler";
import "./AdminPanel.css";

const AdminPanel = ({ name, score, category, difficulty }) => {
  const DUMMY_NOTES = [
    {
      name: "Kemal",
      category: "React",
      score: 100,
      difficulty: "Vize",
    },
    { name: "Mert", category: "JavaScript", score: 70, difficulty: "Vize" },
    { 
      name: "Ayşe",
      category: "CSS",
      score: 20,
      difficulty: "Final",
    },
    {
      name: "Merve",
      category: "React",
      score: 40,
      difficulty: "Final",
    },
    {
      name: "Ceren",
      category: "CSS",
      score: 56,
      difficulty: "Vize",
    },
    {
      name: "Sedef",
      category: "HTML",
      score: 42,
      difficulty: "Vize",
    },
    {
      name: "Hasan",
      category: "JavaScript",
      score: 91,
      difficulty: "Final",
    },
  ];


  return (
    <div>
      <div>
        <NewQuestion/>
      </div>
      <form className="new-expense1">
        <span className="ogrenciNot">Öğrenci Notları :</span>
      <div>
        <Ogrenciler items={DUMMY_NOTES}/>
        <li>
          {name} isimli öğrenci, {category} dersinin {difficulty} sınavından
          {score*10}
          puan almıştır
        </li>
      </div>
      </form>
    </div>
  );
};

export default AdminPanel;
