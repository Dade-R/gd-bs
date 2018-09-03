// GdBs: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './gd-bs.core.js';
import {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Carousel,
  Collapse,
  Dropdown,
  Form,
  InputGroup,
  Jumbotron,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  Pagination,
  Popover,
  Progress,
  ProgressGroup,
  Tooltip
} from './gd-bs.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    Accordion,
    Alert,
    Badge,
    Breadcrumb,
    Button,
    ButtonGroup,
    Card,
    CardGroup,
    Carousel,
    Collapse,
    Dropdown,
    Form,
    InputGroup,
    Jumbotron,
    ListGroup,
    Modal,
    Nav,
    Navbar,
    Pagination,
    Popover,
    Progress,
    ProgressGroup,
    Tooltip
  ], opts);
}