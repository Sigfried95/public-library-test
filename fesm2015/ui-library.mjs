import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, EventEmitter, Input, Output, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { __awaiter } from 'tslib';

class UiLibraryService {
    constructor() { }
}
UiLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UiLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class UiLibraryComponent {
    constructor() { }
    ngOnInit() { }
}
UiLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UiLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: UiLibraryComponent, selector: "lib-uiLibrary", ngImport: i0, template: "<p>\n  ui-library works!\n</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-uiLibrary', template: "<p>\n  ui-library works!\n</p>\n" }]
        }], ctorParameters: function () { return []; } });

class UiLibraryModule {
}
UiLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryModule });
UiLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: UiLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: []
                }]
        }] });

class ButtonComponent {
    constructor() {
        this.text = '';
        this.colorText = 'light';
        this.color = 'primary';
        this.size = 'default';
        this.disabled = false;
        this.rounded = false;
        this.iconName = '';
        this.onClickButton = new EventEmitter();
    }
    onClick() {
        this.onClickButton.emit(true);
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: ButtonComponent, selector: "app-button", inputs: { text: ["Text", "text"], colorText: ["ColorText", "colorText"], color: ["Color", "color"], size: ["Size", "size"], disabled: ["Disabled", "disabled"], rounded: ["Rounded", "rounded"], iconName: ["IconName", "iconName"] }, outputs: { onClickButton: "onClickButton" }, ngImport: i0, template: "\n<ion-button (click)=\"onClick()\" [disabled]=\"disabled\" [shape]=\"rounded ? 'round' : ''\" [size]=\"size\" [color]=\"color\">\n    <ion-icon slot=\"start\" name=\"{{iconName}}\"></ion-icon>\n    <ion-label [color]=\"colorText\"> \n        {{text}} \n    </ion-label>\n</ion-button>", styles: ["ion-button{text-transform:none}\n"], dependencies: [{ kind: "component", type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { kind: "component", type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { kind: "component", type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-button', template: "\n<ion-button (click)=\"onClick()\" [disabled]=\"disabled\" [shape]=\"rounded ? 'round' : ''\" [size]=\"size\" [color]=\"color\">\n    <ion-icon slot=\"start\" name=\"{{iconName}}\"></ion-icon>\n    <ion-label [color]=\"colorText\"> \n        {{text}} \n    </ion-label>\n</ion-button>", styles: ["ion-button{text-transform:none}\n"] }]
        }], propDecorators: { text: [{
                type: Input,
                args: ['Text']
            }], colorText: [{
                type: Input,
                args: ['ColorText']
            }], color: [{
                type: Input,
                args: ['Color']
            }], size: [{
                type: Input,
                args: ['Size']
            }], disabled: [{
                type: Input,
                args: ['Disabled']
            }], rounded: [{
                type: Input,
                args: ['Rounded']
            }], iconName: [{
                type: Input,
                args: ['IconName']
            }], onClickButton: [{
                type: Output
            }] } });

class ButtonComponentModule {
}
ButtonComponentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ButtonComponentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonComponentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: ButtonComponentModule, declarations: [ButtonComponent], imports: [IonicModule], exports: [ButtonComponent] });
ButtonComponentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ButtonComponentModule, imports: [IonicModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ButtonComponentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    exports: [ButtonComponent],
                    entryComponents: [ButtonComponent],
                    imports: [IonicModule],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class DropdownComponent {
    constructor() {
        this.colorText = 'light';
        this.colorBackground = 'primary';
        this.disabled = false;
        this.data = [];
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: DropdownComponent, selector: "app-dropdown", inputs: { colorText: ["ColorText", "colorText"], colorBackground: ["ColorBackground", "colorBackground"], disabled: ["Disabled", "disabled"], data: ["Data", "data"] }, ngImport: i0, template: "\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col class=\"col-grid\">\n                <ion-select class=\"select-custom\" \n                [disabled]=\"disabled\" [style.color]=\"'var(--ion-color-' + colorText + ')'\" [style.background-color]=\"'var(--ion-color-' + colorBackground + ')'\"\n                interface=\"popover\" [value]=\"0\" placeholder=\"Selecciona\">\n                    <ion-select-option [value]=\"0\">Desplegar</ion-select-option>\n                    <ion-select-option *ngFor=\"let item of data\" [value]=\"item\">{{item}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n    </ion-grid>", styles: [".col-grid{display:flex;justify-content:center}.select-custom{width:30%;border-radius:10px;padding-right:10px}\n"], dependencies: [{ kind: "component", type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { kind: "component", type: i1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { kind: "component", type: i1.IonRow, selector: "ion-row" }, { kind: "component", type: i1.IonSelect, selector: "ion-select", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] }, { kind: "component", type: i1.IonSelectOption, selector: "ion-select-option", inputs: ["disabled", "value"] }, { kind: "directive", type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dropdown', template: "\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col class=\"col-grid\">\n                <ion-select class=\"select-custom\" \n                [disabled]=\"disabled\" [style.color]=\"'var(--ion-color-' + colorText + ')'\" [style.background-color]=\"'var(--ion-color-' + colorBackground + ')'\"\n                interface=\"popover\" [value]=\"0\" placeholder=\"Selecciona\">\n                    <ion-select-option [value]=\"0\">Desplegar</ion-select-option>\n                    <ion-select-option *ngFor=\"let item of data\" [value]=\"item\">{{item}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n    </ion-grid>", styles: [".col-grid{display:flex;justify-content:center}.select-custom{width:30%;border-radius:10px;padding-right:10px}\n"] }]
        }], propDecorators: { colorText: [{
                type: Input,
                args: ['ColorText']
            }], colorBackground: [{
                type: Input,
                args: ['ColorBackground']
            }], disabled: [{
                type: Input,
                args: ['Disabled']
            }], data: [{
                type: Input,
                args: ['Data']
            }] } });

class DropdownModule {
}
DropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: DropdownModule, declarations: [DropdownComponent], imports: [IonicModule, CommonModule], exports: [DropdownComponent] });
DropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DropdownModule, imports: [IonicModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DropdownComponent],
                    exports: [DropdownComponent],
                    entryComponents: [DropdownComponent],
                    imports: [IonicModule, CommonModule],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class LinkComponent {
    constructor() {
        this.src = '';
        this.colorText = 'primary';
    }
}
LinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: LinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: LinkComponent, selector: "app-link", inputs: { src: ["Src", "src"], colorText: ["ColorText", "colorText"] }, ngImport: i0, template: "\n<a [href]=\"src\" target=\"_blank\" [style.color]=\"'var(--ion-color-' + colorText + ')'\"> {{src}} </a>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: LinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-link', template: "\n<a [href]=\"src\" target=\"_blank\" [style.color]=\"'var(--ion-color-' + colorText + ')'\"> {{src}} </a>" }]
        }], propDecorators: { src: [{
                type: Input,
                args: ['Src']
            }], colorText: [{
                type: Input,
                args: ['ColorText']
            }] } });

