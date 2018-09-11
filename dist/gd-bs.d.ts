// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../jquery

declare module 'gd-bs' {
    import * as jQuery from "jquery";
    import * as Components from "gd-bs/components/types";
    export {
        Components,
        jQuery
    }
}

declare module 'gd-bs/components/types' {
    export * from "gd-bs/components/types/accordion";
    export * from "gd-bs/components/types/alert";
    export * from "gd-bs/components/types/badge";
    export * from "gd-bs/components/types/breadcrumb";
    export * from "gd-bs/components/types/button";
    export * from "gd-bs/components/types/buttonGroup";
    export * from "gd-bs/components/types/card";
    export * from "gd-bs/components/types/cardGroup";
    export * from "gd-bs/components/types/carousel";
    export * from "gd-bs/components/types/checkboxGroup";
    export * from "gd-bs/components/types/collapse";
    export * from "gd-bs/components/types/dropdown";
    export * from "gd-bs/components/types/form";
    export * from "gd-bs/components/types/formControl";
    export * from "gd-bs/components/types/inputGroup";
    export * from "gd-bs/components/types/jumbotron";
    export * from "gd-bs/components/types/listGroup";
    export * from "gd-bs/components/types/modal";
    export * from "gd-bs/components/types/nav";
    export * from "gd-bs/components/types/navbar";
    export * from "gd-bs/components/types/pagination";
    export * from "gd-bs/components/types/popover";
    export * from "gd-bs/components/types/progress";
    export * from "gd-bs/components/types/progressGroup";
    export * from "gd-bs/components/types/toolbar";
    export * from "gd-bs/components/types/tooltip";
}

declare module 'gd-bs/components/types/accordion' {
    import { IButtonProps } from "gd-bs/components/types/button";
    
    /**
        * Accordion
        */
    export const Accordion: (props: IAccordionProps) => IAccordion;
    
    /**
        * Accordion
        */
    export interface IAccordion {
            /** The element. */
            el: Element;
    }
    
    /**
        * Accordion Item
        */
    export interface IAccordionItem {
            btnProps?: IButtonProps;
            content?: string;
    }
    
    /**
        * Accordion Properties
        */
    export interface IAccordionProps {
            className?: string;
            el?: Element | HTMLElement;
            id?: string;
            items?: Array<IAccordionItem>;
    }
}

declare module 'gd-bs/components/types/alert' {
    /**
        * Alert
        */
    export const Alert: (props: IAlertProps) => IAlert;
    
    /**
        * Alert Types
        */
    export const AlertTypes: IAlertTypes;
    
    /**
        * Alert
        */
    export interface IAlert {
            /** Closes an alert by removing it from the DOM. */
            close: () => void;
    
            /** Destroys an element’s alert. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    }
    
    /**
        * Alert Properties
        */
    export interface IAlertProps {
            className?: string;
            content?: string;
            el?: Element | HTMLElement;
            header?: string;
            isDismissible?: boolean;
            type?: number;
    }
    
    /**
        * Alert Types
        */
    export type IAlertTypes = {
            Danger: number;
            Dark: number;
            Info: number;
            Light: number;
            Primary: number;
            Secondary: number;
            Success: number;
            Warning: number;
    }
}

declare module 'gd-bs/components/types/badge' {
    /**
        * Badge
        */
    export const Badge: (props: IBadgeProps) => IBadge;
    
    /**
        * Badge Types
        */
    export const BadgeTypes: IBadgeTypes;
    
    /**
        * Badge
        */
    export interface IBadge {
            /** The element. */
            el: Element;
    }
    
    /**
        * Badge Properties
        */
    export interface IBadgeProps {
            className?: string;
            content?: string;
            el?: Element | HTMLElement;
            header?: string;
            href?: string;
            isPill?: boolean;
            type?: number;
    }
    
    /**
        * Badge Types
        */
    export type IBadgeTypes = {
            Danger: number;
            Dark: number;
            Info: number;
            Light: number;
            Primary: number;
            Secondary: number;
            Success: number;
            Warning: number;
    }
}

declare module 'gd-bs/components/types/breadcrumb' {
    /**
        * Breadcrumb
        */
    export const Breadcrumb: (props: IBreadcrumbProps) => IBreadcrumb;
    
    /**
        * Breadcrumb
        */
    export interface IBreadcrumb {
            /** The element. */
            el: Element;
    }
    
