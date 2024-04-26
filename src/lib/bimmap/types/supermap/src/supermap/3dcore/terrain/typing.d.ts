namespace BimMap {
  namespace Supermap {
    type ITerrainOptions = IConstructorOptions & IMapAny;
    interface ITerrain
      extends IOptions<ITerrainOptions>,
        IServiceConstructor<"supermap", IMapAny>,
        IDispose {
      /**
       * 名称
       */
      name: string;
      /**
       * 加载地形
       * @param options
       * @param params
       */
      load(url: string | string[], params?: IMapAny): this;
      /**
       * 设置显隐
       * @param layerName
       * @param visible
       */
      setVisible(visible: boolean): this;
      /**
       * 删除地形
       * @param name
       */
      remove(): this;
    }
    var Terrain: IServiceConstructor<"supermap", ITerrain>;
  }
}
