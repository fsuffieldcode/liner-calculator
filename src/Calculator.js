import React, { Component } from 'react';
import styles from './Calculator.module.css';

export default class Calculator extends Component {
	state = {
		selectedOption: 'Feet',
	};

	handleOptionChange = (changeEvent) => {
		this.setState({
			selectedOption: changeEvent.target.value,
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();

		const length = e.target[2].value;
		const width = e.target[3].value;
		const depth = e.target[4].value;

		if (this.state.selectedOption === 'Feet') {
			const newDepth = depth * 2 + 1;
			const newLength = length + newDepth;
			const newWidth = width + newDepth;
			console.log(newLength, newWidth);

			return {
				newLength,
				newWidth,
			};
		}
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleFormSubmit} className={styles.container}>
					<label>
						<input
							type='radio'
							name='measurement'
							value='Metres'
							checked={this.state.selectedOption === 'Metres'}
							onChange={this.handleOptionChange}
						/>
						Metres
					</label>
					<label>
						<input
							type='radio'
							name='measurement'
							value='Feet'
							checked={this.state.selectedOption === 'Feet'}
							onChange={this.handleOptionChange}
						/>
						Feet
					</label>
					<br />
					<label>
						<input type='text' name='length'></input>
						Length
					</label>
					<label>
						<input type='text' name='width'></input>
						Width
					</label>
					<label>
						<input type='text' name='depth'></input>
						Depth
					</label>
					<button type='submit'>Submit</button>
				</form>
				<div>
					`You require a liner measuring at least ${newLength} x ${newWidth} $
					{this.state.selectedOption}`
				</div>
			</React.Fragment>
		);
	}
}
