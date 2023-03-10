import React from "react";

import ReactDOM from "react-dom";

import { OBSERVED_ATTRS } from "./constants";
import { Component, WebComponentProps } from "./interfaces";
import styles from "bundle-text:./styles.css";

class ReactToWebComponent extends HTMLElement {
  static reactComponent: Component;
  private isShadow: boolean;

  constructor(component: Component, isShadow: boolean) {
    super();

    this.isShadow = isShadow;
    if (this.isShadow) {
      this.attachShadow({ mode: "open" });
    }

    ReactToWebComponent.reactComponent = component;
  }

  static get observedAttributes() {
    return OBSERVED_ATTRS;
  }

  connectedCallback() {
    const style = document.createElement("style");
    const sheet = new CSSStyleSheet();
    style.appendChild(document.createTextNode(styles));

    this.isShadow ? this?.shadowRoot?.prepend(style) : this?.prepend(style);
  }

  private createComponent(props: WebComponentProps) {
    const reactElement = React.createElement(
      ReactToWebComponent.reactComponent,
      props,
      React.createElement("slot")
    );

    ReactDOM.render(reactElement, this.isShadow ? this.shadowRoot : this);
  }

  private buildProps(newProp?: any): WebComponentProps {
    return OBSERVED_ATTRS.reduce((props, attr: any) => {
      const prop = newProp[attr]
        ? newProp
        : { [attr]: this?.attributes?.[attr]?.value };
      return { ...props, ...prop };
    }, {}) as WebComponentProps;
  }

  attributeChangedCallback(attr: string, _: string, newValue: string) {
    // TODO remove never from attr
    if (OBSERVED_ATTRS.includes(attr as never)) {
      const newProps = this.buildProps({ [attr]: newValue });
      this.createComponent(newProps);
    }
  }
}

const WCWrapper = (component: Component, isShadow: boolean = true) => {
  return class extends ReactToWebComponent {
    constructor() {
      super(component, isShadow);
    }
  };
};

export default WCWrapper;
