import React, {Component} from "react";

export class FilterItems extends Component {
    render() {
        return (
            <div className="filter-items">
                {this.props.data
                    .sort((a, b) => a.completedDateTime < b.completedDateTime ? 1 : -1)
                    .map(function (item) {
                        return (
                            <div className="filter-item">{item.competenceName} - {item.completedDateTime}</div>
                        );
                    })}
            </div>
        );
    }
}
