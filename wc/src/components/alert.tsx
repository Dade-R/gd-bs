import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-alert"
})
export class Alert {
    @Element() private el: HTMLElement;

    // Alert Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() header: string;
    @Prop() isDismissible: boolean;
    @Prop() type: number;

    // Component loaded event
    componentDidLoad() {
        // Render the alert
        return GD.Components.Alert({
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
    }

    // Render the alert
    render() {
        return (
            <div />
        );
    }
}