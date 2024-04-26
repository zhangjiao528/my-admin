namespace BimMap {
  namespace State {
    type StateEvent = "hover" | "click";
    interface IStateEvent<F, E> {
      id?: string;
      type: "hover" | "click";
      change: (feature: F | null, oldFeature: F | null, e: E) => void;
    }
    interface IAddClickParams<ACPT extends MapType> {
      /**
       * 最大缩放层级
       */
      maxZoom?: number;
      /**
       * 禁用缩放(聚合使用)
       */
      disableZoom?: boolean;
      /**
       * 动画时间(聚合使用)
       */
      duration?: number;
      /**
       * 区域填充(聚合使用)
       */
      padding?: number[];
      /**
       * 取消点击回调
       */
      cancelCallback?: BaseStateEventCallback<ACPT>;
    }
    /**
     * 基础状态事件回调类型
     */
    type BaseStateEventCallback<CLT extends MapType> = (callback: {
      /**
       * 当前层级
       */
      zoom: number;
      /**
       * 传入的数据对象
       */
      item: any;
      /**
       * 鼠标点击坐标
       */
      position: LngLatType;
      /**
       * 图元坐标
       */
      featurePosition: LngLatType;
      /**
       * 触发的图元对象
       */
      feature?: IBimMapHandle[CLT]["feature"];
      /**
       * 触发的图元对象集合(聚合中使用)
       */
      features?: IBimMapHandle[CLT]["feature"][];
      /**
       * 触发的覆盖物对象
       */
      overlay?: IBimMapHandle[CLT]["overlay"];
      /**
       * @deprecated 下一版本移除，请使用isCluster是否为聚合
       *
       * 是否已经最大层级或已无法展开(聚合中使用)
       */
      limited?: boolean;
      /**
       * 鼠标移入移出标识(hover事件使用：true移入，false 移出)
       */
      hover?: boolean;
      /**
       * 是否为聚合(hover事件使用)
       */
      isCluster?: boolean;
      /**
       * 触发事件的原始对象
       */
      e?: any;
    }) => void;
    /**
     * 基础状态类
     */
    interface IBaseState<T extends MapType, O extends IMapAny>
      extends BimMap.ICustomEventService {
      get selected(): IBimMapHandle[T]["feature"] | null;
      /**
       * 初始化状态类
       * @param parent
       * @param options
       */
      initState(parent: BimMap.IFeatureHandle<T, O>, options: O): this;
      /**
       * 根据zoom层级变化显隐label标签
       * @param zoom 大于设置层级或在层级间展示标签，不传移除已设置
       * @param immediate 立即执行
       */
      zoomChangeShowLabel(
        zoom?: number | [number, number],
        immediate?: boolean
      ): this;
      /**
       * 设置实体样式
       * @param entity 要设置的实体
       * @param style 样式
       * @param name 样式名称
       */
      setStyle(
        entity: IBimMapHandle[T]["feature"] | IBimMapHandle[T]["feature"][],
        style?: BimMap.Style.IStyleOptions,
        name?: string
      ): this;
      /**
       * 获取实体样式
       * @param entity 实体对象
       * @param styleName 样式名称(默认defualt)
       * @param style 额外合并的样式
       */
      getStyle(
        entity: IBimMapHandle[T]["feature"],
        styleName?: string,
        style?: BimMap.Style.IStyleOptions
      ): IBimMapHandle[T]["style"];
      /**
       * 设置选中
       * @param entity 选中对象
       * @param zoomTo
       */
      setSelected(entity?: F, zoomTo?: IAnimationParams): this;
      /**
       * @description 用于创建点击事件的
       *
       * @param {BaseStateEventCallback<T> } callBack 回调函数
       * @param {String} name 事件名字
       */
      addClick(
        callBack: BaseStateEventCallback<T>,
        name?: string,
        params?: IAddClickParams<T>
      ): this;
      /**
       * 删除点击事件
       * @param id
       */
      removeClick(id: string | Function): this;
      /**
       * @description 用于创建hover选择事件
       *
       * @param {BaseStateEventCallback<T>} callBack 回调函数
       * @param {String} name 图层名字
       */
      addHover(callBack: BaseStateEventCallback<T>, name?: string): this;
      /**
       * @description 用于创建hover选择事件
       *
       * @param {BaseStateEventCallback<T>} callBack 回调函数
       * @param {String} name 图层名字
       */
      removeHover(id: string | BaseStateEventCallback<T>): this;
    }
    /**
     * 状态服务接口
     */
    interface IStateService<F, E> extends BimMap.IDispose {
      get selected(): F | null;
      get hoverSelected(): F | null;
      /**
       * 设置实体样式
       * @param entity 要设置的实体
       * @param style 样式
       * @param name 样式名称
       */
      setStyle(
        entity: F | F[],
        style?: BimMap.Style.IStyleOptions,
        name?: string
      ): this;
      /**
       * 设置选中
       * @param entity 选中对象
       * @param zoomTo
       */
      setSelected(entity?: F, zoomTo?: IAnimationParams): this;
      /**
       * 还原状态
       */
      resetState(): this;
      /**
       * 绑定事件
       * @param event
       */
      on(event: IStateEvent<F, E>): this;
      /**
       * 移除事件
       * @param id
       */
      off(id: string | Function): this;
    }
  }
}
