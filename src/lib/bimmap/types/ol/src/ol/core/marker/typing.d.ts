namespace BimMap {
  namespace OL {
    interface IDomMarker extends BimMap.IDispose {
      /**
       * 修改覆盖物
       * @param {ol.Overlay} overlay 覆盖物对象
       * @param {IOverlayOptions | IOverlayOptions[]} options 创建点的配置
       */
      update(overlay: ol.Overlay, options: IOverlayOptions): this;
      /**
       * 创建覆盖物
       *
       * @param {IOverlayOptions | IOverlayOptions[]} options 创建点的配置
       */
      create(options: IOverlayOptions | IOverlayOptions[]): this;
      /**
       * @description 给 overlay 实例中的 element 添加方法
       *
       * @param {State.BaseStateEventCallback<"ol">} callBack 回调函数
       */
      addClick(callBack: State.BaseStateEventCallback<"ol">): this;
    }
    var DomMarker: IServiceConstructor<"ol", IOverlayOptions, IDomMarker>;

    interface IIconMarker
      extends IFeatureHandle<"ol">,
        State.IBaseState<"ol", ServiceOptions.IIconMarkerOptions> {
      /**
       * @description 创建 icon 点的方法
       *
       * @param {BimMap.IFeature | Array<BimMap.IFeature>} options 创建点的配置
       *
       * @example
       *
       * markerLayer.create({
       *    point: [115.92845, 28.694833],
       *    label: "自定义文本", // 如果不需要现实文字，可以不传 label
       *    // .... 你想要关联的其他属性，比如 tunnelId: xxxx
       * });
       */
      create(options: BimMap.IFeature | Array<BimMap.IFeature>): this;
      /**
       * @deprecated 下一版本移除，请使用create(options)，自定义样式请使用规则样式
       *
       * @description 创建 icon 点的方法
       *
       * @param {BimMap.IFeature | Array<BimMap.IFeature>} options 创建点的配置
       * @param {BimMap.IFeature | Array<BimMap.IFeature>} styles 点样式(后续版本将弃用，改为实例化时规则设置_rules)
       *
       * @example
       *
       * // 1. 添加点，使用初始化时给的默认样式
       * markerLayer.create({
       *    point: [115.92845, 28.694833],
       *    label: "自定义文本", // 如果不需要现实文字，可以不传 label
       *    // .... 你想要关联的其他属性，比如 tunnelId: xxxx
       * });
       *
       * // 2. 添加点，但使用自定义的样式
       * markerLayer.create(
       *    {
       *      point: [115.92845, 28.694833],
       *      label: "跟上面的样式不一样", // 如果不需要现实文字，可以不传 label
       *    },
       *    {
       *      iconUrl: "./car.png",
       *      fontColor: "red",
       *       fontStyle: "24px Microsoft YaHei",
       *    }
       * );
       *
       */
      create(
        options: BimMap.IFeature | Array<BimMap.IFeature>,
        styles: ServiceOptions.IIconMarkerOptions
      );
    }
    var IconMarker: IServiceConstructor<
      "ol",
      ServiceOptions.IIconMarkerOptions,
      IIconMarker
    >;
  }
}
