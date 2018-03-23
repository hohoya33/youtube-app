import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
        //검색어가 새 검색어로 바뀔 때 이를 호출
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;