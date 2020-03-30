import * as jQuery from "jquery";
import * as Common from "../common";
import { ButtonTypes } from "../button";
import { ICard, ICardAction, ICardBody, ICardProps } from "../../../@types/components/card";
import { Nav } from "../nav";

/**
 * Card
 */
export const Card = (props: ICardProps): ICard => {
    // Create the card
    let card = document.createElement("div");

    // Set the class names
    card.className = props.className || "";
    card.classList.add("card");

    // See if the top image exists
    if (props.imgTop) {
        // Add the top image
        let img = document.createElement("img");
        img.alt = props.imgTop.alt || "";
        img.className = "card-img-top";
        img.src = props.imgTop.src || "";
        card.appendChild(img);
    }

    // See if the header exists
    if (props.header) {
        // See if the navigation exists
        if (props.header.nav) {
            let navProps = props.header.nav;

            // Set the class
            navProps.className = [
                navProps.className || "",
                "card-header-tabs"
            ].join(' ');

            // Render the navigation
            card.appendChild(Nav(navProps).el);
        } else {
            // Render the header
            let header = document.createElement("div");
            header.className = props.header.className || "";
            header.classList.add("card-header")
            card.appendChild(header);

            // Set the content
            let content = props.header.content || "";
            if (typeof (content) === "string") {
                // Set the html
                header.innerHTML = content;
            } else {
                // Append the element
                header.appendChild(content);
            }
        }
    }

    // Parse the body items
    let items: Array<ICardBody> = props.body || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Set the class names
        let classNames = [
            "card-body",
            item.className || ""
        ].join(' ');

        // Create the body
        let body = document.createElement("div");
        body.className = classNames;
        body.setAttribute("data-idx", i.toString());
        body.innerHTML = [
            item.title ? '<h5 class="card-title">' + item.title + '</h5>' : '',
            item.subTitle ? '<h6 class="card-subtitle">' + item.subTitle + '</h6>' : '',
            item.text ? '<p class="card-text">' + item.text + '</p>' : ''
        ].join('\n');
        card.appendChild(body);

        // Set the content
        let content = item.content || "";
        if (typeof (content) === "string") {
            // Set the html
            body.innerHTML += content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Call the render event if it exists
        item.onRender ? item.onRender(body, item) : null;

        // See if there is a click event
        if (props.onClick || item.onClick) {
            // Set the click event
            body.addEventListener("click", ev => {
                let elCard = ev.currentTarget as HTMLElement;

                // Get the item
                let item = items[elCard.getAttribute("data-idx")];

                // Execute the events
                item ? item.onClick(item, ev) : null;
                props.onClick ? props.onClick(item, ev) : null;
            });
        }

        // Parse the actions
        let actions: Array<ICardAction> = item.actions || [];
        for (let j = 0; j < actions.length; j++) {
            let action = actions[j];

            // Set the class name
            let className = "btn";
            switch (action.buttonType) {
                // Danger
                case ButtonTypes.Danger:
                    className += " btn-danger";
                    break;
                // Dark
                case ButtonTypes.Dark:
                    className += " btn-dark";
                    break;
                // Info
                case ButtonTypes.Info:
                    className += " btn-info";
                    break;
                // Light
                case ButtonTypes.Light:
                    className += " btn-light";
                    break;
                // Link
                case ButtonTypes.Link:
                    className += " btn-link";
                    break;
                // Primary
                case ButtonTypes.Primary:
                    className += " btn-primary";
                    break;
                // Secondary
                case ButtonTypes.Secondary:
                    className += " btn-secondary";
                    break;
                // Success
                case ButtonTypes.Success:
                    className += " btn-success";
                    break;
                // Warning
                case ButtonTypes.Warning:
                    className += " btn-warning";
                    break;
                // Default
                default:
                    className = "card-link";
                    break;
            }

            // Create the button
            let button = document.createElement("a");
            button.className = className || "";
            button.href = action.href || "#";
            button.innerHTML = action.text || "";
            button.setAttribute("data-body-idx", i.toString());
            button.setAttribute("data-action-idx", j.toString());

            // See if there is a click event
            if (action.onClick) {
                // Add a click event
                button.addEventListener("click", ev => {
                    let elButton = ev.currentTarget as HTMLElement;

                    // Get the action
                    let item: ICardBody = items[elButton.getAttribute("data-body-idx")];
                    let action: ICardAction = item ? item.actions[elButton.getAttribute("data-action-idx")] : null;
                    if (action) {
                        // Execute the event
                        action.onClick ? action.onClick(action, item, ev) : null;
                    }
                });
            }

            // Add the button
            body.appendChild(button);
        }
    }

    // See if the footer exists
    if (props.footer) {
        // Add the footer
        let footer = document.createElement("div");
        footer.className = props.footer.className || "";
        footer.classList.add("card-footer");
        card.appendChild(footer);

        // Set the content
        let content = props.footer.content || "";
        if (typeof (content) === "string") {
            // Set the html
            footer.innerHTML = content;
        } else {
            // Append the element
            footer.appendChild(content);
        }
    }

    // See if the bottom image exists
    if (props.imgBottom) {
        // Add the bottom image
        let img = document.createElement("img");
        img.alt = props.imgBottom.alt || "";
        img.className = "card-img-bottom";
        img.src = props.imgBottom.src || "";
        card.appendChild(img);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(card);

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

    // Return the alert
    return {
        dispose: () => { jQuery(card).card("dispose"); },
        el: card,
        hide: () => { Common.hide(card); },
        show: () => { Common.show(card); }
    };
}