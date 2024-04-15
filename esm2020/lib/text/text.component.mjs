import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class TextComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1saWJyYXJ5L3NyYy9saWIvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3ZFLE1BQU0sT0FBTyxhQUFhO0lBTDFCO1FBT2lCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFXLGtCQUFrQixDQUFDO1FBQzNDLGNBQVMsR0FBd0csU0FBUyxDQUFDO1FBQzFILGVBQVUsR0FBeUcsU0FBUyxDQUFDO1FBQ2xJLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVuQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FRcEQ7SUFMQyxPQUFPLENBQUMsU0FBYTtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7OzBHQWRVLGFBQWE7OEZBQWIsYUFBYSwwVENQMUIsd2dCQVdBOzJGREphLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsVUFBVTs4QkFNTCxJQUFJO3NCQUFsQixLQUFLO3VCQUFDLE1BQU07Z0JBQ1MsV0FBVztzQkFBaEMsS0FBSzt1QkFBQyxhQUFhO2dCQUNBLFNBQVM7c0JBQTVCLEtBQUs7dUJBQUMsV0FBVztnQkFDRyxVQUFVO3NCQUE5QixLQUFLO3VCQUFDLFlBQVk7Z0JBQ0gsS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPO2dCQUNLLFFBQVE7c0JBQTFCLEtBQUs7dUJBQUMsVUFBVTtnQkFFUCxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgnVGV4dCcpIHRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoJ1BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdQbGFjZWhvbGRlciB0ZXh0JztcbiAgQElucHV0KCdDb2xvclRleHQnKSBjb2xvclRleHQ6IHN0cmluZyB8ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgJ2xpZ2h0JyB8ICdkYXJrJyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdDb2xvckxhYmVsJykgY29sb3JMYWJlbDogc3RyaW5nIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAnd2hpdGUnIHwgJ2xpZ2h0JyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdMYWJlbCcpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdEaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG9uSW5wdXRUZXh0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblxuICBvbklucHV0KHRleHRJbnB1dDphbnkpe1xuICAgIHRoaXMub25JbnB1dFRleHQuZW1pdCh0ZXh0SW5wdXQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG5cbn1cbiIsIlxuPGlvbi1ncmlkIGZpeGVkPlxuICAgIDxpb24tcm93PlxuICAgICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwic3RhY2tlZFwiIFtzdHlsZS5jb2xvcl09XCIndmFyKC0taW9uLWNvbG9yLScgKyBjb2xvckxhYmVsICsgJyknXCI+e3tsYWJlbH19PC9pb24tbGFiZWw+XG4gICAgPC9pb24tcm93PlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLXRleHQtbGVmdCBib3gtcm93XCIgW3N0eWxlLm91dGxpbmUtY29sb3JdPVwiJ3ZhcigtLWlvbi1jb2xvci0nICsgY29sb3JUZXh0ICsgJyknXCI+XG4gICAgICAgIDxpb24taW5wdXQgW3ZhbHVlXT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcbiAgICAgICAgW3N0eWxlLmNvbG9yXT1cIid2YXIoLS1pb24tY29sb3ItJyArIGNvbG9yVGV4dCArICcpJ1wiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIChpb25JbnB1dCk9XCJvbklucHV0KCRldmVudClcIj48L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1yb3c+XG48L2lvbi1ncmlkPlxuIl19