    /**
        * Breadcrumb Item
        */
    export interface IBreadcrumbItem {
            href?: string;
            text?: string;
    }
    
    /**
        * Breadcrumb Properties
        */
    export interface IBreadcrumbProps {
            className?: string;
            el?: Element | HTMLElement;
            items?: Array<IBreadcrumbItem>
    }
}

declare module 'gd-bs/components/types/button' {
    /**
        * Button
        */
    export const Button: (props: IButtonProps) => IButton;
    
    /**
        * Button Types
        */
    export const ButtonTypes: IButtonTypes;
    
    /**
        * Button
        */
    export interface IButton {
            /** Destroys an element’s button. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    
            /** Toggles push state. Gives the button the appearance that it has been activated. */
            toggle: () => void;
    }
    
    /**
        * Button Properties
        */
    export interface IButtonProps {
            badgeType?: number;
            badgeValue?: string;
            className?: string;
            controls?: Array<string>;
            el?: Element | HTMLElement;
            id?: string;
            isBlock?: boolean;
            isDisabled?: boolean;
            isExpanded?: boolean;
            isLarge?: boolean;
            isLink?: boolean;
            isOutline?: boolean;
            isSmall?: boolean;
            onClick?: (ev?: Event) => void;
            target?: string;
            text?: string;
            toggle?: string;
            trigger?: string;
            type?: number;
    }
    
    /**
        * Button Types
        */
    export type IButtonTypes = {
            Danger: number;
            Dark: number;
            Info: number;
            Light: number;
            Link: number;
            Primary: number;
            Secondary: number;
            Success: number;
            Warning: number;
    }
}

declare module 'gd-bs/components/types/buttonGroup' {
    import { IButtonProps } from "gd-bs/components/types";
    
    /**
        * Button Group
        */
    export const ButtonGroup: (props: IButtonGroupProps) => IButtonGroup;
    
    /**
        * Button Group
        */
    export interface IButtonGroup {
            /** The element. */
            el: Element;
    }
    
    /**
        * Button Group Properties
        */
    export interface IButtonGroupProps {
            buttons?: Array<IButtonProps>;
            buttonType?: number;
            className?: string;
            el?: Element | HTMLElement;
            id?: string;
            isLarge?: boolean;
            isSmall?: boolean;
            isVertical?: boolean;
            label?: string;
    }
}

declare module 'gd-bs/components/types/card' {
    import { IButtonProps } from "gd-bs/components/types/button";
    import { INavProps } from "gd-bs/components/types/nav";
    
    /**
        * Card
        */
    export const Card: (props: ICardProps) => ICard;
    
    /**
        * Card
        */
    export interface ICard {
            /** Destroys an element’s card. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    }
    
    /**
        * Card Properties
        */
    export interface ICardProps {
            body?: [{
                    actions?: Array<{
                            buttonType?: number;
                            href?: string;
                            text?: string;
                    }>;
                    className?: string;
                    content?: string;
                    subTitle?: string;
                    text?: string;
                    title?: string;
            }];
            className?: string;
            el?: Element | HTMLElement;
            footer?: string;
            header?: {
                    content?: string;
                    nav?: INavProps;
            };
            imgBottom: {
                    alt?: string;
                    src?: string;
            }
            imgTop: {
                    alt?: string;
                    src?: string;
            };
    }
}

declare module 'gd-bs/components/types/cardGroup' {
    import { ICardProps } from "gd-bs/components/types";
    
    /**
        * Card Group
        */
    export const CardGroup: (props: ICardGroupProps) => ICardGroup;
    
    /**
        * Card Group
        */
    export interface ICardGroup {
            /** The element. */
            el: Element;
    }
    
    /**
        * Card Group Properties
        */
    export interface ICardGroupProps {
            cards?: Array<ICardProps>;
            className?: string;
            el?: Element | HTMLElement;
    }
}

declare module 'gd-bs/components/types/carousel' {
    /**
        * Carousel
        */
    export const Carousel: (props: ICarouselProps) => ICarousel;
    
    /**
        * Carousel
        */
    export interface ICarousel {
            /**
                * Cycles through the carousel items from left to right.
                */
            cycle: () => void;
    
            /** Destroys an element’s tab. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    
            /**
                * Cycles to the next item.
                */
            next: () => void;
    
