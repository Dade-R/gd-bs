import { IDropdown, IDropdownItem } from "../../../@types/components/dropdown";
import { IFormControlPropsDropdown, IFormControlPropsTextField } from "../../../@types/components/formControl";
import { IListBox, IListBoxProps } from "../../../@types/components/listBox";
import { Base } from "../base";
import { Form, FormControlTypes } from "../form";
import { Dropdown } from "../dropdown";
import * as HTML from "./index.html";

/**
 * List Box
 * @property props - The list box properties.
 */
class _ListBox extends Base<IListBoxProps> implements IListBox {
    private _ddlItems: IDropdown = null;
    private _ddlValues: IDropdown = null;

    // Constructor
    constructor(props: IListBoxProps) {
        super(HTML, props);

        // Configure the list box
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configures the list box
    private configure() {
        // Render a form to this element
        Form({
            el: this.el,
            rows: [
                {
                    columns: [{
                        control: {
                            label: this.props.label,
                            placeholder: this.props.placeholder,
                            type: FormControlTypes.TextField,
                            onChange: value => {
                                // Filter the items
                                this.filterItems(value);
                            }
                        } as IFormControlPropsTextField
                    }]
                },
                {
                    columns: [
                        {
                            control: {
                                items: this.props.items,
                                type: FormControlTypes.MultiDropdown,
                                onChange: (items: Array<IDropdownItem>) => {
                                    // Set the values
                                    this.configureValuesDDL(this.props.multi ? items : [items[0]]);

                                    // Clear this dropdown
                                    this._ddlItems.setValue([]);
                                },
                                onControlRendered: ctrl => {
                                    // Set the dropdown
                                    this._ddlItems = ctrl.dropdown;
                                }
                            } as IFormControlPropsDropdown
                        },
                        {
                            control: {
                                type: FormControlTypes.MultiDropdown,
                                isReadonly: true,
                                onControlRendered: ctrl => {
                                    // Set the dropdown
                                    this._ddlValues = ctrl.dropdown;
                                }
                            } as IFormControlPropsDropdown
                        }
                    ]
                }
            ]
        });

        // Get the selected items
        this._ddlItems.setValue(this.props.value);
        let items = this._ddlItems.getValue() as Array<IDropdownItem>;
        this._ddlItems.setValue([]);

        // Configure the values dropdown
        this.configureValuesDDL(items);
    }

    // Configures the values dropdown
    private configureValuesDDL(values: Array<IDropdownItem>) {
        // Add the header
        values = ([
            {
                isHeader: true, text: "Selected Items"
            }
        ] as Array<IDropdownItem>).concat(values);

        // See if the dropdown exists
        if (this._ddlValues) {
            // Update the dropdown
            this._ddlValues.setItems(values);
            this._ddlValues.setValue(values);
        } else {
            // Render the dropdown
            this._ddlValues = Dropdown({
                el: this.el.querySelector(".listbox-values"),
                formFl: true,
                multi: true,
                isReadonly: true,
                items: values
            });
        }
    }

    // Filters the dropdown menu items
    private filterItems(filter: string) {
        let filterValue = filter.toLowerCase();

        // Parse the items
        let elItems = this._ddlItems.el.querySelectorAll("option");
        for (let i = 0; i < elItems.length; i++) {
            let elItem = elItems[i] as HTMLElement;

            // See if the filter exists
            if (filterValue) {
                // See if this value contains the filter
                if (elItem.innerText.toLowerCase().indexOf(filterValue) >= 0) {
                    // Show the item
                    elItem.classList.remove("d-none");
                } else {
                    // Hide the item
                    elItem.classList.add("d-none");
                }
            } else {
                // Show the item
                elItem.classList.remove("d-none");
            }
        }
    }

    /**
     * Public Interface
     */

    getValue() { return this._ddlValues.getValue(); }
}
export const ListBox = (props: IListBoxProps): IListBox => { return new _ListBox(props); }