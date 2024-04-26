namespace BimMap {
  namespace Leaflet {
    interface IKmlParams {
      /**
       * 聚焦到图层
       */
      flyTo?: boolean;
    }
    interface IKml
      extends IFeatureHandle<"leaflet">,
        State.IBaseState<"leaflet", ServiceOptions.IKmlOptions> {
      /**
       * @description 加载kml
       *
       * @param {string} kml 地址
       *
       * @param {IKmlParams} params 额外参数
       */
      load(kml: string, params?: IKmlParams): this;
    }
    var Kml: IServiceConstructor<"leaflet", ServiceOptions.IKmlOptions, IKml>;
  }
}
