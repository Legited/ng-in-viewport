"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var in_viewport_config_class_1 = require("./in-viewport-config.class");
var in_viewport_service_1 = require("./in-viewport.service");
var InViewportDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     * @param {?} inViewportService
     */
    function InViewportDirective(elementRef, inViewportService) {
        this.elementRef = elementRef;
        this.inViewportService = inViewportService;
        this.config = new in_viewport_config_class_1.InViewportConfig();
        this.action$ = new core_1.EventEmitter();
    }
    Object.defineProperty(InViewportDirective.prototype, "updateConfig", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value && Object.prototype.toString.call(value) === '[object Object]') {
                if (value.rootElement instanceof Element) {
                    this.config.rootElement = value.rootElement;
                }
                if ('partial' in value) {
                    this.config.partial = value.partial;
                }
                if ('direction' in value) {
                    this.config.rootElement = value.direction;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    InViewportDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.inViewportService.trigger$.subscribe(function (entries) { return _this.check(entries); });
        this.inViewportService.addTarget(this.elementRef.nativeElement, this.config.rootElement);
    };
    /**
     * @return {?}
     */
    InViewportDirective.prototype.ngOnDestroy = function () {
        this.inViewportService.removeTarget(this.elementRef.nativeElement);
    };
    /**
     * @param {?} entries
     * @return {?}
     */
    InViewportDirective.prototype.check = function (entries) {
        var _this = this;
        var /** @type {?} */ entry = entries.find(function (item) { return item.target === _this.elementRef.nativeElement; });
        if (entry) {
            var /** @type {?} */ value = this.config.partial ? (entry.intersectionRatio > 0) : (entry.intersectionRatio === 1);
            this.action$.emit({
                target: entry.target,
                value: value
            });
        }
    };
    InViewportDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[in-viewport], [inViewport]'
                },] },
    ];
    /**
     * @nocollapse
     */
    InViewportDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: in_viewport_service_1.InViewportService, },
    ]; };
    InViewportDirective.propDecorators = {
        'action$': [{ type: core_1.Output, args: ['inViewportAction',] },],
        'updateConfig': [{ type: core_1.Input, args: ['inViewportOptions',] },],
    };
    return InViewportDirective;
}());
exports.InViewportDirective = InViewportDirective;
function InViewportDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    InViewportDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    InViewportDirective.ctorParameters;
    /** @type {?} */
    InViewportDirective.propDecorators;
    /** @type {?} */
    InViewportDirective.prototype.config;
    /** @type {?} */
    InViewportDirective.prototype.action$;
    /** @type {?} */
    InViewportDirective.prototype.elementRef;
    /** @type {?} */
    InViewportDirective.prototype.inViewportService;
}
