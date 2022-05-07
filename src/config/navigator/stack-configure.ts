const configureNavigationStack = (rootScreen: string) => ({
    stack: {
        children: [
            {
                component: {
                    name: rootScreen,
                    options: {
                    },
                },
            },
        ],
        options: {
            topBar: {
                visible: false,
                height: 0,
            },
        },
    },
});

export default configureNavigationStack;
