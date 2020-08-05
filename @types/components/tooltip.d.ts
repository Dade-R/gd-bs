/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the tooltip
 *         $REST.Components.Tooltip({
 *             el: document.querySelector("#demo"),
 *             text: "Tooltip",
 *             options: {
 *                 html: true,
 *                 title: "My Tooltip",
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Tooltip
 * 
 * ```ts
import { Components } from "gd-sprest-bs";

// Create the tooltip
let el = document.querySelector("#tooltip");
let tooltip = Components.Tooltip({
    el: el,
    text: "Tooltip Demo"
    options: {
        html: true,
        title: "My Tooltip",
    }
});
```
 */
export const Tooltip: (props: ITooltipProps) => ITooltip;

/**
 * Tooltip Types
 */
export const TooltipTypes: ITooltipTypes;

import { IBaseProps } from "../base";

/**
 * Tooltip
 */
export interface ITooltip {
    /** Disposes the tooltip. */
    dispose: () => void;

    /** The element. */
    el: HTMLButtonElement;

    /** Gives an element’s tooltip the ability to be shown. */
    enable: () => void;

    /** Hides an element’s tooltip. */
    hide: () => void;

    /** Toggles an element's tooltip. */
    toggle: () => void;

    /** Toggles the ability for an element’s tooltip to be shown or hidden. */
    toggleEnabled: () => void;

    /** Reveals an element’s tooltip. */
    show: () => void;

    /** Updates the position of an element’s tooltip. */
    update: () => void;
}

/**
 * Tooltip Options
 */
export interface ITooltipOptions {
    animation?: boolean;
    boundary?: string | Element;
    container?: string | Element | Function;
    delay?: number | object;
    fallbackPlacement?: string | Array<string>;
    html?: boolean;
    offset?: number | string | Function;
    placement?: string | Function;
    popperConfig?: object;
    selector?: string;
    template?: string;
    title?: string | Element | Function;
    trigger?: string;
}

/**
 * Tooltip Properties
 */
export interface ITooltipProps extends IBaseProps<ITooltip> {
    btnType?: number;
    options?: ITooltipOptions;
    text?: string;
    type?: number;
}

/**
 * Tooltip Types
 */
export type ITooltipTypes = {
    Auto: number;
    Bottom: number;
    Left: number;
    Right: number;
    Top: number;
}