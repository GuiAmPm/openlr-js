const NO_ORIENTATION_OR_UNKNOWN = Symbol();
const WITH_LINE_DIRECTION = Symbol();
const AGAINST_LINE_DIRECTION = Symbol();
const BOTH = Symbol();

export default {
    NO_ORIENTATION_OR_UNKNOWN,
    WITH_LINE_DIRECTION,
    AGAINST_LINE_DIRECTION,
    BOTH,
    getOrientationValues: [NO_ORIENTATION_OR_UNKNOWN, WITH_LINE_DIRECTION, AGAINST_LINE_DIRECTION, BOTH],
    getDefault: () => NO_ORIENTATION_OR_UNKNOWN
};