class LinkModule {
}
LinkModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: LinkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LinkModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: LinkModule, declarations: [LinkComponent], imports: [IonicModule], exports: [LinkComponent] });
LinkModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: LinkModule, imports: [IonicModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: LinkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LinkComponent],
                    exports: [LinkComponent],
                    entryComponents: [LinkComponent],
                    imports: [IonicModule],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class OpenDataCardComponent {
    constructor() {
        this.title = '';
        this.colorTitle = 'primary';
        this.colorSubtitle = 'primary';
        this.backgroundColor = 'light';
        this.subtitle = '';
        this.src = '';
        this.size = 'default';
    }
}
OpenDataCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: OpenDataCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
OpenDataCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: OpenDataCardComponent, selector: "app-open-data-card", inputs: { title: ["Title", "title"], colorTitle: ["ColorTitle", "colorTitle"], colorSubtitle: ["ColorSubtitle", "colorSubtitle"], backgroundColor: ["BackgroundColor", "backgroundColor"], subtitle: ["Subtitle", "subtitle"], src: ["Src", "src"], size: ["Size", "size"] }, ngImport: i0, template: "<ion-card class=\"evr-tarjeta-estacion\" [style.background-color]=\"'var(--ion-color-' + backgroundColor + ')'\" \n  [style.width]=\"size === 'default' ? '70%' : size === 'small' ? '40%' : '100%'\">\n  <ion-card-content>\n    <ion-row>\n      <ion-col size=\"8\">\n        <p class=\"evr-estacion-title\" [style.color]=\"'var(--ion-color-' + colorTitle + ')'\">{{ title }}</p>\n        <p class=\"evr-estacion-subtitle\" [style.color]=\"'var(--ion-color-' + colorSubtitle + ')'\">{{ subtitle }}</p>\n      </ion-col>\n      <ion-col class=\"col-img-card\">\n        <img class=\"evr-imagen-tarjeta-estacion\" [src]=\"src\">\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n", styles: ["ion-card{--ion-background-color: #ffffff;border-radius:8px;box-shadow:0 4px 16px #0000001f;margin-inline:0px}ion-card ion-text{margin-left:16px;margin-right:16px;line-height:20px}.evr-tarjeta-estacion p{left:10px;margin-bottom:15px}.evr-tarjeta-estacion div{font-size:10px}.evr-estacion-title{font-family:Source Sans Pro;font-size:18px;line-height:25px;font-weight:600;letter-spacing:0em;color:#344752;margin-bottom:8px!important;margin-right:10px}.evr-estacion-subtitle{font-family:Source Sans Pro;font-size:14px;line-height:21px;font-weight:400;letter-spacing:0px;color:#344752;margin-bottom:8px!important;margin-right:10px}.evr-imagen-tarjeta-estacion{border-radius:8px;width:100px;height:95px}.col-img-card{align-content:center}\n"], dependencies: [{ kind: "component", type: i1.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { kind: "component", type: i1.IonCardContent, selector: "ion-card-content", inputs: ["mode"] }, { kind: "component", type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { kind: "component", type: i1.IonRow, selector: "ion-row" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: OpenDataCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-open-data-card', template: "<ion-card class=\"evr-tarjeta-estacion\" [style.background-color]=\"'var(--ion-color-' + backgroundColor + ')'\" \n  [style.width]=\"size === 'default' ? '70%' : size === 'small' ? '40%' : '100%'\">\n  <ion-card-content>\n    <ion-row>\n      <ion-col size=\"8\">\n        <p class=\"evr-estacion-title\" [style.color]=\"'var(--ion-color-' + colorTitle + ')'\">{{ title }}</p>\n        <p class=\"evr-estacion-subtitle\" [style.color]=\"'var(--ion-color-' + colorSubtitle + ')'\">{{ subtitle }}</p>\n      </ion-col>\n      <ion-col class=\"col-img-card\">\n        <img class=\"evr-imagen-tarjeta-estacion\" [src]=\"src\">\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n", styles: ["ion-card{--ion-background-color: #ffffff;border-radius:8px;box-shadow:0 4px 16px #0000001f;margin-inline:0px}ion-card ion-text{margin-left:16px;margin-right:16px;line-height:20px}.evr-tarjeta-estacion p{left:10px;margin-bottom:15px}.evr-tarjeta-estacion div{font-size:10px}.evr-estacion-title{font-family:Source Sans Pro;font-size:18px;line-height:25px;font-weight:600;letter-spacing:0em;color:#344752;margin-bottom:8px!important;margin-right:10px}.evr-estacion-subtitle{font-family:Source Sans Pro;font-size:14px;line-height:21px;font-weight:400;letter-spacing:0px;color:#344752;margin-bottom:8px!important;margin-right:10px}.evr-imagen-tarjeta-estacion{border-radius:8px;width:100px;height:95px}.col-img-card{align-content:center}\n"] }]
        }], propDecorators: { title: [{
                type: Input,
                args: ['Title']
            }], colorTitle: [{
                type: Input,
                args: ['ColorTitle']
            }], colorSubtitle: [{
                type: Input,
                args: ['ColorSubtitle']
            }], backgroundColor: [{
                type: Input,
                args: ['BackgroundColor']
            }], subtitle: [{
                type: Input,
                args: ['Subtitle']
            }], src: [{
                type: Input,
                args: ['Src']
            }], size: [{
                type: Input,
                args: ['Size']
            }] } });

