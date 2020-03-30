import { IBreadcrumb, IBreadcrumbProps, IBreadcrumbItem } from "../../../@types/components/breadcrumb";
import { Base } from "../base";
import * as HTML from "./index.html";
import { BreadcrumbItem } from "./item";

/**
 * Breadcrumb
 */
class _Breadcrumb extends Base<IBreadcrumbProps> implements IBreadcrumb {
    // Constructor
    constructor(props: IBreadcrumbProps) {
        super(HTML, props);

        // Render the items
        this.renderItems();

        // Configure the parent
        this.configureParent();
    }

    // Configures the events
    private configureEvents(item: BreadcrumbItem) {
        // See if there is a click event
        if (this.props.onClick) {
            // Add the click event
            item.el.addEventListener("click", ev => {
                // Call the click event
                this.props.onClick(item.props, ev);
            });
        }
    }

    // Renders the breadcrumb items
    private renderItems() {
        // Get the list element
        let elList = this.el.querySelector(".breadcrumb");

        // Parse the item properties
        let itemProps = this.props.items || [];
        for (let i = 0; i < itemProps.length; i++) {
            let itemProp = itemProps[i];

            // Set the active flag
            itemProp.isActive = i == itemProps.length - 1;

            // Render the item
            let item = new BreadcrumbItem(itemProp);

            // Configure the events
            this.configureEvents(item);

            // Add the item
            elList.appendChild(item.el);
        }
    }
}
export const Breadcrumb = (props: IBreadcrumbProps): IBreadcrumb => { return new _Breadcrumb(props); }