namespace BimMap {
  namespace Csm{
    interface IHeatMap
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", IHeatMapOptions> {
      /**
       * @description 创建 icon 点的方法
       *
       * @param {BimMap.IFeature | Array<BimMap.IFeature>} options 创建点的配置
       *
       * @example
       *
       * markerLayer.create({
       *    point: [115.92845, 28.694833],
       *    label: "自定义文本", // 如果不需要现实文字，可以不传 label
       *    // .... 你想要关联的其他属性，比如 tunnelId: xxxx
       * });
       */
      create(options: BimMap.IFeature | Array<BimMap.IFeature>): this;
    }
    var HeatMap: IServiceConstructor<"cesium", IHeatMapOptions, IHeatMap>;
  }
}
