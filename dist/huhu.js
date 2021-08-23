var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logParameter(target, propertyName) {
    let _val = this[propertyName];
    const getter = () => {
        console.log(`Get: ${propertyName} => ${_val}`);
        return _val;
    };
    const setter = (newVal) => {
        console.log(`Set: ${propertyName} => ${newVal}`);
        _val = newVal;
    };
}
class Employee {
}
__decorate([
    logParameter,
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
const emp = new Employee();
emp.name = 'Mohan Ram';
//# sourceMappingURL=huhu.js.map