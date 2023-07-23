import { createPopper } from '@popperjs/core';

export const error_translates = {
    'unknown-word': 'Kata tidak dikenali.',
    'misspelling': 'Kata salah eja.',
    'extra-space': 'Terdapat spasi berlebih.',
}

export class FixerElement extends HTMLElement {

    constructor() {
        super();
    }
    showTooltip() {
        this.tooltipEl.classList.add('show');
    }
    hideTooltip() {
        this.tooltipEl.classList.remove('show');
    }
    connectedCallback() {
        this.tooltipEl = document.createElement('div');
        this.tooltipEl.className = "u-x-tooltip";
        this.tooltipEl.innerHTML =
        `${error_translates[this.getAttribute('data-type')]}
        <br>Sugesti: <b>${this.getAttribute('data-suggestion') || '?'}</b>`;
        document.body.appendChild(this.tooltipEl);
        this.addEventListener('mouseenter', this.showTooltip);
        this.addEventListener('mouseleave', this.hideTooltip);
        // keyboard
        this.addEventListener('focus', this.showTooltip);
        this.addEventListener('blur', this.hideTooltip);
        this.popper = createPopper(this, this.tooltipEl, {
            placement: 'bottom',
        });
    }
    disconnectedCallback() {
        this.removeEventListener('mouseenter', this.showTooltip);
        this.removeEventListener('mouseleave', this.hideTooltip);
        // keyboard
        this.removeEventListener('focus', this.showTooltip);
        this.removeEventListener('blur', this.hideTooltip);
        this.tooltipEl.remove();
        this.popper.destroy();
    }
}