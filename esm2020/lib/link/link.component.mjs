import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LinkComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1saWJyYXJ5L3NyYy9saWIvbGluay9saW5rLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9saW5rL2xpbmsuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2pELE1BQU0sT0FBTyxhQUFhO0lBTDFCO1FBT2dCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQXdHLFNBQVMsQ0FBQztLQUVoSjs7MEdBTFksYUFBYTs4RkFBYixhQUFhLHdIQ1AxQiw0R0FDa0c7MkZETXJGLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsVUFBVTs4QkFNTixHQUFHO3NCQUFoQixLQUFLO3VCQUFDLEtBQUs7Z0JBQ1EsU0FBUztzQkFBNUIsS0FBSzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGluay5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlua0NvbXBvbmVudHtcblxuICBASW5wdXQoJ1NyYycpIHNyYzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnQ29sb3JUZXh0JykgY29sb3JUZXh0OiBzdHJpbmcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICdsaWdodCcgfCAnZGFyaycgPSAncHJpbWFyeSc7XG5cbn1cbiIsIlxuPGEgW2hyZWZdPVwic3JjXCIgdGFyZ2V0PVwiX2JsYW5rXCIgW3N0eWxlLmNvbG9yXT1cIid2YXIoLS1pb24tY29sb3ItJyArIGNvbG9yVGV4dCArICcpJ1wiPiB7e3NyY319IDwvYT4iXX0=