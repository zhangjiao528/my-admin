namespace BimMap {
  namespace Supermap{
    interface ILine
      extends IFeatureHandle<"supermap">,
        State.IBaseState<"supermap", ServiceOptions.ILineOptions> {
      /**
       * @description 用于创建icon类型的文字标注
       *
       * @param {ICreateOptions} options 参数
       */
      create(options: IFeature, styles?: BimMap.Style.IStrokeOption): this;
    }
    var Line: IServiceConstructor<
      "supermap",
      ServiceOptions.ILineOptions,
      ILine
    >;
  }
}
