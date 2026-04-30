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
          class="relative overflow-y-auto px-6 py-4 mr-1 scrollbar-thin scrollbar-thumb-malibu-blue/30 scrollbar-track-transparent"
        >
          <div
            class="prose prose-invert prose-sm max-w-none
              [&_a]:text-aquarius [&_a:hover]:text-malibu-blue transition-colors
              [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-5 [&_h1]:tracking-wide [&_h1]:uppercase
              [&_h1]:bg-gradient-to-r [&_h1]:from-aquarius [&_h1]:to-malibu-blue
              [&_h1]:bg-clip-text [&_h1]:text-transparent
              [&_h1]:border-b [&_h1]:border-malibu-blue/30 [&_h1]:pb-3
              [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-aquarius
              [&_h2]:flex [&_h2]:items-center [&_h2]:gap-2
              [&_h2]:before:content-['▎'] [&_h2]:before:text-malibu-blue [&_h2]:before:text-2xl
              [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-malibu-blue [&_h3]:uppercase [&_h3]:tracking-wider
              [&_ul]:pl-5 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1
              [&_li]:text-white/80 [&_li]:leading-relaxed [&_li::marker]:text-malibu-blue
              [&_p]:text-white/80 [&_p]:mb-3 [&_p]:leading-relaxed
              [&_strong]:text-aquarius [&_strong]:font-bold
              [&_blockquote]:border-l-4 [&_blockquote]:border-malibu-blue/60
              [&_blockquote]:bg-malibu-blue/5 [&_blockquote]:px-4 [&_blockquote]:py-2 [&_blockquote]:my-4
              [&_blockquote]:rounded-r-lg [&_blockquote_p]:text-white/90 [&_blockquote_p]:my-0
              [&_table]:w-full [&_table]:my-4 [&_table]:border-collapse [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_th]:text-left [&_th]:px-3 [&_th]:py-2 [&_th]:bg-malibu-blue/15 [&_th]:text-aquarius
              [&_th]:font-bold [&_th]:uppercase [&_th]:text-xs [&_th]:tracking-wider
              [&_th]:border-b [&_th]:border-malibu-blue/30
              [&_td]:px-3 [&_td]:py-2 [&_td]:text-white/80 [&_td]:border-b [&_td]:border-white/5
              [&_tr:nth-child(even)_td]:bg-white/[0.02]
              [&_tr:hover_td]:bg-malibu-blue/10
              [&_pre]:bg-black/50 [&_pre]:border [&_pre]:border-malibu-blue/20 [&_pre]:rounded-lg
              [&_pre]:p-4 [&_pre]:my-4 [&_pre]:overflow-x-auto
              [&_pre_code]:text-aquarius [&_pre_code]:font-mono [&_pre_code]:text-xs
              [&_code]:text-aquarius [&_code]:bg-malibu-blue/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
              [&_hr]:border-malibu-blue/20 [&_hr]:my-6"
          >
            ${resolveMarkdown(this.markdown, {
              includeImages: true,
              includeCodeBlockClassNames: true,
            })}
          </div>
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
