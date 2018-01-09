"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InViewportService = /** @class */ (function () {
    function InViewportService() {
        this.registry = [];
        this.trigger$ = new core_1.EventEmitter();
    }
    /**
     * @param {?} entries
     * @return {?}
     */
    InViewportService.prototype.onChanges = function (entries) {
        this.trigger$.emit(entries);
    };
    /**
     * @param {?} rootElement
     * @return {?}
     */
    InViewportService.prototype.findRegistryEntry = function (rootElement) {
        var _this = this;
        return this.registry.find(function (item) { return item.rootElement === _this.getRootElement(rootElement); });
    };
    /**
     * @param {?} target
     * @param {?=} rootElement
     * @return {?}
     */
    InViewportService.prototype.addTarget = function (target, rootElement) {
        var _this = this;
        var /** @type {?} */ registryEntry = this.findRegistryEntry(rootElement);
        if (!registryEntry) {
            var /** @type {?} */ registryEntryObserverOptions = {
                root: this.getRootElement(rootElement),
                threshold: Array(101).fill(void 0).map(function (item, i) { return (i / 100); })
            };
            registryEntry = {
                targets: [target],
                rootElement: this.getRootElement(rootElement),
                observer: new IntersectionObserver(function (entries) { return _this.onChanges(entries); }, registryEntryObserverOptions)
            };
            registryEntry.observer.observe(target);
            this.registry.push(registryEntry);
        }
        else if (registryEntry.targets.indexOf(target) < 0) {
            registryEntry.targets.push(target);
            registryEntry.observer.observe(target);
        }
    };
    /**
     * @param {?} target
     * @param {?=} rootElement
     * @return {?}
     */
    InViewportService.prototype.removeTarget = function (target, rootElement) {
        var /** @type {?} */ registryEntry = this.findRegistryEntry(rootElement);
        var /** @type {?} */ registryEntryIdx = this.registry.indexOf(registryEntry);
        if (registryEntry) {
            var /** @type {?} */ targetIdx = registryEntry.targets.indexOf(target);
            if (targetIdx >= 0) {
                registryEntry.observer.unobserve(target);
                registryEntry.targets.splice(targetIdx, 1);
            }
            if (registryEntry.targets.length === 0) {
                registryEntry.observer.disconnect();
                this.registry.splice(registryEntryIdx, 1);
            }
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    InViewportService.prototype.getRootElement = function (element) {
        return (element && element.nodeType === 1) ? element : null;
    };
    InViewportService.decorators = [
        { type: core_1.Injectable },
    ];
    /**
     * @nocollapse
     */
    InViewportService.ctorParameters = function () { return []; };
    return InViewportService;
}());
exports.InViewportService = InViewportService;
function InViewportService_tsickle_Closure_declarations() {
    /** @type {?} */
    InViewportService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    InViewportService.ctorParameters;
    /** @type {?} */
    InViewportService.prototype.registry;
    /** @type {?} */
    InViewportService.prototype.trigger$;
}
