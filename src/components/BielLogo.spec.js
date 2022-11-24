import { render } from '@testing-library/vue'
import BielLogo from './BielLogo.vue'

describe('BielLogo', () => {

	test('should render BielLogo component', ()=> {
		const { getByText } = render(BielLogo)

		expect(getByText('Biel Test Logo'))
	})
})