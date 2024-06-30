/// <reference types="astro/client" />
export {};

declare global {
  interface Window {
    SnipcartSettings: any;
    LoadSnipcart: any;
  }
}