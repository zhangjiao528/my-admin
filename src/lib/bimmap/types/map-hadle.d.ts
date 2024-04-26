/**
 * 操作手柄
 */
namespace BimMap {
  interface IBimMapHandle extends IMapType {
    ol: {
      map: ol.Map;
      feature: ol.Feature<ol.geom.Geometry>;
      layer: ol.layer.Vector<ol.source.Vector<ol.geom.Geometry>>;
      overlay: ol.Overlay;
      select: ol.interaction.Select;

      style: ol.Style | ol.Style[];
    };
    leaflet: {
      map: L.Map;
      feature: L.Layer;
      layer: L.FeatureGroup;
      overlay: L.DivOverlay;
      select: any;

      style: BimMap.Style.Leaflet.IConvertStyleOptions;
    };
    cesium: {
      map: Cesium.CustomViewer;
      feature: Cesium.CustomEntity;
      layer: Cesium.DataSource;
      overlay: Cesium.DivOverlay;
      select: any;

      style: BimMap.Style.Csm.IConvertStyleOptions;
    };
    supermap: {
      map: Cesium.CustomViewer;
      feature: Cesium.CustomEntity;
      layer: Cesium.DataSource;
      overlay: Cesium.DivOverlay;
      select: any;

      style: BimMap.Style.Csm.IConvertStyleOptions;
    };
  }

  /**
   * 地图事件
   */
  interface IMapEventHandle {
    /**
     * @description 注册事件的方法
     *
     * @param {String} eventName 需要注册的事件类型
     * @param {Function} callBack 回调函数
     * @return {any}
     */
    on(eventName: string, callBack: (e: any) => void): this;
    /**
     * @description 解除注册事件的方法
     * @param {String} eventName 需要注册的事件类型
     * @param {Function} callBack 回调函数
     * @return {any}
     */
    off(eventName: string, callBack: (e: any) => void): this;
  }

  /**
   * 图层操作
   */
  interface ILayerHandle<HK extends MapType> extends IDispose {
    /**
     * 图层
     */
    get layers(): Array<IBimMapHandle[HK]["layer"]>;
    /**
     * @description 添加 layer 到 map 实例上
     *
     * @param {IBimMapHandle[HK]["layer"]} options layer 实例或者 layer实例组成的数组
     */
    addLayer(
      layers: IBimMapHandle[HK]["layer"] | Array<IBimMapHandle[HK]["layer"]>
    ): this;
    /**
     * @description 判断图层是否存在
     *
     * @param {IBimMapHandle[HK]["layer"]} layer layer 实例
     */
    hasLayer(layer: IBimMapHandle[HK]["layer"]);
    /**
     * @description 移除矢量图形
     *
     * @param {IBimMapHandle[HK]["layer"]} layer layer 实例或 layer 实例数组
     */
    removeLayer(
      layer?: IBimMapHandle[HK]["layer"] | Array<IBimMapHandle[HK]["layer"]>
    ): this;
    /**
     * 清空元素
     */
    clearLayers(): this;
    /**
     * 获取元素集合(通过set添加的数据)
     * @param key 元素中set的属性
     * @param value set属性的值
     * @returns 元素数组
     */
    getLayers(
      key: string | Record<string, any>,
      value?: any
    ): IBimMapHandle[HK]["layer"][];
    /**
     * @description 根据传入大参数返回查询到的 layer 实例数组
     *
     * @param {String | String[]} options layer 的名字或名字数组
     * @returns {Array<ol.layer.BaseLayer>} layer 实例所组成的数组
     */
    searchLayers(options: string | string[]): Array<IBimMapHandle[HK]["layer"]>;
    /**
     * 过滤元素
     * @param callback 函数回调
     * @return 返回元素数组
     */
    filterLayer(
      callback: (layer: IBimMapHandle[HK]["layer"], index: number) => boolean
    ): Array<IBimMapHandle[HK]["layer"]>;
    /**
     * 查找元素
     * @param callback 函数回调
     * @return 返回元素
     */
    findLayer(
      callback: (layer: IBimMapHandle[HK]["layer"], index: number) => boolean
    ): IBimMapHandle[HK]["layer"] | undefined;
    /**
     * 查找元素索引
     * @param callback 函数回调
     * @return 返回元素索引
     */
    findIndexLayer(
      callback: (layer: IBimMapHandle[HK]["layer"], index: number) => boolean
    ): number;
    /**
     * 循环元素
     * @param callback 函数回调
     */
    forEachLayer(
      callback: (layer: IBimMapHandle[HK]["layer"], index: number) => boolean
    ): this;
    /**
     * 过滤显隐元素
     * @param callback 过滤函数回调
     * @param visible 显隐
     */
    filterVisibleLayer(
      callback: (data: any, layer: IBimMapHandle[HK]["layer"]) => boolean,
      visible?: boolean
    ): this;
    /**
     * @description 设置要素图层 显隐，要求图标必须设置名称
     * @param {String | String[]} name 名称
     * @param {Boolean} visible 显示或隐藏
     * @returns
     */
    visibleLayers(name: string | string[], visible: boolean): this;
    /**
     * 过滤删除元素
     * @param callback 过滤函数回调
     */
    filterRemoveLayer(
      callback: (data: any, layer: IBimMapHandle[HK]["layer"]) => boolean
    ): this;
    /**
     * 根据图层名进行定位，可定位到某个/某几个
     * @param { String | String[] } name 名称
     * @param { Object } [options] 视角定位的一些参数项，如动画时长、内边距等
     * @param { Number } [options.duration] 动画持续时长(ms)，默认1000ms，
     * @param { Number[]} [options.padding] 内边距，[top, right, bottom, left] 默认全为0，可用来确保图标周围有足够的空间
     *
     * @returns
     *
     * @example
     *   mapInstance.zoomByLayers(["marker1", "line1"], {
     *      duration: 2000,
     *      padding: [20, 50, 20, 50],
     *   });
     */
    zoomByLayers(
      name: string | string[],
      options?: { duration?: number; padding?: number[] }
    ): this;
  }

