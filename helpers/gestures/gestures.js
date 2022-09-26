const direction = {
  down: {
    start: { x: 50, y: 20 },
    end: { x: 50, y: 70 }
  },
  left: {
    start: { x: 70, y: 50 },
    end: { x: 20, y: 50 }
  },
  right: {
    start: { x: 20, y: 50 },
    end: { x: 70, y: 50 }
  },
  up: {
    start: { x: 50, y: 70 },
    end: { x: 50, y: 20 }
  }
};

export class Gestures {
  getScreenSize() {
    return driver.getWindowRect();
  }

  getCoordinates(screenSize, coordinates) {
    return {
      x: Math.round(screenSize.width * (coordinates.x / 100)),
      y: Math.round(screenSize.height * (coordinates.y / 100))
    };
  }

  async swipe(from, to) {
    await driver.touchPerform([
      {
        action: 'press',
        options: { x: from.x, y: from.y }
      },
      {
        action: 'moveTo',
        options: { x: to.x, y: to.y }
      },
      {
        action: 'release',
        options: {}
      }
    ]);
  }

  async swipeUp() {
    const size = await this.getScreenSize();
    const startCoordinates = this.getCoordinates(size, direction.up.start);
    const endCoordinates = this.getCoordinates(size, direction.up.end);
    await this.swipe(startCoordinates, endCoordinates);
  }

  async swipeElementToCoordinates(element, coordinates) {
    await browser.touchAction([
      { action: 'press', element: element },
      { action: 'moveTo', x: coordinates.x, y: coordinates.y },
      'release'
    ]);
  }
}
