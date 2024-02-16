import { Component } from '../core/catgeot'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
	constructor() {
		super({
			tagName: 'footer'
		})
	}
	render() {
		const { github, repository } = aboutStore.state
		this.el.innerHTML = /* html */ `
			<div>
				<a href="${repository}">
					GITHUB Repository
				</a>
			</div>
			<div>
				<a href="${github}">
					${new Date().getFullYear()}
					CATGEOT
				</a>
			</div>
		`
	}
}