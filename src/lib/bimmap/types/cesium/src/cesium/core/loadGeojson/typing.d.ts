namespace BimMap {
  namespace Csm{
    interface ILoadGeojson
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", ServiceOptions.ILoadGeojsonOptions> {
      /**
       * 通过url加载
       * @param url
       */
      loadUrl(url: string): Promise<boolean>;
      /**
       * @description 用于加载geojson数据
       *
       * @param {geojson.GeometryObject} options 参数
       */
      load(options: geojson.GeometryObject): this;
    }
    var LoadGeojson: IServiceConstructor<
      "cesium",
      ServiceOptions.ILoadGeojsonOptions,
      ILoadGeojson
    >;
  }
}
