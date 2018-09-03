import { Button, ButtonGroup, ButtonTypes, Modal } from "../../components";
import { IButtonProps } from "../../components/types/button";
import { IWebPartCfg, IWebPartEditForm, IWebPartInfo, IWebPartProps } from "../types/wp";
import { Helper } from "./helper";
declare var MSOWebPartPageFormName;

/**
 * WebPart Configuration
 */
export const WPCfg = (cfg: IWebPartCfg, wp: IWebPartInfo, props: IWebPartProps) => {
    let _editForm: IWebPartEditForm = props.editForm || {};

    // Method to detect if the wiki page is being edited
    let isWikiPageInEdit = () => {
        let wikiPageMode = null;

        // Get the form
        let form = document.forms[MSOWebPartPageFormName];
        if (form) {
            // Get the wiki page mode
            wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
        }

        // Determine if this wiki page is being edited
        return wikiPageMode == "Edit";
    }

    // The default render method when the page is edited
    let render = () => {
        // Ensure we need to render this
        if (_editForm == null) { return; }

        // Render the template
        wp.el.innerHTML = [
            '<div></div>',
            '<div></div>'
        ].join('\n');

        // Render the button to toggle the modal
        Button({
            el: wp.el.children[0],
            target: "#" + props.elementId + "_modal",
            text: "Configure WebPart",
            toggle: "modal",
            type: ButtonTypes.Secondary
        });

        // Render the modal
        let modal = Modal({
            el: wp.el.children[1],
            id: props.elementId + "_modal",
            isCentered: true,
            isLarge: true,
            title: "Configuration Panel",
            onRenderBody: el => {
                let formControls: any = null;

                // Set the class name
                el.classList.add("wp-cfg-form");

                // See if the render form event exists
                if (_editForm.onRenderForm) {
                    // Call the event
                    formControls = _editForm.onRenderForm(wp) || [];
                }

                // See if there is a promise
                if (formControls.then) {
                    // Wait for the promise to be resolved
                    formControls.then(formControls => {
                        // Render the edit form
                        Helper.renderEditForm(wp, formControls);
                    });
                }
                // Else, render the edit form
                else { Helper.renderEditForm(wp, formControls); }
            },
            onRenderFooter: el => {
                let actionButtons: Array<IButtonProps> = [];

                // See if this is a wiki page
                let disableSaveButton = isWikiPageInEdit();
                if (disableSaveButton) {
                    // Get the webpart manager key name
                    let elWPMgrKeyName = document.getElementById("MSOSPWebPartManager_OldSelectedStorageKeyName") as HTMLInputElement;

                    // Set the flag
                    disableSaveButton = elWPMgrKeyName == null || elWPMgrKeyName.value.indexOf(cfg.WebPartId) < 0;
                    if (disableSaveButton) {
                        // Show a message
                        el.innerHTML = "<label>You must edit the webpart in order to save changes.</label>";
                        return;
                    }
                }

                // See if we are adding the save button
                if (_editForm.showSaveButton != false) {
                    // Add the save button
                    actionButtons.push({
                        isDisabled: disableSaveButton,
                        text: "Save",
                        onClick: ev => {
                            // Call the save event and set the configuration
                            let cfg = _editForm.onSave ? _editForm.onSave(wp.cfg) : null;
                            cfg = cfg ? cfg : wp.cfg;

                            // Save the configuration
                            Helper.saveConfiguration(wp.wpId, props.cfgElementId, cfg).then(() => {
                                // Close the modal
                                modal.toggle();
                            });
                        }
                    });
                }

                // See if custom actions exist
                if (_editForm.actions) {
                    // Add the buttons
                    actionButtons = actionButtons.concat(_editForm.actions);
                }

                // Render the menu buttons
                ButtonGroup({
                    buttons: actionButtons,
                    buttonType: ButtonTypes.Secondary,
                    el,
                    isSmall: true
                });
            }
        });
    }

    // Render the webpart configuration
    render();
}