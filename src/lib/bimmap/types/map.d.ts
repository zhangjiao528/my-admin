export as namespace BimMap;
// export = BimMap;
declare namespace BimMap {
  /**
   * 地图类型(参数选项与类)
   */
  interface IMapType<T extends "o" | "c" = "o"> {
    ol: T extends "o" ? OL.IOLOptions : OService;
    leaflet: T extends "o" ? Leaflet.ILeafletOptions : LService;
    cesium: T extends "o" ? Csm.ICesiumOptions : CService;
    supermap: T extends "o" ? Supermap.ICesiumOptions : SService;
  }
  type MapType = keyof IMapType;
  type GetMapTypeInstance<INST extends MapType> = IMapType<"c">[INST];
  type GetMapTypeInstanceOptions<OT extends MapType> = IMapType<"o">[OT];

  interface IMapInitParams {
    /**
     * 使用指定版本
     */
    version?: string;
    /**
     * 插件名称
     */
    plugin?: string[];
    /**
     * 基URL
     */
    baseUrl?: string;
    /**
     * 额外的样式url
     */
    extraStyleUrl?: string[];
    /**
     * 额外的脚本url
     */
    extraScriptUrl?: string[];
  }
  /**
   * 地图核心函数
   */
  declare class MapInit<MIT extends MapType> {
    constructor(
      options: BimMap.GetMapTypeInstanceOptions<MIT>,
      type: BimMap.MapType = "ol",
      params?: IMapInitParams
    );
    /**
     * SDK版本
     */
    static version: string;
    /**
     * @private
     *
     * @description MapInit 类的私有方法,用于创建 Map 对象的实例
     *
     * @param {Object} options
     * @param {String} options.target 用于渲染地图的 dom 标签
     * @param {Boolean | UseControl} [options.useControl] 用于判断是否使用地图自带控制功能,默认参数为 false
     * @param {Boolean} [options.doubleClickZoom] 双击放大地图,默认为关闭
     * @return {GetMapTypeInstance<MIT>} 返回一个 Map 对象实例
     */
    get service(): GetMapTypeInstance<MIT>;
    /**
     * 清除html转换缓存
     */
    clearHtmlCanvasCache(): void;
    /**
     * mapService已就绪
     * @param method
     */
    ready(method: (map: GetMapTypeInstance<MIT>) => void): void;
    /**
     * 释放资源
     */
    dispose(): void;
  }

  /**
   * 获取地图核心函数
   * @param options
   * @param type
   */
  declare function getMapService<MST extends BimMap.MapType = "ol">(
    options: BimMap.GetMapTypeInstanceOptions<MST>,
    type: BimMap.MapType = "ol"
  ): BimMap.GetMapTypeInstance<MST>;

  /**
   * 设置全局通用默认样式
   * @param callback
   */
  declare function setDefaultStyle(
    callback: (config: BimMap.Style.IDefaultStyle) => void
  ): void;

  /**
   * 各地图实现层必须继承的接口
   */
  interface IOneMapCore extends IDispose {
    /**
     * @description 注册事件的方法
     *
     * @param {String | Array<String>} eventName 需要注册的事件类型
     * @param {Function} callBack 回调函数
     * @return {any}
     */
    on(eventName, callBack): any;
  }

  /**
   * openlayer地图实现
   */
  interface IOneMapOL extends IOneMapCore {}
  /**
   * leaflet地图实现
   */
  interface IOneMapLeaflet extends IOneMapCore {}
  /**
   * cesium地图实现
   */
  interface IOneMapCesium extends IOneMapCore {}

