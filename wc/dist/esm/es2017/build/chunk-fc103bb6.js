/*! Built with http://stenciljs.com */
import { h } from '../gd-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class ButtonGroup {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
        this.el.removeAttribute("id");
        GD.Components.ButtonGroup(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-buttonGroup"; }
    static get properties() { return {
        "buttonType": {
            "type": Number,
            "attr": "button-type"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "isVertical": {
            "type": Boolean,
            "attr": "is-vertical"
        },
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
}

export { ButtonGroup as a };
