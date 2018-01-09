"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InViewportConfigDirection = {};
exports.InViewportConfigDirection.Both = 0;
exports.InViewportConfigDirection.Vertical = 1;
exports.InViewportConfigDirection.Horizontal = 2;
exports.InViewportConfigDirection[exports.InViewportConfigDirection.Both] = "Both";
exports.InViewportConfigDirection[exports.InViewportConfigDirection.Vertical] = "Vertical";
exports.InViewportConfigDirection[exports.InViewportConfigDirection.Horizontal] = "Horizontal";
var InViewportConfig = /** @class */ (function () {
    /**
     * @param {?=} options
     */
    function InViewportConfig(options) {
        this.rootElement = (options && options.rootElement)
            ? options.rootElement
            : void 0;
        this.partial = (options && 'partial' in options)
            ? options.partial
            : true;
        this.direction = (options && 'direction' in options)
            ? options.direction
            : exports.InViewportConfigDirection.Both;
    }
    Object.defineProperty(InViewportConfig.prototype, "rootElement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._rootElement;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._rootElement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InViewportConfig.prototype, "partial", {
        /**
         * @return {?}
         */
        get: function () {
            return this._partial;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._partial = !!(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InViewportConfig.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this._direction;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._direction = value;
        },
        enumerable: true,
        configurable: true
    });
    return InViewportConfig;
}());
exports.InViewportConfig = InViewportConfig;
function InViewportConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    InViewportConfig.prototype._rootElement;
    /** @type {?} */
    InViewportConfig.prototype._partial;
    /** @type {?} */
    InViewportConfig.prototype._direction;
}