  /**
   * geojson
   */
  interface IFeatureCollection {
    type: string;
    features: any[];
  }
  /**
   * 默认的视图图元参数
   */
  interface IFeature extends IMapAny {
    /**
     * 主键
     */
    id?: string | number;
    /**
     * 经纬度(点类必须)
     */
    point?: LngLatType;
    /**
     * 经纬度集合(线类、网格类、动画轨迹类必传)
     */
    points?: LngLatType[];
    /**
     * 经纬度必须(同point)
     */
    position?: LngLatType;
    /**
     * 标签
     */
    label?: string;
  }
  /**
   * 默认覆盖物接口
   */
  interface IOverlayOptions
    extends IFeature,
      Pick<IConstructorOptions, "name"> {
    name?: string;
    /**
     * dom 或者 dom 字符串模板
     */
    element?: string | HTMLElement;
    /**
     * dom 对于 position 的定位方式
     */
    positioning?: string;
    /**
     * dom 的 css 类名
     */
    className?: string;
    /**
     * 是否禁止事件传递到地图视图, 默认为否,不禁止
     */
    stopEvent?: boolean;
    /**
     * 偏移量 [x, y]
     *
     * @defaultValue `[0, 0]`
     */
    offset?: [number, number];
    /**
     * 生成title
     */
    useTitle?: boolean;
    /**
     * 是否贴地设置(cesium三维专属设置)
     */
    clampToGround?: boolean;
  }
  interface IOverlayHandleParams {
    /**
     * 双击移除覆盖物
     */
    dblclickRemove?: boolean;
  }
  /**
   * 全局操作参数
   */
  interface IAppHandlerOptions {
    /**
     * 禁用所有
     */
    disabled?: boolean;
    /**
     * 禁用点击
     */
    disabledClick?: boolean;
    /**
     * 禁用双击
     */
    disabledDblClick?: boolean;
    /**
     * 禁用右键
     */
    disabledContextmenu?: boolean;
    /**
     * 禁用移动
     */
    disabledMove?: boolean;
    /**
     * 禁用缩放
     */
    disabledWheel?: boolean;
    /**
     * 禁用三维相机变化时
     */
    disabledCameraChanged?: boolean;
  }
  interface IEventControlParams {
    /**
     * 不受控
     */
    uncontrolled?: boolean;
  }
  interface IAppHandler
    extends ICustomEventService,
      IOptions<Required<IAppHandlerOptions>> {
    /**
     * 设置参数选项
     * @param options
     */
    setOptions(options?: IAppHandlerOptions);
    /**
     * 验证事件控制
     * @param params
     */
    judgeControl(params?: IEventControlParams): boolean;
    /**
     * 验证cesium事件
     * @param type 事件类型
     * @param params 事件控制
     */
    judgeCesium(
      type: Cesium.ScreenSpaceEventType | Cesium.CameraEventType,
      params?: IEventControlParams
    ): boolean;
    /**
     * 验证openlayer事件
     * @param type 事件类型
     * @param params 事件控制
     */
    judgeOpl(type: string, params?: IEventControlParams): boolean;
  }
  /**
   * 当前地图实例
   */
  interface IMap<T, OS = any> {
    map: T;
    [key: keyof OS]: OS[key];
  }
  /**
   * 合并map参数对象
   */
  type MapMerge<T, OS = any> = IMap<T> & OS;
  /**
   * 合并两个类型
   */
  type MergeType<TT, PT> = TT & PP;
  /**
   * 经纬度高度类型
   */
  type LngLatType = [number, number, number?] | Array<number>;
  /**
   * 函数类型
   */
  type ResultFunction<PA = any[], RE = void> = (...params: PA) => Result;
  /**
   * 坐标
   */
  interface IPoint {
    x: number;
    y: number;
  }
  /**
   * 默认的构造函数参数
   */
  interface IConstructorOptions {
    /**
     * 名称
     */
    name?: string;
    /**
     * 图层层级
     */
    zIndex?: number;
  }
  /**
   * 动画参数
   */
  interface IAnimationParams extends IMapAny {
    /**
     * 动画时间(聚合使用)
     */
    duration?: number;
  }
  /**
   * 参数选项
   */
  interface IOptions<O extends IMapAny> {
    /**
     * 参数选项
     */
    get options(): O;
  }
  /**
   * 任意键值对
   */
  interface IMapAny<MA = any> {
    [key: string]: MA;
  }
  /**
   * 资源释放
   */
  interface IDispose {
    /**
     * 释放资源
     */
    dispose(): void;
  }
  /**
   * 自定义事件
   */
  interface ICustomEventService extends IDispose {
    /**
     * 注册事件监听
     * @param type 事件类型
     * @param fun 事件回调
     * @return symbol(可用于移除事件的唯一key值)
     */
    addEventListener(type: string, fun: Function): symbol;
    /**
     * 移除事件监听
     * @param type 事件类型
     * @param fun 事件回调
     */
    removeEventListener(type: string, fun: Function);
    /**
     * 通过注册事件时返回的唯一key值移除事件
     * @param key
     */
    removeEventListenerKey(key: symbol);
    /**
     * 触发指定类型的事件
     * @param type 事件类型
     * @param params 额外参数
     */
    fire(type: string, ...params: any);
    /**
     * 根据唯一key触发指定类型的事件
     * @param key 事件类型
     * @param params 额外参数
     */
    fireKey(key: symbol, ...params: any);
    /**
     * 清除所有的事件监听器
     */
    clearAllEventListeners();
  }
}
