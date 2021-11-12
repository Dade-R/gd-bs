import { generateIcon } from "../generate";
export function usbC(height, width) {
	return generateIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-usb-c" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3 6h10a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4ZM0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3Zm3.5-.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"/>
</svg>`, height, width);
}