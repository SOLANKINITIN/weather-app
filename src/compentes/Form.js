import React from 'react';


// class Form extends React.Component {
//   render(){
//     return(
//       <div>
//       <form onSubmit={this.props.getWeather}>
//         <input type="text"name="city" placeholder="city...."/>
//         <input type="text"name="country" placeholder="country...."/>
//         <button>Get weateher</button>
//       </form>
//       </div>
//     );
//   }
// };
const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;
