// Utility functions for updating variables in the VM
// TODO (VM#1145) these should be moved to top-level VM API
const getTarget = (vm, targetId) => {
    const target = targetId
        ? vm.runtime.getTargetById(targetId)
        : vm.runtime.getTargetForStage();
    return target;
};

const getVariable = (vm, targetId, variableId) => {
    const target = getTarget(vm, targetId);
    return target.variables[variableId];
};

const getVariableValue = (vm, targetId, variableId) => {
    const variable = getVariable(vm, targetId, variableId);
    // If array, return a new copy for mutating, ensuring that updates stay immutable.
    if (variable.value instanceof Array) return variable.value.slice();
    return variable.value;
};

const setVariableValue = (vm, targetId, variableId, value) => {
    const target = getTarget(vm, targetId);
    target.setVariableValue(variableId, value);
};

export { getVariable, getVariableValue, setVariableValue };
