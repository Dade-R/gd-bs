import * as jQuery from "jquery";
import { ICard, ICardProps } from "../../../@types/components/card";
import { Base } from "../base";
import { Nav } from "../nav";
import * as HTML from "./index.html";
import { CardBody } from "./item";

/**
 * Card
 */
class _Card extends Base<ICardProps> implements ICard {
    // Constructor
    constructor(props: ICardProps) {
        super(HTML, props);

        // Configure the card
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card
    private configure() {
        // See if the top image exists
        if (this.props.imgTop) {
            // Add the top image
            let img = document.createElement("img");
            img.alt = this.props.imgTop.alt == null ? "" : this.props.imgTop.alt;
            img.className = "card-img-top";
            img.src = this.props.imgTop.src == null ? "" : this.props.imgTop.src;
            this.el.appendChild(img);
        }

        // Configure the header
        this.configureHeader();

        // Render the cards
        this.renderCards();

        // Configure the footer
        this.configureFooter();

        // See if the bottom image exists
        if (this.props.imgBottom) {
            // Add the bottom image
            let img = document.createElement("img");
            img.alt = this.props.imgBottom.alt == null ? "" : this.props.imgBottom.alt;
            img.className = "card-img-bottom";
            img.src = this.props.imgBottom.src == null ? "" : this.props.imgBottom.src;
            this.el.appendChild(img);
        }
    }

    // Configure the events
    private configureEvents(body: CardBody) {
        // See if there is a click event
        if (this.props.onClick) {
            // Set the click event
            body.el.addEventListener("click", ev => {
                // Execute the event
                this.props.onClick(body.props);
            });
        }
    }

    // Configure the header
    private configureHeader() {
        // See if the header exists
        if (this.props.header) {
            // See if the navigation exists
            if (this.props.header.nav) {
                let navProps = this.props.header.nav;

                // Set the class
                navProps.className = [
                    navProps.className || "",
                    "card-header-tabs"
                ].join(' ');

                // Render the navigation
                this.el.appendChild(Nav(navProps).el);
            } else {
                // Render the header
                let header = document.createElement("div");
                header.className = this.props.header.className || "";
                header.classList.add("card-header")
                this.el.appendChild(header);

                // Set the content
                let content = this.props.header.content == null ? "" : this.props.header.content;
                if (typeof (content) === "string") {
                    // Set the html
                    header.innerHTML = content;
                } else {
                    // Append the element
                    header.appendChild(content);
                }
            }
        }
    }

    // Configure the footer
    private configureFooter() {
        // See if the footer exists
        if (this.props.footer) {
            // Add the footer
            let footer = document.createElement("div");
            footer.className = this.props.footer.className || "";
            footer.classList.add("card-footer");
            this.el.appendChild(footer);

            // Set the content
            let content = this.props.footer.content == null ? "" : this.props.footer.content;
            if (typeof (content) === "string") {
                // Set the html
                footer.innerHTML = content;
            } else {
                // Append the element
                footer.appendChild(content);
            }
        }
    }

    // Render the cards
    private renderCards() {
        // Parse the body cards
        let items = this.props.body || [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Append the body card
            let body = new CardBody(item);
            this.el.appendChild(body.el);

            // Configure the events
            this.configureEvents(body);
        }
    }

    /**
     * Public Interface
     */
}
export const Card = (props: ICardProps): ICard => { return new _Card(props); }