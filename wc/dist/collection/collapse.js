export class Collapse {
    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the options
        let options = [];
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_a) {
                options = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        // Render the collapse
        return $REST.Components.Collapse({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            id: this.id,
            isMulti: this.isMulti,
            options
        });
    }
    // Render the collapse
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-collapse"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "el": {
            "elementRef": true
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isMulti": {
            "type": Boolean,
            "attr": "is-multi"
        },
        "options": {
            "type": String,
            "attr": "options"
        }
    }; }
}
