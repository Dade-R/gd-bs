import "bootstrap/js/dist/alert";
import { jQuery } from "../../core";
import { IAlert, IAlertProps } from "../../../@types/components/alert";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import * as HTML from "./index.html";

/**
 * Alert Types
 */
export enum AlertTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Alert Class Names
 */
export const AlertClassNames = new ClassNames([
    "alert-danger",
    "alert-dark",
    "alert-info",
    "alert-light",
    "alert-primary",
    "alert-secondary",
    "alert-success",
    "alert-warning"
]);

/**
 * Alert
 */
class _Alert extends Base<IAlertProps> implements IAlert {
    // Constructor
    constructor(props: IAlertProps) {
        super(HTML, props);

        // Set the default styling
        this.el.classList.add(AlertClassNames.getByType(this.props.type) || AlertClassNames.getByType(AlertTypes.Primary));

        // Render the header
        this.renderHeader();

        // Configure the alert
        this.configure();

        // Configure the parent element
        this.configureParent();

        // Create the bootstrap object
        this._bootstrapObj = jQuery ? jQuery(this.el) : null;
    }

    // Configure the alert
    private configure() {
        let content = this.props.content || "";

        // See if the content is a string
        if (typeof (content) === "string") {
            // Set the html
            this.el.innerHTML += content;
        } else {
            // Append the element
            this.el.appendChild(content);
        }

        // See if we need to add the dismiss icon
        if (this.props.isDismissible) {
            // Add the class
            this.el.classList.add("alert-dismissible");

            // Create the button
            let btn = document.createElement("button");
            btn.className = "close";
            btn.type = "button";
            btn.setAttribute("data-dismiss", "alert");
            btn.setAttribute("aria-label", "Close");
            btn.innerHTML = '<span aria-hidden="true">&times;</span>';

            // Append the button
            this.el.appendChild(btn);
        }
    }

    // Render the header
    private renderHeader() {
        let header = this.el.querySelector(".alert-heading");

        // See if a header was defined
        if (this.props.header) {
            // Set the heading
            header.innerHTML = this.props.header;
        } else {
            // Remove the element
            this.el.removeChild(header);
        }
    }

    /**
     * Bootstrap
     */

    // Closes the alert
    close() { this._bootstrapObj ? this._bootstrapObj.alert("toggle") : null; }

    // Disposes the alert
    dispose() { this._bootstrapObj ? this._bootstrapObj.alert("dispose") : null; }

    /**
     * Public Properties
     */

    // Clears the alert and updates the text
    setText(alertText?: string) {
        // Clear the element
        while (this.el.firstChild) { this.el.removeChild(this.el.firstChild); }

        // Set the text
        let elText = document.createTextNode(alertText == null ? "" : alertText);

        // Append the text
        this.el.appendChild(elText);
    }

    // Updates the alert template type
    setType(alertType: number) {
        // Parse the class names
        AlertClassNames.parse(className => {
            // Remove the class name
            this.el.classList.remove(className);
        });

        // Set the alert type
        this.el.classList.add(AlertClassNames.getByType(alertType) || AlertClassNames.getByType(AlertTypes.Primary));
    }
}
export const Alert = (props: IAlertProps): IAlert => { return new _Alert(props); }