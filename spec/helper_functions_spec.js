describe("#decreaseSellIn", function() {
  it("decreases sellIn by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
    const items = gildedRose.items
    gildedRose.decreaseSellIn(0)
    expect(items[0].sellIn).toEqual(0)
  });
});

describe("#decreaseQuality", function() {
  it("decreases quality by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
    const items = gildedRose.items
    gildedRose.decreaseQuality(0)
    expect(items[0].quality).toEqual(0)
  });
});

describe("#increaseQuality", function() {
  it("decreases quality by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
    const items = gildedRose.items
    gildedRose.increaseQuality(0)
    expect(items[0].quality).toEqual(2)
  });
});

describe("#qualityBelow50", function() {
  it("Returns true if quality is below 50", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
    const items = gildedRose.items
    expect(gildedRose.qualityBelow50(0)).toEqual(true)
  });

  it("Returns false if quality is 50", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 50) ]);
    const items = gildedRose.items
    expect(gildedRose.qualityBelow50(0)).toEqual(false)
  });
});

describe("#qualityAbove0", function() {
  it("Returns true if quality is above 0", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
    const items = gildedRose.items
    expect(gildedRose.qualityAbove0(0)).toEqual(true)
  });

  it("Returns true if quality is 0", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
    const items = gildedRose.items
    expect(gildedRose.qualityAbove0(0)).toEqual(false)
  });
});
