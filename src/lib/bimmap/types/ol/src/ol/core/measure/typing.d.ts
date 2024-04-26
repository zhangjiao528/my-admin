namespace BimMap {
  namespace OL {
    interface IMeasureParams {
      /**
       * 设置图层名称
       */
      name?: string;

      /**
       * 聚焦到图层(必须设置bounds)
       */
      flyTo?: boolean;
      /**
       * 飞行动画要达到的层级
       */
      zoom?: number;

      /**
       * 图层边界
       */
      bounds?: [BimMap.LngLatType, BimMap.LngLatType];

      /**
       * 图层透明度
       */
      opacity?: number;
      /**
       * 最小层级
       */
      minZoom?: number;
      /**
       * 最大层级
       */
      maxZoom?: number;
    }
    interface IMeasure extends IDispose {
      /**
       * 测试距离
       * @param callback 回调，返回km
       */
      distance(
        callback: (km: number) => void,
        options?: BimMap.ServiceOptions.IDrawLineOptions
      ): void;

      /**
       * 测试面积
       * @param callback  回调，返回平方km
       */
      area(
        callback: (skm: number) => void,
        options?: BimMap.ServiceOptions.IDrawLineOptions
      ): void;
      /**
       * 清空绘制类容
       * @param destroy  清除并销毁
       */
      clear(destroy?: boolean): void;
    }
    var Measure: IServiceConstructor<
      "ol",
      ServiceOptions.IMeasureOptions,
      IMeasure
    >;
  }
}
