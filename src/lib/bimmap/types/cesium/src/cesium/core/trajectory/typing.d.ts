namespace BimMap {
  namespace Csm{
    interface ITrajectory
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", ServiceOptions.ITrajectoryOptions> {
      /**
       * @description 创建轨迹动画
       *
       * @param {Object} options 创建轨迹动画的参数
       * @param {String} options.name Feature 实例的名字
       * @param {Number[][]} options.route 轨迹路径的坐标
       */
      create(options: IFeature): this;
      /**
       * @description 开始动画的方法
       */
      start();
      /**
       * @description 停止动画的方法
       *
       */
      stop();
      /**
       * @description 获取范围的中心点
       *
       * @param {Array<Number[]>} route 实例返回的 route
       * @return {Number[]} 返回一个经纬度数组
       */
      getCenterCoordinates(points: LngLatType[]);
    }
    var Trajectory: IServiceConstructor<
      "cesium",
      ServiceOptions.ITrajectoryOptions,
      ITrajectory
    >;
  }
}
