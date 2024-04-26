namespace BimMap {
  namespace Supermap{
    interface IClusterPoint
      extends IFeatureHandle<"supermap">,
        State.IBaseState<"supermap", ServiceOptions.IClusterPointOptions> {
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
      "supermap",
      ServiceOptions.IClusterPointOptions,
      IClusterPoint
    >;
  }
}
