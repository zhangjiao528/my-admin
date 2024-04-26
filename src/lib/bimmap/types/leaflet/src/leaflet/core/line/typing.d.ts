namespace BimMap {
  namespace Leaflet {
    interface ILine
      extends IFeatureHandle<"leaflet">,
        State.IBaseState<"leaflet", ServiceOptions.ILineOptions> {
      /**
       * @description 用于创建icon类型的文字标注
       *
       * @param {ICreateOptions} options 参数
       */
      create(options: IFeature, styles?: BimMap.Style.IStrokeOption): this;
    }
    var Line: IServiceConstructor<
      "leaflet",
      ServiceOptions.ILineOptions,
      ILine
    >;
  }
}
