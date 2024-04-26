namespace BimMap {
  namespace OL {
    interface IKmlParams {
      /**
       * 聚焦到图层
       */
      flyTo?: boolean;
    }
    interface IKml
      extends IFeatureHandle<"ol">,
        State.IBaseState<"ol", ServiceOptions.IKmlOptions> {
      /**
       * @description 加载kml
       *
       * @param {string} kml 地址
       *
       * @param {IKmlParams} params 额外参数
       */
      load(kml: string, params?: IKmlParams): this;
    }
    var Kml: IServiceConstructor<"ol", ServiceOptions.IKmlOptions, IKml>;
  }
}
