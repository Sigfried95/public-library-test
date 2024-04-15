import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class OpenDataCardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1kYXRhLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGlicmFyeS9zcmMvbGliL29wZW4tZGF0YS1jYXJkL29wZW4tZGF0YS1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9vcGVuLWRhdGEtY2FyZC9vcGVuLWRhdGEtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWpELE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNa0IsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBd0csU0FBUyxDQUFDO1FBQ3pILGtCQUFhLEdBQXdHLFNBQVMsQ0FBQztRQUM3SCxvQkFBZSxHQUF3RyxPQUFPLENBQUM7UUFDdEksYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUMzQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFNBQUksR0FBa0MsU0FBUyxDQUFDO0tBRWhFOztrSEFUWSxxQkFBcUI7c0dBQXJCLHFCQUFxQix3VUNSbEMseXJCQWNBOzJGRE5hLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxvQkFBb0I7OEJBS2QsS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPO2dCQUNPLFVBQVU7c0JBQTlCLEtBQUs7dUJBQUMsWUFBWTtnQkFDSyxhQUFhO3NCQUFwQyxLQUFLO3VCQUFDLGVBQWU7Z0JBQ0ksZUFBZTtzQkFBeEMsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBQ0wsUUFBUTtzQkFBMUIsS0FBSzt1QkFBQyxVQUFVO2dCQUNILEdBQUc7c0JBQWhCLEtBQUs7dUJBQUMsS0FBSztnQkFDRyxJQUFJO3NCQUFsQixLQUFLO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcGVuRGF0YUNhcmRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL29wZW4tZGF0YS1jYXJkLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcGVuLWRhdGEtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcGVuLWRhdGEtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29wZW4tZGF0YS1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE9wZW5EYXRhQ2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgnVGl0bGUnKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnQ29sb3JUaXRsZScpIGNvbG9yVGl0bGU6IHN0cmluZyB8ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgJ2xpZ2h0JyB8ICdkYXJrJyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdDb2xvclN1YnRpdGxlJykgY29sb3JTdWJ0aXRsZTogc3RyaW5nIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAnbGlnaHQnIHwgJ2RhcmsnID0gJ3ByaW1hcnknO1xuICBASW5wdXQoJ0JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcbiAgQElucHV0KCdTdWJ0aXRsZScpIHN1YnRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdTcmMnKSBzcmM6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoJ1NpemUnKSBzaXplOiAnbGFyZ2UnIHwgJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcblxufVxuIiwiPGlvbi1jYXJkIGNsYXNzPVwiZXZyLXRhcmpldGEtZXN0YWNpb25cIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCIndmFyKC0taW9uLWNvbG9yLScgKyBiYWNrZ3JvdW5kQ29sb3IgKyAnKSdcIiBcbiAgW3N0eWxlLndpZHRoXT1cInNpemUgPT09ICdkZWZhdWx0JyA/ICc3MCUnIDogc2l6ZSA9PT0gJ3NtYWxsJyA/ICc0MCUnIDogJzEwMCUnXCI+XG4gIDxpb24tY2FyZC1jb250ZW50PlxuICAgIDxpb24tcm93PlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjhcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJldnItZXN0YWNpb24tdGl0bGVcIiBbc3R5bGUuY29sb3JdPVwiJ3ZhcigtLWlvbi1jb2xvci0nICsgY29sb3JUaXRsZSArICcpJ1wiPnt7IHRpdGxlIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImV2ci1lc3RhY2lvbi1zdWJ0aXRsZVwiIFtzdHlsZS5jb2xvcl09XCIndmFyKC0taW9uLWNvbG9yLScgKyBjb2xvclN1YnRpdGxlICsgJyknXCI+e3sgc3VidGl0bGUgfX08L3A+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgICA8aW9uLWNvbCBjbGFzcz1cImNvbC1pbWctY2FyZFwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZXZyLWltYWdlbi10YXJqZXRhLWVzdGFjaW9uXCIgW3NyY109XCJzcmNcIj5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gIDwvaW9uLWNhcmQtY29udGVudD5cbjwvaW9uLWNhcmQ+XG4iXX0=