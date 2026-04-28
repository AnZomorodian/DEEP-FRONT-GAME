import { html } from "lit";
import { resolveMarkdown } from "lit-markdown";
import { customElement, property } from "lit/decorators.js";
import { translateText } from "../client/Utils";
import { assetUrl } from "../core/AssetUrls";
import "./components/baseComponents/Modal";
import { BaseModal } from "./components/BaseModal";
import { modalHeader } from "./components/ui/ModalHeader";

@customElement("info-modal")
export class InfoModal extends BaseModal {
  @property({ type: String }) markdown = "Loading...";

  private initialized: boolean = false;

  render() {
    const content = html`
      <div class="${this.modalContainerClass}">
        ${modalHeader({
          title: translateText("info_modal.title"),
          onBack: () => this.close(),
          ariaLabel: translateText("common.back"),
        })}
        <div
          class="prose prose-invert prose-sm max-w-none overflow-y-auto px-6 py-3 mr-1
            [&_a]:text-blue-400 [&_a:hover]:text-blue-300 transition-colors
            [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-white [&_h1]:border-b [&_h1]:border-white/10 [&_h1]:pb-2
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-blue-200
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:text-blue-100
            [&_ul]:pl-5 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1
            [&_li]:text-gray-300 [&_li]:leading-relaxed
            [&_p]:text-gray-300 [&_p]:mb-3 [&_strong]:text-white [&_strong]:font-bold
            [&_table]:w-full [&_table]:my-4 [&_table]:border-collapse
            [&_th]:text-left [&_th]:px-3 [&_th]:py-2 [&_th]:bg-white/5 [&_th]:text-blue-200 [&_th]:border-b [&_th]:border-white/10
            [&_td]:px-3 [&_td]:py-2 [&_td]:text-gray-300 [&_td]:border-b [&_td]:border-white/5
            scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
        >
          ${resolveMarkdown(this.markdown, {
            includeImages: true,
            includeCodeBlockClassNames: true,
          })}
        </div>
      </div>
    `;

    if (this.inline) {
      return content;
    }

    return html`
      <o-modal
        title=${translateText("info_modal.title")}
        ?inline=${this.inline}
        hideCloseButton
        hideHeader
      >
        ${content}
      </o-modal>
    `;
  }

  protected onOpen(): void {
    if (!this.initialized) {
      this.initialized = true;
      fetch(assetUrl("info.md"))
        .then((response) => (response.ok ? response.text() : "Failed to load"))
        .then((markdown) => (this.markdown = markdown))
        .catch(() => (this.markdown = "Failed to load"));
    }
  }
}
