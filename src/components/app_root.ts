import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * The root of the application.
 */
@customElement('app-root')
export class AppRoot extends LitElement {
	static styles = css`p { color: blue }`;

	/**
	 * A basic property.
	 */
	@property()
	name = 'Somebody';

	public render() {
		return html`<p>Hello, ${this.name}!</p>`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'app-root': AppRoot
	}
}
