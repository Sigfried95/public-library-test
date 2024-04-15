import { EventEmitter, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class SearchResultPopoverComponent implements OnInit {
    private popoverController;
    results: any[];
    nameAttribute: string;
    onClickItem: EventEmitter<any>;
    constructor(popoverController: PopoverController);
    ngOnInit(): void;
    clickItem(item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchResultPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchResultPopoverComponent, "app-search-result-popover", never, { "results": "results"; "nameAttribute": "nameAttribute"; }, { "onClickItem": "onClickItem"; }, never, never, false, never>;
}
