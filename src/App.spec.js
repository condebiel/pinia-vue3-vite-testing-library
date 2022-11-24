import { render } from '@testing-library/vue'
import App from './App.vue'
import { createTestingPinia } from '@pinia/testing'

describe('App', () => {

	test('should render App component', ()=> {
		const { getByText } = render(App, {
			global: {
        plugins: [
          createTestingPinia({
            initialState: {
              user: { name: 'Biel', isAdmin: true }
            },
            stubActions: false,
            createSpy: vi.fn,
          }),
        ],
      },
		})

		expect(getByText('Biel Test Logo'))
	})
})