declare module '*.json' {
    type Locales = {[locale: string]: string};

    const regions: Locales;

    export default regions;
}
