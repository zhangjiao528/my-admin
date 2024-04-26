namespace BimMap {
  namespace Supermap{
    interface ILoadGeojson
      extends IFeatureHandle<"supermap">,
        State.IBaseState<"supermap", ServiceOptions.ILoadGeojsonOptions> {
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
      "supermap",
      ServiceOptions.ILoadGeojsonOptions,
      ILoadGeojson
    >;
  }
}
