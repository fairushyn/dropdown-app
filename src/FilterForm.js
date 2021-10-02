import React, {Component} from "react";
import {FilterOptions} from "./FilterOptions";
import {FilterItems} from "./FilterItems";



export class FilterForm extends Component {
    state = {
        data: this.props.data,
        completedDateTime: '',
    }

    filterItems = (val) => {
       this.setState({completedDateTime: val});
    }

    render() {
        let filteredItems = this.props.data;
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

        const completedDateTimeArray = [...new Set(this.props.data.map(function (item) {
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
