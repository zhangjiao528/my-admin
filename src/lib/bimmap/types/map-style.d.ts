namespace BimMap {
  namespace Style {
    interface IDefaultStyle {
      /**
       * 贴地，默认：true
       */
      clampToGround?: boolean;
    }
    interface IStyleServiceOptions {}
    /**
     * 填充
     */
    interface IFill {
      color?: string;
    }
    /**
     * 轮廓
     */
    interface IStroke {
      width?: number;
      color?: string;
    }

    /**
     * 徽标选项(主要用于聚合样式)
     */
    interface IBadge
      extends Pick<IIconOption, "scale">,
        Pick<ILabelOption, "offset"> {
      /**
       * 背景色
       */
      fill?: string;

      /**
       * 轮廓色
       */
      strokeColor?: string;

      /**
       * 圆圈形状（circle）的角标半径,
       */
      radius?: number;

      /**
       * 矩形的圆角
       */
      rectRadius?: number;
      /**
       * 矩形宽度
       */
      rectWidth?: number;
      /**
       * 矩形高度
       */
      rectHeight?: number;
    }
    interface IBounce {
      /**
       * 时长[暂未使用]
       */
      duration?: number;
      /**
       * 最大跳动偏移，默认：8
       */
      offset?: number;
      /**
       * 每次跳动步长，默认值：0.3
       */
      step?: number;
      /**
       * hover时停止动画
       */
      hoverStop?: boolean;
    }
    interface IOpacity {
      /**
       * 最小透明度，默认：0.05
       */
      min?: number;
      /**
       * 最大透明度,默认值：存在图片透明则使用图片透明度，否则为1
       */
      max?: number;
      /**
       * 每次跳动步长，默认值：0.25
       */
      step?: number;
      /**
       * hover时停止动画
       */
      hoverStop?: boolean;
    }
    interface IDiffuse {
      /**
       * 扩散动画类型, 默认：rippled
       */
      type?: "rippled" | "ripple";
      /**
       * 时长(秒)，默认：2秒
       */
      duration?: number;
      /**
       * 颜色，默认：rgba(255,0,0,0.2)
       */
      color?: string;
      /**
       * 类型为ripple时填充颜色，默认：color值
       */
      fillColor?: string;
      /**
       * 数量，默认：3
       */
      count?: number;

      /**
       * 半径，默认值：80
       */
      radius?: number;
      /**
       * 扩散轮廓宽度，默认：1，三维调整gradient参数
       */
      width?: number;
      /**
       * 固定半径，不会根据缩放计算半径，可能在某些层级将不可见
       */
      fixedRadius?: boolean;

      /**
       * 波纹的间须长度，默认：0.5，三维有效
       */
      gradient?: number;
      /**
       * 高度，仅三维使用，默认值：0
       */
      height?: number;
    }

    /**
     * 图标选项
     */
    interface IIconOption {
      /**
       * 圆形图标圆角
       */
      radius?: number;
      /**
       * 图片地址
       */
      iconUrl?: string;
      /**
       * 图片DOM
       */
      img?: HTMLImageElement | HTMLCanvasElement;
      /**
       * 图片大小
       */
      imgSize?: [number, number];
      /**
       * 图片偏移
       */
      imgOffset?: [number, number];
      /**
       * 透明度
       */
      opacity?: number;

      /**
       * 图片的缩放比例，可以整体缩放，也可以指定宽或高的缩放
       *
       * @defaultValue `1`
       */
      scale?: number | [number, number];

      /**
       * 弹跳动画
       */
      _bounce?: false | IBounce;
      /**
       * 闪烁动画
       */
      _opacity?: false | IOpacity;
      /**
       * 波纹扩散动画
       */
      _diffuse?: false | IDiffuse;
    }

    /**
     * 文本选项
     */
    interface ILabelOption {
      /**
       * 文本内容
       */
      text?: string | string[];
      /**
       * html文本或dom节点
       */
      html?: string | HTMLElement;
      /**
       * 标注字体的样式, 和 css 中的 font 字段一样
       *
       * @defaultValue `12px Microsoft YaHei`
       */
      fontStyle?: string;

      /**
       * 标注字体的颜色
       *
       * @defaultValue `#fff`
       */
      fontColor?: string;

      /**
       * 字体的偏移量 [x, y]
       *
       * @defaultValue `[0, 0]`
       */
      offset?: [number, number];

      /**
       * 背景填充[上, 右, 下, 左]
       *
       * @defaultValue `[0, 0, 0, 0]`
       */
      padding?: number[];

      /**
       * 文本的背景相关设置
       */
      background?: IBackground;
    }

    /**
     * 轮廓选项(主要用于多样式平铺类型)
     */
    interface IStrokeOption {
      /**
       * 轮廓色
       */
      strokeColor?: string;

      /**
       * 轮廓线宽
       */
      strokeWidth?: number;

      /**
       * 线类型
       */
      lineType?: "line" | "dash";
      /**
       * 虚线类型的线段样式
       */
      lineDash?: number[];

      /**
       * 文本的背景相关设置
       */
      background?: Pick<IBackground, "fill">;
    }
    /**
     * 背景(主要用于多样式平铺类型)
     */
    interface IBackground extends IStrokeOption {
      /**
       * 背景色
       */
      fill?: string;
      /**
       * 背景图
       */
      url?: string;
    }
    /**
     * 事件样式名称
     */
    type EventStyleName = "default" | "_clickStyle" | "_hoverStyle" | string;
    /**
     * 事件样式附加规则样式(点击事件与hover事件)
     *
     * 特殊独立样式使用下划线开头Style结尾如：_clickStyle
     */
    type EventStyleType<T> = {
      /**
       * 鼠标点击样式
       */
      _clickStyle?: Partial<T>;
      /**
       * 鼠标移入移出样式
       */
      _hoverStyle?: Partial<T>;
      /**
       * 样式规则
       */
      _rules?: IRuleStyle | IRuleStyle[];
      /**
       * cesium特殊样式设置
       */
      _cesium?: IRuleKeyValueStyle;
      /**
       * 自定义样式
       */
      [key: string]: any;
    } & T;
    type FilterRuleType =
      | "gt"
      | "eq"
      | "ne"
      | "lt"
      | "ge"
      | "le"
      | "like"
      | "in"
      | "between";
    interface IFilterRule {
      key: string;
      value: any;
      rule: FilterRuleType;
    }
    interface IRuleKeyValueStyle {
      billboard?: IMapAny<{ type: string; value: any }>;
      label?: IMapAny<{ type: string; value: any }>;
      polyline?: IMapAny<{ type: string; value: any }>;
      polygon?: IMapAny<{ type: string; value: any }>;
      point?: IMapAny<{ type: string; value: any }>;
      // circle?: IMapAny<{ type: string; value: any }>;
      rectangle?: IMapAny<{ type: string; value: any }>;
    }
    /**
     * 规则样式
     */
    interface IRuleStyle<S = IStyleOptions> {
      rules: IFilterRule | IFilterRule[];
      style: S;
    }

    interface IStyleOptions
      extends EventStyleType<IBackground & IIconOption & ILabelOption> {
      /**
       * 样式层级
       */
      _zIndex?: number;
    }
  }
}
