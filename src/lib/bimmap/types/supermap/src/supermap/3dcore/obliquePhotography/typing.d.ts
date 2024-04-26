namespace BimMap {
  namespace Supermap {
    interface IObliquePhotographyStyleOptions {
      /**
       * 背景颜色
       */
      backColor?: string;
      /**
       * 差值
       */
      tolerance?: number;
    }
    type IObliquePhotographyOptions = IConstructorOptions &
      IObliquePhotographyStyleOptions;
    interface ILoadOptions extends IObliquePhotographyStyleOptions {
      /**
       * url前缀
       */
      baseUrl?: string;
      /**
       * 图层服务地址
       */
      url: string;
      /**
       * 图层名称
       */
      layerName: string;

      /**
       * 子域名
       */
      subdomains?: string[];
    }
    interface IObliquePhotographyParams
      extends IObliquePhotographyStyleOptions {
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
    }
    interface IObliquePhotography
      extends IOptions<IObliquePhotographyOptions>,
        IServiceConstructor<"supermap", IMapAny>,
        IDispose {
      /**
       * 名称
       */
      name: string;
      /**
       * 加载模型
       * @param options
       * @param params
       */
      load(options: ILoadOptions[], params?: IObliquePhotographyParams): this;
      /**
       * 设置显隐
       * @param layerName
       * @param visible
       */
      setVisible(layerName: string, visible: boolean): this;
      /**
       * 根据名称删除模型
       * @param name 不传将删除所有
       */
      remove(name?: string): this;
    }
    var ObliquePhotography: IServiceConstructor<
      "supermap",
      IObliquePhotography
    >;
  }
}
