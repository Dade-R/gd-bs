import { ICollapse, ICollapseProps } from "../../../@types/components/collapse";
import { Base } from "../base";
import { HTML } from "./templates";

// Styles
import "./styles";

/**
 * Collapse
 */
class _Collapse extends Base<ICollapseProps> implements ICollapse {
    // Constructor
    constructor(props: ICollapseProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the id
        let id = this.props.id || "collapse" + (new Date()).getTime();

        // Set the attributes
        this.el.id = id;
        this.props.isMulti ? this.el.classList.add("multi-collapse") : null;

        // Set the content
        let content = this.props.content || "";
        let body = this.el.querySelector(".card") as HTMLDivElement;
        if (typeof (content) === "string" || typeof (content) === "number") {
            // Set the html
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Execute the render event
        this.props.onRender ? this.props.onRender(this.props, body) : null;

        // See if we are expanding it by default
        if (this.props.options && this.props.options.toggle) {
            // Toggle the element
            this.toggle();
        }
    }

    /**
     * Public Interface
     */

    // Returns true if the item is expanded
    get isExpanded(): boolean {
        // See if the item is expanded
        return this.el.classList.contains("collapsing") || this.el.classList.contains("show");
    }

    // Toggles the collapse
    toggle() {
        // See if it's expanded
        if (this.isExpanded) {
            // Start the animation
            this.el.style.height = this.el.getBoundingClientRect()["height"] + "px";
            setTimeout(() => {
                this.el.classList.add("collapsing");
                this.el.classList.remove("collapse");
                this.el.classList.remove("show");
                this.el.style.height = "";
            }, 10);

            // Wait for the animation to complete
            setTimeout(() => {
                this.el.classList.remove("collapsing");
                this.el.classList.add("collapse");
            }, 250);
        } else {
            // Start the animation
            this.el.classList.remove("collapse");
            this.el.classList.add("collapsing");
            this.el.style.height = this.el.scrollHeight + "px";

            // Wait for the animation to complete
            setTimeout(() => {
                this.el.classList.remove("collapsing");
                this.el.classList.add("collapse");
                this.el.classList.add("show");
                this.el.style.height = "";
            }, 250);
        }
    }
}
export const Collapse = (props: ICollapseProps, template?: string): ICollapse => { return new _Collapse(props, template); }