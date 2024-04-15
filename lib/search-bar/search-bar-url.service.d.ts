import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class SearchBarHttpService {
    private http;
    constructor(http: HttpClient);
    getDataSearch(url: string): Promise<import("rxjs").Observable<Object>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBarHttpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchBarHttpService>;
}
