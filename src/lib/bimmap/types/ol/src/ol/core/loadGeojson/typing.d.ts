namespace BimMap {
  namespace OL {
    interface ILoadGeojson
      extends IFeatureHandle<"ol">,
        State.IBaseState<"ol", ServiceOptions.ILoadGeojsonOptions> {
      /**
       * 通过url加载
       * @param url
       */
      loadUrl(url: string): Promise<boolean>;
      /**
       * @description 用于加载geojson数据
       *
       * @param {ol.format.GeoJSON} options 参数
       */
      load(options: ol.format.GeoJSON): this;
    }
    var LoadGeojson: IServiceConstructor<
      "ol",
      ServiceOptions.ILoadGeojsonOptions,
      ILoadGeojson
    >;
  }
}
