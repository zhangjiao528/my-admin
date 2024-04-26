export as namespace Cesium;
declare namespace Cesium {
  export * from "cesium";

  export function fromLonLat(
    lngLat: BimMap.LngLatType,
    height?: number
  ): Cesium.Cartesian3;
  export function toLonLat(
    cartesian3: Cesium.Cartesian3,
    height?: number
  ): BimMap.LngLatType;
  export function toLonLat(
    cartesian3: Cesium.Cartesian3[],
    height?: number
  ): BimMap.LngLatType[];
  export function Heatmap(
    viewer: Cesium.CustomViewer,
    bounds: { east: number; north: number; south: number; west: number },
    options?: ICesiumHeatmapOptions
  ): any;
  export class DivOverlay extends BaseExendProperty<DivOverlay> {
    getLatLng(): BimMap.LngLatType;
    setLatLng(latlng: BimMap.LngLatType): void;
    getElement(): HTMLDivElement;
    setContent(content: string | HTMLElement): void;
    addTo(map: Cesium.CustomViewer): void;
    remove(): void;
  }
  export type DivOverlayOptions = L.PopupOptions & {
    offset?: [number, number];
    clampToGround?: boolean;
  } & BimMap.IMapAny;
  export function popup(options: DivOverlayOptions): DivOverlay;
  export interface ICesiumHeatmapOptions {
    radius?: number;
    maxOpacity?: number;
    minOpacity?: number;
    blur?: number;
    gradient?: any;
  }
  export interface ICameraVisualAngleOptions {
    position: { longitude: number; latitude: number; height: number };
    /**
     * 方向
     */
    heading: number;
    /**
     * 倾斜角
     */
    pitch: number;
    /**
     * 转向
     */
    roll: number;
  }
  export interface ICameraFlyToOptions {
    destination: Cesium.Cartesian3 | Cesium.Rectangle;
    orientation?: any;
    duration?: number;
    complete?: Cesium.Camera.FlightCompleteCallback;
    cancel?: Cesium.Camera.FlightCancelledCallback;
    endTransform?: Cesium.Matrix4;
    maximumHeight?: number;
    pitchAdjustHeight?: number;
    flyOverLongitude?: number;
    flyOverLongitudeWeight?: number;
    convert?: boolean;
    easingFunction?: Cesium.EasingFunction.Callback;
  }
  export interface ICameraSetViewOptions {
    destination?: Cesium.Cartesian3 | Cesium.Rectangle;
    orientation?: Cesium.HeadingPitchRollValues | Cesium.DirectionUp;
    endTransform?: Cesium.Matrix4;
    convert?: boolean;
  }
  export type CameraEventType = "changed" | "moveEnd" | "moveStart";
  export interface ICameraService extends BimMap.IDispose {
    /**
     * 绑定map事件
     * @param type 事件类型
     * @param fun 回调函数
     * @param key 自定义名称
     * @param uncontrolled 不受控
     */
    on(
      type: Cesium.ScreenSpaceEventType,
      fun: (feature: any, e: any) => void,
      key?: string | Symbol,
      parmas?: BimMap.IEventControlParams
    ): this;
    /**
     * 移除map事件
     * @param key 自定义名称或事件
     */
    off(
      key: string | Symbol | Function,
      type?: Cesium.ScreenSpaceEventType
    ): this;
    /**
     * 是否名称是否是相机事件类型
     * @param name
     */
    hasCameraEventType(name: any): name is Cesium.CameraEventType;
    /**
     * 绑定相机事件
     * @param type 类型
     * @param fun 回调
     * @param key 自定名称
     * @param params 事件控制
     */
    onCamera(
      type: Cesium.CameraEventType,
      fun: (e: any) => void,
      key?: string | symbol,
      params?: BimMap.IEventControlParams
    ): this;
    /**
     * 移除相机事件
     * @param key 名称/函数，不传清除所有
     */
    offCamera(
      key?: Function | symbol | string,
      type?: Cesium.CameraEventType
    ): this;
    /**
     * 绑定zoom事件
     * @param fun 回调
     * @param params 事件控制参数
     */
    onZoom(
      fun: (zoom: number, e: any) => void,
      params?: BimMap.IEventControlParams
    ): this;
    /**
     * 移除zoom事件
     * @param fun 绑定的回调，不传移除所有
     */
    offZoom(fun?: Function): this;
    /**
     * 根据经纬度设置地图展示视图
     * @param west
     * @param south
     * @param east
     * @param north
     */
    viewToExtents(
      west: number,
      south: number,
      east: number,
      north: number
    ): this;
    /**
     * 设置地形透视开关
     * @param bool
     */
    setDepthTestAgainstTerrain(bool: boolean): this;
    /**
     * 设置相机视角
     */
    setCameraVisualAngle(
      options: ICameraVisualAngleOptions,
      params?: IMapAny
    ): this;
    /**
     * 获取相机视角
     */
    getCameraVisualAngle(): ICameraVisualAngleOptions;
    /**
     * 地图定位到实体
     * @param entity
     * @param offset
     * @returns
     */
    zoomTo(
      entity: any,
      offset?: Cesium.HeadingPitchRange,
      isCancelLast?: boolean
    ): Promise<boolean>;
    /**
     * 地图飞到实体
     * @param entity
     * @param offset
     * @returns
     */
    mapFlyTo(
      entity: any,
      options?: {
        duration?: number;
        maximumHeight?: number;
        offset?: Cesium.HeadingPitchRange;
      },
      isCancelLast?: boolean
    ): Promise<boolean>;
    /**
     * 飞到指定位置
     * @param options
     */
    flyTo(options: ICameraFlyToOptions, isCancelLast?: boolean): this;
    /**
     * 飞到指定位置BoundingSphere
     * @param boundingSphere
     * @param options
     * @param isCancelLast
     */
    flyToBoundingSphere(
      boundingSphere: Cesium.BoundingSphere,
      options?: Omit<ICameraFlyToOptions, "destination">,
      isCancelLast?: boolean
    ): this;
    /**
     * 设置视图位置
     * @param options
     */
    setView(options: ICameraSetViewOptions, isCancelLast?: boolean): this;
    /**
     * 设置视图位置到指定高度(存在部分默认值)
     * @param position
     * @param height
     * @param options
     * @param isCancelLast
     */
    setViewToHeight(
      position: Cesium.Cartesian3,
      height: number = 1000,
      options?: Cesium.ICameraSetViewOptions,
      isCancelLast?: boolean
    ): this;
    /**
     * 清除所有绑定的事件
     */
    clear(): void;
  }
  export class CustomViewer extends Cesium.Viewer {
    _cameraService: ICameraService;
    _appHandler: BimMap.IAppHandler;
    getMinZoom(): number;
    getMaxZoom(): number;
    getZoom(): number;
    getHeight(): number;
    getMaxHeight(): number;
    getMinHeight(): number;
    getCameraProperty(): { heading: number; pitch: number; roll: number };
    addDivOverlay(overlay: DivOverlay): void;
    removeDivOverlay(overlay: DivOverlay): void;
    // setZoom(zoom: number): void;
  }
  export class BaseExendProperty<ET> {
    options?: BimMap.IMapAny;
    /**
     * 判断属性是否存在
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    has(name: string, isRoot?: boolean): any;
    /**
     * 获取属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    get(name: string, isRoot?: boolean): any;
    /**
     * 设置属性
     * @param name 名称
     * @param value 值
     * @param isRoot 是否本节点非options
     */
    set(name: string | BimMap.IMapAny, value?: any, isRoot?: boolean): boolean;
    /**
     * 移除设置的属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    unset(name: string, isRoot?: boolean): any;
    /**
     * 设置属性集
     * @param prop
     */
    setProperties(prop: BimMap.IMapAny): void;
    /**
     * 获取属性集
     */
    getProperties(): BimMap.IMapAny;

    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Csm.IConvertStyleOptions
        | ((layer: ET) => BimMap.Style.Csm.IConvertStyleOptions)
    ): void;
    /**
     * 获取样式
     */
    getStyle():
      | BimMap.Style.Csm.IConvertStyleOptions
      | ((layer: ET) => BimMap.Style.Csm.IConvertStyleOptions);
  }
  export class BimMapDataSource extends Cesium.CustomDataSource {
    options?: BimMap.IMapAny;
    /**
     * 判断属性是否存在
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    has(name: string, isRoot?: boolean): any;
    /**
     * 获取属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    get(name: string, isRoot?: boolean): any;
    /**
     * 设置属性
     * @param name 名称
     * @param value 值
     * @param isRoot 是否本节点非options
     */
    set(name: string | BimMap.IMapAny, value?: any, isRoot?: boolean): boolean;
    /**
     * 移除设置的属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    unset(name: string, isRoot?: boolean): any;
    /**
     * 设置属性集
     * @param prop
     */
    setProperties(prop: BimMap.IMapAny): void;
    /**
     * 获取属性集
     */
    getProperties(): BimMap.IMapAny;
    // setStyle(options: L.PathOptions): this;
    // getStyle(): L.PathOptions;

    // setStyle(options: L.DivIconOptions): this;
    // getStyle(): L.DivIconOptions;

    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Csm.IConvertStyleOptions
        | ((
            layer: Cesium.BimMapDataSource
          ) => BimMap.Style.Csm.IConvertStyleOptions)
    ): void;
    /**
     * 获取样式
     */
    getStyle():
      | BimMap.Style.Csm.IConvertStyleOptions
      | ((
          layer: Cesium.BimMapDataSource
        ) => BimMap.Style.Csm.IConvertStyleOptions);
  }
  export class CustomImageryLayer extends Cesium.ImageryLayer {
    options?: BimMap.IMapAny;
    /**
     * 判断属性是否存在
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    has(name: string, isRoot?: boolean): any;
    /**
     * 获取属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    get(name: string, isRoot?: boolean): any;
    /**
     * 设置属性
     * @param name 名称
     * @param value 值
     * @param isRoot 是否本节点非options
     */
    set(name: string | BimMap.IMapAny, value?: any, isRoot?: boolean): boolean;
    /**
     * 移除设置的属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    unset(name: string, isRoot?: boolean): any;
    /**
     * 设置属性集
     * @param prop
     */
    setProperties(prop: BimMap.IMapAny): void;
    /**
     * 获取属性集
     */
    getProperties(): BimMap.IMapAny;
    // setStyle(options: L.PathOptions): this;
    // getStyle(): L.PathOptions;

    // setStyle(options: L.DivIconOptions): this;
    // getStyle(): L.DivIconOptions;

    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Csm.IConvertStyleOptions
        | ((
            layer: Cesium.CustomImageryLayer
          ) => BimMap.Style.Csm.IConvertStyleOptions)
    ): void;
    /**
     * 获取样式
     */
    getStyle():
      | BimMap.Style.Csm.IConvertStyleOptions
      | ((
          layer: Cesium.CustomImageryLayer
        ) => BimMap.Style.Csm.IConvertStyleOptions);
  }
  export class CustomPrimitive extends Cesium.Primitive {
    options?: BimMap.IMapAny;
    /**
     * 判断属性是否存在
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    has(name: string, isRoot?: boolean): any;
    /**
     * 获取属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    get(name: string, isRoot?: boolean): any;
    /**
     * 设置属性
     * @param name 名称
     * @param value 值
     * @param isRoot 是否本节点非options
     */
    set(name: string | BimMap.IMapAny, value?: any, isRoot?: boolean): boolean;
    /**
     * 移除设置的属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    unset(name: string, isRoot?: boolean): any;
    /**
     * 设置属性集
     * @param prop
     */
    setProperties(prop: BimMap.IMapAny): void;
    /**
     * 获取属性集
     */
    getProperties(): BimMap.IMapAny;
    // setStyle(options: L.PathOptions): this;
    // getStyle(): L.PathOptions;

    // setStyle(options: L.DivIconOptions): this;
    // getStyle(): L.DivIconOptions;

    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Csm.IConvertStyleOptions
        | ((
            layer: Cesium.CustomPrimitive
          ) => BimMap.Style.Csm.IConvertStyleOptions)
    ): void;
    /**
     * 获取样式
     */
    getStyle():
      | BimMap.Style.Csm.IConvertStyleOptions
      | ((
          layer: Cesium.CustomPrimitive
        ) => BimMap.Style.Csm.IConvertStyleOptions);
  }
  export class CustomEntity extends Cesium.Entity {
    options?: BimMap.IMapAny;
    /**
     * 判断属性是否存在
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    has(name: string, isRoot?: boolean): any;
    /**
     * 获取属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    get(name: string, isRoot?: boolean): any;
    /**
     * 设置属性
     * @param name 名称
     * @param value 值
     * @param isRoot 是否本节点非options
     */
    set(name: string | BimMap.IMapAny, value?: any, isRoot?: boolean): boolean;
    /**
     * 移除设置的属性
     * @param name 名称
     * @param isRoot 是否本节点非options
     */
    unset(name: string, isRoot?: boolean): any;
    /**
     * 设置属性集
     * @param prop
     */
    setProperties(prop: BimMap.IMapAny): void;
    /**
     * 获取属性集
     */
    getProperties(): BimMap.IMapAny;
    // setStyle(options: L.PathOptions): this;
    // getStyle(): L.PathOptions;

    // setStyle(options: L.DivIconOptions): this;
    // getStyle(): L.DivIconOptions;

    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Csm.IConvertStyleOptions
        | ((layer: Cesium.Entity) => BimMap.Style.Csm.IConvertStyleOptions)
    ): void;
    /**
     * 获取样式
     */
    getStyle():
      | BimMap.Style.Csm.IConvertStyleOptions
      | ((layer: Cesium.Entity) => BimMap.Style.Csm.IConvertStyleOptions);
  }
}
