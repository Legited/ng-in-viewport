"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var in_viewport_directive_1 = require("./in-viewport.directive");
var in_viewport_service_1 = require("./in-viewport.service");
var InViewportModule = /** @class */ (function () {
    /**
     * @param {?} inViewportService
     */
    function InViewportModule(inViewportService) {
        this.inViewportService = inViewportService;
    }
    /**
     * @return {?}
     */
    InViewportModule.forRoot = function () {
        return {
            ngModule: InViewportModule,
            providers: [
                in_viewport_service_1.InViewportService
            ]
        };
    };
    InViewportModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [
                        in_viewport_directive_1.InViewportDirective
                    ],
                    exports: [
                        in_viewport_directive_1.InViewportDirective
                    ]
                },] },
    ];
    /**
     * @nocollapse
     */
    InViewportModule.ctorParameters = function () { return [
        { type: in_viewport_service_1.InViewportService, },
    ]; };
    return InViewportModule;
}());
exports.InViewportModule = InViewportModule;
function InViewportModule_tsickle_Closure_declarations() {
    /** @type {?} */
    InViewportModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    InViewportModule.ctorParameters;
    /** @type {?} */
    InViewportModule.prototype.inViewportService;
}
