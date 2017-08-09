class Tools {
    constructor() {
        console.log('tools constructor');
    }

    time() {
        return new Date()
    }

    math() {
        return 111;
        // return Math.random()
    }
}

export {
    Tools
};
