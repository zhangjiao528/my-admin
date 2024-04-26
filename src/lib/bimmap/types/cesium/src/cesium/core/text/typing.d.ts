namespace BimMap {
  namespace Csm{
    interface IText
      extends IFeatureHandle<"cesium">,
        State.IBaseState<"cesium", ServiceOptions.ITextOptions> {
      /**
       * @description 用于创建icon类型的文字标注
       *
       * @param {ICreateOptions} options 参数
       */
      create(options: IFeature | IFeature[]): this;

      /**
       * @deprecated 下一版本移除，请改用 addHover
       *
       * @description 用于创建选择事件的
       *
       * @param {String | undefind | null} name 事件名字
       * @param {Function | undefind | null} callBack 回调函数
       */
      addSelect(name, callBack): this;
    }
    var Text: IServiceConstructor<"cesium", ServiceOptions.ITextOptions, IText>;
  }
}
