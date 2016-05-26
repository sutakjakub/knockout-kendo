createBinding({
    name: "kendoTimePicker",
    defaultOption: VALUE,
    events: {
        change: VALUE,
        open:
        {
            writeTo: ISOPEN,
            value: true
        },
        close: {
            writeTo: ISOPEN,
            value: false
        }
    },
    watch: {
        max: MAX,
        min: MIN,
        value: VALUE,
        enabled: ENABLE,
        isOpen: [OPEN, CLOSE]
    }
});
