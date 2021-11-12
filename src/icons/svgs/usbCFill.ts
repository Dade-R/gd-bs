import { generateIcon } from "../generate";
export function usbCFill(height, width) {
	return generateIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-usb-c-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6H3Zm.5 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"/>
</svg>`, height, width);
}