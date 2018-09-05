import * as jQuery from "jquery";
import { IInputGroup, IInputGroupProps } from "./types/inputGroup";

/**
 * Input Group Types
 */
export enum InputGroupTypes {
    Email = 1,
    File = 2,
    Password = 3,
    TextArea = 4,
    TextField = 5
}

/**
 * Input Group
 * @param props The input group properties.
 */
export const InputGroup = (props: IInputGroupProps): IInputGroup => {
    let html = [];

    // Set the class names
    let classNames = ["input-group"];
    props.className ? classNames.push(props.className) : null;
    props.isLarge ? classNames.push("input-group-lg") : null;
    props.isSmall ? classNames.push("input-group-sm") : null;

    // See if a label exists
    if (props.label) {
        html.push([
            '<label' + (props.id ? ' for="' + props.id + '"' : '') + '>',
            props.label,
            '</label>'
        ].join(''));
    }

    // Set the input group starting tag
    html.push('<div class="input-group">');

    // See if we are pre-pending a label
    if (props.prependedLabel) {
        // Add the label
        html.push([
            '<div class="input-group-prepend">',
            '<span class="input-group-text">' + props.prependedLabel + '</span>',
            '</div>'
        ].join('\n'));
    }

    // Set the input type
    let inputType = "";
    switch (props.type) {
        case InputGroupTypes.Email:
            inputType = "email";
            break;
        case InputGroupTypes.File:
            inputType = "file";
            break;
        case InputGroupTypes.Password:
            inputType = "password";
            break;
        default:
            inputType = "text";
            break;
    }

    // Add the textbox
    html.push(props.type == InputGroupTypes.TextArea ?
        [
            '<textarea class="form-control"',
            props.placeholder ? 'placeholder="' + props.placeholder + '"' : '',
            '>' + (props.value || "") + '</textarea>'
        ].join(' ')
        :
        [
            '<input class="form-control"',
            'type="' + inputType + '"',
            props.placeholder ? 'placeholder="' + props.placeholder + '"' : '',
            props.id ? 'id="' + props.id + '"' : '',
            props.value ? 'value="' + props.value + '"' : '',
            '></input>'
        ].join(' ')
    );

    // See if we are appending a label
    if (props.appendedLabel) {
        // Add the label
        html.push([
            '<div class="input-group-append">',
            '<span class="input-group-text">' + props.appendedLabel + '</span>',
            '</div>'
        ].join('\n'));
    }

    // Add the input group closing tag
    html.push("</div>");

    // See if there is a description
    if (props.description) {
        // Add the description
        html.push('<small class="text-muted">' + props.description + '</small>');
    }

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

    // See if a change event exists
    let isMulti = props.type == InputGroupTypes.TextArea;
    let elInput = el.querySelector(isMulti ? "textarea" : "input");
    let callbackValue = null;
    if (props.onChange) {
        // Add a input event
        elInput.addEventListener("input", ev => {
            let tb = ev.currentTarget as HTMLInputElement | HTMLTextAreaElement;

            // See if we have already executed the change event
            if (callbackValue != tb.value) {
                // Set the value
                callbackValue = tb.value;

                // Call the change event
                props.onChange(callbackValue, ev);
            }
        });
    }

    // See if this is not a multi-line
    if (!isMulti) {
        // Add a mouse up event to detect the clear event
        elInput.addEventListener("mouseup", ev => {
            // Get the current value
            let el = ev.currentTarget as HTMLInputElement;
            let oldValue = el.value;

            // Wait for the clear event to update the value (if clicked)
            setTimeout(() => {
                // Get the current value
                let currentValue = el.value;

                // See if the values have changed
                if (currentValue != oldValue) {
                    // See if we have already executed the change event
                    if (callbackValue != currentValue) {
                        // Set the value
                        callbackValue = currentValue;
                        console.log("Textbox cleared...");

                        // Call the events
                        props.onChange ? props.onChange(callbackValue, ev) : null;
                        props.onClear ? props.onClear() : null;
                    }
                }
            }, 1);
        });
    }

    // Return the input group
    let inputGroup = jQuery(el.children[0]);
    return { el };
}