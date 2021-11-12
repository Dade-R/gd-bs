import { generateIcon } from "../generate";
export function hdmi(height, width) {
	return generateIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdmi" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.293l.707.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293l.707-.707H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 1h14v3h-.293a1 1 0 0 0-.707.293l-.707.707H2.707L2 9.293A1 1 0 0 0 1.293 9H1V6Zm1.5 1a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z"/>
</svg>`, height, width);
}