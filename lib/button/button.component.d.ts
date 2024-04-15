import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    text: string;
    colorText: string | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
    color: string | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'white' | 'light';
    size: 'large' | 'default' | 'small';
    disabled: boolean;
    rounded: boolean;
    iconName: string;
    onClickButton: EventEmitter<boolean>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "app-button", never, { "text": "Text"; "colorText": "ColorText"; "color": "Color"; "size": "Size"; "disabled": "Disabled"; "rounded": "Rounded"; "iconName": "IconName"; }, { "onClickButton": "onClickButton"; }, never, never, false, never>;
}
