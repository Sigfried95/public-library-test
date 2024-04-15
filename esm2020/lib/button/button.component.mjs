import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU92RSxNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQU9pQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2IsY0FBUyxHQUF3RyxPQUFPLENBQUM7UUFDN0gsVUFBSyxHQUF5RyxTQUFTLENBQUM7UUFDekgsU0FBSSxHQUFrQyxTQUFTLENBQUM7UUFDNUMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0tBTXZEO0lBSkMsT0FBTztRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OzRHQWRVLGVBQWU7Z0dBQWYsZUFBZSxzVUNQNUIsK1JBTWE7MkZEQ0EsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZOzhCQU1QLElBQUk7c0JBQWxCLEtBQUs7dUJBQUMsTUFBTTtnQkFDTyxTQUFTO3NCQUE1QixLQUFLO3VCQUFDLFdBQVc7Z0JBQ0YsS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPO2dCQUNDLElBQUk7c0JBQWxCLEtBQUs7dUJBQUMsTUFBTTtnQkFDTSxRQUFRO3NCQUExQixLQUFLO3VCQUFDLFVBQVU7Z0JBQ0MsT0FBTztzQkFBeEIsS0FBSzt1QkFBQyxTQUFTO2dCQUNHLFFBQVE7c0JBQTFCLEtBQUs7dUJBQUMsVUFBVTtnQkFFUCxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCdUZXh0JykgdGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnQ29sb3JUZXh0JykgY29sb3JUZXh0OiBzdHJpbmcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xuICBASW5wdXQoJ0NvbG9yJykgY29sb3I6IHN0cmluZyB8ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgJ3doaXRlJyB8ICdsaWdodCcgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgnU2l6ZScpIHNpemU6ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoJ0Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdSb3VuZGVkJykgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ0ljb25OYW1lJykgaWNvbk5hbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBPdXRwdXQoKSBvbkNsaWNrQnV0dG9uID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5vbkNsaWNrQnV0dG9uLmVtaXQodHJ1ZSk7XG4gIH1cblxufVxuIiwiXG48aW9uLWJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3NoYXBlXT1cInJvdW5kZWQgPyAncm91bmQnIDogJydcIiBbc2l6ZV09XCJzaXplXCIgW2NvbG9yXT1cImNvbG9yXCI+XG4gICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJ7e2ljb25OYW1lfX1cIj48L2lvbi1pY29uPlxuICAgIDxpb24tbGFiZWwgW2NvbG9yXT1cImNvbG9yVGV4dFwiPiBcbiAgICAgICAge3t0ZXh0fX0gXG4gICAgPC9pb24tbGFiZWw+XG48L2lvbi1idXR0b24+Il19