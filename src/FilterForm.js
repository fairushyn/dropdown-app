import React, {Component} from "react";
import {FilterOptions} from "./FilterOptions";
import {FilterItems} from "./FilterItems";


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

export class FilterForm extends Component {
    state = {
        data: cards,
        completedDateTime: '',
    }

    filterItems = (val) => {
       this.setState({completedDateTime: val});
    }

    render() {
        let filteredItems = cards;
        const state = this.state;
        const filterProperties = [ "completedDateTime" ];
        filterProperties.forEach(function (filterBy) {
            const filterValue = state[filterBy];
            if (filterValue) {
                filteredItems = filteredItems.filter(function (item) {
                    return item[filterBy] === filterValue;
                });
            }
        });

        const completedDateTimeArray = [...new Set(cards.map(function (item) {
            return item.completedDateTime
        }))];

        completedDateTimeArray.unshift("Все");

        return (
            <div className="container">
                <FilterOptions
                    data={this.state.data}
                    completedDateTimeOptions={completedDateTimeArray}
                    changeOption={this.filterItems}/>
                <div className="filter-form">
                    <FilterItems data={filteredItems}/>
                </div>
            </div>
        )
    }
}
