namespace BimMap {
  type ServiceResultTypeToLeaflet = {
    map: L.Map;
    GridPolygon: Leaflet.IGridPolygon;
    AreaMapStyle: Leaflet.IAreaMapStyle;
    LayerGroupAdmin: Leaflet.ILayerGroupAdmin;
    IconMarker: Leaflet.IIconMarker;
    DomMarker: Leaflet.IDomMarker;
    ClusterPoint: Leaflet.IClusterPoint;
    Text: Leaflet.IText;
    Line: Leaflet.ILine;
    DrawLine: Leaflet.IDrawLine;
    HeatMap: Leaflet.IHeatMap;
    Kml: Leaflet.IKml;
    Trajectory: Leaflet.ITrajectory;
    LoadGeojson: Leaflet.ILoadGeojson;
    TileLayerAdmin: Leaflet.ITileLayerAdmin;
    IMeasure: any;
  };
}
