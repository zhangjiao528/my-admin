namespace BimMap {
  type ServiceResultTypeToCesium = {
    map: Cesium.CustomViewer;
    GridPolygon: Csm.IGridPolygon;
    AreaMapStyle: Csm.IAreaMapStyle;
    LayerGroupAdmin: Csm.ILayerGroupAdmin;
    IconMarker: Csm.IIconMarker;
    DomMarker: Csm.IDomMarker;
    ClusterPoint: Csm.IClusterPoint;
    Text: Csm.IText;
    Line: Csm.ILine;
    DrawLine: Csm.IDrawLine;
    HeatMap: Csm.IHeatMap;
    Kml: Csm.IKml;
    Trajectory: Csm.ITrajectory;
    LoadGeojson: Csm.ILoadGeojson;
    TileLayerAdmin: Csm.ITileLayerAdmin;
    IMeasure: Csm.IMeasure;
  };
}
