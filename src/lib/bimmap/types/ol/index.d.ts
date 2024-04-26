/**
 * 此目录文件只做开发类型定义使用
 */
export as namespace ol;
import "@olt/sphere";
export declare namespace sphere {
  export * from "@olt/sphere";
}
import "@olt/control";
export declare namespace control {
  export * from "@olt/control";
}
import "@olt/events";
import "@olt/events/condition";
export declare namespace events {
  export * from "@olt/events";
  export namespace condition {
    export * from "@olt/events/condition";
  }
}
import "@olt/extent";
export declare namespace extent {
  export * from "@olt/extent";
}
import "@olt/format";
import "@olt/format/Feature";
export declare namespace format {
  export * from "@olt/format";
  export * from "@olt/format";
  export namespace Feature {
    export * from "@olt/format/Feature";
  }
}
import "./geom";
export declare namespace geom {
  export * from "./geom";
}
import "@olt/interaction";
import "@olt/interaction/Select";
export declare namespace interaction {
  export * from "@olt/interaction";
  export namespace Select {
    export * from "@olt/interaction/Select";
  }
  export { default as Select } from "@olt/interaction/Select";
}
import "./layer";
export declare namespace layer {
  export * from "./layer";
}
import "@olt/pointer";
export declare namespace pointer {
  export * from "@olt/pointer";
}
import "@olt/proj";
export declare namespace proj {
  export * from "@olt/proj";
}
import "@olt/render";
export declare namespace render {
  export * from "@olt/render";
}
import "@olt/renderer";
export declare namespace renderer {
  export * from "@olt/renderer";
}
import "@olt/reproj";
export declare namespace reproj {
  export * from "@olt/reproj";
}
import "./source";
export declare namespace source {
  export * from "./source";
}
import "@olt/structs";
export declare namespace structs {
  export * from "@olt/structs";
}
import "./style";
export declare namespace style {
  export * from "./style";
}
import "@olt/tilegrid";
export declare namespace tilegrid {
  export * from "@olt/tilegrid";
}
import "@olt/vec";
export declare namespace vec {
  export * from "@olt/vec";
}
import "@olt/webgl";
export declare namespace webgl {
  export * from "@olt/webgl";
}
import "@olt/Observable";
export declare namespace Observable {
  export * from "@olt/Observable";
}
import "@olt/tilegrid/WMTS";
export declare namespace tilegrid {
  export { default as WMTS } from "@olt/tilegrid/WMTS";
}
export { default as TileState } from "@olt/TileState";
export * from "@olt/coordinate";
export * from "@olt";
