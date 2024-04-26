namespace BimMap {
  namespace Csm {
    interface ITileLayerAdminParams {
      /**
       * 设置图层名称
       */
      name?: string;

      /**
       * 聚焦到图层(必须设置bounds)
       */
      flyTo?: boolean;
      /**
       * 飞行动画要达到的层级
       */
      zoom?: number;

      /**
       * 图层边界
       */
      bounds?: [BimMap.LngLatType, BimMap.LngLatType];

      /**
       * 图层透明度
       */
      opacity?: number;
      /**
       * 最小层级
       */
      minZoom?: number;
      /**
       * 最大层级
       */
      maxZoom?: number;
    }
    interface ITileLayerAdmin extends IDispose {
      /**
       * @description 加载kml
       *
       * @param {string} url 地址
       *
       * @param {ITileLayerAdminParams} params 额外参数
       */
      load(url: string, params?: ITileLayerAdminParams): this;

      /**
       * 查找
       * @param name
       */
      find(name: string): Cesium.ImageryLayer | undefined;
      /**
       * 删除图层
       * @param name 不传将删除所有
       */
      remove(name?: string): this;
      /**
       * 设置图层显隐
       * @param name load时为图层添加的自定义名称
       * @param viisble 显隐
       */
      setVisible(name: string, viisble: boolean): this;
    }
    var TileLayerAdmin: IServiceConstructor<
      "cesium",
      ServiceOptions.ITileLayerAdminOptions,
      ITileLayerAdmin
    >;
  }
}
