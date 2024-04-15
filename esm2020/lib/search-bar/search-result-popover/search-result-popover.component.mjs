import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/common";
export class SearchResultPopoverComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1wb3BvdmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9zZWFyY2gtYmFyL3NlYXJjaC1yZXN1bHQtcG9wb3Zlci9zZWFyY2gtcmVzdWx0LXBvcG92ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGlicmFyeS9zcmMvbGliL3NlYXJjaC1iYXIvc2VhcmNoLXJlc3VsdC1wb3BvdmVyL3NlYXJjaC1yZXN1bHQtcG9wb3Zlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUS9FLE1BQU0sT0FBTyw0QkFBNEI7SUFPdkMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFMdEMsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNkLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRXpDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVZLENBQUM7SUFFN0QsUUFBUSxLQUFJLENBQUM7SUFFYixTQUFTLENBQUMsSUFBUztRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O3lIQWJVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLDBLQ1J6QyxvV0FTVzsyRkRERSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UsMkJBQTJCO3dHQU1uQixPQUFPO3NCQUF4QixLQUFLO3VCQUFDLFNBQVM7Z0JBQ1EsYUFBYTtzQkFBcEMsS0FBSzt1QkFBQyxlQUFlO2dCQUVaLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaC1yZXN1bHQtcG9wb3ZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtcmVzdWx0LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtcmVzdWx0LXBvcG92ZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0UG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdyZXN1bHRzJykgcmVzdWx0czogYW55W10gPSBbXTsgXG4gIEBJbnB1dCgnbmFtZUF0dHJpYnV0ZScpIG5hbWVBdHRyaWJ1dGU6IHN0cmluZyA9ICcnOyBcblxuICBAT3V0cHV0KCkgb25DbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvcG92ZXJDb250cm9sbGVyOiBQb3BvdmVyQ29udHJvbGxlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGNsaWNrSXRlbShpdGVtOiBhbnkpIHtcbiAgICB0aGlzLnBvcG92ZXJDb250cm9sbGVyLmRpc21pc3MoaXRlbSk7XG4gIH1cblxufVxuIiwiPGlvbi1saXN0ICpuZ0lmPVwicmVzdWx0cy5sZW5ndGggPiAwXCI+XG4gIDxpb24taXRlbSBbYnV0dG9uXT1cInRydWVcIiBbZGV0YWlsXT1cImZhbHNlXCIgKGNsaWNrKT1cImNsaWNrSXRlbShpdGVtKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJlc3VsdHNcIj5cbiAgICB7eyBpdGVtW25hbWVBdHRyaWJ1dGVdIH19XG4gIDwvaW9uLWl0ZW0+XG48L2lvbi1saXN0PlxuPGlvbi1saXN0ICpuZ0lmPVwicmVzdWx0cy5sZW5ndGggPT09IDBcIj5cbiAgPGlvbi1pdGVtIGxpbmVzPVwibm9uZVwiPlxuICAgIDxpb24tbGFiZWw+Tm8gaGF5IHJlc3VsdGFkb3M8L2lvbi1sYWJlbD5cbiAgPC9pb24taXRlbT5cbjwvaW9uLWxpc3Q+Il19