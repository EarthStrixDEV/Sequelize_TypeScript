"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
let User = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            timestamps: true,
            tableName: "users"
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _age_decorators;
    let _age_initializers = [];
    let _age_extraInitializers = [];
    let _department_decorators;
    let _department_initializers = [];
    let _department_extraInitializers = [];
    let _salary_decorators;
    let _salary_initializers = [];
    let _salary_extraInitializers = [];
    let _isMarried_decorators;
    let _isMarried_initializers = [];
    let _isMarried_extraInitializers = [];
    let _isSeniorJob_decorators;
    let _isSeniorJob_initializers = [];
    let _isSeniorJob_extraInitializers = [];
    var User = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.age = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _age_initializers, void 0));
            this.department = (__runInitializers(this, _age_extraInitializers), __runInitializers(this, _department_initializers, void 0));
            this.salary = (__runInitializers(this, _department_extraInitializers), __runInitializers(this, _salary_initializers, void 0));
            this.isMarried = (__runInitializers(this, _salary_extraInitializers), __runInitializers(this, _isMarried_initializers, void 0));
            this.isSeniorJob = (__runInitializers(this, _isMarried_extraInitializers), __runInitializers(this, _isSeniorJob_initializers, void 0));
            __runInitializers(this, _isSeniorJob_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_2.DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            })];
        _name_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_2.DataType.STRING,
                allowNull: true
            })];
        _age_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_2.DataType.INTEGER,
                allowNull: true
            })];
        _department_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_2.DataType.STRING,
                allowNull: true
            })];
        _salary_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_2.DataType.INTEGER,
                allowNull: true
            })];
        _isMarried_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_2.DataType.BOOLEAN,
                allowNull: true
            })];
        _isSeniorJob_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_2.DataType.BOOLEAN,
                allowNull: true
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
        __esDecorate(null, null, _department_decorators, { kind: "field", name: "department", static: false, private: false, access: { has: obj => "department" in obj, get: obj => obj.department, set: (obj, value) => { obj.department = value; } }, metadata: _metadata }, _department_initializers, _department_extraInitializers);
        __esDecorate(null, null, _salary_decorators, { kind: "field", name: "salary", static: false, private: false, access: { has: obj => "salary" in obj, get: obj => obj.salary, set: (obj, value) => { obj.salary = value; } }, metadata: _metadata }, _salary_initializers, _salary_extraInitializers);
        __esDecorate(null, null, _isMarried_decorators, { kind: "field", name: "isMarried", static: false, private: false, access: { has: obj => "isMarried" in obj, get: obj => obj.isMarried, set: (obj, value) => { obj.isMarried = value; } }, metadata: _metadata }, _isMarried_initializers, _isMarried_extraInitializers);
        __esDecorate(null, null, _isSeniorJob_decorators, { kind: "field", name: "isSeniorJob", static: false, private: false, access: { has: obj => "isSeniorJob" in obj, get: obj => obj.isSeniorJob, set: (obj, value) => { obj.isSeniorJob = value; } }, metadata: _metadata }, _isSeniorJob_initializers, _isSeniorJob_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
exports.User = User;
