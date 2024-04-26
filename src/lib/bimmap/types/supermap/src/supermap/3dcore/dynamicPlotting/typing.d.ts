namespace BimMap {
  namespace Supermap {
    type IDynamicPlottingOptions = IConstructorOptions & {
      /**
       * 面板的额外class类名
       */
      className?: string;
      /**
       * 是否启用面板，默认启用
       */
      enablePanel?: boolean;
    };
    interface IDynamicPlottingLoadParams {
      /**
       * 追加
       */
      append?: boolean;
    }
    interface IDynamicPlotting
      extends IOptions<IDynamicPlottingOptions>,
        IServiceConstructor<"supermap", IMapAny>,
        BimMap.ICustomEventService {
      /**
       * 名称
       */
      name: string;
      /**
       * 设置标绘的显隐
       */
      set visible(visible: boolean);
      /**
       * 获取标绘显隐
       */
      get visible(): boolean;
      /**
       * 启用面板
       */
      set enablePanel(visible: boolean);
      /**
       * 获取面板显隐
       */
      get enablePanel(): boolean;
      /**
       * 初始化
       */
      initPlotting(): void;
      /**
       * 加载数据
       * @param data
       * @param params
       */
      loadData(data: string[], params?: IDynamicPlottingLoadParams): void;
      /**
       * 转换图形为json
       * @param graphic
       */
      convertGraphicObjectsToJson(graphic: object | object[]);
      /**
       * 获取标绘数据
       */
      getPlottingData(): void;
      /**
       * 删除标绘图
       * @param feature
       * @param name
       */
      removeGraphic(
        feature: string | string[] | object | object[],
        name: string = "plottingLayer"
      );
      /**
       * 设置标绘图层显隐
       * @param visible
       * @param name
       */
      setVisible(visible: boolean, name?: string): this;
      /**
       * 清空标绘数据
       * @param name 不传将删除所有的图层数据
       */
      clear(name?: string);
      /**
       * 清除所有
       */
      clearAll();
      /**
       * 删除标绘图层
       * @param name 不传将删除所有
       */
      remove(name?: string): this;
    }
    var DynamicPlotting: IServiceConstructor<"supermap", IDynamicPlotting>;
  }
}
