import * as jQuery from "jquery";
import { Button } from "./button";
import { IButtonGroup, IButtonGroupProps } from "./types/buttonGroup";

/**
 * Button Group
 * @property props - The button group properties.
 */
export const ButtonGroup = (props: IButtonGroupProps): IButtonGroup => {
    let html = [];

    // Set the class names
    let classNames = [props.isVertical ? "btn-group-vertical" : "btn-group"];
    props.className ? classNames.push(props.className) : null;
    props.isLarge ? classNames.push("btn-group-lg") : null;
    props.isSmall ? classNames.push("btn-group-sm") : null;

    // Set the attributes
    let attributes = [
        props.id ? 'id="' + props.id + '"' : '',
        'role="group"',
        'class="' + classNames.join(' ') + '"',
        props.label ? "aria-label='" + props.label + "'" : ""
    ].join(' ').replace(/  /g, " ");

    // Set the starting tag
    html.push("<div " + attributes + ">");

    // Parse the buttons
    let buttons = props.buttons || [];
    for (let i = 0; i < buttons.length; i++) {
        let buttonProps = buttons[i];

        // Set the property
        buttonProps.type = buttonProps.type || props.buttonType;

        // Add the button html
        html.push(Button(buttonProps).el.innerHTML);
    }

    // Add the closing tag
    html.push("</div>");

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

    // Parse the buttons
    let elButtons = el.querySelectorAll(".btn-group > .btn");
    for (let i = 0; i < elButtons.length; i++) {
        let button = props.buttons[i];

        // See if there is a click event
        if (button.onClick) {
            // Set the click event
            elButtons[i].addEventListener("click", button.onClick);
        }
    }

    // Return the button group
    let buttonGroup = jQuery(el.children[0]);
    return { el };
}