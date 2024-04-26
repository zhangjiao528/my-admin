namespace BimMap {
  namespace OL {
    interface IClusterPoint
      extends IFeatureHandle<"ol">,
        State.IBaseState<"ol", ServiceOptions.IClusterPointOptions> {
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
    var ClusterPoint: IServiceConstructor<"ol", ServiceOptions.IClusterPointOptions, IClusterPoint>;
  }
}
