import { IButtonProps } from "./button";
import { INavProps } from "./nav";

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
 * Card Action
 */
export interface ICardAction {
    buttonType?: number;
    onClick?: (action?: ICardAction, card?: ICardProps, ev?: Event) => void;
    href?: string;
    text?: string;
}

/**
 * Card Body
 */
export interface ICardBody {
    actions?: Array<ICardAction>;
    className?: string;
    content?: string;
    onClick?: (card?: ICardProps, ev?: Event) => void;
    subTitle?: string;
    text?: string;
    title?: string;
}

/**
 * Card Header
 */
export interface ICardHeader {
    content?: string;
    nav?: INavProps;
}

/**
 * Card Properties
 */
export interface ICardProps {
    body?: Array<ICardBody>;
    className?: string;
    el?: Element | HTMLElement;
    footer?: string;
    header?: ICardHeader;
    imgBottom?: {
        alt?: string;
        src?: string;
    }
    imgTop?: {
        alt?: string;
        src?: string;
    };
    onClick?: (card?: ICardProps, ev?: Event) => void;
}