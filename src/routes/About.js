import { Component } from '../core/catgeot'
import aboutStore from '../store/about'

export default class extends Component {
	render() {
		const { photo, name, email, github, blog } = aboutStore.state
		this.el.classList.add('container', 'about')
		this.el.innerHTML = /* html */ `
			<div 
				style="background-image: url('${photo}');" 
				class="photo"></div>
			<p class="name">${name}</p>
			<p>
				<a href="https://mail.goole.com/mail/?view=cm&fs=1&to=${email}" 
				target="blank">
				${email}</a>
			</p>
			<p><a href="${github}" target="blank">GITHUB</a></p>
			<p><a href="${blog}" target="blank">Blog</a></p>
		`
	}
}