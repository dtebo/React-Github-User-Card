import React, {Component} from 'react';

import * as MUI from '../../materialui/index';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    handleChange(e){
        //Update our state with the current input value
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.getSearch(this.state.Search);
    }

    render(){
        return(
            <div className='search-form'>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <MUI.TextField 
                        className='search'
                        label='Search'
                        name='Search'
                        value={this.state.searchValue}
                        onChange={(e) => this.handleChange(e)}
                        InputProps={{
                            endAdornment: <MUI.InputAdornment position='end'>?</MUI.InputAdornment>
                        }}
                    />
                </form>
            </div>
        );
    }
}

export default Search;