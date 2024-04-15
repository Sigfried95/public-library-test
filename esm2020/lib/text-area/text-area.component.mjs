import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class TextAreaComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi90ZXh0LWFyZWEvdGV4dC1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi90ZXh0LWFyZWEvdGV4dC1hcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPakQsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU9pQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDL0IsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBd0csU0FBUyxDQUFDO1FBQzFILGVBQVUsR0FBeUcsU0FBUyxDQUFDO1FBQy9ILGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztLQUU3Qzs7OEdBVlksaUJBQWlCO2tHQUFqQixpQkFBaUIsMFRDUDlCLGtmQVFBOzJGRERhLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxlQUFlOzhCQU1WLElBQUk7c0JBQWxCLEtBQUs7dUJBQUMsTUFBTTtnQkFDUyxXQUFXO3NCQUFoQyxLQUFLO3VCQUFDLGFBQWE7Z0JBQ0osS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPO2dCQUNNLFNBQVM7c0JBQTVCLEtBQUs7dUJBQUMsV0FBVztnQkFDRyxVQUFVO3NCQUE5QixLQUFLO3VCQUFDLFlBQVk7Z0JBQ0EsUUFBUTtzQkFBMUIsS0FBSzt1QkFBQyxVQUFVO2dCQUNFLFFBQVE7c0JBQTFCLEtBQUs7dUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRleHQtYXJlYScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWFyZWEuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ1RleHQnKSB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdQbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdMYWJlbCcpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdDb2xvclRleHQnKSBjb2xvclRleHQ6IHN0cmluZyB8ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgJ2xpZ2h0JyB8ICdkYXJrJyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdDb2xvckxhYmVsJykgY29sb3JMYWJlbDogc3RyaW5nIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAnd2hpdGUnIHwgJ2xpZ2h0JyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdEaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnQXV0b0dyb3cnKSBhdXRvR3JvdzogYm9vbGVhbiA9IHRydWU7XG5cbn1cbiIsIjxpb24tZ3JpZCBmaXhlZD5cbiAgICA8aW9uLXJvdz5cbiAgICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cInN0YWNrZWRcIiBbc3R5bGUuY29sb3JdPVwiJ3ZhcigtLWlvbi1jb2xvci0nICsgY29sb3JMYWJlbCArICcpJ1wiPnt7bGFiZWx9fTwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi10ZXh0LWxlZnQgYm94LXJvd1wiIFtzdHlsZS5vdXRsaW5lLWNvbG9yXT1cIid2YXIoLS1pb24tY29sb3ItJyArIGNvbG9yVGV4dCArICcpJ1wiPlxuICAgICAgICA8aW9uLXRleHRhcmVhIFt2YWx1ZV09XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3N0eWxlLmNvbG9yXT1cIid2YXIoLS1pb24tY29sb3ItJyArIGNvbG9yVGV4dCArICcpJ1wiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdXRvR3Jvd109XCJhdXRvR3Jvd1wiPjwvaW9uLXRleHRhcmVhPlxuICAgIDwvaW9uLXJvdz5cbjwvaW9uLWdyaWQ+XG4iXX0=