export class Carousel {
    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the items
        let items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        // Get the options
        let options = {};
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_b) {
                options = {};
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        // Render the carousel
        return GD.Components.Carousel({
            className: this.className,
            el: this.el.children[0],
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id,
            items,
            options
        });
    }
    // Render the carousel
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-carousel"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "enableControls": {
            "type": Boolean,
            "attr": "enable-controls"
        },
        "enableCrossfade": {
            "type": Boolean,
            "attr": "enable-crossfade"
        },
        "enableIndicators": {
            "type": Boolean,
            "attr": "enable-indicators"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "items": {
            "type": String,
            "attr": "items"
        },
        "options": {
            "type": String,
            "attr": "options"
        }
    }; }
}