class OpenDataCardComponentModule {
}
OpenDataCardComponentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: OpenDataCardComponentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OpenDataCardComponentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: OpenDataCardComponentModule, declarations: [OpenDataCardComponent], imports: [IonicModule], exports: [OpenDataCardComponent] });
OpenDataCardComponentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: OpenDataCardComponentModule, imports: [IonicModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: OpenDataCardComponentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [OpenDataCardComponent],
                    exports: [OpenDataCardComponent],
                    entryComponents: [OpenDataCardComponent],
                    imports: [IonicModule],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class TextComponent {
    constructor() {
        this.text = '';
        this.placeholder = 'Placeholder text';
        this.colorText = 'primary';
        this.colorLabel = 'primary';
        this.label = '';
        this.disabled = false;
        this.onInputText = new EventEmitter();
    }
    onInput(textInput) {
        this.onInputText.emit(textInput.target.value);
    }
}
TextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: TextComponent, selector: "app-text", inputs: { text: ["Text", "text"], placeholder: ["Placeholder", "placeholder"], colorText: ["ColorText", "colorText"], colorLabel: ["ColorLabel", "colorLabel"], label: ["Label", "label"], disabled: ["Disabled", "disabled"] }, outputs: { onInputText: "onInputText" }, ngImport: i0, template: "\n<ion-grid fixed>\n    <ion-row>\n        <ion-label position=\"stacked\" [style.color]=\"'var(--ion-color-' + colorLabel + ')'\">{{label}}</ion-label>\n    </ion-row>\n    <ion-row class=\"ion-text-left box-row\" [style.outline-color]=\"'var(--ion-color-' + colorText + ')'\">\n        <ion-input [value]=\"text\" [placeholder]=\"placeholder\" \n        [style.color]=\"'var(--ion-color-' + colorText + ')'\" [disabled]=\"disabled\"\n        (ionInput)=\"onInput($event)\"></ion-input>\n    </ion-row>\n</ion-grid>\n", styles: [".box-row{outline-color:#087021;outline-style:solid;margin-top:20px;border-radius:3px}\n"], dependencies: [{ kind: "component", type: i1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { kind: "component", type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }, { kind: "component", type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { kind: "component", type: i1.IonRow, selector: "ion-row" }, { kind: "directive", type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text', template: "\n<ion-grid fixed>\n    <ion-row>\n        <ion-label position=\"stacked\" [style.color]=\"'var(--ion-color-' + colorLabel + ')'\">{{label}}</ion-label>\n    </ion-row>\n    <ion-row class=\"ion-text-left box-row\" [style.outline-color]=\"'var(--ion-color-' + colorText + ')'\">\n        <ion-input [value]=\"text\" [placeholder]=\"placeholder\" \n        [style.color]=\"'var(--ion-color-' + colorText + ')'\" [disabled]=\"disabled\"\n        (ionInput)=\"onInput($event)\"></ion-input>\n    </ion-row>\n</ion-grid>\n", styles: [".box-row{outline-color:#087021;outline-style:solid;margin-top:20px;border-radius:3px}\n"] }]
        }], propDecorators: { text: [{
                type: Input,
                args: ['Text']
            }], placeholder: [{
                type: Input,
                args: ['Placeholder']
            }], colorText: [{
                type: Input,
                args: ['ColorText']
            }], colorLabel: [{
                type: Input,
                args: ['ColorLabel']
            }], label: [{
                type: Input,
                args: ['Label']
            }], disabled: [{
                type: Input,
                args: ['Disabled']
            }], onInputText: [{
                type: Output
            }] } });

class TextModule {
}
TextModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TextModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: TextModule, declarations: [TextComponent], imports: [IonicModule], exports: [TextComponent] });
TextModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextModule, imports: [IonicModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TextComponent],
                    exports: [TextComponent],
                    entryComponents: [TextComponent],
                    imports: [IonicModule],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class TextAreaComponent {
    constructor() {
        this.text = '';
        this.placeholder = '';
        this.label = '';
        this.colorText = 'primary';
        this.colorLabel = 'primary';
        this.disabled = false;
        this.autoGrow = true;
    }
}
TextAreaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: TextAreaComponent, selector: "app-text-area", inputs: { text: ["Text", "text"], placeholder: ["Placeholder", "placeholder"], label: ["Label", "label"], colorText: ["ColorText", "colorText"], colorLabel: ["ColorLabel", "colorLabel"], disabled: ["Disabled", "disabled"], autoGrow: ["AutoGrow", "autoGrow"] }, ngImport: i0, template: "<ion-grid fixed>\n    <ion-row>\n        <ion-label position=\"stacked\" [style.color]=\"'var(--ion-color-' + colorLabel + ')'\">{{label}}</ion-label>\n    </ion-row>\n    <ion-row class=\"ion-text-left box-row\" [style.outline-color]=\"'var(--ion-color-' + colorText + ')'\">\n        <ion-textarea [value]=\"text\" [placeholder]=\"placeholder\" [style.color]=\"'var(--ion-color-' + colorText + ')'\" [disabled]=\"disabled\" [autoGrow]=\"autoGrow\"></ion-textarea>\n    </ion-row>\n</ion-grid>\n", styles: [".box-row{outline-color:#087021;outline-style:solid;margin-top:20px;border-radius:5px}\n"], dependencies: [{ kind: "component", type: i1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { kind: "component", type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { kind: "component", type: i1.IonRow, selector: "ion-row" }, { kind: "component", type: i1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }, { kind: "directive", type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text-area', template: "<ion-grid fixed>\n    <ion-row>\n        <ion-label position=\"stacked\" [style.color]=\"'var(--ion-color-' + colorLabel + ')'\">{{label}}</ion-label>\n    </ion-row>\n    <ion-row class=\"ion-text-left box-row\" [style.outline-color]=\"'var(--ion-color-' + colorText + ')'\">\n        <ion-textarea [value]=\"text\" [placeholder]=\"placeholder\" [style.color]=\"'var(--ion-color-' + colorText + ')'\" [disabled]=\"disabled\" [autoGrow]=\"autoGrow\"></ion-textarea>\n    </ion-row>\n</ion-grid>\n", styles: [".box-row{outline-color:#087021;outline-style:solid;margin-top:20px;border-radius:5px}\n"] }]
        }], propDecorators: { text: [{
                type: Input,
                args: ['Text']
            }], placeholder: [{
                type: Input,
                args: ['Placeholder']
            }], label: [{
                type: Input,
                args: ['Label']
            }], colorText: [{
                type: Input,
                args: ['ColorText']
            }], colorLabel: [{
                type: Input,
                args: ['ColorLabel']
            }], disabled: [{
                type: Input,
                args: ['Disabled']
            }], autoGrow: [{
                type: Input,
                args: ['AutoGrow']
            }] } });

