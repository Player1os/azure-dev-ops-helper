export const windowLoad = new Promise((resolve: (value: void) => void) => {
	window.onload = () => {
		resolve()
	}
})