  /**
   * 元素操作
   */
  interface IFeatureHandle<Fk extends MapType, O extends IMapAny = IMapAny>
    extends IOptions<O>,
      IDispose {
    /**
     * feature集合
     */
    get features(): IBimMapHandle[Fk]["feature"][];
    /**
     * feature图层
     */
    get layer(): IBimMapHandle[Fk]["layer"];
    /**
     * 地图实例
     */
    get map(): IBimMapHandle[Fk]["map"];
    /**
     * 是否展示
     */
    get show(): boolean;
    /**
     * 设置显隐
     */
    set show(s: boolean): void;
    /**
     * 添加元素
     * @param feature
     */
    addFeature(
      feature: IBimMapHandle[Fk]["feature"] | IBimMapHandle[Fk]["feature"][]
    ): this;
    /**
     * @description 判断要素是否存在
     *
     * @param {IBimMapHandle[Fk]["feature"]} feature feature 实例
     */
    hasFeature(feature: IBimMapHandle[Fk]["feature"]);
    /**
     * @description 移除矢量图形
     *
     * @param {IBimMapHandle[Fk]["feature"]} feature feature 实例或 feature 实例数组
     */
    removeFeature(
      feature: IBimMapHandle[Fk]["feature"] | IBimMapHandle[Fk]["feature"][]
    ): this;
    /**
     * 清空元素
     */
    clearFeatures(): this;
    /**
     * 获取元素集合(通过set添加的数据)
     * @param key 元素中set的属性
     * @param value set属性的值
     * @returns 元素数组
     */
    getFeatures(
      key: string | Record<string, any>,
      value?: any
    ): IBimMapHandle[Fk]["feature"][];
    /**
     * 过滤元素
     * @param callback 函数回调
     * @return 返回元素数组
     */
    filter(
      callback: (
        feature: IBimMapHandle[Fk]["feature"],
        index: number
      ) => boolean
    ): IBimMapHandle[Fk]["feature"][];
    /**
     * 查找元素
     * @param callback 函数回调
     * @return 返回元素
     */
    find(
      callback: (
        feature: IBimMapHandle[Fk]["feature"],
        index: number
      ) => boolean
    ): IBimMapHandle[Fk]["feature"] | undefined;
    /**
     * 查找最后一个满足元素
     * @param callback 函数回调
     * @return 返回元素
     */
    findLast(
      callback: (
        feature: IBimMapHandle[Fk]["feature"],
        index: number
      ) => boolean
    ): IBimMapHandle[Fk]["feature"] | undefined;
    /**
     * 查找元素索引
     * @param callback 函数回调
     * @return 返回元素索引
     */
    findIndex(
      callback: (
        feature: IBimMapHandle[Fk]["feature"],
        index: number
      ) => boolean
    ): number;
    /**
     * 查找最后一个满足元素索引
     * @param callback 函数回调
     * @return 返回元素索引
     */
    findLastIndex(
      callback: (
        feature: IBimMapHandle[Fk]["feature"],
        index: number
      ) => boolean
    ): number;
    /**
     * 循环元素
     * @param callback 函数回调
     */
    forEach(
      callback: (feature: IBimMapHandle[Fk]["feature"], index: number) => void
    ): this;
    /**
     * 过滤显隐元素
     * @param callback 过滤函数回调
     */
    filterVisible(
      callback: (data: any, feature: IBimMapHandle[Fk]["feature"]) => boolean
    ): this;
    /**
     * 过滤删除元素
     * @param callback 过滤函数回调
     */
    filterRemove(
      callback: (data: any, feature: IBimMapHandle[Fk]["feature"]) => boolean
    ): this;
  }

