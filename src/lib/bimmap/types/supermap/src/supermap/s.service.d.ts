namespace BimMap {
  namespace Supermap {
    /**
     * ol初始化参数选项
     */
    interface ICesiumOptions
      extends Cesium.CustomViewer.ConstructorOptions,
        Pick<OL.IOLOptions, "target" | "useControl">,
        ServiceOptions.IAddViewOptions {}

    interface ICameraVisualAngleOptions {
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
    interface I3DService extends IDispose {
      instances: BimMap.IDispose[];
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
       * 设置视图位置
       * @param options
       */
      setView(
        lnglat: LngLatType,
        params?: Omit<ICameraVisualAngleOptions, "position">
      ): this;

      /**
       * 加载三维模型
       */
      S3MTiles(options?: Supermap.IS3MTilesOptions): Supermap.IS3MTiles;

      /**
       * 加载倾斜摄影
       * @param options
       */
      obliquePhotography(
        options?: Supermap.IObliquePhotographyOptions
      ): Supermap.IObliquePhotography;
      /**
       * 加载地形
       * @param options
       */
      Terrain(options?: Supermap.ITerrainOptions): Supermap.ITerrain;
      /**
       * 加载图元
       * @param options
       */
      Primitive(
        options?: BimMap.Supermap.IPrimitiveOptions
      ): BimMap.Supermap.IPrimitive;
      /**
       * 数据漫游
       * @param options
       */
      DataRoam(options?: Supermap.IDataRoamOptions): Supermap.IDataRoam;
      /**
       * 动态标绘
       * @param options
       */
      DynamicPlotting(
        options?: Supermap.IDynamicPlottingOptions
      ): Supermap.IDynamicPlotting;
      /**
       * 地形开挖
       * @param options
       */
      TerrainExcavation(
        options?: Supermap.ITerrainExcavationOptions
      ): Supermap.ITerrainExcavation;

      /**
       * 根据名称查找单个实例
       * @param name 设置的实例名称
       */
      findInstance(name: string): any;
      /**
       * 根据名称查找多个实例
       * @param name 设置的实例名称
       */
      filterInstance(name: string): any;
      /**
       * 删除实例
       * @param instance S3MTiles/obliquePhotography/Terrain 等实例
       */
      removeInstance(instance: BimMap.IDispose | BimMap.IDispose[]): this;
    }
  }
  namespace Style {
    namespace Supermap {
      interface IConvertStyleOptions {
        label?: Cesium.LabelGraphics.ConstructorOptions;
        billboard?: Cesium.BillboardGraphics.ConstructorOptions;
        point?: Cesium.PointGraphics.ConstructorOptions;
        polygon?: Cesium.PolygonGraphics.ConstructorOptions;
        polyline?: Cesium.PolylineGraphics.ConstructorOptions;
        rectangle?: Cesium.RectangleGraphics.ConstructorOptions;
        ellipse?: Cesium.EllipseGraphics.ConstructorOptions;

        zIndex?: number;
      }
    }
  }
  interface IOneMapSupermap
    extends IService<"supermap", BimMap.Supermap.ICesiumOptions> {
    /**
     * 原生cesium对象
     */
    get Cesium(): typeof Cesium | undefined;
    /** @description 保存地图实例化对象 */
    instances: BimMap.IDispose[];
    /** @description 保存地图实例化具名对象 */
    get instancesToName(): Record<string, BimMap.IDispose>;
    tdService: Supermap.I3DService;
    /** @returns 返回 map 的实例 */
    get map(): Cesium.CustomViewer;
    /** @description 返回全部的 layer */
    get layers(): Cesium.BimMapDataSource[];
    /** @description 返回全部的 interaction */
    get interactions(): any[];
    /** @description 返回全部的 overlay */
    get overlays(): Cesium.DivOverlay[];
  }
  interface IOneMapCesiumConstructor {
    new (options: Supermap.ICesiumOptions);
  }

  type SService = IOneMapCesiumConstructor &
    IOneMapSupermap &
    ILayerHandle<"supermap">;
}