            /**
                * Cycles the carousel to a particular frame.
                * @prop value - The frame number.
                */
            number: (value:number) => void;
    
            /**
                * Stops the carousel from cycling through items.
                */
            pause: () => void;
    
            /**
                * Cycles to the previous item.
                */
            previous: () => void;
    }
    
    /**
        * Carousel Properties
        */
    export interface ICarouselProps {
            className?: string;
            el?: Element | HTMLElement;
            enableControls?: boolean;
            enableCrossfade?: boolean;
            enableIndicators?: boolean;
            id?: string;
            items?: Array<ICarouselItem>;
            options?: ICarouselOptions;
    }
    
    /**
        * Carousel Item
        */
    export interface ICarouselItem {
            captions?: string;
            className?: string;
            content?: string;
            imageAlt?: string;
            imageUrl?: string;
            isActive?: boolean;
    }
    
    /**
        * Carousel Options
        */
    export interface ICarouselOptions {
            interval?: number;
            keyboard?: boolean;
            pause?: string | boolean;
            ride?: string;
            wrap?: boolean;
    }
}

declare module 'gd-bs/components/types/checkboxGroup' {
    /**
        * Checkbox Group
        */
    export const CheckboxGroup: (props: ICheckboxGroupProps) => ICheckboxGroup;
    
    /**
        * Checkbox Group Types
        */
    export const CheckboxGroupTypes: ICheckboxTypes;
    
    /**
        * Checkbox Group
        */
    export interface ICheckboxGroup {
            /** The checkbox element. */
            el: HTMLElement;
    
            /** Gets the values. */
            getValues: () => Array<ICheckboxGroupItem>;
    }
    
    /**
        * Checkbox Group Item
        */
    export interface ICheckboxGroupItem {
            checked?: boolean;
            isDisabled?: boolean;
            label?: string;
            name?: string;
            onChange?: (value: ICheckboxGroupItem) => void;
    }
    
    /**
        * Checkbox Group Properties
        */
    export interface ICheckboxGroupProps {
            className?: string;
            colSize?: number;
            el?: Element | HTMLElement;
            hideLabel?: boolean;
            label?: string;
            items?: Array<ICheckboxGroupItem>;
            multi?: boolean;
            //onChange?: (value: Array<ICheckboxGroupItem>) => void;
            type?: number;
    }
    
    /**
        * Checkbox Group Types
        */
    export type ICheckboxTypes = {
            Checkbox: number;
            Radio: number;
    }
}

declare module 'gd-bs/components/types/collapse' {
    /**
        * Collapse
        */
    export const Collapse: (props: ICollapseProps) => ICollapse;
    
    /**
        * Collapse
        */
    export interface ICollapse {
            /** Destroys an element’s collapse. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    
            /** Hides a collapsible element. */
            hide: () => void;
    
            /** Shows a collapsible element. */
            show: () => void;
    
            /** Toggles the collapsible element on invocation. */
            toggle: () => void;
    }
    
    /**
        * Collapse Options
        */
    export interface ICollapseOptions {
            parent?: string;
            toggle?: string;
    }
    
    /**
        * Collapse Properties
        */
    export interface ICollapseProps {
            className?: string;
            content?: string;
            el?: Element | HTMLElement;
            id?: string;
            isMulti?: boolean;
            options?: ICollapseOptions;
    }
}

declare module 'gd-bs/components/types/dropdown' {
    /**
        * Dropdown
        */
    export const Dropdown: (props: IDropdownProps) => IDropdown;
    
    /**
        * Dropdown Types
        */
    export const DropdownTypes: IDropdownTypes;
    
    /**
        * Dropdown
        */
    export interface IDropdown {
            /** Destroys an element’s dropdown. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    
            /** Gets the selected dropdown item(s). */
            getValue: () => IDropdownItem | Array<IDropdownItem>;
    
            /** True if the dropdown is a multi-select. */
            isMulti: boolean;
    
            /** Toggles the dropdown menu of a given navbar or tabbed navigation. */
            toggle: () => void;
    
            /** Updates the position of an element’s dropdown. */
            update: () => void;
    }
    
    /**
        * Dropdown Item
        */
    export interface IDropdownItem {
            data?: any;
            href?: string;
            isDivider?: boolean;
            isHeader?: boolean;
            isSelected?: boolean;
            onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
            text?: string;
            value?: string;
    }
    
