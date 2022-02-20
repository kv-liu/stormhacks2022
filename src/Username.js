import React, { Component } from 'react';
export default class Username extends Component {}
import { useState } from 'react';

function MyForm(){
	const [name, setName] = useState("");
	return(
		<form>
			<label>Enter your username:
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				/>
			</label>
		</form>
		)
}
