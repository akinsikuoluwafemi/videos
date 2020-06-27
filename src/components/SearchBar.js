import React, {useEffect, useState} from 'react';

// class SearchBar extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             term: ''
//         }
//     }
    

//     onInputChange =(e) =>{
//         this.setState({term: e.target.value})
//     }

//     onFormSubmit = (e) => {
//         e.preventDefault()
//         this.props.onFormSubmit(this.state.term);
       
//     }

//     render(){
        
//         return (
//             <div className="search-bar ui segment">
             
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text" value={this.state.term} onChange={this.onInputChange} />
//                     </div>
//                 </form>
                
//             </div>
//         )
//     }
// }

// export default SearchBar;



const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        //call callback;
        props.onFormSubmit(term)
        
    }
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
           </form>
        </div>
    )
}

export default SearchBar;