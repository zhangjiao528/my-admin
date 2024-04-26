namespace BimMap {
  namespace OL {
    interface IAreaMapStyle
      extends IFeatureHandle<"ol">,
        State.IBaseState<"ol", ServiceOptions.IAreaMapStyleOptions> {
      /**
       * 初始化地图区域样式
       * @param {string | BimMap.IFeatureCollection} url 加载geojson数据地址或者geojson数据
       * @param {ol.format.Feature.ReadOptions} options 加载geojson的额外参数
       * @return Promise<boolean>
       */
      initAreaMapStyle(
        url: string | BimMap.IFeatureCollection,
        options?: ol.format.Feature.ReadOptions
        // mapLayer?: any,
        // convertPointCallback?: (
        //   features: ol.Feature<ol.geom.Geometry>[]
        // ) => Array<Array<[number, number]>>,
        // fitler?: string
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
        feature: ol.Feature<ol.geom.Geometry> | ol.Feature<ol.geom.Geometry>[],
        options?: ServiceOptions.IAreaMapStyleOptions
      );
    }
    var AreaMapStyle: IServiceConstructor<
      "ol",
      ServiceOptions.IAreaMapStyleOptions,
      IAreaMapStyle
    >;
  }
}