    /**
        * Dropdown Properties
        */
    export interface IDropdownProps {
            className?: string;
            dropLeft?: boolean;
            dropRight?: boolean;
            dropUp?: boolean;
            el?: Element | HTMLElement;
            formFl?: boolean;
            id?: string;
            isSplit?: boolean;
            items?: Array<IDropdownItem>;
            label?: string;
            menuOnly?: boolean;
            multi?: boolean;
            navFl?: boolean;
            onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
            type?: number;
            value?: any;
    }
    
    /**
        * Dropdown Types
        */
    export type IDropdownTypes = {
            Danger: number;
            Info: number;
            Primary: number;
            Secondary: number;
            Success: number;
            Warning: number;
    }
}

declare module 'gd-bs/components/types/form' {
    import { IFormControl, IFormControlProps, IFormControlTypes } from "gd-bs/components/types/formControl";
    
    /**
        * Form
        */
    export const Form: (props: IFormProps) => IForm;
    
    /**
        * Form Control Types
        */
    export const FormControlTypes: IFormControlTypes;
    
    /**
        * Form
        */
    export interface IForm {
            controls: Array<IFormControl>;
            el: HTMLFormElement,
            getValues: () => { [key: string]: any };
    }
    
    /**
        * Form Column
        */
    export interface IFormColumn {
            control: IFormControlProps;
            size?: number;
    }
    
    /**
        * Form Properties
        */
    export interface IFormProps {
            el?: Element | HTMLElement,
            rows?: Array<IFormRow>;
            onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;
            onControlRendered?: (control: IFormControl) => void | Promise<IFormControlProps>;
            value?: any;
    }
    
    /**
        * Form Row
        */
    export interface IFormRow {
            isAutoSized?: boolean;
            isCentered?: boolean;
            control?: IFormControlProps;
            colSize?: number;
            columns?: Array<IFormColumn>;
    }
}

declare module 'gd-bs/components/types/formControl' {
    import { ICheckboxGroupItem } from "gd-bs/components/types/checkboxGroup";
    import { IDropdownItem } from "gd-bs/components/types/dropdown";
    
    /**
        * Form Control
        */
    export const FormControl: (control: IFormControlProps) => IFormControl;
    
    /**
        * Form Control
        */
    export interface IFormControl {
            el: HTMLElement;
            getValue: () => any;
            props: IFormControlProps;
    }
    
    /**
        * Form Control Properties
        */
    export interface IFormControlProps {
            className?: string;
            description?: string;
            el?: HTMLElement;
            html?: string;
            isReadonly?: boolean;
            label?: string;
            name?: string;
            onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;
            onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;
            onGetValue?: (control: IFormControlProps) => any;
            required?: boolean;
            type?: number;
            value?: any;
    }
    
    /**
        * Form Control Properties - Checkbox
        */
    export interface IFormControlPropsCheckbox extends IFormControlProps {
            el?: HTMLInputElement;
            hideLabel?: boolean;
            items?: Array<ICheckboxGroupItem>;
            onChange?: (checked?: boolean) => void;
    }
    
    /**
        * Form Control Properties - Dropdown
        */
    export interface IFormControlPropsDropdown extends IFormControlProps {
            items?: Array<IDropdownItem>;
            onChange?: (item: IDropdownItem | Array<IDropdownItem>) => void;
            placeholder?: string;
            type?: number;
    }
    
    /**
        * Form Control Properties - Number Field
        */
    export interface IFormControlPropsNumberField extends IFormControlPropsTextField {
            max?: number;
            min?: number;
            step?: number;
    }
    
    /**
        * Form Control Properties - TextField
        */
    export interface IFormControlPropsTextField extends IFormControlProps {
            el?: HTMLInputElement;
            onChange?: (value: string) => void;
            placeholder?: string;
    }
    
    /**
        * Form Control Types
        */
    export type IFormControlTypes = {
            Checkbox: number;
            Email: number;
            Dropdown: number;
            File: number;
            MultiDropdown: number;
            Password: number;
            Range: number;
            TextArea: number;
            TextField: number;
    }
}

declare module 'gd-bs/components/types/inputGroup' {
    import { IButtonProps } from "gd-bs/components/types/button";
    
    /**
        * Input Group
        */
    export const InputGroup: (props: IInputGroupProps) => IInputGroup;
    
