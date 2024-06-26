import tippy, { animateFill, followCursor, inlinePositioning, sticky } from "tippy.js";
import { ITippyProps } from "../types";
import { IPopover, IPopoverProps } from "./types";
import { Button } from "../button";
import { Base } from "../base";
import { appendContent, setClassNames } from "../common";

/**
 * Popover Types
 */
export enum PopoverTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    LightBorder = 5,
    Material = 6,
    Primary = 7,
    Secondary = 8,
    Success = 9,
    Translucent = 10,
    Warning = 11
}

/**
 * Popover Placements
 */
export enum PopoverPlacements {
    Auto = 1,
    AutoStart = 2,
    AutoEnd = 3,
    Bottom = 4,
    BottomStart = 5,
    BottomEnd = 6,
    Left = 7,
    LeftStart = 8,
    LeftEnd = 9,
    Right = 10,
    RightStart = 11,
    RightEnd = 12,
    Top = 13,
    TopStart = 14,
    TopEnd = 15
}

/**
 * Popover
 */
class _Popover extends Base<IPopoverProps> implements IPopover {
    private _elContent: HTMLDivElement = null;
    private _tippy = null;

    // Constructor
    constructor(props: IPopoverProps, template: string = "") {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the parent, if the target wasn't specified
        this.props.target ? null : this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the placements
        let placement = null;
        switch (this.props.placement) {
            // Auto
            case PopoverPlacements.Auto:
                placement = "auto";
                break;
            case PopoverPlacements.AutoEnd:
                placement = "auto-end";
                break;
            case PopoverPlacements.AutoStart:
                placement = "auto-start";
                break;
            // Bottom
            case PopoverPlacements.Bottom:
                placement = "bottom";
                break;
            case PopoverPlacements.BottomEnd:
                placement = "bottom-end";
                break;
            case PopoverPlacements.BottomStart:
                placement = "bottom-start";
                break;
            // Left
            case PopoverPlacements.Left:
                placement = "left";
                break;
            case PopoverPlacements.LeftEnd:
                placement = "left-end";
                break;
            case PopoverPlacements.LeftStart:
                placement = "left-start";
                break;
            // Right
            case PopoverPlacements.Right:
                placement = "right";
                break;
            case PopoverPlacements.RightEnd:
                placement = "right-end";
                break;
            case PopoverPlacements.RightStart:
                placement = "right-start";
                break;
            // Top
            case PopoverPlacements.Top:
                placement = "top";
                break;
            case PopoverPlacements.TopEnd:
                placement = "top-end";
                break;
            case PopoverPlacements.TopStart:
                placement = "top-start";
                break;
            // Default - Auto
            default:
                placement = "top";
                break;
        }

        // Set the theme
        let theme = null;
        switch (this.props.type) {
            // Dark
            case PopoverTypes.Dark:
                theme = "dark";
                break;
            // Danger
            case PopoverTypes.Danger:
                theme = "danger";
                break;
            // Info
            case PopoverTypes.Info:
                theme = "info";
                break;
            // Light
            case PopoverTypes.Light:
                theme = "light";
                break;
            case PopoverTypes.LightBorder:
                theme = "light-border";
                break;
            // Material
            case PopoverTypes.Material:
                theme = "material";
                break;
            // Primary
            case PopoverTypes.Primary:
                theme = "primary";
                break;
            // Secondary
            case PopoverTypes.Secondary:
                theme = "secondary";
                break;
            // Success
            case PopoverTypes.Success:
                theme = "success";
                break;
            // Translucent
            case PopoverTypes.Translucent:
                theme = "translucent";
                break;
            // Warning
            case PopoverTypes.Warning:
                theme = "warning";
                break;
            // Default - Light Border
            default:
                theme = "light-border";
                break;
        }

        // Set the options
        let options: ITippyProps = {
            ...{
                allowHTML: true,
                appendTo: document.body,
                animation: "scale",
                arrow: true,
                delay: 100,
                inertia: true,
                interactive: true,
                placement,
                plugins: [animateFill, followCursor, inlinePositioning, sticky],
                theme,
                popperOptions: {
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            altAxis: true,
                            tether: false
                        }
                    }]
                }
            },
            ...this.props.options
        };

        // See if we are targeting an element
        let elPopover: HTMLElement = null;
        if (this.props.target) {
            // Set the popover to the target element
            elPopover = this.props.target as HTMLElement;

            // Ensure the attributes are set in the target element
            elPopover.setAttribute("tabindex", "0");

            // Update this element
            this.el = elPopover as any;
        } else {
            // Create the button
            let btnProps = this.props.btnProps || {};
            btnProps.isLink = this.props.isDismissible ? true : false;
            btnProps.tabIndex = btnProps.tabIndex || 0;
            this.el = Button(btnProps).el;
        }

        // Create the popover content element
        this._elContent = document.createElement("div") as HTMLDivElement;
        this._elContent.classList.add("popover");
        this._elContent.classList.add("popover-content");
        this._elContent.innerHTML = '<div class="popover-header"></div><div class="popover-body"></div>';
        appendContent(this._elContent.querySelector(".popover-header"), this.props.title);
        setClassNames(this._elContent.querySelector(".popover-header"), this.props.classNameHeader);
        appendContent(this._elContent.querySelector(".popover-body"), options.content as any);
        setClassNames(this._elContent.querySelector(".popover-body"), this.props.classNameBody);
        options.content = this._elContent;

        // Set the on create event
        options["onCreate"] = (tippyObj) => {
            // Get the content element
            let elContent = tippyObj.popper.querySelector(".tippy-content") as HTMLElement;
            if (elContent) {
                // Set the class
                elContent.classList.add("bs");

                // Set the styling
                elContent.style.padding = "0";

                // Get the custom class name(s)
                let custom = (this.props.className || "").trim().split(" ");
                for (let i = 0; i < custom.length; i++) {
                    let className = custom[i];

                    // Add the custom class name
                    className ? elContent.classList.add(custom[i]) : null;
                }
            }

            // Call the custom event if it's defined
            this.props.options && this.props.options.onCreate ? this.props.options.onCreate(tippyObj) : null;
        }

        // Create the tippy
        this._tippy = tippy(this.el, options as any);
    }

    /**
     * Public Interface
     */

    // Disables the popover
    disable() {
        // Disable the target element
        (this.el as HTMLButtonElement).disabled = true;
    }

    // Enables the popover
    enable() {
        // Enable the target element
        (this.el as HTMLButtonElement).disabled = false;
    }

    // Hides the popover
    hide() {
        // See if it's visible
        if (this.isVisible) { this._tippy.hide(); }
    }

    // Determines if the popover is visible
    get isVisible(): boolean { return this._tippy.state.isVisible; }

    // The tippy instance
    get tippy() { return this._tippy; }

    // Sets the popover body element
    setBody(content: string | Element) {
        let elBody: HTMLElement = this.tippy.popper.querySelector(".popover-body");
        if (elBody) {
            // Clear the content
            while (elBody.firstChild) { elBody.removeChild(elBody.firstChild); }

            // Update the content
            appendContent(elBody, content);
        }
    }

    // Sets the tippy content
    setContent(content: string | Element) {
        // Set the tippy content
        this.tippy.setContent(content);
    }

    // Sets the popover header element
    setHeader(content: string | Element) {
        let elHeader: HTMLElement = this.tippy.popper.querySelector(".popover-header");
        if (elHeader) {
            // Clear the content
            while (elHeader.firstChild) { elHeader.removeChild(elHeader.firstChild); }

            // Update the content
            appendContent(elHeader, content);
        }
    }

    // Shows the popover
    show() {
        // See if it's hidden
        if (!this.isVisible) { this._tippy.show(); }
    }

    // Toggles the popover
    toggle() {
        // Toggle the element
        if (this.isVisible) {
            // Hide the element
            this.hide();
        } else {
            // Show the element
            this.show();
        }
    }
}
export const Popover = (props: IPopoverProps, template?: string): IPopover => { return new _Popover(props, template); }
