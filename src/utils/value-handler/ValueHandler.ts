// To avoid useless re-renders
class ValueHandler<T> {
    _current;

    constructor(initValue: T) {
        this._current = initValue;
    }

    set = (value: T) => {
        this._current = value;
    }

    get = () => this._current
}

export default ValueHandler;
