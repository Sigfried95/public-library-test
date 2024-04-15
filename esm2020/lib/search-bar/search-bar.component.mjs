import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SearchResultPopoverComponent } from './search-result-popover/search-result-popover.component';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "./search-bar-url.service";
export class SearchBarComponent {
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
    async performSearch(event) {
        const textSearch = event.detail.value;
        let dataFilter = [];
        if (textSearch.length > 0) {
            if (this.dataElements && this.dataElements.length > 0) {
                dataFilter = this.changeStringSearch(this.dataElements, textSearch);
                if (this.showPopover) {
                    const popover = await this.popoverController.create({
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
                    await popover.present();
                }
                this.onSearchResultItems.emit(dataFilter);
                this.onSearchText.emit(textSearch);
            }
            else {
                (await this.searchHttpService.getDataSearch(this.urlDataElements)).subscribe(async (resp) => {
                    console.log('adsadsa httttp', resp);
                    dataFilter = this.changeStringSearch(resp, textSearch);
                    if (this.showPopover) {
                        const popover = await this.popoverController.create({
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
                        await popover.present();
                    }
                    this.onSearchResultItems.emit(dataFilter);
                    this.onSearchText.emit(textSearch);
                });
            }
        }
        this.searchbar.setFocus();
    }
    ngOnInit() { }
    onSearchChange($event) {
        this.onSearchText.emit($event.detail.value);
    }
    changeStringSearch(arrayElement, textSearch) {
        return arrayElement.filter(search => search[this.nameAttributeSearch].includes(textSearch));
    }
}
SearchBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarComponent, deps: [{ token: i1.PopoverController }, { token: i2.SearchBarHttpService }], target: i0.ɵɵFactoryTarget.Component });
SearchBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: SearchBarComponent, selector: "app-search-bar", inputs: { placeholder: ["Placeholder", "placeholder"], debounce: ["Debounce", "debounce"], color: ["Color", "color"], animated: ["Animated", "animated"], disabled: ["Disabled", "disabled"], borderRadius: ["BorderRadius", "borderRadius"], showCancelButton: ["ShowCancelButton", "showCancelButton"], dataElements: ["DataElements", "dataElements"], nameAttributeSearch: ["NameAttributeSearch", "nameAttributeSearch"], urlDataElements: ["UrlDataElements", "urlDataElements"], showPopover: ["ShowPopover", "showPopover"], searchIcon: ["SearchIcon", "searchIcon"], clearIcon: ["ClearIcon", "clearIcon"], cancelIcon: ["CancelIcon", "cancelIcon"] }, outputs: { onSearchText: "onSearchText", onSearchResultItems: "onSearchResultItems", onSelectItem: "onSelectItem" }, viewQueries: [{ propertyName: "searchbar", first: true, predicate: ["searchbar"], descendants: true }], ngImport: i0, template: "<ion-searchbar #searchbar\n  inputmode=\"text\" \n  [value]=\"searchText\"\n  type=\"text\" \n  (ionChange)=\"performSearch($event)\"\n  (ionInput)=\"searchbar.setFocus()\"\n  [placeholder]=\"placeholder\" \n  [debounce]=\"debounce\"\n  [color]=\"color\"\n  [animated]=\"true\"\n  [disabled]=\"disabled\"\n  [style.--border-radius]=\"borderRadius+'px'\"\n  [showCancelButton]=\"showCancelButton\"\n  [searchIcon]=\"searchIcon\"\n  [clearIcon]=\"clearIcon\"\n  [cancelButtonIcon]=\"cancelIcon\">\n</ion-searchbar>", styles: [""], dependencies: [{ kind: "component", type: i1.IonSearchbar, selector: "ion-searchbar", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"] }, { kind: "directive", type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: SearchBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-search-bar', template: "<ion-searchbar #searchbar\n  inputmode=\"text\" \n  [value]=\"searchText\"\n  type=\"text\" \n  (ionChange)=\"performSearch($event)\"\n  (ionInput)=\"searchbar.setFocus()\"\n  [placeholder]=\"placeholder\" \n  [debounce]=\"debounce\"\n  [color]=\"color\"\n  [animated]=\"true\"\n  [disabled]=\"disabled\"\n  [style.--border-radius]=\"borderRadius+'px'\"\n  [showCancelButton]=\"showCancelButton\"\n  [searchIcon]=\"searchIcon\"\n  [clearIcon]=\"clearIcon\"\n  [cancelButtonIcon]=\"cancelIcon\">\n</ion-searchbar>" }]
        }], ctorParameters: function () { return [{ type: i1.PopoverController }, { type: i2.SearchBarHttpService }]; }, propDecorators: { placeholder: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1saWJyYXJ5L3NyYy9saWIvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7Ozs7QUFRdkcsTUFBTSxPQUFPLGtCQUFrQjtJQTBCN0IsWUFDVSxpQkFBb0MsRUFDcEMsaUJBQXVDO1FBRHZDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFzQjtRQTFCM0IsZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDaEMsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNsQixVQUFLLEdBQXlHLFNBQVMsQ0FBQztRQUNySCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDYixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNkLHFCQUFnQixHQUFpQyxPQUFPLENBQUM7UUFDN0QsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDbEIsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXBCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNyQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBRWxDLGlCQUFZLEdBQUcsSUFB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QWU7c0JBQXhDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUNGLFdBQVc7c0JBQWhDLEtBQUs7dUJBQUMsYUFBYTtnQkFFQyxVQUFVO3NCQUE5QixLQUFLO3VCQUFDLFlBQVk7Z0JBQ0MsU0FBUztzQkFBNUIsS0FBSzt1QkFBQyxXQUFXO2dCQUNHLFVBQVU7c0JBQTlCLEtBQUs7dUJBQUMsWUFBWTtnQkFFVCxZQUFZO3NCQUFyQixNQUFNO2dCQUNHLG1CQUFtQjtzQkFBNUIsTUFBTTtnQkFDRyxZQUFZO3NCQUFyQixNQUFNO2dCQUVvQyxTQUFTO3NCQUFuRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvblNlYXJjaGJhciwgUG9wb3ZlckNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0LXBvcG92ZXIvc2VhcmNoLXJlc3VsdC1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hCYXJIdHRwU2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJhci11cmwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zZWFyY2gtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdQbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJ0J1c2NhciB0ZXh0byc7XG4gIEBJbnB1dCgnRGVib3VuY2UnKSBkZWJvdW5jZSA9IDYwMDtcbiAgQElucHV0KCdDb2xvcicpIGNvbG9yOiBzdHJpbmcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICd3aGl0ZScgfCAnbGlnaHQnID0gJ3ByaW1hcnknO1xuICBASW5wdXQoJ0FuaW1hdGVkJykgYW5pbWF0ZWQgPSB0cnVlO1xuICBASW5wdXQoJ0Rpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCdCb3JkZXJSYWRpdXMnKSBib3JkZXJSYWRpdXMgPSAxMDtcbiAgQElucHV0KCdTaG93Q2FuY2VsQnV0dG9uJykgc2hvd0NhbmNlbEJ1dHRvbjogJ2Fsd2F5cycgfCAnZm9jdXMnIHwgJ25ldmVyJyA9ICdmb2N1cyc7XG4gIEBJbnB1dCgnRGF0YUVsZW1lbnRzJykgZGF0YUVsZW1lbnRzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoJ05hbWVBdHRyaWJ1dGVTZWFyY2gnKSBuYW1lQXR0cmlidXRlU2VhcmNoOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdVcmxEYXRhRWxlbWVudHMnKSB1cmxEYXRhRWxlbWVudHMgPSAnJztcbiAgQElucHV0KCdTaG93UG9wb3ZlcicpIHNob3dQb3BvdmVyID0gdHJ1ZTtcbiAgXG4gIEBJbnB1dCgnU2VhcmNoSWNvbicpIHNlYXJjaEljb24gPSAnJztcbiAgQElucHV0KCdDbGVhckljb24nKSBjbGVhckljb24gPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnQ2FuY2VsSWNvbicpIGNhbmNlbEljb24gPSB1bmRlZmluZWQ7XG4gIFxuICBAT3V0cHV0KCkgb25TZWFyY2hUZXh0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXJjaFJlc3VsdEl0ZW1zID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0SXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaGJhcicsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWFyY2hiYXIhOiBJb25TZWFyY2hiYXI7XG4gIHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwb3BvdmVyQ29udHJvbGxlcjogUG9wb3ZlckNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBzZWFyY2hIdHRwU2VydmljZTogU2VhcmNoQmFySHR0cFNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIHBlcmZvcm1TZWFyY2goZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHRleHRTZWFyY2ggPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgbGV0IGRhdGFGaWx0ZXI6IGFueVtdID0gW107XG5cbiAgICBpZih0ZXh0U2VhcmNoLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmKHRoaXMuZGF0YUVsZW1lbnRzICYmIHRoaXMuZGF0YUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YUZpbHRlciA9IHRoaXMuY2hhbmdlU3RyaW5nU2VhcmNoKHRoaXMuZGF0YUVsZW1lbnRzLHRleHRTZWFyY2gpO1xuICAgICAgICBpZih0aGlzLnNob3dQb3BvdmVyKSB7XG4gICAgICAgICAgY29uc3QgcG9wb3ZlciA9IGF3YWl0IHRoaXMucG9wb3ZlckNvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogU2VhcmNoUmVzdWx0UG9wb3ZlckNvbXBvbmVudCxcbiAgICAgICAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICAgICAgIHJlc3VsdHM6IGRhdGFGaWx0ZXIsXG4gICAgICAgICAgICAgIG5hbWVBdHRyaWJ1dGU6IHRoaXMubmFtZUF0dHJpYnV0ZVNlYXJjaFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zbHVjZW50OiB0cnVlLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgYWxpZ25tZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIHNob3dCYWNrZHJvcDogZmFsc2UsXG4gICAgICAgICAgICBzaWRlOiAnYm90dG9tJyxcbiAgICAgICAgICAgIGRpc21pc3NPblNlbGVjdDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBvcG92ZXIub25EaWREaXNtaXNzKCkudGhlbiggZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0SXRlbS5lbWl0KGUuZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXdhaXQgcG9wb3Zlci5wcmVzZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblNlYXJjaFJlc3VsdEl0ZW1zLmVtaXQoZGF0YUZpbHRlcik7XG4gICAgICAgIHRoaXMub25TZWFyY2hUZXh0LmVtaXQodGV4dFNlYXJjaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoYXdhaXQgdGhpcy5zZWFyY2hIdHRwU2VydmljZS5nZXREYXRhU2VhcmNoKHRoaXMudXJsRGF0YUVsZW1lbnRzKSkuc3Vic2NyaWJlKCBhc3luYyAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Fkc2Fkc2EgaHR0dHRwJywgcmVzcCk7XG4gICAgICAgICAgXG4gICAgICAgICAgZGF0YUZpbHRlciA9IHRoaXMuY2hhbmdlU3RyaW5nU2VhcmNoKHJlc3AsIHRleHRTZWFyY2gpO1xuICAgICAgICAgIGlmKHRoaXMuc2hvd1BvcG92ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcG92ZXIgPSBhd2FpdCB0aGlzLnBvcG92ZXJDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogU2VhcmNoUmVzdWx0UG9wb3ZlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhRmlsdGVyLFxuICAgICAgICAgICAgICAgIG5hbWVBdHRyaWJ1dGU6IHRoaXMubmFtZUF0dHJpYnV0ZVNlYXJjaFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0cmFuc2x1Y2VudDogdHJ1ZSxcbiAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBzaG93QmFja2Ryb3A6IGZhbHNlLFxuICAgICAgICAgICAgICBzaWRlOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgZGlzbWlzc09uU2VsZWN0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcG92ZXIub25EaWREaXNtaXNzKCkudGhlbiggZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMub25TZWxlY3RJdGVtLmVtaXQoZS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgcG9wb3Zlci5wcmVzZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub25TZWFyY2hSZXN1bHRJdGVtcy5lbWl0KGRhdGFGaWx0ZXIpO1xuICAgICAgICAgIHRoaXMub25TZWFyY2hUZXh0LmVtaXQodGV4dFNlYXJjaCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlYXJjaGJhci5zZXRGb2N1cygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uU2VhcmNoQ2hhbmdlKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5vblNlYXJjaFRleHQuZW1pdCgkZXZlbnQuZGV0YWlsLnZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZVN0cmluZ1NlYXJjaChhcnJheUVsZW1lbnQ6IGFueVtdLHRleHRTZWFyY2g6IHN0cmluZyl7XG4gICAgcmV0dXJuIGFycmF5RWxlbWVudC5maWx0ZXIoIHNlYXJjaCA9PiBzZWFyY2hbdGhpcy5uYW1lQXR0cmlidXRlU2VhcmNoXS5pbmNsdWRlcyh0ZXh0U2VhcmNoKSk7XG4gIH1cblxufVxuIiwiPGlvbi1zZWFyY2hiYXIgI3NlYXJjaGJhclxuICBpbnB1dG1vZGU9XCJ0ZXh0XCIgXG4gIFt2YWx1ZV09XCJzZWFyY2hUZXh0XCJcbiAgdHlwZT1cInRleHRcIiBcbiAgKGlvbkNoYW5nZSk9XCJwZXJmb3JtU2VhcmNoKCRldmVudClcIlxuICAoaW9uSW5wdXQpPVwic2VhcmNoYmFyLnNldEZvY3VzKClcIlxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcbiAgW2RlYm91bmNlXT1cImRlYm91bmNlXCJcbiAgW2NvbG9yXT1cImNvbG9yXCJcbiAgW2FuaW1hdGVkXT1cInRydWVcIlxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICBbc3R5bGUuLS1ib3JkZXItcmFkaXVzXT1cImJvcmRlclJhZGl1cysncHgnXCJcbiAgW3Nob3dDYW5jZWxCdXR0b25dPVwic2hvd0NhbmNlbEJ1dHRvblwiXG4gIFtzZWFyY2hJY29uXT1cInNlYXJjaEljb25cIlxuICBbY2xlYXJJY29uXT1cImNsZWFySWNvblwiXG4gIFtjYW5jZWxCdXR0b25JY29uXT1cImNhbmNlbEljb25cIj5cbjwvaW9uLXNlYXJjaGJhcj4iXX0=