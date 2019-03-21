declare module '*.json' {
    interface Locales {[locale: string]: string}

    const regions: Locales;

    export default regions;
}