class TextAreaModule {
}
TextAreaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TextAreaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: TextAreaModule, declarations: [TextAreaComponent], imports: [IonicModule], exports: [TextAreaComponent] });
TextAreaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextAreaModule, imports: [IonicModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TextAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TextAreaComponent],
                    exports: [TextAreaComponent],
                    entryComponents: [TextAreaComponent],
                    imports: [IonicModule],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class SearchResultPopoverComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.results = [];
        this.nameAttribute = '';
        this.onClickItem = new EventEmitter();
    }
    ngOnInit() { }
    clickItem(item) {
        this.popoverController.dismiss(item);
    }
}
SearchResultPopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchResultPopoverComponent, deps: [{ token: i1.PopoverController }], target: i0.ɵɵFactoryTarget.Component });
SearchResultPopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: SearchResultPopoverComponent, selector: "app-search-result-popover", inputs: { results: "results", nameAttribute: "nameAttribute" }, outputs: { onClickItem: "onClickItem" }, ngImport: i0, template: "<ion-list *ngIf=\"results.length > 0\">\n  <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"clickItem(item)\" *ngFor=\"let item of results\">\n    {{ item[nameAttribute] }}\n  </ion-item>\n</ion-list>\n<ion-list *ngIf=\"results.length === 0\">\n  <ion-item lines=\"none\">\n    <ion-label>No hay resultados</ion-label>\n  </ion-item>\n</ion-list>", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { kind: "component", type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { kind: "component", type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchResultPopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-search-result-popover', template: "<ion-list *ngIf=\"results.length > 0\">\n  <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"clickItem(item)\" *ngFor=\"let item of results\">\n    {{ item[nameAttribute] }}\n  </ion-item>\n</ion-list>\n<ion-list *ngIf=\"results.length === 0\">\n  <ion-item lines=\"none\">\n    <ion-label>No hay resultados</ion-label>\n  </ion-item>\n</ion-list>" }]
        }], ctorParameters: function () { return [{ type: i1.PopoverController }]; }, propDecorators: { results: [{
                type: Input,
                args: ['results']
            }], nameAttribute: [{
                type: Input,
                args: ['nameAttribute']
            }], onClickItem: [{
                type: Output
            }] } });

