import { IProgress, IProgressProps } from "../../@types/components/progress";
import * as Common from "../common";

/**
 * Progress
 */
export const Progress = (props: IProgressProps): IProgress => {
    let maxValue = typeof (props.max) === "number" ? props.max : 100;
    let minValue = typeof (props.min) === "number" ? props.min : 0;
    let size = typeof (props.size) === "number" ? props.size : 0;

    // Create the progress
    let progress = document.createElement("div");

    // Set the class names
    progress.className = props.className || "";
    progress.classList.add("progress");

    // Create the progress bar
    let progressBar = document.createElement("div");
    progressBar.setAttribute("role", "progressbar")
    progressBar.style.width = size + "%";
    progressBar.setAttribute("aria-valuenow", size.toString());
    progressBar.setAttribute("aria-valuemin", minValue.toString());
    progressBar.setAttribute("aria-valuemax", maxValue.toString());
    props.label ? progressBar.innerHTML = props.label : null;
    progress.appendChild(progressBar);

    // Set the class names
    progressBar.className = "progress-bar";
    props.isAnimated ? progressBar.classList.add("progress-bar-animated") : null;
    props.isStriped ? progressBar.classList.add("progress-bar-striped") : null;

    // Create the element
    let el = document.createElement("div");
    el.appendChild(progress);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
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

    // Return the progress
    return {
        el: progress,
        hide: () => { Common.hide(progress); },
        show: () => { Common.show(progress); }
    };
}