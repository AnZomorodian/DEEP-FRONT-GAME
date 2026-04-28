import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-footer")
export class Footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer
        class="[.in-game_&]:hidden bg-zinc-900/90 backdrop-blur-md flex items-center justify-center gap-4 px-4 py-4 text-white/70 w-full border-t border-white/10 shrink-0 relative z-50"
      >
        <span class="text-xs sm:text-sm text-center">
          Deep Front, Designed By Artin Zomorodian and Hani Bikdeli
        </span>
        <lang-selector class="absolute right-4 top-1/2 -translate-y-1/2"></lang-selector>
      </footer>
    `;
  }
}