  /**
   * 覆盖物
   */
  interface IOverlayHandle<OK extends MapType> extends IDispose {
    /**
     * 地图实例对象
     */
    get map(): IBimMapHandle[OK]["map"];
    /**
     * 覆盖物集合
     */
    get overlays(): IBimMapHandle[OK]["overlay"][];
    /**
     * @description 添加 overlay 到 map 实例上
     *
     * @param {IBimMapHandle[OK]["overlay"]} options overlay 实例或者 overlay实例组成的数组
     */
    addOverlay(
      overlays: IBimMapHandle[OK]["overlay"] | IBimMapHandle[OK]["overlay"][]
    ): this;
    /**
     * @description 移除矢量图形
     *
     * @param {string | IBimMapHandle[OK]["overlay"]} overlay overlay 实例或 overlay 实例数组
     */
    removeOverlay(
      overlay?:
        | string
        | string[]
        | IBimMapHandle[OK]["overlay"]
        | IBimMapHandle[OK]["overlay"][]
    ): this;
    /**
     * 清空元素
     */
    clearOverlays(): this;
    /**
     * 获取元素集合(通过set添加的数据)
     * @param key 元素中set的属性
     * @param value set属性的值
     * @returns 元素数组
     */
    getOverlays(
      key: string | Record<string, any>,
      value?: any
    ): IBimMapHandle[OK]["overlay"][];
    /**
     * @description 根据传入大参数返回查询到的 layer 实例数组
     *
     * @param {String | String[]} options layer 的名字或名字数组
     * @returns {Array<ol.Overlay>} layer 实例所组成的数组
     */
    searchOverlays(options: string | string[]): IBimMapHandle[OK]["overlay"][];
    /**
     * 过滤元素
     * @param callback 函数回调
     * @return 返回元素数组
     */
    filter(
      callback: (
        overlay: IBimMapHandle[OK]["overlay"],
        index: number
      ) => boolean
    ): IBimMapHandle[OK]["overlay"][];
    /**
     * 查找元素
     * @param callback 函数回调
     * @return 返回元素
     */
    find(
      callback: (
        overlay: IBimMapHandle[OK]["overlay"],
        index: number
      ) => boolean
    ): IBimMapHandle[OK]["overlay"] | undefined;
    /**
     * 查找元素索引
     * @param callback 函数回调
     * @return 返回元素索引
     */
    findIndex(
      callback: (
        overlay: IBimMapHandle[OK]["overlay"],
        index: number
      ) => boolean
    ): number;
    /**
     * 循环元素
     * @param callback 函数回调
     */
    forEach(
      callback: (
        overlay: IBimMapHandle[OK]["overlay"],
        index: number
      ) => boolean
    ): this;
    /**
     * 过滤显隐元素
     * @param callback 过滤函数回调
     */
    filterVisible(
      callback: (data: any, overlay: IBimMapHandle[OK]["overlay"]) => boolean
    ): this;
    /**
     * 过滤删除元素
     * @param callback 过滤函数回调
     */
    filterRemove(
      callback: (data: any, overlay: IBimMapHandle[OK]["overlay"]) => boolean
    ): this;
  }
}
