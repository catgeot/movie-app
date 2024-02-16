import { Store } from '../core/catgeot'

interface State {
	photo: string
	name: string
	email: string
	blog: string
	github: string
	repository: string
}

export default new Store <State> ({
	photo: 'logo.726d37a8.png',
	name: 'CATGEOT',
	email: 'catgeot@gmail.com',
	blog: 'https://catgeot.netlify.app/',
	github: 'https://github.com/catgeot',
	repository: 'https://github.com/catgeot/movie-app'
})