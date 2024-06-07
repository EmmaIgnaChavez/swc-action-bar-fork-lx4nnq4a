// By Westbrook Johnson @westbrookj

import { LitElement, html, TemplateResult } from "lit";
import { customElement } from 'lit/decorators.js';
import "@spectrum-web-components/action-bar/sp-action-bar.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/icon/sp-icon.js";
import { EditIcon, MoreIcon } from "@spectrum-web-components/icons-workflow";

@customElement("my-action-bar")
export default class MyActionBar extends LitElement {
  protected render(): TemplateResult {
    return html`
      <sp-action-bar open>
        228 Selected
        <sp-action-button label="Edit" slot="buttons">
          <sp-icon slot="icon" size="s">
            ${EditIcon({ hidden: true })}
          </sp-icon>
        </sp-action-button>
        <sp-action-button label="More" slot="buttons">
          <sp-icon slot="icon" size="s">
            ${MoreIcon({ hidden: true })}
          </sp-icon>
        </sp-action-button>
      </sp-action-bar>
    `;
  }
}
