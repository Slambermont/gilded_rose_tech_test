class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Aged Brie") {
        this.updateQualityBrie(i)
      } else if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
      } else if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateQualityBackstage(i)
      } else if (this.items[i].name === "Conjured") {
        this.updateQualityConjured(i)
      } else {
        this.updateQualityOther(i)
      }
      return this.items
    }
  }

  updateQualityConjured(i) {
    this.decreaseSellIn(i)
    this.decreaseQuality(i)
    this.decreaseQuality(i)
    if (this.pastSellInDate(i)) {
      this.decreaseQuality(i)
      this.decreaseQuality(i)
    }
  }

  updateQualityBrie(i) {
    this.decreaseSellIn(i)
    this.increaseQuality(i)
    if (this.pastSellInDate(i)) {
      this.increaseQuality(i)
    }
  }

  updateQualityBackstage(i) {
    this.decreaseSellIn(i)
    if (this.pastSellInDate(i)) {
      this.items[i].quality = 0
    } else {
      this.increaseQuality(i)
      if (this.items[i].sellIn < 10) {
        this.increaseQuality(i)
        if (this.items[i].sellIn < 5) {
          this.increaseQuality(i)
        }
      }
    }
  }

  updateQualityOther(i) {
    this.decreaseSellIn(i)
    this.decreaseQuality(i)
    if (this.pastSellInDate(i)) {
      this.decreaseQuality(i)
    }
  }

  decreaseSellIn(index) {
    this.items[index].sellIn -= 1
  }

  decreaseQuality(index) {
    if (this.qualityAbove0(index)) {
      this.items[index].quality -= 1
    }
  }

  increaseQuality(index) {
    if (this.qualityBelow50(index)) {
      this.items[index].quality += 1
    }
  }

  qualityBelow50(index) {
    return this.items[index].quality < 50 ? true : false
  }

  qualityAbove0(index) {
    return this.items[index].quality > 0 ? true : false
  }

  pastSellInDate(index) {
    return this.items[index].sellIn < 0 ? true : false
  }
}
