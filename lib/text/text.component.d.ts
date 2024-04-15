import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextComponent {
    text: string;
    placeholder: string;
    colorText: string | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
    colorLabel: string | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'white' | 'light';
    label: string;
    disabled: boolean;
    onInputText: EventEmitter<string>;
    onInput(textInput: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextComponent, "app-text", never, { "text": "Text"; "placeholder": "Placeholder"; "colorText": "ColorText"; "colorLabel": "ColorLabel"; "label": "Label"; "disabled": "Disabled"; }, { "onInputText": "onInputText"; }, never, never, false, never>;
}
