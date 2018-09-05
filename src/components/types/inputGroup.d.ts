/**
 * Input Group
 */
export const InputGroup: (props: IInputGroupProps) => IInputGroup;

/**
 * Button Group
 */
export interface IInputGroup {
    /** The element. */
    el: Element;
}

/**
 * Input Group Types
 */
export const InputGroupTypes: IInputGroupTypes;

/**
 * Input Group Properties
 */
export interface IInputGroupProps {
    appendedLabel?: string;
    className?: string;
    description?: string;
    el?: Element | HTMLElement;
    formFl?: boolean;
    id?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    label?: string;
    onClear?: () => void;
    onChange?: (value?: string, ev?: Event) => void;
    placeholder?: string;
    prependedLabel?: string;
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
    Search: number;
    TextArea: number;
    TextField: number;
}