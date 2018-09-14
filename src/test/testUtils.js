import checkPropTypes from 'check-prop-types';
/**
 * return node(s) with given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes, 
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
};