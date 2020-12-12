import { RawAsset } from "lib/assets"

export * from "./validators"
export * from "./placeholder"

export async function initTextGlobalizationWorkingTree(sceneId: string): Promise<TextGlobalizationWorkingTree> {
    // load variables with namespace
    // load texts with scene id
    // load keys with text[]

    return new TextGlobalizationWorkingTree()
}


class TextGlobalizationWorkingTree {
    sceneName: string
    sceneId: string
    locales: Array<Locale>
    texts: Array<GlobalizedText>
    keys: Array<GlobalizedKey>
    variables: Array<GlobalizedVariable>

    constructor() {

    }
}


/**
 * Locale interface
 */
export interface ILocale {
    languageCode: string
    countryCode?: string
}

/**
 * Locale instance
 */
export class Locale implements ILocale {
    languageCode: string;
    countryCode?: string;

    constructor(props: ILocale) {
        this.languageCode = props.languageCode
        this.countryCode = props.countryCode
    }

    /**
     * i.e. returns "en_US" (when both provided) or "en" (only lang code provided)
     */
    toString(): string {
        return `${this.languageCode}${this.countryCode ? `_${this.countryCode}` : ''}`
    }
}


/**
 *  Map holding locale map data. <K, V>
 *  K = locale string
 *  V = value of locale key
 */
type Translations = Map<string, RawAsset>


/**
 * 
 */
export interface IGlobalizedText {
    id: string
    path: string
    name: string
    key: IGlobalizedKey
}



export class GlobalizedText implements IGlobalizedText {
    id: string;
    path: string
    name: string
    key: GlobalizedKey;

    constructor(props: IGlobalizedText) {
        this.id = props.id
        this.path = props.path
        this.name = props.name
        this.key = new GlobalizedKey(props.key)
    }

    switchKey(key: GlobalizedKey): this {
        this.key = key
        return this;
    }

    async createAndSwitchKey(input: IGlobalizedCreateInput): Promise<this> {
        const newKey = await GlobalizedKeyRepository.createNewKey(input)
        return this.switchKey(newKey)
    }

    get displayContent(): string {
        // TODO
        return 'display content of built string'
    }

    get templateContent(): string {
        return 'display content with {template} string'
    }
}


/**
 * 
 */
export interface IGlobalizedCreateInput {

}

/**
 * 
 */
export interface IGlobalizedKey {
    id: string
    key: string
    translations: Translations
}

/**
 * 
 */
export class GlobalizedKey implements IGlobalizedKey {
    id: string;
    key: string;
    translations: Translations;

    constructor(props: IGlobalizedKey) {
        this.id = props.id
        this.key = props.key
        this.translations = props.translations
    }

    updateValueFor(locale: string, newValue: string) {

    }
}




/**
 * 
 */
export interface IGlobalizedVariable {
    id: string
    namespace: string
    name: string
    translations: Array<Translations>
}


export class GlobalizedVariable implements IGlobalizedVariable {
    id: string;
    name: string;
    namespace: string
    translations: Translations[];

    constructor(props: IGlobalizedVariable) {
        this.id = props.id
        this.name = props.name
        this.namespace = props.namespace
        this.translations = props.translations
    }
}


interface IRepository<T> {
    fetchById(id: string): Promise<T>
}


/**
 * 
 */
export class GlobalizedKeyRepository implements IRepository<GlobalizedKey>{

    static async createNewKey(input: IGlobalizedCreateInput): Promise<GlobalizedKey> {
        // TODO
        return
    }

    static async changeKeyName(key: GlobalizedKey, newName: string) {

    }

    async fetchById(id: string): Promise<GlobalizedKey> {
        throw new Error("Method not implemented.");
    }
}


export class GlobalizedTextRepository implements IRepository<GlobalizedText>{
    async fetchById(id: string): Promise<GlobalizedText> {
        throw new Error("Method not implemented.");
    }
}