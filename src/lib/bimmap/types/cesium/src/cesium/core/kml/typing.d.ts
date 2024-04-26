namespace BimMap {
  namespace Csm {
    interface IKmlParams {
      /**
       * 聚焦到图层
       */
      flyTo?: boolean;
    }
    interface IKml
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", ServiceOptions.IKmlOptions> {
      /**
       * @description 加载kml
       *
       * @param {string} kml 地址
       *
       * @param {IKmlParams} params 额外参数
       */
      load(kml: string, params?: IKmlParams): this;
    }
    var Kml: IServiceConstructor<"cesium", ServiceOptions.IKmlOptions, IKml>;
  }
}