    /**
        * Input Group Types
        */
    export const InputGroupTypes: IInputGroupTypes;
    
    /**
        * Button Group
        */
    export interface IInputGroup {
            /** The element. */
            el: Element;
    }
    
    /**
        * Input Group Properties
        */
    export interface IInputGroupProps {
            appendedButtons?: Array<IButtonProps>;
            appendedLabel?: string;
            className?: string;
            description?: string;
            el?: Element | HTMLElement;
            formFl?: boolean;
            id?: string;
            isLarge?: boolean;
            isPlainText?: boolean;
            isReadonly?: boolean;
            isSmall?: boolean;
            label?: string;
            max?: number;
            min?: number;
            onClear?: () => void;
            onChange?: (value?: string, ev?: Event) => void;
            placeholder?: string;
            prependedButtons?: Array<IButtonProps>;
            prependedLabel?: string;
            step?: number;
            type?: number;
            value?: string;
    }
    
    /**
        * Input Group Types
        */
    export type IInputGroupTypes = {
            Email: number;
            File: number;
            Password: number;
            Range: number;
            Search: number;
            TextArea: number;
            TextField: number;
    }
}

declare module 'gd-bs/components/types/jumbotron' {
    /**
        * Jumbotron
        */
    export const Jumbotron: (props: IJumbotronProps) => IJumbotron;
    
    /**
        * Jumbotron
        */
    export interface IJumbotron {
            /** The element. */
            el: Element;
    }
    
    /**
        * Jumbotron Properties
        */
    export interface IJumbotronProps {
            className?: string;
            content?: string;
            el?: Element | HTMLElement;
            isFluid?: boolean;
            lead?: string;
            onRenderContent?: (el?: HTMLElement) => void;
            title?: string;
    }
}

declare module 'gd-bs/components/types/listGroup' {
    import { IBadgeProps } from "gd-bs/components/types/badge";
    
    /**
        * List Group
        */
    export const ListGroup: (props: IListGroupProps) => IListGroup;
    
    /**
        * List Group Item Types
        */
    export const ListGroupItemTypes: IListGroupItemTypes;
    
    /**
        * List Group
        */
    export interface IListGroup {
            /** The element. */
            el: Element;
    
            /**
                * Shows the tab content.
                * @prop elId - The tab id.
                */
            show: (tabId: string) => void;
    }
    
    /**
        * List Group Item
        */
    export interface IListGroupItem {
            badge?: IBadgeProps;
            className?: string;
            content?: string;
            href?: string;
            isActive?: boolean;
            isDisabled?: boolean;
            tabName?: string;
            type?: number;
    }
    
    /**
        * List Group Properties
        */
    export interface IListGroupProps {
            className?: string;
            colWidth?: number;
            el?: Element | HTMLElement;
            enableFade?: boolean;
            isFlush?: boolean;
            isTabs?: boolean;
            items?: Array<IListGroupItem>;
    }
    
    /**
        * List Group Item Types
        */
    export type IListGroupItemTypes = {
            Danger: number;
            Dark: number;
            Info: number;
            Light: number;
            Primary: number;
            Secondary: number;
            Success: number;
            Warning: number;
    }
}

declare module 'gd-bs/components/types/modal' {
    import { IButtonProps } from "gd-bs/components/types/button";
    
    /**
        * Modal
        */
    export const Modal: (props: IModalProps) => IModal;
    
    /**
        * Modal
        */
    export interface IModal {
            /** Destroys an element’s modal. */
            dispose: () => void;
    
            /** The element. */
            el: Element,
    
            /** Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears). */
            handleUpdate: () => void;
    
            /** Manually hides a modal. */
            hide: () => void;
    
            /** Manually opens a modal. */
            show: () => void;
    
            /** Manually toggles a modal. */
            toggle: () => void;
    }
    
    /**
        * Modal Options
        */
    export interface IModalOptions {
            /** Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click. */
            backdrop: boolean | string;
    
            /** Puts the focus on the modal when initialized. */
            focus: boolean;
    
            /** Closes the modal when escape key is pressed. */
            keyboard: boolean;
    
            /** Shows the modal when initialized. */
            show: boolean;
    }
    
