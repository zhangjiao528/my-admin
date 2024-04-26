declare module L {
  interface IKMLConstructor {
    new (kml: string): L.FeatureGroup;
  }
  class WMSOverlay extends L.Layer {
    updateWmsParams: (map?: L.Map) => void;
  }
  interface IWMSOverlayConstructor {
    new (url: string, options?: BimMap.IMapAny): WMSOverlay;
  }
  const KML: IKMLConstructor;
  const WMS: {
    source: (url: string, options?: BimMap.IMapAny) => L.Layer;
    layer: (source: any, options?: BimMap.IMapAny) => L.Layer;
    overlay: (url: string, options?: BimMap.IMapAny) => L.Layer;
    Overlay: typeof WMSOverlay;
  };
  interface CircleMarker {
    _updatePath?: Function;
  }
  export function canvasMarker(
    latlng: LatLngExpression,
    options?: {
      item?: BimMap.IMapAny;
      label?: string;

      radius?: number;
      weight?: number;
      stroke?: boolean;
      fill?: boolean;
      color?: string;
      fillColor?: string;
      opacity?: number;
      fillOpacity?: number;
      img?: {
        url?: string;
        size?: [number, number];
        offset?: { x: number; y: number };
        el?: HTMLImageElement;
      };
    }
  ): L.CircleMarker;
  export function markerClusterGroup(
    options?: Partial<{
      /**
       * 最大聚合半径值：80
       */
      maxClusterRadius: number;
      iconCreateFunction: null | Function;
      clusterPane: string;
      spiderfyOnEveryZoom: boolean;
      spiderfyOnMaxZoom: boolean;
      showCoverageOnHover: boolean;
      zoomToBoundsOnClick: boolean;
      singleMarkerMode: boolean;
      disableClusteringAtZoom: null | boolean;
      removeOutsideVisibleBounds: boolean;
      animate: boolean;
      animateAddingMarkers: boolean;
      spiderfyShapePositions: any;
      spiderfyDistanceMultiplier: number;
      spiderLegPolylineOptions: {
        weight: number;
        color: string;
        opacity: number;
      };
      chunkedLoading: boolean;
      /**
       * 间隔：200
       */
      chunkInterval: number;
      /**
       * 延迟：50
       */
      chunkDelay: number;
      chunkProgress: any;
      polygonOptions: PolylineOptions;
    }>
  ): FeatureGroup;
  export function markerCluster(
    latlng: LatLngExpression,
    options?: MarkerOptions & IconOptions
  ): Marker;
  export function animatedMarker(
    latlng: LatLng[],
    options?: MarkerOptions & { onEnd?: Function }
  ): Marker;
  export function moveMarker(
    latlng: LatLng[],
    options?: PolylineOptions,
    options?: MarkerOptions,
    options?: any
  ): Marker;
  export function heatLayer(
    points: Array<number[]>,
    options?: {
      radius?: number;
      max?: number;
      maxZoom?: number;
      minOpacity?: number;
      blur?: number;
      gradient?: any;
    } & BimMap.IMapAny
  ): FeatureGroup;
  export function mapboxGL(params: any): TileLayer;
  export function fromLonLat(lngLat: BimMap.LngLatType): L.LatLng;
  export function fromLonLat(lngLat: BimMap.LngLatType[]): L.LatLng[];
  export function toLonLat(
    latitude:
      | number
      | L.LatLngTuple
      | [number, number, number]
      | L.LatLngLiteral
      | {
          lat: number;
          lng: number;
          alt?: number | undefined;
        },
    longitude?: number,
    altitude?: number
  ): BimMap.LngLatType;
  export interface PathOptions {
    kind?: "leaflet";
  }
  export interface DivIconOptions extends BimMap.IMapAny {
    /**
     * 公共数据参数对象
     */
    item?: BimMap.IMapAny;
  }
  export interface DivOverlayOptions extends BimMap.IMapAny {
    /**
     * 公共数据参数对象
     */
    item?: BimMap.IMapAny;
  }
  export interface MarkerOptions extends BimMap.IMapAny {
    /**
     * 公共数据参数对象
     */
    item?: BimMap.IMapAny;
  }
  export interface PolylineOptions extends BimMap.IMapAny {
    /**
     * 公共数据参数对象
     */
    item?: BimMap.IMapAny;
  }
  export interface FeatureGroup<P = any> {
    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Leaflet.IConvertStyleOptions
        | ((layer: this) => BimMap.Style.Leaflet.IConvertStyleOptions)
    ): this;
  }
  export interface Path {
    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Leaflet.IConvertStyleOptions
        | ((layer: this) => BimMap.Style.Leaflet.IConvertStyleOptions)
    ): this;
  }
  export interface Polygon {
    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Leaflet.IConvertStyleOptions
        | ((layer: this) => BimMap.Style.Leaflet.IConvertStyleOptions)
    ): this;
  }
  export interface Circle {
    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Leaflet.IConvertStyleOptions
        | ((layer: this) => BimMap.Style.Leaflet.IConvertStyleOptions)
    ): this;
  }
  export interface CircleMarker {
    /**
     * 设置样式
     * @param options
     */
    setStyle(
      options:
        | BimMap.Style.Leaflet.IConvertStyleOptions
        | ((layer: this) => BimMap.Style.Leaflet.IConvertStyleOptions)
    ): this;
  }
  export interface Layer {
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
    set(name: string, value: any, isRoot?: boolean): boolean;
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
        | BimMap.Style.Leaflet.IConvertStyleOptions
        | ((layer: L.Layer) => BimMap.Style.Leaflet.IConvertStyleOptions)
    ): void;
    /**
     * 获取样式
     */
    getStyle():
      | BimMap.Style.Leaflet.IConvertStyleOptions
      | ((layer: L.Layer) => BimMap.Style.Leaflet.IConvertStyleOptions);
  }
}
