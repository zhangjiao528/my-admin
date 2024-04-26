namespace BimMap {
  interface IServiceResult extends IMapType {
    ol: ServiceResultTypeToOL;
    leaflet: ServiceResultTypeToLeaflet;
    cesium: ServiceResultTypeToCesium;
    supermap: ServiceResultTypeToSupermap;
  }
  interface IServiceConstructor<
    CT extends MapType,
    OP extends IMapAny = IMapAny,
    RT extends IFeatureHandle<CT>
  > {
    new (map: IServiceResult[CT]["map"], options?: OP): RT;
  }
  namespace ServiceOptions {
    interface IAddViewOptions {
      /**
       * 坐标系类型
       */
      proj?: string;
      /**
       * 地图初始中心点
       */
      center?: BimMap.LngLatType;
      /**
       * 默认展示层级
       */
      zoom?: number;
      /**
       * 地图最小层级
       */
      minZoom?: number;
      /**
       * 地图最大层级
       */
      maxZoom?: number;
    }
    interface IUseTianDiTuOptions
      extends Pick<IAddViewOptions, "maxZoom" | "minZoom"> {
      /**
       * 类型
       */
      type?: string[];
      /**
       * 坐标系
       */
      proj?: string;
      /**
       * 键
       */
      key?: string;
      /**
       * 服务地址
       */
      url?: string;
    }
    interface IUseMapboxVTOptions {
      /**
       * 服务地址
       */
      url: string;

      /**
       * 不为false三维默认使用天地图为底图[mapbox不可用情况下设置]
       */
      cesiumToTianDiTu?: boolean;
    }
    interface IUseXYZOptions
      extends Pick<IAddViewOptions, "maxZoom" | "minZoom"> {
      /**
       * 坐标系
       */
      proj?: string;
      /**
       * 服务地址
       */
      url?: string;
      dark?: boolean;
    }
    interface IUseWMTSOptions
      extends Pick<IAddViewOptions, "maxZoom" | "minZoom"> {
      /**
       * 开发者秘钥
       */
      key?: string;
      /**
       * 图像格式
       */
      format?: string;
      /**
       * 矩阵集
       */
      matrixSet?: string;
      /**
       * WMTS服务提供的图层样式
       */
      type?: string;
      /**
       * WMTS服务的基础url
       */
      url: string;
      /**
       * 坐标系
       */
      proj?: string;

      layer?: string;

      /**
       * 自定义服务token
       */
      token?: string;
    }
    interface IUseWMSOptions extends IConstructorOptions {
      /**
       * WMTS服务的基础url
       */
      url: string;

      /**
       * 其它参数
       */
      params?: IMapAny;

      /**
       * 自定义服务token
       */
      token?: string;
    }
    interface IGridPolygon
      extends IConstructorOptions,
        Style.EventStyleType<Style.IBackground & Style.ILabelOption> {
      /**
       * 当前层级小于此层级时展示标签
       *  @defaultValue 0
       */
      minZoomShow?: number;
    }
    interface ILayerGroupAdminOptions<T extends MapType> {
      group: Array<{
        /**
         * 分组名称
         */
        groupName: string | string;
        /**
         * 图层对象
         */
        layer: IBimMapHandle[T]["layer"] | IBimMapHandle[T]["layer"][];
        /**
         * 是否追加到组
         */
        isAppend?: boolean;
        /**
         * 是否将图层组添加到地图
         */
        isToMap?: boolean;
      }>;
    }
    interface IAreaMapStyleOptions
      extends IConstructorOptions,
        Style.EventStyleType<Style.IBackground> {
      /**
       * @deprecated 对象模式参数将在下一版本移除，请使用字符串赋值
       *
       * 内容填充选项
       */
      fill?: Style.IFill | string;
      /**
       * @deprecated 下一版本移除，请使用strokeColor与strokeWidth
       *
       * 边框填充选项
       */
      stroke?: Style.IStroke;
    }
    interface IIconMarkerOptions
      extends IConstructorOptions,
        Style.EventStyleType<Style.ILabelOption & Style.IIconOption> {}
    interface IAddOverlayOptions extends IOverlayOptions {}
    interface IClusterPointOptions
      extends IConstructorOptions,
        Style.EventStyleType<Style.IIconOption & Style.ILabelOption> {
      /**
       * 要素将聚集在一起的距离
       *
       * @defaultValue `50`
       */
      distance?: number;
      /**
       * 禁用点击聚合自动展开
       */
      // zoomToBoundsOnClick?: boolean;

      badge?: Style.IBadge | false;
    }
    interface IDomMarkerOptions extends IOverlayOptions {}
    interface ITextOptions
      extends IConstructorOptions,
        Style.EventStyleType<Style.IIconOption & Style.ILabelOption> {}
    interface ILineOptions
      extends IConstructorOptions,
        Style.EventStyleType<Style.IStrokeOption> {}
    interface ITrajectoryOptions
      extends IConstructorOptions,
        Style.IBackground,
        Style.IIconOption {
      /**
       * 路径的线段样式
       */
      obsoletesStyle?: Style.IStrokeOption;

      /**
       * 动画速度
       */
      speed?: number;
      /**
       * 是否重复
       */
      repeat?: boolean;

      /**
       * 路径上点的密度
       */
      pointAmount?: number;
    }
    interface IDrawLineOptions
      extends IConstructorOptions,
        Style.IStyleOptions {
      type: "LineString" | "Polygon";
    }
    interface IHeatMapOptions
      extends IConstructorOptions,
        Pick<Style.IIconOption, "radius"> {
      /**
       * 模糊大小
       */
      blur?: number;
      /**
       * 权重，0-1之间
       */
      weight?: number;
    }
    interface ILoadGeojsonOptions
      extends IConstructorOptions,
        Style.EventStyleType<Style.IStyleOptions> {}
    interface IKmlOptions
      extends IConstructorOptions,
        Style.EventStyleType<Style.IStyleOptions> {}

    interface ITileLayerAdminOptions extends IConstructorOptions {}
    interface IMeasureOptions extends IConstructorOptions {
      /**
       * 绘制时清除历史
       */
      drawClear?: boolean;
    }
  }
  interface IFunctionGetTile {
    /**
     * 设置显隐
     * @param v
     */
    setVisible(v: boolean);
    /**
     * 移除图层
     */
    remove();
  }
  interface IService<T extends MapType, O extends IMapAny = IMapAny>
    extends IMapEventHandle,
      IOptions<O> {
    /**
     * @private
     *
     * @description MapInit 类的私有方法,用于创建 Map 对象的实例
     *
     * @param {Object} options
     * @param {String} options.target 用于渲染地图的 dom 标签
     * @param {Boolean | UseControl} [options.useControl] 用于判断是否使用地图自带控制功能,默认参数为 false
     * @param {Boolean} [options.doubleClickZoom] 双击放大地图,默认为关闭
     * @return {import('ol/Map').default} 返回一个 Map 对象实例
     */
    _init(options: GetMapTypeInstanceOptions<T>): IServiceResult[T]["map"];
    /**
     * @deprecated 用于添加视图层，将在下一版本移除
     *
     * @param {Object} options
     * @param {String} [options.proj] 视图层的投影坐标系
     * @param {Number[]} [options.center] 视图层的中心点
     * @param {Number} [options.zoom] 视图层的默认放大级别
     * @param {Number} [options.minZoom] 视图层的最小缩放级别
     * @param {Number} [options.maxZoom] 视图层的最大缩放级别
     */
    addView(options: ServiceOptions.IAddViewOptions): IServiceResult[T]["map"];

    /**
     * @description 创建使用天地图的 layer, 并添加进 map 实例
     *
     * @param {Object} options
     * @param {String[]} options.type 天地图提供的数据图层数组
     * @param {String} options.proj 投影坐标系类型
     * @param {String} options.key 开发者秘钥
     * @param {String} options.url 天地图瓦片基础url
     *
     * @example
     *
     * mapInstance.useTianDiTu({
     *   type: ["vec", "cva"], // 底图+标注
     *   proj: "EPSG:4326",
     *   key: `${你的token}`,
     *   url: "http://t{0-7}.tianditu.gov.cn/",
     * });
     *
     */
    useTianDiTu(options?: ServiceOptions.IUseTianDiTuOptions);
    /**
     * @description 创建使用Mapbox Vector Tile的 layer, 并添加进 map 实例
     *
     * @param {Object} options
     * @param {String} options.url 矢量瓦片样式配置文件的地址
     */
    useMapboxVT(options: ServiceOptions.IUseMapboxVTOptions);
    /**
     * @description 创建使用 xyz 服务的 layer, 并添加进 map 实例
     *
     * @param {Object} options
     * @param {String} [options.proj] WMTS服务提供的投影坐标系类型
     * @param {String} [options.dark] 是否深色地图
     * @param {Number} [options.maxZoom] 非必填,地图最大层级
     * @param {String} options.url 必填,WMTS服务的基础url
     */
    useXYZ(options?: ServiceOptions.IUseXYZOptions);
    /**
     * @description 创建使用 WMTS 服务的 layer, 并添加进 map 实例
     *
     * @param {Object} options
     * @param {String} options.type WMTS服务提供的图层样式
     * @param {String} options.proj WMTS服务提供的投影坐标系类型
     * @param {String} options.matrixSet 非必填,矩阵集
     * @param {String} options.format 非必填,图像格式
     * @param {String} options.key 非必填,开发者秘钥
     * @param {Number} [options.maxZoom] 非必填,地图最大层级
     * @param {String} options.url 必填,WMTS服务的基础url
     * @return 移除图层函数
     */
    useWMTS(options: ServiceOptions.IUseWMTSOptions): IFunctionGetTile;
    /**
     * 加载WMS数据
     * @param options
     */
    useWMS(options: ServiceOptions.IUseWMSOptions): IFunctionGetTile;
    /**
     * 删除添加的map图层
     */
    removeMapLayer(): this;
    /**
     * @private
     * @description 创建网格的实例
     *
     * @param {Object} options
     * @param {String} options.name layer 层的名字
     * @param {Number} options.minZoomShow 标注的最小显示级别, 默认为 0
     */
    GridPolygon(
      options?: ServiceOptions.IGridPolygon
    ): IServiceResult[T]["GridPolygon"];
    /**
     * @private
     *
     * 图层组管理
     * @param options 参数选项
     */
    LayerGroupAdmin(
      options?: ServiceOptions.ILayerGroupAdminOptions<T>
    ): IServiceResult[T]["LayerGroupAdmin"];
    /**
     * @private
     *
     * 区域体样式设置
     * @param options 参数选项
     * @returns
     */
    AreaMapStyle(
      options?: ServiceOptions.IAreaMapStyleOptions
    ): IServiceResult[T]["AreaMapStyle"];
    /**
     * @private
     * @description 创建 icon 点的类
     *
     * @param {Object} options
     * @param {String} options.iconUrl 点的 icon url
     * @param {Number | Number[]} [options.scale] 图片的缩放比例，可以整体缩放，也可以指定宽或高的缩放
     * @param {Number[]} [options.offset] 标注字体的偏移量
     * @param {String} [options.fontStyle] 标注字体的样式, 和 css 中的 font 字段一样
     * @param {String} [options.fontColor] 标注字体的颜色
     */
    IconMarker(
      options: ServiceOptions.IIconMarkerOptions
    ): IServiceResult[T]["IconMarker"];

    /**
     * @description 添加 overlay 到 map 实例上
     *
     * @param {Object} options
     * @param {String} options.id  建议并且可自定义的id，指定id的目的是方便删除或复用（不会反复创建）
     * @param {Number[]} options.position 必须，传入的点击位置（经纬度坐标）[经度，纬度]
     * @param {String} options.element 必须，要绑定的 HTMLElement
     * @param {String} [options.offset] 偏移量， 默认为 [0,0]
     * @param {String} [options.positioning] 对齐方式，不传的话  默认值为 'top-left'
     * @param {String} [options.className] css class name
     *
     * @example
     *
     *   mapInstance.addOverlay({
     *     id: "global-overlay",
     *     position: [103.904642, 30.680854],
     *     element: container, // document.getElementById("自定义弹窗的domId")
     *     offset: [0, -30],
     *     positioning: "bottom-center",
     *   });
     *
     */
    addOverlay(options: ServiceOptions.IAddOverlayOptions): this;
    /**
     * @description 删除 overlay
     *
     * @param {id} options ID或覆盖物对象，不传删除所有
     *
     */
    removeOverlay(id?: string | IBimMapHandle[T]["overlay"]): this;
    /**
     * @private
     *
     * @param {Object} options
     * @param {String} options.iconUrl 聚合的图标样式
     * @param {String} options.name 图层名字
     * @param {String} [options.fontStyle] 标注字体的样式, 和 css 中的 font 字段一样
     * @param {String} [options.fontColor] 标注字体的颜色
     * @param {Number[]} [options.offset] 标注字体的偏移量[x, y]
     * @param {Number | Number[]} [options.scale] 图片的缩放比例，可以整体缩放，也可以指定宽或高的缩放
     * @param {Object} [options.background] 文本的背景相关设置
     * @param {String} [options.background.fill] 背景色
     * @param {String} [options.background.strokeColor] 背景的轮廓色
     * @param {String} [options.background.strokeWidth] 背景的轮廓线宽
     * @param {Object} [options.badge] 角标的相关配置
     * @param {String} [options.badge.fill] 角标的填充色
     * @param {String} [options.badge.strokeColor] 角标的轮廓色
     * @param {String} [options.badge.radius] 圆圈类型的角标半径
     * @param {String} [options.badge.rectRadius] 矩形的圆角
     * @param {Object} [options.padding] 文本的边距，默认为 [0,0,0,0]
     * @param {Number} [options.distance] 要素将聚集在一起的距离
     */
    ClusterPoint(
      options: ServiceOptions.IClusterPointOptions
    ): IServiceResult[T]["ClusterPoint"];
    /**
     * @private
     * @description 创建 dom 点的类
     *
     * @param {Object} options
     * @param {Array<Overlay>} options.overlay Overlay 实例的数组
     * @param {Number[]} options.offset overlay 整体偏移量
     * @param {String} options.innerHTML overlay dom 字符串模板
     * @param {Boolean} options.useTitle 是否使用 dom 标签的 title 属性
     */
    DomMarker(
      options: ServiceOptions.IDomMarkerOptions
    ): IServiceResult[T]["DomMarker"];
    /**
     * @private
     * @description 创建 Text 实例
     *
     * @param {Object} options
     * @param {String} options.name layer图层的名字，对图层的显隐删除以及定位都需要该字段
     * @param {String} [options.fontStyle] 标注字体样式, 和 css 中的 font 字段一样
     * @param {Number[]} [options.offset] 标注字体的偏移量
     * @param {String} [options.color] 标注字体的颜色
     * @param {{color: String}} options.condition 使用状态的配置
     * @param {{color: String, url?: String}} options.background 默认不填 标注的背景颜色或者图案
     * @param {{color: String, url?: String}} options.condition 默认不填 点击或者选择时的标注背景颜色或图案
     */
    Text(options: ServiceOptions.ITextOptions): IServiceResult[T]["Text"];
    /**
     * @private
     * @description 创建线
     *
     * @param {Object} options
     * @param {String} [options.name] Layer 实例的名字
     * @param {Number} [options.strokeWidth] 线的宽度, 可选，默认为5
     * @param {String} [options.strokeColor] 线的颜色，可选，默认为白色
     */
    Line(options: ServiceOptions.ILineOptions): IServiceResult[T]["Line"];
    /**
     * @private
     * @description 创建轨迹动画
     *
     * @param {Object} options
     * @param {String} options.iconUrl 动画图标的 URL
     * @param {String} [options.name] Layer 实例的名字
     * @param {style} [options.style] 路径的线段样式
     * @param {Number} [options.speed] 动画速度
     * @param {Boolean} [options.repeat] 是否重复
     */
    Trajectory(
      options: ServiceOptions.ITrajectoryOptions
    ): IServiceResult[T]["Trajectory"];
    /**
     * @private
     *
     * @param {Object} options
     * @param {String} [options.name] Layer 层和 Draw 层的名字
     * @param {drawStyle} [options.style] 样式配置
     * @param {String} [options.iconUrl] 节点图标
     * @param {'LineString' | 'Polygon'} options.type 需要画图的类型
     */
    DrawLine(
      options: ServiceOptions.IDrawLineOptions
    ): IServiceResult[T]["DrawLine"];

    /**
     * 加载热力图
     * @param options
     */
    HeatMap(
      options: ServiceOptions.IHeatMapOptions
    ): IServiceResult[T]["HeatMap"];
    /**
     * 加载kml数据
     * @param options
     */
    Kml(options: ServiceOptions.IKmlOptions): IServiceResult[T]["Kml"];
    /**
     * 通过geojson加载数据
     * @param options
     */
    LoadGeojson(
      options?: ServiceOptions.ILoadGeojsonOptions
    ): IServiceResult[T]["LoadGeojson"];
    /**
     * tile图层管理
     * @param options
     */
    TileLayerAdmin(
      options: ServiceOptions.ITileLayerAdminOptions
    ): IServiceResult[T]["TileLayerAdmin"];
    /**
     * 测量工具
     * @param options
     */
    Measure(
      options?: ServiceOptions.IMeasureOptions
    ): IServiceResult[T]["IMeasure"];

    /**
     * 删除添加的地图实例
     */
    removeInstance(instance: IDispose | IDispose[]): this;

    /**
     * @param {Object} event 鼠标点击的 event 事件
     * @return {Number[]} 鼠标点击位置的经纬度
     */
    getLonLat(event: MouseEvent | IPoint): BimMap.LngLatType;
    /**
     * @description 设置中心点（按照经纬度定位）
     *
     * @param {Number[]} options 设置视图中心点,接受参数 [经度, 纬度]
     * @param {Number} [duration] 设置动画平滑时间(毫秒)
     *
     * @example
     *
     * // 将地图中心点设置为 [103.904642, 30.680854], 飞行动画设置为了2秒
     * mapInstance.setCenter([103.904642, 30.680854], 2000);
     *
     */
    setCenter(options: BimMap.LngLatType, duration?: number): this;
    /**
     * @description 设置地图的层级
     *
     * @param {Number} zoom 设置缩放级别
     * @param {Number} 设置动画平滑时间
     *
     * @example
     *
     * mapInstance.setZoom(15, 1000);
     *
     */
    setZoom(zoom: number, duration?: number): this;
    /**
     *
     * @description 获取地图当前的层级
     *
     * @return {Number} 返回层级
     */
    getZoom(): number;
    /**
     * 聚焦到模板点
     * @param options
     */
    zoomTo(options: {
      point: BimMap.LngLatType;
      zoom?: number;
      duration?: number;
    }): this;
    /**
     * 飞行到实体
     * @param entity 实体
     * @param zoomTo 飞行参数
     */
    flyTo(entity: any | any[], params?: BimMap.IAnimationParams): this;
    /**
     * 获取实体中心坐标
     * @param entity
     */
    getEntityCenterCoordinate(entity: any | any[]): BimMap.LngLatType;
    /**
     * 获取坐标集合中心点
     * @param entity
     */
    getCoordinatesCenter(lonlats: BimMap.LngLatType[]): BimMap.LngLatType;
    /**
     * @description 从传入的参数中获取坐标信息
     *
     * @param {IBimMapHandle[T]["feature"]} options feature 实例或者实例数组
     * @return {Number[] | Number[][]} coordinate 数组
     */
    getCoordinateFromFeature(
      options: IBimMapHandle[T]["feature"] | IBimMapHandle[T]["feature"][]
    ): BimMap.LngLatType | BimMap.LngLatType[];
    /**
     * 判断元素是否在视图可视区域中
     * @param feature 为数组时，必须采用回调方式获取结果
     * @param callback 存在时则采用回调方式返回结果
     */
    hasFeatureInView(
      feature: IBimMapHandle[T]["feature"] | IBimMapHandle[T]["feature"][],
      callback?: (feature: IBimMapHandle[T]["feature"], inView: boolean) => void
    ): boolean | void;
    /**
     * @description 清除实例仓库中的全部数据
     */
    clear(): this;
    /**
     *  @description 容器大小变化时主动重置
     */
    resize(): this;
    /**
     *  @description 主动执行渲染
     */
    render(): this;

    /**
     * @description zoom层级发生变化时
     */
    zoomChange(fun: Function): this;
    /**
     * @description zoom层级发生变化时
     */
    removeZoomChange(fun: Function): this;
    /**
     *  @deprecated 下版本移除，改用 removeMapLayer
     *  @description 清除 this._map 中的 map layer
     */
    removeMap();
    /**
     * @deprecated 解除注册事件的方法，使用off
     * @description 解除注册事件的方法
     */
    unon(key, callBack?: any): void;
    /**
     * @deprecated 下版本移除，改为内置无需主动调用
     * @description 从 map 上移除 interaction
     */
    removeInteraction(options?: any);
    /**
     * @deprecated 下版本移除，改为内置无需主动调用
     * @description 添加 interaction 到 map 实例上
     */
    addInteraction(options);
    /**
     * @deprecated 下一版本移除，不再使用
     * @description 根据传入的参数返回查询到的 interaction 实例数组
     */
    searchInteractions(options);
    /**
     * @deprecated 下一版本移除，不再使用
     * @description 根据传入的参数返回查询到的 interaction
     */
    searchInteraction(options);
    /**
     * @deprecated 下一版本移除，不再使用
     * @description 取消选中，如关闭overlay窗口的同时，取消元素的选中
     */
    clearSelection();
  }
}
