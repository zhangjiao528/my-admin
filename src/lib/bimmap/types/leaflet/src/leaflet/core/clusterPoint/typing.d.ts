namespace BimMap {
  namespace Leaflet {
    interface IClusterPoint
      extends IFeatureHandle<"leaflet">,
        State.IBaseState<"leaflet", ServiceOptions.IClusterPointOptions> {
      /**
       * @description 创建聚合
       *
       * @param {Array<IFeature> | IFeature} options 数据对象或者数据数组
       * @param {Object} [styles] 自定义样式
       *
       */
      create(
        options: Array<IFeature> | IFeature,
        styles?: BimMap.ServiceOptions.IClusterPointOptions
      ): this;
    }
    var ClusterPoint: IServiceConstructor<
      "leaflet",
      ServiceOptions.IClusterPointOptions,
      IClusterPoint
    >;
  }
}