    /**
        * Modal Properties
        */
    export interface IModalProps {
            body?: string;
            button?: IButtonProps;
            className?: string;
            el?: Element | HTMLElement;
            disableFade?: boolean;
            footer?: string;
            hideCloseButton?: boolean;
            id?: string;
            isCentered?: boolean;
            isLarge?: boolean;
            isSmall?: boolean;
            onClose?: (el: HTMLDivElement) => void;
            onRenderBody?: (el: HTMLDivElement) => void;
            onRenderFooter?: (el: HTMLDivElement) => void;
            title?: string;
    }
}

declare module 'gd-bs/components/types/nav' {
    /**
        * Navigation
        */
    export const Nav: (props: INavProps) => INav;
    
    /**
        * Navigation
        */
    export interface INav {
            /** Destroys an element’s tab. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    
            /**
                * Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden.
                * @prop selector - The query selector.
                */
            show: (selector: string) => void;
    }
    
    /**
        * Navigation Properties
        */
    export interface INavProps {
            className?: string;
            el?: Element | HTMLElement;
            enableFade?: boolean;
            enableFill?: boolean;
            id?: string;
            items?: Array<INavLink>;
            isJustified?: boolean;
            isPills?: boolean;
            isTabs?: boolean;
            isVertical?: boolean;
    }
    
    /**
        * Navigation Links
        */
    export interface INavLink {
            isActive?: boolean;
            isDisabled?: boolean;
            href?: string;
            onClick?: (item?: INavLink, ev?: Event) => void;
            onRenderTab?: (item?: INavLink, el?: HTMLDivElement) => void;
            tabContent?: string;
            title?: string;
    }
}

declare module 'gd-bs/components/types/navbar' {
    import { IButtonProps } from "gd-bs/components/types/button";
    import { IDropdownItem } from "gd-bs/components/types/dropdown";
    
    /**
        * Navbar
        */
    export const Navbar: (props: INavbarProps) => INavbar;
    
    /**
        * Navbar Types
        */
    export const NavbarTypes: INavbarTypes;
    
    /**
        * Navbar
        */
    export interface INavbar {
            /** The element. */
            el: Element;
    }
    
    /**
        * Navbar Item
        */
    export interface INavbarItem {
            href?: string;
            isActive?: boolean;
            isDisabled?: boolean;
            items?: Array<IDropdownItem>;
            onClick?: (item?: INavbarItem, ev?: Event) => void;
            text?: string;
    }
    
    /**
        * Navbar Properties
        */
    export interface INavbarProps {
            brand?: string;
            brandUrl?: string;
            className?: string;
            el?: Element | HTMLElement;
            enableSearch?: boolean;
            id?: string;
            items?: Array<INavbarItem>;
            onClick?: (item?: INavbarItem, ev?: Event) => void;
            searchBox?: INavbarSearchBox;
            type?: number;
    }
    
    /**
        * Navbar Types
        */
    export type INavbarTypes = {
            Dark: number;
            Light: number;
            Primary: number;
    }
    
    /**
        * Navbar Search Box
        */
    export interface INavbarSearchBox {
            btnType?: number;
            btnText?: string;
            hideButton?: boolean;
            onChange?: (value?: string) => void;
            onSearch?: (value?: string) => void;
            placeholder?: string;
    }
}

declare module 'gd-bs/components/types/pagination' {
    /**
        * Pagination
        */
    export const Pagination: (props: IPaginationProps) => IPagination;
    
    /**
        * Pagination Alignment
        */
    export const PaginationAlignment: IPaginationAlignment;
    
    /**
        * Pagination
        */
    export interface IPagination {
            /** The element. */
            el: Element;
    }
    
    /**
        * Pagination Properties
        */
    export interface IPaginationProps {
            alignment?: number;
            className?: string;
            el?: Element;
            icon?: string;
            isLarge?: boolean;
            isSmall?: boolean;
            label?: string;
            numberOfPages?: number;
            onClick?: (pageNumber?: number, ev?: Event) => void;
    }
    
    /**
        * Pagination Alignment
        */
    export type IPaginationAlignment = {
            Centered: number;
            Left: number;
            Right: number;
    }
}

declare module 'gd-bs/components/types/popover' {
    import { IButtonProps } from "gd-bs/components/types/button";
    
    /**
        * Popover
        */
    export const Popover: (props: IPopoverProps) => IPopover;
    
    /**
        * Popover Types
        */
    export const PopoverTypes: IPopoverTypes;
    
