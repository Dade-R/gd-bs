/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the form
 *         $REST.Components.Form({
 *             el: document.querySelector("#demo"),
 *             rows: [
 *                 {
 *                   columns: [
 *                       {
 *                           control: {
 *                               label: "First Name:",
 *                               name: "FName",
 *                               type: $REST.Components.FormControlTypes.TextField
 *                           }
 *                       },
 *                       {
 *                           control: {
 *                               label: "Last Name:",
 *                               name: "LName",
 *                               type: $REST.Components.FormControlTypes.TextField
 *                           }
 *                       },
 *                       {
 *                           control: {
 *                               label: "Choices:",
 *                               name: "Choice",
 *                               type: $REST.Components.FormControlTypes.Dropdown,
 *                               items: [
 *                                   { text: "Choice 1", value: "1" },
 *                                   { text: "Choice 2", value: "2" },
 *                                   { text: "Choice 3", value: "3" },
 *                                   { text: "Choice 4", value: "4" },
 *                                   { text: "Choice 5", value: "5" }
 *                               ]
 *                           }
 *                       }
 *                   ]
 *                 }
 *             ],
 *             value: {
 *                 FName: "Gunjan",
 *                 LName: "Datta",
 *                 Choice: "3"
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Form
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the form
 * let el = document.querySelector("#myForm");
 * let form = Components.Form({
 *     el: el,
 *     rows: [
 *         {
 *             control: {
 *                 label: "First Name:",
 *                 name: "FName",
 *                 type: Components.FormControlTypes.TextField
 *             }
 *         },
 *         {
 *             control: {
 *                 label: "Last Name:",
 *                 name: "LName",
 *                 type: Components.FormControlTypes.TextField
 *             }
 *         },
 *         {
 *             control: {
 *                 label: "Choices:",
 *                 name: "Choice",
 *                 type: Components.FormControlTypes.Dropdown,
 *                 items: [
 *                     { text: "Choice 1", value: "1" },
 *                     { text: "Choice 2", value: "2" },
 *                     { text: "Choice 3", value: "3" },
 *                     { text: "Choice 4", value: "4" },
 *                     { text: "Choice 5", value: "5" }
 *                 ]
 *             }
 *         }
 *     ],
 *     value: {
 *         FName: "Gunjan",
 *         LName: "Datta",
 *         Choice: "3"
 *     }
 * });
 * ```
 */
export const Form: (props: IFormProps) => IForm;

import { IFormControl, IFormControlProps, IFormControlTypes } from "./formControl";

/**
 * Form
 */
export interface IForm {
    /** Appends controls to the form */
    appendControls(controls: Array<IFormControlProps>);

    /** Appends rows to the form */
    appendRows(rows: Array<IFormRow>);

    /** The form controls */
    controls: Array<IFormControl>;

    /** The form element */
    el: Element | HTMLElement;

    /** Gets a control by its name */
    getControl: (name: string) => IFormControl;

    /** Returns the form values */
    getValues: () => { [key: string]: any };

    /** Hides the form. */
    hide: () => void;

    /** Validates the form */
    isValid: () => boolean;

    /** Shows the form. */
    show: () => void;
}

/**
 * Form Column
 */
export interface IFormColumn {
    control: IFormControlProps;
    isAutoSized?: boolean;
    size?: number;
}

/**
 * Form Properties
 */
export interface IFormProps {
    className?: string;
    controls?: Array<IFormControlProps>;
    el?: Element | HTMLElement,
    rowClassName?: string;
    rows?: Array<IFormRow>;
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;
    onRendered?: (controls: Array<IFormControl>) => void;
    value?: any;
}

/**
 * Form Row
 */
export interface IFormRow {
    className?: string;
    isAutoSized?: boolean;
    isCentered?: boolean;
    columns?: Array<IFormColumn>;
}