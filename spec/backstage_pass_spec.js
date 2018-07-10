describe('Backstage passes', () => {
  describe('When quality is between 0 and 50', () => {
    it('should got to 0 after sell in date', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });

    it('should increase by 1 11 days before sell in date', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
      expect(items[0].sellIn).toEqual(10);
    });

    it('should increase by 2 10 days before sell in date', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
      expect(items[0].sellIn).toEqual(9);
    });

    it('should only increase by 1 10 days before sell in date if quality is 49', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(9);
    });

    it('should increase by 3 5 days before sell in date', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(4);
      expect(items[0].sellIn).toEqual(4);
    });

    it('should only increase by 2 5 days before sell in date is quality is 48', () => {
      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(4);
    });
  });

  describe('When quality is 50', () => {
    it('should got to 0 after sell in date', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });

    it('should remain at 50 11 days before sell in date', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(10);
    });

    it('should remain at 50 10 days before sell in date', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(9);
    });

    it('should remain at 50 5 days before sell in date', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(4);
    });
  });
});
