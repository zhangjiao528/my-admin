namespace BimMap {
  namespace Csm{
    interface IGridPolygon
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", ServiceOptions.IGridPolygon> {
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
       * @description 添加鼠标右键功能
       *
       * @param {Function} callBack 回调函数
       * @param {String} name interaction 的名字
       */
      addRightClick(
        callBack: BaseStateEventCallback<"cesium">,
        name: string
      ): this;
      /**
       * @description 获取 Feature 的中心点
       *
       * @param {IBimMapHandle["cesium"]["feature"]} feature 传入的 Feature 实例
       * @return {Number[]} 返回一个经纬度数组
       */
      getCenterCoordinates(
        feature: IBimMapHandle["cesium"]["feature"]
      ): LngLatType;

      /**
       * @deprecated 下一版本移除，不再使用，请使用addClick加样式设置实线高亮功能
       * @description 添加选择高亮功能
       *
       * @param {Function} callBack 回调函数
       * @param {String} name interaction 实例的名字,默认为 select
       */
      addSelect(callBack, name): this;
    }
    var GridPolygon: IServiceConstructor<
      "cesium",
      ServiceOptions.IGridPolygon,
      IGridPolygon
    >;
  }
}
