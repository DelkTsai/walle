class Tools {
  constructor() {
    console.log('tools constructor');
  }

  time() {
    if (1 == 1) {
      return new Date()
    }
  }

  math() {
    return 111;
    // return Math.random()
  }
}

export {
  Tools
};
