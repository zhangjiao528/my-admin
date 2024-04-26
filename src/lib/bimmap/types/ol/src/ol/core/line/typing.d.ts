namespace BimMap {
  namespace OL {
    interface ILine
      extends IFeatureHandle<"ol">,
        State.IBaseState<"ol", ServiceOptions.ILineOptions> {
      /**
       * @description 用于创建icon类型的文字标注
       *
       * @param {ICreateOptions} options 参数
       */
      create(options: IFeature, styles?: BimMap.Style.IStrokeOption): this;
    }
    var Line: IServiceConstructor<"ol", ServiceOptions.ILineOptions, ILine>;
  }
}
