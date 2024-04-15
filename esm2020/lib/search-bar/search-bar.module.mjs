import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar.component';
import { SearchResultPopoverComponent } from './search-result-popover/search-result-popover.component';
import * as i0 from "@angular/core";
export class SearchBarModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1saWJyYXJ5L3NyYy9saWIvc2VhcmNoLWJhci9zZWFyY2gtYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7O0FBVXZHLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBTFgsa0JBQWtCLEVBQUUsNEJBQTRCLGFBR3JELFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLGFBRjNDLGtCQUFrQjs2R0FJakIsZUFBZSxZQUZoQixZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQjsyRkFFMUMsZUFBZTtrQkFOM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSw0QkFBNEIsQ0FBQztvQkFDaEUsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO2lCQUN2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2VhcmNoQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0LXBvcG92ZXIvc2VhcmNoLXJlc3VsdC1wb3BvdmVyLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTZWFyY2hCYXJDb21wb25lbnQsIFNlYXJjaFJlc3VsdFBvcG92ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VhcmNoQmFyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2VhcmNoQmFyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW9uaWNNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXJNb2R1bGUgeyB9XG4iXX0=