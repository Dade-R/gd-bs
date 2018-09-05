import * as jQuery from "jquery";
import { INav, INavProps } from "./types/nav";

/**
 * Navigation
 * @param props - The navigation properties.
 */
export const Nav = (props: INavProps): INav => {
    let html = [];
    let renderTabContent = false;

    // Set the class names
    let classNames = ["nav"];
    props.className ? classNames.push(props.className) : null;
    props.enableFill ? classNames.push("nav-fill") : null;
    props.isJustified ? classNames.push("nav-justified") : null;
    props.isPills ? classNames.push("nav-pills") : null;
    props.isTabs ? classNames.push("nav-tabs") : null;
    props.isVertical ? classNames.push("flex-column") : null;

    // Set the attributes
    let attributes = [
        props.id ? 'id="' + props.id + '"' : '',
        'class="' + classNames.join(' ') + '"',
        props.isTabs ? 'role="tablist"' : null
    ]

    // Set the starting tag
    html.push('<ul ' + attributes.join(' ') + '>');

    // Parse the navigation items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Set the link class names
        let linkClassNames = ["nav-link"];
        item.isActive ? linkClassNames.push("active") : null;
        item.isDisabled ? linkClassNames.push("disabled") : null;

        // See if tab content exists
        if (item.onRenderTab || item.tabContent) {
            // Set the flag
            renderTabContent = true;
        }

        // Add the navigation item
        html.push([
            '<li class="nav-item">',
            '<a class="' + linkClassNames.join(' ') + '">' + (item.title || '') + '</a>',
            '</li>'
        ].join('\n'));
    }

    // Set the ending tag
    html.push('</ul>');

    // See if we are rendering tab content
    if (renderTabContent) {
        // Add the starting tag
        html.push('<div class="tab-content">')

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Set the tab class names
            let tabClassNames = ["tab-pane"];
            props.enableFade ? tabClassNames.push("fade") : null;
            item.isActive ? tabClassNames.push("active show") : null;

            // Add the tab content
            html.push([
                '<div class="' + tabClassNames.join(' ') + '">',
                item.tabContent || "",
                '</div>'
            ].join('\n'));
        }

        // Add the closing tag
        html.push('</div>');
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

    // Get the nav items
    let elNavItems = el.querySelectorAll(".nav-item");
    for (let i = 0; i < elNavItems.length; i++) {
        let elNavItem = elNavItems[i];
        let item = props.items[i];

        // Set the index
        elNavItem.setAttribute("data-idx", i.toString());

        // See if we are rendering tabs
        if (props.isPills || props.isTabs) {
            // Add a click event
            elNavItem.addEventListener("click", ev => {
                // Parse the selected tab links
                let selectedTabs = el.querySelectorAll(".nav-link.active");
                for (let i = 0; i < selectedTabs.length; i++) {
                    // Unselect this tab
                    selectedTabs[i].classList.remove("active");
                }

                // Parse the active tab content
                selectedTabs = el.querySelectorAll(".tab-pane.active")
                for (let i = 0; i < selectedTabs.length; i++) {
                    // Hide the tab content
                    selectedTabs[i].classList.remove("active");
                    selectedTabs[i].classList.remove("show");
                }

                // Get the tab element
                let elTab = (ev.currentTarget as HTMLElement).querySelector(".nav-link");
                if (elTab) {
                    // Select this tab
                    elTab.classList.add("active");

                    // Get the tab content
                    let tabIdx = (ev.currentTarget as HTMLElement).getAttribute("data-idx");
                    let tabs = el.querySelectorAll(".tab-content > .tab-pane");
                    let elTabContent = tabs[tabIdx] as HTMLElement;
                    if (elTabContent) {
                        // Show the tab content
                        elTabContent.classList.add("active");
                        elTabContent.classList.add("show");
                    }
                }
            });
        }

        // See if a click event exists
        if (item.onClick) {
            // Add a click event
            elNavItem.addEventListener("click", ev => {
                let elItem = ev.currentTarget as HTMLDivElement;

                // Call the click event
                item.onClick(props.items[elItem.getAttribute("data-idx")], ev);
            });
        }
    }

    // Get the tab content elements
    let elTabContent = el.querySelectorAll(".tab-pane");
    for (let i = 0; i < elTabContent.length; i++) {
        let item = props.items[i];

        // Call the event
        item.onRenderTab ? item.onRenderTab(item, elTabContent[i] as any) : null;
    }

    // Return the element
    let $nav = jQuery(el.children[0]);
    return {
        dispose: () => { $nav.tab("dispose"); },
        el,
        show: (selector: string) => { $nav.querySelector(selector).tab("show"); }
    };
}