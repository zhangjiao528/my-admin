namespace BimMap {
  type ServiceResultTypeToSupermap = {
    map: Cesium.CustomViewer;
    GridPolygon: Supermap.IGridPolygon;
    AreaMapStyle: Supermap.IAreaMapStyle;
    LayerGroupAdmin: Supermap.ILayerGroupAdmin;
    IconMarker: Supermap.IIconMarker;
    DomMarker: Supermap.IDomMarker;
    ClusterPoint: Supermap.IClusterPoint;
    Text: Supermap.IText;
    Line: Supermap.ILine;
    DrawLine: Supermap.IDrawLine;
    HeatMap: Supermap.IHeatMap;
    Kml: Supermap.IKml;
    Trajectory: Supermap.ITrajectory;
    LoadGeojson: Supermap.ILoadGeojson;
    TileLayerAdmin: Supermap.ITileLayerAdmin;
    IMeasure: Supermap.IMeasure;
  };
}
