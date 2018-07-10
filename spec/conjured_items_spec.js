describe('Conjured', () => {
  describe('when Quality is 0', () => {
    it('quality should remain at 0 after sell in date', () => {
      const gildedRose = new Shop([new Item('Conjured', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });

    it('quality should remain at 0 before sell in date', () => {
      const gildedRose = new Shop([new Item('Conjured', 1, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(0);
    });
  });

  describe('When quality is above 0', () => {
    it('quality should only decrease by 1 before sell in date is quality is 1', () => {
      const gildedRose = new Shop([new Item('Conjured', 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(0);
    });

    it('quality should decrease by 2 before sell in date if quality is 2', () => {
      const gildedRose = new Shop([new Item('Conjured', 1, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(0);
    });

    it('quality should decrease by 4 after sell in date', () => {
      const gildedRose = new Shop([new Item('Conjured', 0, 4)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });

    it('quality should only decrease by 2 before sell in date if quality is 2', () => {
      const gildedRose = new Shop([new Item('Conjured', 0, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });
  });
});
