describe("Gilded Rose", function() {
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

    it("Returns true if quality is below 50", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 50) ]);
      const items = gildedRose.items
      expect(gildedRose.qualityBelow50(0)).toEqual(false)
    });
  });

  // describe("Other items", function() {
  //   describe("When quality = 0", function() {
  //     it("quality should remain at 0", function() {
  //       const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //       const items = gildedRose.updateQuality();
  //       expect(items[0].quality).toEqual(0);
  //       expect(items[0].sellIn).toEqual(-1);
  //     });
  //
  //     it("quality should remain at 0", function() {
  //       const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
  //       const items = gildedRose.updateQuality();
  //       expect(items[0].quality).toEqual(0);
  //       expect(items[0].sellIn).toEqual(0);
  //     });
  //   });
  //
  //   describe("When quality > 0", function() {
  //     it("quality should decrease by 1", function() {
  //       const gildedRose = new Shop([ new Item("foo", 1, 2) ]);
  //       const items = gildedRose.updateQuality();
  //       expect(items[0].quality).toEqual(1);
  //       expect(items[0].sellIn).toEqual(0);
  //     });
  //
  //     it("quality should decrease by 2", function() {
  //       const gildedRose = new Shop([ new Item("foo", 0, 2) ]);
  //       const items = gildedRose.updateQuality();
  //       expect(items[0].quality).toEqual(0);
  //       expect(items[0].sellIn).toEqual(-1);
  //     });
  //   });
  // });

   describe("Aged Brie", function() {
    describe("when Quality = 50", function() {
      it("should remain at 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(0);
      });

      it("should remain at 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(-1);
      });
    });

    describe("when Quality < 50", function() {
      it("should increase by 1", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
        expect(items[0].sellIn).toEqual(0);
      });

      it("should increase by 1", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
        expect(items[0].sellIn).toEqual(-1);
      });
      it("should only increase by 1", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(-1);
      });
    });

    describe("Sulfuras", function() {
      describe("all situations", function() {
        it("should remain the same", function() {
          const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 0) ]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(0);
          expect(items[0].sellIn).toEqual(0);
        });

        it("should remain the same", function() {
          const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 0) ]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(0);
          expect(items[0].sellIn).toEqual(1);
        });

        it("should remain the same", function() {
          const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 1) ]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(1);
          expect(items[0].sellIn).toEqual(0);
        });

        it("should remain the same", function() {
          const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 1) ]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(1);
          expect(items[0].sellIn).toEqual(1);
        });
      });
    });

  //   describe("Backstage passes", function() {
  //     describe("When quality < 50 and > 0", function() {
  //       it("should got to 0", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(0);
  //         expect(items[0].sellIn).toEqual(-1);
  //       });
  //
  //       it("should increase by 1", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(2);
  //         expect(items[0].sellIn).toEqual(10);
  //       });
  //
  //       it("should increase by 2", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(3);
  //         expect(items[0].sellIn).toEqual(9);
  //       });
  //
  //       it("should only increase by 1", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(50);
  //         expect(items[0].sellIn).toEqual(9);
  //       });
  //
  //       it("should increase by 3", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(4);
  //         expect(items[0].sellIn).toEqual(4);
  //       });
  //
  //       it("should only increase by 2", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(50);
  //         expect(items[0].sellIn).toEqual(4);
  //       });
  //     });
  //
  //     describe("When quality = 50", function() {
  //       it("should got to 0", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(0);
  //         expect(items[0].sellIn).toEqual(-1);
  //       });
  //
  //       it("should remain at 50", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(50);
  //         expect(items[0].sellIn).toEqual(10);
  //       });
  //
  //       it("should remain at 50", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(50);
  //         expect(items[0].sellIn).toEqual(9);
  //       });
  //
  //       it("should remain at 50", function() {
  //         const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50) ]);
  //         const items = gildedRose.updateQuality();
  //         expect(items[0].quality).toEqual(50);
  //         expect(items[0].sellIn).toEqual(4);
  //       });
  //     });
  //   });
   });
});
