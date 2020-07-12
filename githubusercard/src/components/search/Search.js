import React, {Component} from 'react';

import * as MUI from '../../materialui/index';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    render(){
        return(
            <div className='search-form'>
                <form>
                    <MUI.TextField 
                        className='search'
                        label='Search'
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