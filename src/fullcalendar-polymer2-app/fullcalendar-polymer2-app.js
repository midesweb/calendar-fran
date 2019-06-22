import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../fullcalendar-component';

/**
 * @customElement
 * @polymer
 */
class FullcalendarPolymer2App extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti saepe eius quasi vero. Officia non natus culpa omnis vero fuga alias minima suscipit cum libero ab, maxime laborum. Veritatis, facere.</p>
      <fullcalendar-component>
        <slot></slot>
      </fullcalendar-component>
      <p>Magni autem quasi iusto ratione nihil magnam hic esse. Consectetur ad voluptatem ut quasi culpa id, asperiores expedita deleniti nam, aperiam repellendus eligendi praesentium hic voluptatibus itaque temporibus porro animi!</p>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'fullcalendar-polymer2-app'
      }
    };
  }
  
}

window.customElements.define('fullcalendar-polymer2-app', FullcalendarPolymer2App);
