namespace BimMap {
  namespace OL {
    /**
     * 图层分组参数选项
     */
    interface ILayerGroupAdminOptions
      extends ServiceOptions.ILayerGroupAdminOptions<"ol"> {}

    interface ILayerGroupAdmin
      extends Pick<IFeatureHandle<"ol">, "map">,
        IDispose {
      /**
       * 添加图层组
       * @methor
       * @param {string} groupName 组名称
       * @param {IBimMapHandle['ol']['layer'] | IBimMapHandle['ol']['layer'][]} layer 图层或图层数组
       * @param {boolean} [isAppend] 允许存在追加， 默认为 true
       * @param {boolean} [isToMap] 允许加入地图， 默认为 false
       * @returns this
       *
       * @example
       *
       * groupInstance.addLayerGroup("我的图层组名称", demo.layer);
       *
       */
      addLayerGroup(
        groupName: string,
        layer: IBimMapHandle["ol"]["layer"] | IBimMapHandle["ol"]["layer"][],
        isAppend?: boolean,
        isToMap?: boolean
      ): this;
      /**
       * 同时添加多个图层组
       * @param options
       */
      addLayerGroups(
        options: ServiceOptions.ILayerGroupAdminOptions<"ol">["group"]
        /**
         * 删除图层组
         * @param groupName
         */
      );
      removeLayerGroup(groupName: string | string[]): this;
      /**
       * 图层显隐
       * @param {string | string[]} groupName 图层组的名称
       * @param {boolean} visible 显示或隐藏
       *
       * @example
       *
       * groupInstance.visibleLayerGroup("我的图层组名称", false);
       */
      visibleLayerGroup(groupName: string | string[], visible: boolean): this;
      /**
       * 缩放到中心点
       * @param layer 图层或图层集合
       * @param zoomLevel 设置层级(有效1-18)只会定位至中心点无动画
       * @param fitOptions 动画参数
       * @returns
       */
      zoomToCenter(
        layer: IBimMapHandle["ol"]["layer"] | IBimMapHandle["ol"]["layer"][],
        zoomLevel?: number,
        fitOptions?: { duration?: number; padding?: number[]; maxZoom?: number }
        /**
         * 图层组定位聚焦
         * @param {string} groupName 分组名称
         * @param {number} [zoomLevel] 设置层级(有效1-18)只会定位至中心点[无动画]
         * @param {object} [fitOptions] 动画参数
         * @param {number} [fitOptions.duration] 动画持续时间
         * @param {number[]} [fitOptions.padding] 内边距
         * @param {number} [fitOptions.maxZoom] 最大层级限制
         *
         * @example
         *
         * // 若是在调用 addLayerGroup 之后要立刻 zoom聚焦, 建议加个延迟setTimeout(() => {}， 0)
         * groupInstance.groupToZoomToCenter("我的图层组名称"); // 默认有动画(当前层级)
         * groupInstance.groupToZoomToCenter("我的图层组名称", 19); // 指定层级无动画
         * groupInstance.groupToZoomToCenter("我的图层组名称", undefined, { maxZoom: 19 }); // 指定层级有动画
         *
         */
      );
      groupToZoomToCenter(
        groupName: string,
        zoomLevel?: number,
        fitOptions?: { duration?: number; padding?: number[]; maxZoom?: number }
      );
    }
    interface ILayerGroupAdminConstructor {
      new (options: ILayerGroupAdminOptions): ILayerGroupAdmin;
    }
    var LayerGroupAdmin: IServiceConstructor<
      "ol",
      ILayerGroupAdminOptions,
      ILayerGroupAdmin
    >;
  }
}
