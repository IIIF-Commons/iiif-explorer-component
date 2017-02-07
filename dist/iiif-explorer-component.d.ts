// iiif-explorer-component v1.0.1 https://github.com/viewdir/iiif-explorer-component#readme
interface JQuery {
    link: any;
    render: any;
}
interface JQueryStatic {
    observable: any;
    templates: any;
    views: any;
    view: any;
}

declare namespace IIIFComponents {
    class ExplorerComponent extends _Components.BaseComponent {
        options: IExplorerComponentOptions;
        private _$view;
        private _selected;
        private _current;
        private _parents;
        constructor(options: IExplorerComponentOptions);
        protected _init(): boolean;
        protected _draw(): void;
        protected _sortCollectionsFirst(a: Manifesto.IIIFResource, b: Manifesto.IIIFResource): number;
        gotoBreadcrumb(node: Manifesto.Collection): void;
        protected _switchToFolder(node: Manifesto.Collection): void;
        protected _followWithin(node: Manifesto.IIIFResource): Promise<Manifesto.IIIFResource[]>;
        set(): void;
        data(): Object;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ExplorerComponent {
    class Events {
        static EXPLORER_NODE_SELECTED: string;
    }
}

declare namespace IIIFComponents {
    interface IExplorerComponentOptions extends _Components.IBaseComponentOptions {
        helper: Manifold.IHelper;
        topRangeIndex: number;
        treeSortType: Manifold.TreeSortType;
    }
}
