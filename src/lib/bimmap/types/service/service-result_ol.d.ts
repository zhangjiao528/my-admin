namespace BimMap {
  type ServiceResultTypeToOL = {
    map: ol.Map;
    GridPolygon: OL.IGridPolygon;
    AreaMapStyle: OL.IAreaMapStyle;
    LayerGroupAdmin: OL.ILayerGroupAdmin;
    IconMarker: OL.IIconMarker;
    DomMarker: OL.IDomMarker;
    ClusterPoint: OL.IClusterPoint;
    Text: OL.IText;
    Line: OL.ILine;
    DrawLine: OL.IDrawLine;
    HeatMap: OL.IHeatMap;
    Kml: OL.IKml;
    Trajectory: OL.ITrajectory;
    LoadGeojson: OL.ILoadGeojson;
    TileLayerAdmin: OL.ITileLayerAdmin;
    IMeasure: BimMap.OL.IMeasure;
  };
}
