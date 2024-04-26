namespace BimMap {
  namespace Csm{
    interface ILine
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", ServiceOptions.ILineOptions> {
      /**
       * @description 用于创建icon类型的文字标注
       *
       * @param {ICreateOptions} options 参数
       */
      create(options: IFeature, styles?: BimMap.Style.IStrokeOption): this;
    }
    var Line: IServiceConstructor<
      "cesium",
      ServiceOptions.ILineOptions,
      ILine
    >;
  }
}
