describe('Backstage passes', () => {
  describe('When quality < 50 and > 0', () => {
    it('should got to 0', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });

    it('should increase by 1', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
      expect(items[0].sellIn).toEqual(10);
    });

    it('should increase by 2', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
      expect(items[0].sellIn).toEqual(9);
    });

    it('should only increase by 1', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(9);
    });

    it('should increase by 3', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(4);
      expect(items[0].sellIn).toEqual(4);
    });

    it('should only increase by 2', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(4);
    });
  });

  describe('When quality = 50', () => {
    it('should got to 0', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });

    it('should remain at 50', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(10);
    });

    it('should remain at 50', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(9);
    });

    it('should remain at 50', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(4);
    });
  });
});
