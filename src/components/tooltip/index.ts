import * as jQuery from "jquery";
import { ITooltip, ITooltipProps } from "../../../@types/components/tooltip";
import { Base } from "../base";
import { ButtonClassNames, ButtonTypes } from "../button";
import * as HTML from "./index.html";

/**
 * Tooltip Types
 */
export enum TooltipTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}

/**
 * Tooltip
 */
class _Tooltip extends Base<ITooltipProps> {//implements ITooltip {
    // Constructor
    constructor(props: ITooltipProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the tooltip
    private configure() {
        // Set the button text
        this.el.innerHTML = this.props.text == null ? "" : this.props.text;

        // See if a type was defined
        let className = ButtonClassNames.getByType(this.props.btnType) || ButtonClassNames.getByType(ButtonTypes.Primary);
        if (className) {
            // Add the class name
            this.el.classList.add(className);
        }

        // Configure the options
        this.configureOptions();
    }

    // Configure the options
    private configureOptions() {
        // Update the options
        let options = this.props.options || {};

        // See if a container was defined
        if (typeof (options.container) !== "string") {
            // Set the default container
            options.container = "#bs-tooltips";

            // Ensure the main tooltip element exists
            // This will ensure the tooltips are wrapped with a parent element with the "bs" class applied to it.
            let elParent = document.querySelector(options.container);
            if (elParent == null) {
                // Create the main element
                elParent = document.createElement("div");
                elParent.classList.add("bs");
                elParent.id = "bs-tooltips";

                // Add it to the page
                document.body.appendChild(elParent)
            }
        }

        // Set the type
        switch (this.props.type) {
            // Auto
            case TooltipTypes.Auto:
                options.placement = "auto";
                break;
            // Bottom
            case TooltipTypes.Bottom:
                options.placement = "bottom";
                break;
            // Left
            case TooltipTypes.Left:
                options.placement = "left";
                break;
            // Right
            case TooltipTypes.Right:
                options.placement = "right";
                break;
            // Default - Top
            default:
                options.placement = "top";
                break;
        }

        // Set the attributes
        this.el.setAttribute("data-placement", options.placement);

        // See if the title is a string
        if (typeof (options.title) === "string") {
            // Set the attribute
            this.el.setAttribute("title", options.title);
        }

        // Create the tooltip
        jQuery(this.el).tooltip(options);
    }

    /**
     * Public Interface
     */

    // Enables the tooltip
    enable() { jQuery(this.el).tooltip("enable"); }

    // Hides the tooltip
    hide() { jQuery(this.el).tooltip("hide"); }

    // Shows the tooltip
    show() { jQuery(this.el).tooltip("show"); }

    // Toggles the tooltip
    toggle() { jQuery(this.el).tooltip("toggle"); }

    // Enables the toggle
    toggleEnabled() { jQuery(this.el).tooltip("toggleEnabled"); }

    // Updates the tooltip
    update() { jQuery(this.el).tooltip("update"); }
}
export const Tooltip = (props: ITooltipProps): ITooltip => { return new _Tooltip(props); }