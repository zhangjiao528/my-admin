namespace BimMap {
  namespace Leaflet {
    interface IAreaMapStyle
      extends IFeatureHandle<"leaflet">,
        State.IBaseState<"leaflet", ServiceOptions.IAreaMapStyleOptions> {
      /**
       * 初始化地图区域样式
       * @param {string | BimMap.IFeatureCollection} url 加载geojson数据地址或者geojson数据
       * @param {L.GeoJSONOptions<any, geojson.Geometry>} options 加载geojson的额外参数
       * @return Promise<boolean>
       */
      initAreaMapStyle(
        url: string | BimMap.IFeatureCollection,
        options?: L.GeoJSONOptions<any, geojson.Geometry>
      ): Promise<boolean>;
      /**
       * 设置区域样式(不会改变默认参数值)
       * @param options
       */
      setAreaStyle(options: ServiceOptions.IAreaMapStyleOptions);
      /**
       * 设置区域子集样式(不会改变默认参数值)
       * @param feature 子对象
       * @param options
       */
      setChildAreaStyle(
        feature: L.Layer | L.Layer[],
        options?: ServiceOptions.IAreaMapStyleOptions
      );
    }
    var AreaMapStyle: IServiceConstructor<
      "leaflet",
      ServiceOptions.IAreaMapStyleOptions,
      IAreaMapStyle
    >;
  }
}
