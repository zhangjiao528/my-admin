namespace BimMap {
  namespace Csm {
    type PrimitiveType = "gltf" | "point" | "3dtiles";

    type IPrimitiveOptions = IConstructorOptions & {
      /**
       * 点击模型聚焦
       */
      clickFlyTo?: boolean;
      /**
       * 监听hover事件(默认不监听)
       */
      listenHoverEvent?: boolean;
      /**
       * 监听点击事件(默认不监听)
       */
      listenClickEvent?: boolean;
    } & IMapAny;
    interface IPrimitiveLoadOptions {
      /**
       * 设置模型名称(可用于查找删除，默认都是model)
       */
      name?: string;
      /**
       * 自定义数据
       */
      data?: any;
      /**
       * 图元id
       */
      id?: string;
      /**
       * 模型展示的位置坐标
       */
      point: LngLatType;
    }
    interface ILoadGltfOptions extends IPrimitiveLoadOptions, IMapAny {
      /**
       * 地址
       */
      url: string;
      /**
       * 缩放比例
       */
      scale?: number;
      /**
       * 模型最小像素大小(默认60)
       */
      minimumPixelSize?: number;
    }
    type IUpdateGltfOptions = Partial<
      Pick<ILoadGltfOptions, "scale" | "minimumPixelSize" | "point">
    > &
      IMapAny;
    interface ILoadPointOptions extends IPrimitiveLoadOptions {
      /**
       * 点大小
       */
      pixelSize?: number;
      /**
       * 颜色
       */
      color?: string;
    }
    interface ILoad3DtilesOptions extends Omit<IPrimitiveLoadOptions, "point"> {
      /**
       * 地址
       */
      url: string;
    }
    interface ILoadGltfParams {
      /**
       * 聚焦到目标
       */
      flyTo?: boolean;
    }
    interface IPrimitive
      extends IOptions<IPrimitiveOptions>,
        IServiceConstructor<"cesium", IMapAny>,
        IDispose {
      /**
       * 名称
       */
      name: string;
      /**
       * 加载地形
       * @param options
       */
      loadGltf(
        options: ILoadGltfOptions | ILoadGltfOptions[],
        params?: ILoadGltfParams
      ): Promise<any>;
      /**
       * 设置显隐
       * @param layerName
       * @param visible
       */
      setGltfVisible(
        name: string[] | ((name: string, data?: any, model?: any) => boolean),
        visible: boolean,
        isMutualExclusion?: boolean
      ): this;
      /**
       * 删除地形
       * @param name 模型名称，不传或为空删除所有
       */
      removeGltf(name?: string[]): this;
      /**
       * 修改模型参数选项
       * @param name 模型名称或模型对象
       * @param options 参数选项
       */
      updateGltfOptions(
        name: string | object,
        options: IUpdateGltfOptions
      ): this;

      /**
       * 加载点图元
       * @param options
       * @param params
       */
      loadPoint(
        options: ILoadPointOptions | ILoadPointOptions[],
        params?: ILoadGltfParams
      ): this;
      /**
       * 设置显隐
       * @param layerName
       * @param visible
       */
      setPointVisible(
        name: string[] | ((name: string, data?: any, model?: any) => boolean),
        visible: boolean,
        isMutualExclusion?: boolean
      ): this;
      /**
       * 删除点图元
       * @param name 模型名称，不传或为空删除所有
       */
      removePoint(name?: string[]): this;
      /**
       * 修改模型参数选项
       * @param name 模型名称或模型对象
       * @param options 参数选项
       */
      updatePointOptions(
        name: string | object,
        options: Omit<ILoadPointOptions, keyof IPrimitiveLoadOptions>
      ): this;

      /**
       * 加载3Dtiles文件
       * @param options
       * @param params
       */
      load3DTiles(
        options:
          | BimMap.Csm.ILoad3DtilesOptions
          | BimMap.Csm.ILoad3DtilesOptions[],
        params?: BimMap.Csm.ILoadGltfParams
      ): Promise<Cesium.Cesium3DTileset | Cesium.Cesium3DTileset[]>;
      /**
       * 设置显隐
       * @param layerName
       * @param visible
       */
      set3DTilesVisible(
        name: string[] | Function,
        visible: boolean,
        isMutualExclusion?: boolean
      ): this;
      /**
       * 删除3dtiles
       * @param name 模型名称，不传或为空删除所有
       */
      remove3DTiles(name?: string[]): this;
      /**
       * 修改3dtiles参数选项
       * @param name 3dtiles名称或3dtiles对象
       * @param options 参数选项
       */
      update3DTilesOptions(name: string | object, options: IMapAny): this;

      /**
       * 通过名称查找图元
       * @param name 图元名称
       * @param pType 图元类型(gltf/point)
       */
      find(name: string, pType: BimMap.Csm.PrimitiveType): any;
      /**
       * 注册事件
       * @param callBack 事件回调
       * @param type 事件类型
       */
      on(
        callBack: (
          data?: BimMap.IMapAny,
          primitive?: BimMap.IMapAny,
          id?: string,
          oldPrimitive?: BimMap.IMapAny
        ) => void,
        type: "click" | "hover" = "click",
        pType: BimMap.Csm.PrimitiveType = PrimitiveType.gltf
      ): this;
      /**
       * 取消事件
       * @param callBack 事件回调
       * @param type 事件类型
       */
      off(
        callBack: (
          data?: BimMap.IMapAny,
          primitive?: BimMap.IMapAny,
          id?: string,
          oldPrimitive?: BimMap.IMapAny
        ) => void,
        type: "click" | "hover" = "click",
        pType: BimMap.Csm.PrimitiveType = PrimitiveType.gltf
      ): this;
    }
    var Primitive: IServiceConstructor<"cesium", IPrimitive>;
  }
}
