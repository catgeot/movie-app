import { Component } from '../core/catgeot'

export default class extends Component {
	render() {
		this.el.classList.add('container', 'not-found')
		this.el.innerHTML = /* html */ `
			<h1>
				Sorry..<br>
				Page Not Found.
			</h1>
		`
	}
}