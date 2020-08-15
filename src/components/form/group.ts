import { IFormControlProps, IFormControl, IFormProps } from "../../../@types/components";
import { FormControl } from "./control";
import { HTMLGroup } from "./templates";

/**
 * Form Group
 */
export class FormGroup {
    private _control: IFormControl = null;
    private _el: HTMLDivElement = null;
    private _props: IFormControlProps = null;
    private _formProps: IFormProps = null;

    // Constructor
    constructor(props: IFormControlProps, formProps: IFormProps) {
        // Save the properties
        this._props = props;
        this._formProps = formProps;

        // Create the element
        let el = document.createElement("div");
        el.innerHTML = HTMLGroup;
        el.className = formProps.groupClassName = formProps.groupClassName || "";
        this._el = el.firstChild as HTMLDivElement;

        // Configure the control
        this.configure();
    }

    // Configure the row
    private configure() {
        // Execute the rendering event
        this.configureEvents(this._props.onControlRendering as any).then(() => {
            // Execute the parent rendering event
            this.configureEvents(this._formProps.onControlRendering as any).then(() => {
                // Render the control
                this.render();
            })
        });
    }

    // Configure the events
    private configureEvents(event: (control: IFormControlProps) => PromiseLike<IFormControlProps>) {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Execute the rendering event
            let returnVal = event ? event(this._props) : null;
            if (returnVal && returnVal.then) {
                // Wait for the event to complete
                returnVal.then(props => {
                    // Update the properties
                    this._props = props;

                    // Resolve the promise
                    resolve();
                }, reject);
            } else {
                // Resolve the promise
                resolve();
            }
        });
    }

    // Executes after the control is rendered
    private onRendered() {
        // Execute the rendered events
        this._props.onControlRendered ? this._props.onControlRendered(this._control) : null;
        this._formProps.onControlRendered ? this._formProps.onControlRendered(this._control) : null;
    }

    // Renders the control
    private render() {
        // Update the label
        let elLabel = this._el.querySelector("label");
        let label = this._props.label || (this._control && this._control.props.label);
        if (label) {
            // Set the text
            elLabel.innerHTML = label;
        } else {
            // Remove the label
            this._el.removeChild(elLabel);
            elLabel = null;
        }

        // Update the description
        let elDescription = this._el.querySelector("small");
        let description = this._props.description || (this._control && this._control.props.description);
        if (description) {
            // Set the text
            elDescription.innerHTML = description;
        } else {
            // Remove the description
            this._el.removeChild(elDescription);
            elDescription = null;
        }

        // Create the control
        this._control = new FormControl(this._props, elLabel);

        // Append the control, after the label
        elDescription ? this._el.insertBefore(this._control.el, elDescription) : this._el.appendChild(this._control.el);

        // Execute the rendered event
        this.onRendered();
    }

    /**
     * Public Interface
     */

    get control() { return this._control; }
    get el() { return this._el; }
}