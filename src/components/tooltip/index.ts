import * as jQuery from "jquery";
import * as Common from "../common";
import { Button } from "../button";
import { ITooltip, ITooltipProps } from "../../../@types/components/tooltip";

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
export const Tooltip = (props: ITooltipProps): ITooltip => {
    // Create the tooltip
    let btnProps = props.btnProps || {};
    btnProps.toggle = "tooltip";
    let tooltip = Button(btnProps).el;

    // Set the tooltip options
    let options = props.options || {};

    // Set the type
    switch (props.type) {
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
    tooltip.setAttribute("title", options.title || "");
    tooltip.setAttribute("data-placement", options.placement as string || "");

    // Ensure the main tooltip element exists
    // This will ensure the tooltips are wrapped with a parent element with the "bs" class applied to it.
    let elParent = document.querySelector("#bs-tooltips");
    if (elParent == null) {
        // Create the main element
        elParent = document.createElement("div");
        elParent.classList.add("bs");
        elParent.id = "bs-tooltips";

        // Add it to the page
        document.body.appendChild(elParent)
    }

    // Set the options to target the main tooltip element
    options.container = "#bs-tooltips";

    // Create the element
    let el = document.createElement("div");
    el.appendChild(tooltip);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Create the tooltip
    let $tooltip = jQuery(tooltip);
    $tooltip.tooltip(options);

    // Return the tooltip
    return {
        dispose: () => { $tooltip.tooltip("dispose"); },
        el: tooltip,
        enable: () => { $tooltip.tooltip("enable"); },
        hide: () => { $tooltip.tooltip("hide"); },
        show: () => { $tooltip.tooltip("show"); },
        toggle: () => { $tooltip.tooltip("toggle"); },
        toggleEnabled: () => { $tooltip.tooltip("toggleEnabled"); },
        update: () => { $tooltip.tooltip("update"); }
    };
}