    /**
        * Popover
        */
    export interface IPopover {
            /** Destroys an element’s popover. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    
            /** Hides an element’s popover. */
            hide: () => void;
    
            /** Toggles an element's popover. */
            toggle: () => void;
    
            /** Toggles the ability for an element’s popover to be shown or hidden. */
            toggleEnabled: () => void;
    
            /** Reveals an element’s popover. */
            show: () => void;
    
            /** Updates the position of an element’s popover. */
            update: () => void;
    }
    
    /**
        * Popover Options
        */
    export interface IPopoverOptions {
            animation?: boolean;
            boundary?: string;
            container?: string;
            content?: string;
            delay?: number | object;
            fallbackPlacement?: string | Array<string>;
            html?: boolean;
            offset?: number | string;
            placement?: string | Function;
            selector?: string;
            template?: string;
            title?: string;
            trigger?: string;
    }
    
    /**
        * Popover Properties
        */
    export interface IPopoverProps {
            btnProps?: IButtonProps;
            className?: string;
            el?: Element | HTMLElement;
            isDismissible?: boolean;
            options?: IPopoverOptions;
            type?: number;
    }
    
    /**
        * Popover Types
        */
    export type IPopoverTypes = {
            Auto: number;
            Bottom: number;
            Left: number;
            Right: number;
            Top: number;
    }
}

declare module 'gd-bs/components/types/progress' {
    /**
        * Progress
        */
    export const Progress: (props: IProgressProps) => IProgress;
    
    /**
        * Progress
        */
    export interface IProgress {
            /** The element. */
            el: Element;
    }
    
    /**
        * Progress Properties
        */
    export interface IProgressProps {
            className?: string;
            el?: Element | HTMLElement;
            isAnimated?: boolean;
            isStriped?: boolean;
            label?: string;
            max?: number;
            min?: number;
            size?: number;
    }
}

declare module 'gd-bs/components/types/progressGroup' {
    import { IProgressProps } from "gd-bs/components/types/progress";
    
    /**
        * Progress Group
        */
    export const ProgressGroup: (props: IProgressGroupProps) => IProgressGroup;
    
    /**
        * Progress Group
        */
    export interface IProgressGroup {
            /** The element. */
            el: Element;
    }
    
    /**
        * Progress Group Properties
        */
    export interface IProgressGroupProps {
            className?: string;
            el?: Element | HTMLElement;
            isMultiple?: boolean;
            progressbars?: Array<IProgressProps>;
    }
}

declare module 'gd-bs/components/types/toolbar' {
    import { IButtonProps } from "gd-bs/components/types/button";
    import { IInputGroupProps } from "gd-bs/components/types/inputGroup";
    
    /**
        * Toolbar
        */
    export const Toolbar: (props: IToolbarProps) => IToolbar;
    
    /**
        * Toolbar
        */
    export interface IToolbar {
            /** The element. */
            el: Element;
    }
    
    /**
        * Toolbar Item
        */
    export interface IToolbarItem {
            buttons?: Array<IButtonProps>;
            buttonType?: number;
            inputGroup?: IInputGroupProps;
    }
    
    /**
        * Toolbar Properties
        */
    export interface IToolbarProps {
            className?: string;
            el?: Element | HTMLElement;
            items?: Array<IToolbarItem>;
            spacing?: number;
    }
}

declare module 'gd-bs/components/types/tooltip' {
    import { IButtonProps } from "gd-bs/components/types/button";
    
    /**
        * Tooltip
        */
    export const Tooltip: (props: ITooltipProps) => ITooltip;
    
    /**
        * Tooltip Types
        */
    export const TooltipTypes: ITooltipTypes;
    
    /**
        * Tooltip
        */
    export interface ITooltip {
            /** Destroys an element’s tooltip. */
            dispose: () => void;
    
            /** The element. */
            el: Element;
    
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
            boundary?: string;
            container?: string;
            delay?: number | object;
            fallbackPlacement?: string | Array<string>;
            html?: boolean;
            offset?: number | string;
            placement?: string | Function;
            selector?: string;
            template?: string;
            title?: string;
            trigger?: string;
    }
    
    /**
        * Tooltip Properties
        */
    export interface ITooltipProps {
            btnProps?: IButtonProps;
            className?: string;
            el?: Element | HTMLElement;
            options?: ITooltipOptions;
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
}

