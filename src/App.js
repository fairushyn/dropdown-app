import './App.css';
import React from "react";
import {FilterForm} from "./FilterForm";


const cards = [
  {
    id: 8,
    code: '[EXPERT]',
    completedDateTime: '2017',
    form: 'онлайн обучение',
    institution:
        'Московский издательско-полиграфический коледж имени Ивана Федорова',
    programName:
        'Эксперт демонстрационного экзамена по стандартам Ворлдскиллс Россия',
    competenceName: 'Машинное обучение и большие данные'
  },
  {
    id: 10,
    code: '[TEST]',
    completedDateTime: '2018',
    form: 'онлайн обучение',
    programName: 'Навигатор по Future Skills',
    competenceName: 'Машинное обучение и большие данные',
    institution:
        'Московский издательско-полиграфический коледж имени Ивана Федорова'
  }
];

function App() {
  return (
      <FilterForm data={cards}/>
  );
}

export default App;