class SearchBarHttpService {
    constructor(http) {
        this.http = http;
    }
    getDataSearch(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(url);
        });
    }
}
SearchBarHttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarHttpService, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
SearchBarHttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarHttpService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarHttpService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }]; } });

class SearchBarComponent {
    constructor(popoverController, searchHttpService) {
        this.popoverController = popoverController;
        this.searchHttpService = searchHttpService;
        this.placeholder = 'Buscar texto';
        this.debounce = 600;
        this.color = 'primary';
        this.animated = true;
        this.disabled = false;
        this.borderRadius = 10;
        this.showCancelButton = 'focus';
        this.dataElements = [];
        this.nameAttributeSearch = '';
        this.urlDataElements = '';
        this.showPopover = true;
        this.searchIcon = '';
        this.clearIcon = undefined;
        this.cancelIcon = undefined;
        this.onSearchText = new EventEmitter();
        this.onSearchResultItems = new EventEmitter();
        this.onSelectItem = new EventEmitter();
        this.searchText = '';
    }
    performSearch(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const textSearch = event.detail.value;
            let dataFilter = [];
            if (textSearch.length > 0) {
                if (this.dataElements && this.dataElements.length > 0) {
                    dataFilter = this.changeStringSearch(this.dataElements, textSearch);
                    if (this.showPopover) {
                        const popover = yield this.popoverController.create({
                            component: SearchResultPopoverComponent,
                            componentProps: {
                                results: dataFilter,
                                nameAttribute: this.nameAttributeSearch
                            },
                            translucent: true,
                            event: event,
                            alignment: 'center',
                            showBackdrop: false,
                            side: 'bottom',
                            dismissOnSelect: true
                        });
                        popover.onDidDismiss().then(e => {
                            this.onSelectItem.emit(e.data);
                        });
                        yield popover.present();
                    }
                    this.onSearchResultItems.emit(dataFilter);
                    this.onSearchText.emit(textSearch);
                }
                else {
                    (yield this.searchHttpService.getDataSearch(this.urlDataElements)).subscribe((resp) => __awaiter(this, void 0, void 0, function* () {
                        console.log('adsadsa httttp', resp);
                        dataFilter = this.changeStringSearch(resp, textSearch);
                        if (this.showPopover) {
                            const popover = yield this.popoverController.create({
                                component: SearchResultPopoverComponent,
                                componentProps: {
                                    results: dataFilter,
                                    nameAttribute: this.nameAttributeSearch
                                },
                                translucent: true,
                                event: event,
                                alignment: 'center',
                                showBackdrop: false,
                                side: 'bottom',
                                dismissOnSelect: true
                            });
                            popover.onDidDismiss().then(e => {
                                this.onSelectItem.emit(e.data);
                            });
                            yield popover.present();
                        }
                        this.onSearchResultItems.emit(dataFilter);
                        this.onSearchText.emit(textSearch);
                    }));
                }
            }
            this.searchbar.setFocus();
        });
    }
    ngOnInit() { }
    onSearchChange($event) {
        this.onSearchText.emit($event.detail.value);
    }
    changeStringSearch(arrayElement, textSearch) {
        return arrayElement.filter(search => search[this.nameAttributeSearch].includes(textSearch));
    }
}
SearchBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarComponent, deps: [{ token: i1.PopoverController }, { token: SearchBarHttpService }], target: i0.ɵɵFactoryTarget.Component });
SearchBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: SearchBarComponent, selector: "app-search-bar", inputs: { placeholder: ["Placeholder", "placeholder"], debounce: ["Debounce", "debounce"], color: ["Color", "color"], animated: ["Animated", "animated"], disabled: ["Disabled", "disabled"], borderRadius: ["BorderRadius", "borderRadius"], showCancelButton: ["ShowCancelButton", "showCancelButton"], dataElements: ["DataElements", "dataElements"], nameAttributeSearch: ["NameAttributeSearch", "nameAttributeSearch"], urlDataElements: ["UrlDataElements", "urlDataElements"], showPopover: ["ShowPopover", "showPopover"], searchIcon: ["SearchIcon", "searchIcon"], clearIcon: ["ClearIcon", "clearIcon"], cancelIcon: ["CancelIcon", "cancelIcon"] }, outputs: { onSearchText: "onSearchText", onSearchResultItems: "onSearchResultItems", onSelectItem: "onSelectItem" }, viewQueries: [{ propertyName: "searchbar", first: true, predicate: ["searchbar"], descendants: true }], ngImport: i0, template: "<ion-searchbar #searchbar\n  inputmode=\"text\" \n  [value]=\"searchText\"\n  type=\"text\" \n  (ionChange)=\"performSearch($event)\"\n  (ionInput)=\"searchbar.setFocus()\"\n  [placeholder]=\"placeholder\" \n  [debounce]=\"debounce\"\n  [color]=\"color\"\n  [animated]=\"true\"\n  [disabled]=\"disabled\"\n  [style.--border-radius]=\"borderRadius+'px'\"\n  [showCancelButton]=\"showCancelButton\"\n  [searchIcon]=\"searchIcon\"\n  [clearIcon]=\"clearIcon\"\n  [cancelButtonIcon]=\"cancelIcon\">\n</ion-searchbar>", styles: [""], dependencies: [{ kind: "component", type: i1.IonSearchbar, selector: "ion-searchbar", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"] }, { kind: "directive", type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-search-bar', template: "<ion-searchbar #searchbar\n  inputmode=\"text\" \n  [value]=\"searchText\"\n  type=\"text\" \n  (ionChange)=\"performSearch($event)\"\n  (ionInput)=\"searchbar.setFocus()\"\n  [placeholder]=\"placeholder\" \n  [debounce]=\"debounce\"\n  [color]=\"color\"\n  [animated]=\"true\"\n  [disabled]=\"disabled\"\n  [style.--border-radius]=\"borderRadius+'px'\"\n  [showCancelButton]=\"showCancelButton\"\n  [searchIcon]=\"searchIcon\"\n  [clearIcon]=\"clearIcon\"\n  [cancelButtonIcon]=\"cancelIcon\">\n</ion-searchbar>" }]
        }], ctorParameters: function () { return [{ type: i1.PopoverController }, { type: SearchBarHttpService }]; }, propDecorators: { placeholder: [{
                type: Input,
                args: ['Placeholder']
            }], debounce: [{
                type: Input,
                args: ['Debounce']
            }], color: [{
                type: Input,
                args: ['Color']
            }], animated: [{
                type: Input,
                args: ['Animated']
            }], disabled: [{
                type: Input,
                args: ['Disabled']
            }], borderRadius: [{
                type: Input,
                args: ['BorderRadius']
            }], showCancelButton: [{
                type: Input,
                args: ['ShowCancelButton']
            }], dataElements: [{
                type: Input,
                args: ['DataElements']
            }], nameAttributeSearch: [{
                type: Input,
                args: ['NameAttributeSearch']
            }], urlDataElements: [{
                type: Input,
                args: ['UrlDataElements']
            }], showPopover: [{
                type: Input,
                args: ['ShowPopover']
            }], searchIcon: [{
                type: Input,
                args: ['SearchIcon']
            }], clearIcon: [{
                type: Input,
                args: ['ClearIcon']
            }], cancelIcon: [{
                type: Input,
                args: ['CancelIcon']
            }], onSearchText: [{
                type: Output
            }], onSearchResultItems: [{
                type: Output
            }], onSelectItem: [{
                type: Output
            }], searchbar: [{
                type: ViewChild,
                args: ['searchbar', { static: false }]
            }] } });

class SearchBarModule {
}
SearchBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SearchBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: SearchBarModule, declarations: [SearchBarComponent, SearchResultPopoverComponent], imports: [CommonModule, IonicModule, HttpClientModule], exports: [SearchBarComponent] });
SearchBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarModule, imports: [CommonModule, IonicModule, HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SearchBarComponent, SearchResultPopoverComponent],
                    exports: [SearchBarComponent],
                    entryComponents: [SearchBarComponent],
                    imports: [CommonModule, IonicModule, HttpClientModule],
                }]
        }] });

/*
 * Public API Surface of ui-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonComponentModule, DropdownComponent, DropdownModule, LinkComponent, LinkModule, OpenDataCardComponent, OpenDataCardComponentModule, SearchBarComponent, SearchBarModule, TextAreaComponent, TextAreaModule, TextComponent, TextModule, UiLibraryComponent, UiLibraryModule, UiLibraryService };
//# sourceMappingURL=ui-library.mjs.map
