import { ICheckboxGroupProps, ICheckboxGroupItem } from "../../../@types/components/checkboxGroup";
import { CheckboxGroupTypes } from ".";
import * as HTMLCheckbox from "./checkbox.html";
import * as HTMLRadio from "./radio.html";
import * as HTMLSwitch from "./switch.html";

/**
 * Checkbox Item
 */
export class CheckboxItem {
    private _el: HTMLDivElement = null;
    private _isSelected: boolean = null;
    private _parent: ICheckboxGroupProps = null;
    private _props: ICheckboxGroupItem = null;

    // Constructor
    constructor(props: ICheckboxGroupItem, parent: ICheckboxGroupProps) {
        // Save the properties
        this._parent = parent;
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = this.getHTML();
        this._el = elItem.firstChild as HTMLDivElement;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configure the item
    private configure() {
        // Set the attributes
        let checkbox = this._el.querySelector("input");
        checkbox.disabled = this._props.isDisabled ? true : false;
        checkbox.title = this._parent.title || "";
        this._parent.isInline ? checkbox.classList.add("form-check-inline") : null;

        // Set the label
        let label = this._el.querySelector("label");
        label.innerHTML = this._props.label || "&nbsp;";

        // See if a value exists for the group
        if (this._parent.value) {
            // Parse the values
            let values = typeof (this._parent.value) === "string" ? [this._parent.value] : this._parent.value;
            for (let j = 0; j < values.length; j++) {
                // See if this item is selected
                if (values[j] == this._props.label) {
                    // Select this item
                    checkbox.checked = true;
                }
            }

            // Set the value
            this._isSelected = checkbox.checked;
        } else {
            // Set the default value
            this._isSelected = this._props.isSelected ? true : false;
            checkbox.checked = this._isSelected;
        }
    }

    // Configures the events
    private configureEvents() {
        // Add a click event
        this._el.addEventListener("click", ev => {
            // Update the value
            this._isSelected = !this._isSelected;
            this._el.querySelector("input").checked = this._isSelected;

            // See if an event is defined
            if (this._props.onChange) {
                // Call the event
                this._props.onChange(this._props);
            }
        });
    }

    // Gets the HTML template
    private getHTML(): string {
        // Return it based on the type
        switch (this._props.type || this._parent.type) {
            // Radio
            case CheckboxGroupTypes.Radio:
                return HTMLRadio as any;
            // Switch
            case CheckboxGroupTypes.Switch:
                return HTMLSwitch as any;
            // Default to a checkbox
            default:
                return HTMLCheckbox as any;
        }
    }

    /**
     * Public Properties
     */

    // The component HTML element
    get el(): HTMLDivElement { return this._el; }

    // Returns true if the checkbox is checked
    get isChecked(): boolean {
        // Get the checkbox
        let cb = this._el.querySelector("input");

        // Return the value
        return cb.checked;
    }

    // The component properties
    get props(): ICheckboxGroupItem { return this._props; }

    // Toggles the checkbox
    toggle() {
        // Update the value
        this._isSelected = !this._isSelected;

        // Set the checkbox value
        this._el.querySelector("input").checked = this._isSelected;
    }
}