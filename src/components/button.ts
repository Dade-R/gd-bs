import * as jQuery from "jquery";
import { Badge, BadgeTypes } from "./badge";
import { IButton, IButtonProps } from "./types/button";

/**
 * Button Types
 */
export enum ButtonTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Link = 5,
    Primary = 6,
    Secondary = 7,
    Success = 8,
    Warning = 9
}

/**
 * Button
 * @param props The button properties.
 */
export const Button = (props: IButtonProps): IButton => {
    // Set the class names
    let classNames = ["btn"];
    props.className ? classNames.push(props.className) : null;
    props.isBlock ? classNames.push("btn-block") : null;
    props.isLarge ? classNames.push("btn-lg") : null;
    props.isSmall ? classNames.push("btn-sm") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case ButtonTypes.Danger:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-danger");
            break;
        // Dark
        case ButtonTypes.Dark:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-dark");
            break;
        // Info
        case ButtonTypes.Info:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-info");
            break;
        // Light
        case ButtonTypes.Light:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-light");
            break;
        // Link
        case ButtonTypes.Link:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-link");
            break;
        // Secondary
        case ButtonTypes.Secondary:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-secondary");
            break;
        // Success
        case ButtonTypes.Success:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-success");
            break;
        // Warning
        case ButtonTypes.Warning:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-warning");
            break;
        // Default - Primary
        default:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-primary");
            break;
    }

    // Set the attributes
    let attributes = [
        props.id ? 'id="' + props.id + '"' : '',
        'type="button"',
        'class="' + classNames.join(' ') + '"',
        props.isDisabled ? "disabled" : "",
        props.isLink ? 'role="button"' : "",
        props.target ? 'data-target="' + props.target + '"' : "",
        props.toggle ? 'data-toggle="' + props.toggle + '"' : "",
        props.trigger ? 'data-trigger="' + props.trigger + '"' : "",
        typeof (props.isExpanded) === "boolean" ? 'aria-expanded="' + (props.isExpanded ? "true" : "false") + '"' : '',
        props.controls ? 'aria-controls="' + props.controls.join(' ') + '"' : ''
    ].join(' ').replace(/  /g, " ");

    // Generate the html
    let html = [
        '<' + (props.isLink ? 'a' : 'button') + ' ' + attributes + '>',
        props.text || "",
        props.badgeValue ? Badge({ content: props.badgeValue, type: props.badgeType || BadgeTypes.Light }).el.innerHTML : '',
        '</' + (props.isLink ? 'a' : 'button') + '>'
    ];

    // Create the element
    let el = document.createElement("div");
    el.innerHTML = html.join('\n');

    // See if are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
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

    // See if there is a click event
    if (props.onClick) {
        // Add a click event
        el.querySelector(".btn").addEventListener("click", props.onClick);
    }

    // Return the button
    let btn = jQuery(el.children[0]);
    return {
        dispose: () => { btn.button("dispose"); },
        el,
        toggle: () => { btn.button("toggle"); }
    };
}