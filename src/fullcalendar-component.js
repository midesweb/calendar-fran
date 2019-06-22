import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `fullcalendar-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class FullcalendarComponent extends PolymerElement {
  static get properties() {
    return {

    }
  }

  static get template() {
    return html`
      <slot></slot>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  ready() {
    super.ready();
    console.log('aki');
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ]
    });

    calendar.render();
  }
}

customElements.define('fullcalendar-component', FullcalendarComponent);