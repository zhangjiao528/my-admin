namespace BimMap {
  namespace Csm {
    type IDataRoamOptions = IConstructorOptions &
      IMapAny & {
        /**
         * 贴地
         */
        clampToGround?: boolean;
        /**
         * 模型地址
         */
        gltfSrc?: string;
        /**
         * 漫游模式
         */
        model?: DataRoamModelType;

        /**
         * 视角距离
         */
        cameraDistance?: number;
        /**
         * 视角高度
         */
        cameraHeight?: number;
      };
    type DataRoamModelType = "follow" | "first" | "god" | "none";
    interface IDataRoamCreateOptions {
      /**
       * 漫游数据
       */
      positions: LngLatType[];
      /**
       * 漫游时长
       */
      duration?: number;
    }
    interface IDataRoam
      extends IOptions<IDataRoamOptions>,
        IServiceConstructor<"cesium", IMapAny>,
        IDispose {
      /**
       * 名称
       */
      name: string;
      /**
       * 创建漫游
       * @param options
       * @param params
       */
      create(options: IDataRoamCreateOptions): this;
      /**
       * 停止漫游
       */
      stop(): this;
      /**
       * 删除地形
       * @param name
       */
      remove(): this;
    }
    var DataRoam: IServiceConstructor<"cesium", IDataRoam>;
  }
}
