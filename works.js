/*
# UseState-------------------------
    this hook is used to store the data within the component

# UseEffect-----------------------------
    This Hook is Used of making SideEffects in a component
    Making Api calls are used

# React.Memo----------------------------------

React.memo is a higher-order component (HOC) that lets you memoize an entire component.
It tells React: “Only re-render this component if its props have changed.”

const MemoizedComponent = React.memo(MyComponent);

-> Normally, when a parent re-renders, all of its children re-render, even if their props are the same.

-> React.memo wraps a component so that React skips re-rendering when:

    -> Its props are shallowly equal (primitive values or the same object references).

    # For Deep Comparison
    React.memo(MyComponent, (prevProps, nextProps) => {
        // return true if props are equal, false to re-render
    });


# UseCallback----------------------------------

    The useCallback hook in React is used to memoize a function
    so that it’s not re-created on every render unless its dependencies change.

    Normally, when a component re-renders, all functions inside it are recreated (new references).
    If you pass such a function to a child component (especially a memoized child),
    that child may re-render unnecessarily because it sees a new function reference.

    useCallback ensures the same function instance is used as long
    as the dependencies don’t change, preventing unnecessary re-renders.

# UseReducer-----------------------------

    The useReducer hook is a React alternative to useState for managing more complex state logic.
    It’s similar to how a Redux reducer works but scoped to a single component.


*/