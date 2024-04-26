namespace BimMap {
  namespace Csm {
    interface IMeasureParams {
      /**
       * 设置图层名称
       */
      name?: string;
    }
    type ContourType = "elevation" | "slope" | "none";
    interface IMeasureContourOption {
      enableContour: boolean; // 是否启用等高线
      contourSpacing: number; // 线间隔
      contourWidth: number; // 线宽
      contourType: string; // 渲染方式
      contourColor: any; // 颜色
      minHeight?: number;
      maxHeight?: number;
    }
    interface IMeasureContourOptions {
      /**
       * 显示等高线
       */
      showContour: boolean;
      /**
       * 间距
       */
      spacing: number;
      /**
       * 线宽
       */
      width: number;
      /**
       * 等高线渲染类型
       */
      contourType: ContourType;
    }
    interface IMeasure extends IDispose {
      /**
       * 1/2(贴地量算/空间量算)
       */
      get clampMode(): string;
      /**
       * 1/2(贴地量算/空间量算)
       */
      set clampMode(mode: string);
      /**
       * 测试距离
       * @param callback 回调，返回km
       */
      distance(
        callback: (km: number) => void,
        options?: BimMap.ServiceOptions.IDrawLineOptions
      ): void;

      /**
       * 测试面积
       * @param callback  回调，返回平方km
       */
      area(
        callback: (skm: number) => void,
        options?: BimMap.ServiceOptions.IDrawLineOptions
      ): void;

      /**
       * 测试高度
       * @param callback 回调，返回km
       */
      height(
        callback: (km: number, space: number, zy: number) => void,
        options?: BimMap.ServiceOptions.IDrawLineOptions
      ): void;
      /**
       * 显示等高线
       * @param show
       * @param options
       */
      updateContour(
        show = true,
        options?: Partial<BimMap.Csm.IMeasureContourOptions>
      ): this;

      /**
       * 清空绘制类容
       * @param destroy  清除并销毁
       */
      clear(destroy?: boolean): void;
    }
    var Measure: IServiceConstructor<
      "cesium",
      ServiceOptions.IMeasureOptions,
      IMeasure
    >;
  }
}
