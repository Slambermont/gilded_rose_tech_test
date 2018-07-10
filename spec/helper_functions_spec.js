describe('#decreaseSellIn', () => {
  it('decreases sellIn by 1', () => {
    const gildedRose = new Shop([new Item('foo', 1, 0)]);
    const items = gildedRose.items
    gildedRose.decreaseSellIn(0)
    expect(items[0].sellIn).toEqual(0)
  });
});

describe('#decreaseQuality', () => {
  it('decreases quality by 1', () => {
    const gildedRose = new Shop([new Item('foo', 1, 1)]);
    const items = gildedRose.items
    gildedRose.decreaseQuality(0)
    expect(items[0].quality).toEqual(0)
  });
});

describe('#increaseQuality', () => {
  it('decreases quality by 1', () => {
    const gildedRose = new Shop([new Item('foo', 1, 1)]);
    const items = gildedRose.items
    gildedRose.increaseQuality(0)
    expect(items[0].quality).toEqual(2)
  });
});

describe('#qualityBelow50', () => {
  it('Returns true if quality is below 50', () => {
    const gildedRose = new Shop([new Item('foo', 1, 1)]);
    const items = gildedRose.items
    expect(gildedRose.qualityBelow50(0)).toEqual(true)
  });

  it('Returns false if quality is 50', () => {
    const gildedRose = new Shop([new Item('foo', 1, 50)]);
    const items = gildedRose.items
    expect(gildedRose.qualityBelow50(0)).toEqual(false)
  });
});

describe('#qualityAbove0', () => {
  it('Returns true if quality is above 0', () => {
    const gildedRose = new Shop([new Item('foo', 1, 1)]);
    const items = gildedRose.items
    expect(gildedRose.qualityAbove0(0)).toEqual(true)
  });

  it('Returns true if quality is 0', () => {
    const gildedRose = new Shop([new Item('foo', 1, 0)]);
    const items = gildedRose.items
    expect(gildedRose.qualityAbove0(0)).toEqual(false)
  });
});

describe('#PastSellInDate', () => {
  it('Returns true if sellIn date is below 0', () => {
    const gildedRose = new Shop([new Item('foo', -1, 1)]);
    const items = gildedRose.items
    expect(gildedRose.pastSellInDate(0)).toEqual(true)
  });

  it('Returns false if sellIn date is above 0', () => {
    const gildedRose = new Shop([ new Item('foo', 0, 1)]);
    const items = gildedRose.items;
    expect(gildedRose.pastSellInDate(0)).toEqual(false)
  });
});
