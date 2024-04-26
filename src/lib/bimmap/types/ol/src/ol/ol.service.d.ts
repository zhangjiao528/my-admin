namespace BimMap {
  namespace OL {
    interface IOLControlOptions {
      zoom?: boolean;
      rotate?: boolean;
      attribution?: boolean;
    }
    /**
     * ol初始化参数选项
     */
    interface IOLOptions {
      /**
       * 地图DOM节点
       */
      target: string | HTMLDivElement;
      /**
       * 使用控制工具
       */
      useControl?: false | IOLControlOptions;
      /**
       * 双击放大
       */
      doubleClickZoom?: boolean;
    }
  }
  interface IOneMapOL extends BimMap.IService<"ol", BimMap.OL.IOLOptions> {
    /**
     * 原生openlayer对象
     */
    get ol(): typeof Opl | undefined;
    /** @description 保存地图实例化对象 */
    get instances(): BimMap.IDispose[];
    /** @description 保存地图实例化具名对象 */
    get instancesToName(): Record<string, BimMap.IDispose>;
    /** @returns 返回 map 的实例 */
    get map(): ol.Map;
    /** @description 返回全部的 layer */
    get layers(): IBimMapHandle["ol"]["layer"][];
    /** @description 返回全部的 interaction */
    get interactions(): any[];
    /** @description 返回全部的 overlay */
    get overlays(): ol.Overlay[];
  }
  interface IOneMapOLConstructor {
    new (options: OL.IOLOptions);
  }

  type OService = IOneMapOLConstructor & IOneMapOL & ILayerHandle<"ol">;
}
