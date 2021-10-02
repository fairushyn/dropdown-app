import React, {Component} from "react";

export class FilterOptions extends Component {
    changeOption = (type, e) => {
        const val = e.target.value;
        this.props.changeOption(val, type);
    }

    render() {
        return (
            <div className="filter-options">
                <div className="filter-option">
                    <label>Моя история обучения</label>
                    <select style={{
                        border: 0,
                        boxShadow: 'none'
                    }}
                            id="completedDateTime" value={this.props.completedDateTime}
                            onChange={this.changeOption.bind(this, 'nation')}>
                        {this.props.completedDateTimeOptions.map(function (option) {
                            return (<option selected={option} key={option} value={option === 'Все'? '' : option}>{option}</option>)
                        })}
                    </select>
                </div>
            </div>
        );
    }
}
