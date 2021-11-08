type OrNull<T> = { [K in keyof T]: T[K] | null }
type NonEmptyArray<T> = [T, ...T[]];
type SingleElementArray<T> = [T];

interface MapById<T> {
    [id: string]: T
}

interface IterableCollection<T> {
    length: number,
    [index: number]: T,
}

interface Action<P> {
    type: string,
    payload: P
}

interface ActionHandler<State, ActionPayload> {
    (state: State, action: Action<ActionPayload>): State
}
