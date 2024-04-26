namespace BimMap {
  namespace Leaflet {
    interface IDrawLine
      extends IFeatureHandle<"leaflet">,
        State.IBaseState<"leaflet", ServiceOptions.IDrawLineOptions> {
      /**
       * 创建绘制
       * @param {Function} 成功后的回调，值为坐标集合
       */
      draw(callBack: (coordinate: BimMap.LngLatType[]) => void): this;
      /**
       * 获取图形的点位置
       */
      getValue(): LngLatType[];

      /**
       * 移除最后一个点
       */
      rmLastPoint(): this;
    }
    var DrawLine: IServiceConstructor<
      "leaflet",
      ServiceOptions.IDrawLineOptions,
      IDrawLine
    >;
  }
}
