import React from 'react';
import './Search.css';

const Search = ({GetTitle,OnButtonClick})=>{
	return(
		<div className = "center">
			<div className = 'bm bg-light-yellow w-40 mt5 shadow-5 pa4 br3'>
				<input className = "center w-70 br4 bg-black yellow"  onChange = {GetTitle} type = 'text' />
				<button className = "w-20 bg-yellow br4 light-black  pointer f4 dim dib grow mt4 ml4 mr4 " onClick ={OnButtonClick}>search</button>
			</div>
		</div>
		);

}
export default Search;