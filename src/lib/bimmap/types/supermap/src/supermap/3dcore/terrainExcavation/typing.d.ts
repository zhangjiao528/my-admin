namespace BimMap {
  namespace Supermap {
    interface ITerrainExcavationParams {
      /**
       * 设置图层名称
       */
      name?: string;
    }
    interface ITerrainExcavationOptions
      extends IConstructorOptions,
        Style.IStyleOptions {}
    interface ITerrainExcavation extends IDispose {
      /**
       * 测试面积
       * @param callback  回调，返回平方km
       */
      start(depth: number, options?: ITerrainExcavationOptions): void;
      /**
       * 清空绘制类容
       * @param destroy  清除并销毁
       */
      clear(destroy?: boolean): void;
    }
    var TerrainExcavation: IServiceConstructor<
      "supermap",
      ITerrainExcavationOptions,
      ITerrainExcavation
    >;
  }
}
