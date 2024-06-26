import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
import { DataProvider } from "../ojdataprovider";
export interface ojMenuSelectMany extends JetElement<ojMenuSelectManySettableProperties> {
    disabled: boolean;
    options: ojMenuSelectMany.Option[] | DataProvider<any, any> | null;
    value: any[];
    onDisabledChanged: ((event: JetElementCustomEvent<ojMenuSelectMany["disabled"]>) => any) | null;
    onOptionsChanged: ((event: JetElementCustomEvent<ojMenuSelectMany["options"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojMenuSelectMany["value"]>) => any) | null;
    addEventListener<T extends keyof ojMenuSelectManyEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojMenuSelectManyEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojMenuSelectManySettableProperties>(property: T): ojMenuSelectMany[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMenuSelectManySettableProperties>(
        property: T,
        value: ojMenuSelectManySettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMenuSelectManySettableProperties>): void;
    setProperties(properties: ojMenuSelectManySettablePropertiesLenient): void;
}
export interface ojMenuSelectManyEventMap extends HTMLElementEventMap {
    "disabledChanged": JetElementCustomEvent<ojMenuSelectMany["disabled"]>;
    "optionsChanged": JetElementCustomEvent<ojMenuSelectMany["options"]>;
    "valueChanged": JetElementCustomEvent<ojMenuSelectMany["value"]>;
}
export interface ojMenuSelectManySettableProperties extends JetSettableProperties {
    disabled: boolean;
    options: ojMenuSelectMany.Option[] | DataProvider<any, any> | null;
    value: any[];
}
export interface ojMenuSelectManySettablePropertiesLenient extends Partial<ojMenuSelectManySettableProperties> {
    [key: string]: any;
}
export namespace ojMenuSelectMany {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Option = {
        id?: string | undefined;
        disabled?: boolean | undefined;
        label: string;
        value: any;
    };
}
