namespace BimMap {
  namespace Supermap {
    interface IKmlParams {
      /**
       * 聚焦到图层
       */
      flyTo?: boolean;
    }
    interface IKml
      extends IFeatureHandle<"supermap">,
        State.IBaseState<"supermap", ServiceOptions.IKmlOptions> {
      /**
       * @description 加载kml
       *
       * @param {string} kml 地址
       *
       * @param {IKmlParams} params 额外参数
       */
      load(kml: string, params?: IKmlParams): this;
    }
    var Kml: IServiceConstructor<"supermap", ServiceOptions.IKmlOptions, IKml>;
  }
}
