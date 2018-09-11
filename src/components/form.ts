import { IForm, IFormProps } from "./types/form";
import { IFormControl, IFormControlProps } from "./types/formControl";
import { FormControl, FormControlTypes } from "./formControl";

/**
 * Form
 * @property props - The form properties.
 */
export const Form = (props: IFormProps): IForm => {
    let controls: Array<IFormControl> = [];

    // Create the form element
    let form = document.createElement("form");

    // Helper method for the events
    let executeEvent = (event: any, props: any): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Execute the event and see if it's a promise
            let returnVal = event ? event(props) : null;
            if (returnVal && returnVal.then) {
                // Wait for the promise to be completed
                returnVal.then(resolve);
            } else {
                // Resolve the promise
                resolve(props);
            }
        })
    }

    // The on rendered event
    let onRendered = (control: IFormControl): Promise<IFormControl> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Execute the control event
            executeEvent(control.props.onControlRendered, control).then(control => {
                // Execute the component event
                executeEvent(props.onControlRendered, control).then(control => {
                    // Resolve the promise
                    resolve(control);
                });
            });
        });
    }

    // The on rendering event
    let onRendering = (controlProps: IFormControlProps): Promise<IFormControlProps> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Execute the control event
            executeEvent(controlProps.onControlRendering, controlProps).then(controlProps => {
                // Execute the component event
                executeEvent(props.onControlRendering, controlProps).then(controlProps => {
                    // Resolve the promise
                    resolve(controlProps);
                });
            });
        });
    }

    // Method to render the form
    let renderForm = () => {
        // Parse the rows
        let rows = props.rows || [];
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];

            // See if columns exist
            if (row.columns) {
                let elRow = document.createElement("div");

                // Set the row class names
                elRow.classList.add("form-row");
                row.isCentered ? elRow.classList.add("align-items-center") : null;

                // Parse the columns
                let columns = row.columns || [];
                for (let j = 0; j < columns.length; j++) {
                    let column = columns[j];
                    let elCol = document.createElement("div");
                    let colSize = column.size > 0 && column.size < 13 ? column.size : 0;

                    // Set the row class name based on the properties
                    elCol.classList.add("form-group");
                    if (row.isCentered) {
                        // Add the class name
                        elCol.classList.add("col-auto");
                    } else {
                        // Add the class name based on the size
                        elCol.classList.add(colSize > 0 ? "col-" + colSize : "col");
                    }

                    // See if there is a label
                    if (column.control.label) {
                        // Set the label
                        elCol.innerHTML = "<label>" + column.control.label + "</label>";
                    }

                    // Set the element
                    column.control.el = elCol;

                    // Set the value
                    column.control.value = column.control.value || (props.value ? props.value[column.control.name] : null);

                    // Add the column to the row
                    elRow.appendChild(elCol);

                    // Call the rendering event
                    onRendering(column.control).then(controlProps => {
                        // Create the control
                        let control = FormControl(controlProps || column.control);

                        // Call the rendered event
                        onRendered(control).then(control => {
                            // Save the control
                            controls.push(control);
                        });
                    });
                }

                // Add the row to the form
                form.appendChild(elRow);
            }
            // Else, see if a control is defined
            else if (row.control) {
                let colSize = row.colSize > 0 && row.colSize < 13 ? row.colSize : 0;

                // Create the row
                let elRow = document.createElement("div");
                elRow.classList.add("form-group");

                // Set the value
                row.control.value = row.control.value || (props.value ? props.value[row.control.name] : null);

                // See if there is a label
                if (row.control.label) {
                    // See if a column size is defined
                    if (colSize > 0) {
                        // Add the row class
                        elRow.classList.add("row");

                        // Add the columns
                        elRow.innerHTML = [
                            '<label class="col-' + colSize + ' col-form-label">' + row.control.label + '</label>',
                            '<div class="col-' + (12 - colSize) + '"></div>'
                        ].join('\n');
                    }
                    // Else, ensure this isn't a checkbox
                    else if (row.control.type != FormControlTypes.Checkbox) {
                        // Add the label
                        elRow.innerHTML = '<label>' + row.control.label + '</label>';
                    }

                    // Set the element
                    row.control.el = colSize > 0 ? elRow.children[1] as any : elRow;
                } else {
                    // Set the element
                    row.control.el = elRow;
                }

                // Add the row to the form
                form.appendChild(elRow);

                // Call the rendering event
                onRendering(row.control).then(controlProps => {
                    // Create the control
                    let control = FormControl(controlProps || row.control);

                    // Call the rendered event
                    onRendered(control).then(control => {
                        // Save the control
                        controls.push(control);
                    });
                });
            }
        }
    }

    // Render the form
    renderForm();

    // Create the element
    let el = document.createElement("div");
    el.appendChild(form);

    // See if we are rendering it to an element
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

    // Return the form
    return {
        controls,
        el: form,
        getValues: () => {
            let values = {};

            // Parse the controls
            for (let i = 0; i < controls.length; i++) {
                let control = controls[i];
                if (control && control.props.name) {
                    // Set the value
                    values[control.props.name] = control.getValue();
                }
            }

            // Return the values
            return values;
        }
    };
}