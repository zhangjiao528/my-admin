namespace BimMap {
  namespace Leaflet {
    /**
     * ol初始化参数选项
     */
    interface ILeafletOptions
      extends L.MapOptions,
        Pick<OL.IOLOptions, "target" | "useControl"> {}
  }
  namespace Style {
    namespace Leaflet {
      interface IConvertStyleOptions {
        icon?: L.IconOptions & {
          /** 扩散动画参数(内置) */ _diffuses?: Array<{ className: string[] }>;
        };
        tip?: L.TooltipOptions;
        css?: CSSStyleDeclaration;
        path?: L.PathOptions & { radius?: number };
        zIndex?: number;
        kind: "bimmap";
      }
    }
  }
  interface IOneMapLeaflet
    extends BimMap.IService<"leaflet", BimMap.Leaflet.ILeafletOptions> {
    /**
     * leaflet原生对象
     */
    get L(): typeof L | undefined;
    /** @description 保存地图实例化对象 */
    get instances(): BimMap.IDispose[];
    /** @description 保存地图实例化具名对象 */
    get instancesToName(): Record<string, BimMap.IDispose>;
    /** @returns 返回 map 的实例 */
    get map(): L.Map;
    /** @description 返回全部的 layer */
    get layers(): L.Layer[];
    /** @description 返回全部的 interaction */
    get interactions(): any[];
    /** @description 返回全部的 overlay */
    get overlays(): L.DivOverlay[];
  }
  interface IOneMapLeafletConstructor {
    new (options: Leaflet.ILeafletOptions);
  }

  type LService = IOneMapLeafletConstructor &
    IOneMapLeaflet &
    ILayerHandle<"leaflet">;
}
