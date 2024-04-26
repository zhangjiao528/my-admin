namespace BimMap {
  namespace Csm {
    interface IAreaMapStyle
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", ServiceOptions.IAreaMapStyleOptions> {
      /**
       * 初始化地图区域样式
       * @param {string | BimMap.IFeatureCollection} url 加载geojson数据地址或者geojson数据
       * @param {Cesium.GeoJsonDataSource.LoadOptions} options 加载geojson的额外参数
       * @return Promise<boolean>
       */
      initAreaMapStyle(
        url: string | BimMap.IFeatureCollection,
        options?: Cesium.GeoJsonDataSource.LoadOptions
      ): Promise<boolean>;
      /**
       * 设置区域样式(不会改变默认参数值)
       * @param options
       */
      setAreaStyle(
        options: ServiceOptions.IAreaMapStyleOptions
        /**
         * 设置区域子集样式(不会改变默认参数值)
         * @param feature 子对象
         * @param options
         */
      );
      setChildAreaStyle(
        feature: Cesium.CustomEntity | Cesium.CustomEntity[],
        options?: ServiceOptions.IAreaMapStyleOptions
      );
    }
    var AreaMapStyle: IServiceConstructor<
      "cesium",
      ServiceOptions.IAreaMapStyleOptions,
      IAreaMapStyle
    >;
  }
}
