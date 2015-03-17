module Sup {
  export class TileMap extends Asset {
    getWidth() { return this.__inner.getWidth() }
    getHeight() { return this.__inner.getHeight() }

    setTileAt(layer, x, y, value, flipX, flipY, angle) {
      var tileSet = player.getOuterAsset(this.__inner.data.tileSetId);
      var tilesPerRow = tileSet.__inner.data.texture.image.width / tileSet.__inner.data.gridSize;
      if (value == -1 )
        this.__inner.setTileAt(layer, x, y, null);
      else
        flipX = (flipX) ? flipX : false;
        flipY = (flipY) ? flipY : false;
        angle = (angle) ? angle : 0;
        this.__inner.setTileAt(layer, x, y, [value % tilesPerRow, window.Math.floor(value / tilesPerRow), flipX, flipY, angle]);
      return this
    }
    getTileAt(layer, x, y) {
      var tileSet = player.getOuterAsset(this.__inner.data.tileSetId);
      var tilesPerRow = tileSet.__inner.data.texture.image.width / tileSet.__inner.data.gridSize;
      var transform = this.__inner.getTileAt(layer, x, y);
      var tileX = transform[0]; var tileY = transform[1];

      var tile = -1;
      if (tileX != -1 && tileY != -1) { tile = tileY * tilesPerRow + tileX; }
      return tile
    }
    getTileTransformAt(layer, x, y) {
      var tileSet = player.getOuterAsset(this.__inner.data.tileSetId);
      var tilesPerRow = tileSet.__inner.data.texture.image.width / tileSet.__inner.data.gridSize;
      var transform = this.__inner.getTileAt(layer, x, y);
      return { "flipX": transform[2], "flipY": transform[3], "angle": transform[4] }
    }
  }
}
