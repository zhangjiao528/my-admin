namespace BimMap {
  namespace Csm {
    type IS3MTilesOptions = IConstructorOptions & {
      /**
       * 点击模型聚焦
       */
      clickFlyTo?: boolean;

      /**
       * 选中颜色
       */
      selectedColor?: string;

      /**
       * 选中线条颜色
       */
      selectedLineColor?: string;
    } & IMapAny;
    interface IS3MTilesLayerInfo {
      /**
       * 中文显示名称
       */
      title?: string;
      /**
       * 图层服务地址
       */
      url: string;
      /**
       * 是否是合并发布
       */
      isMerge?: boolean;
      /**
       * 数据集名称，合并发布的可以填空
       */
      setName?: string;
      /**
       * 数据源名称
       */
      sourceName?: string;
      /**
       * 数据地址
       */
      dataUrl?: string;
      /**
       * 数据类型
       */
      dataType?: string;
      style3D?: any;
    }
    interface IModelOptions extends IS3MTilesLayerInfo {
      /**
       * url前缀
       */
      baseUrl?: string;
      /**
       * 图层名称
       */
      layerName: string;
    }
    interface IModelParams {
      /**
       * 模型名称
       */
      name?: string;
      /**
       * 加载成功后是否定位
       */
      zoomTo?: boolean;

      /**
       * 显隐(默认显示)
       */
      visible?: boolean;

      /**
       * 允许选中
       */
      selectEnabled?: boolean;

      /**
       * 选中颜色(默认蓝色)
       */
      selectedColor?: string;
      /**
       * 选中线条颜色(不传默认selectedColor颜色)
       */
      selectedLineColor?: string;

      /**
       * 亮度
       */
      brightness?: number;
    }
    interface IModeLayerStyleOptions {
      name: string;
      smIds: string[] | number[];
      color: string;
    }
    interface IS3MTiles
      extends IServiceConstructor<"cesium", IMapAny>,
        IOptions<IS3MTilesOptions>,
        IDispose {
      /**
       * 选中的模型
       */
      selected: IMapAny | null;
      /**
       * 名称
       */
      name: string;
      /**
       * 加载模型
       * @param options
       * @param params
       */
      load(options: IModelOptions[], params?: IModelParams): Promise<any[]>;
      /**
       * 设置s3m实体选中
       * @param nameOrId 图层名称或数据ID(不设置将取消选中)
       * @param modelName 模型名称(存在多个必传)
       */
      setSelected(nameOrId?: string, modelName?: string): this;
      /**
       * 设置模型图层的图元样式
       * @param layer
       * @param options
       */
      setLayerStyle(
        options: IModeLayerStyleOptions | IModeLayerStyleOptions[]
      ): this;

      /**
       * 设置图元选中
       * @param name 图层名称或对象
       * @param smIds 图元ID集合(不传将释放已选中)
       */
      setSelection(name: string | BimMap.IMapAny, smIds?: string[]): this;
      /**
       * 通过模型名称设置整个模型的显影
       * @param name 模型名称
       * @param visible 显隐
       */
      setVisibleByName(name: string, visible: boolean): this;
      /**
       * 设置图层显隐
       * @param name 图层名称集合
       * @param visible 显隐
       * @param isExclude 是否排他
       */
      setVisible(name: string[], visible: boolean, isExclude?: boolean): this;
      /**
       * 设置图元透明度
       * @param options
       * @param filterTransparency
       */
      setOpacity(
        options: Array<{ name: string; opacity: number }>,
        filterTransparency?: number
      ): this;
      /**
       * 设置图元颜色
       * @param name 图层名称或对象
       * @param smIds 图元ID集合
       * @param color 颜色(不传将还原默认设置)
       */
      setS3mStyle(
        name: string | Cesium.Cesium3DTileset,
        smIds: string[],
        color?: string
      ): this;
      /**
       * 设置图元显隐
       * @param name 图层名称或对象
       * @param msIds 图元ID集合(为空则设置所有)
       * @param visible 显隐
       * @param isExclude 是否排他
       */
      setS3mVisible(
        name: string | Cesium.Cesium3DTileset,
        msIds: string[],
        visible: boolean,
        isExclude?: boolean
      ): this;

      /**
       * 注册事件
       * @param callBack 事件回调
       * @param type 事件类型
       */
      on(
        callBack: (
          data?: BimMap.IMapAny,
          layer?: BimMap.IMapAny,
          smId?: string
        ) => void,
        type: "click" | "hover" = "click"
      ): this;
      /**
       * 取消事件
       * @param callBack 事件回调
       * @param type 事件类型
       */
      off(
        callBack: (
          data?: BimMap.IMapAny,
          layer?: BimMap.IMapAny,
          smId?: string
        ) => void,
        type: "click" | "hover" = "click"
      ): this;

      /**
       * 查找单个s3m实体layer
       * @param nameOrId 图层名称或数据ID
       * @param modelName 模型名称(存在多个必传)
       */
      find(nameOrId: string, modelName?: string): IMapAny | null;
      /**
       * 查找多个s3m实体layer
       * @param callback 回调
       * @param modelName 模型名称(存在多个必传)
       */
      filter(
        callback: (
          data: BimMap.IMapAny,
          layer: Cesium.Cesium3DTileset
        ) => boolean,
        modelName?: string
      ): IMapAny[] | null;

      /**
       * 图层置底
       * @param name 图层名称或对象
       */
      layerToBottom(name: string | Cesium.Cesium3DTileset): this;
      /**
       * 图层置顶
       * @param name 图层名称或对象
       */
      layerToTop(name: string | Cesium.Cesium3DTileset): this;
      /**
       * 定位到模型
       * @param layer
       */
      zoomTo(
        layer: Cesium.Cesium3DTile,
        params?: Omit<Cesium.ICameraFlyToOptions, "destination">
      ): this;
      /**
       * 根据名称删除模型
       * @param name
       */
      remove(name?: string): this;
    }
    var S3MTiles: IServiceConstructor<"cesium", IS3MTiles>;
  }
}
