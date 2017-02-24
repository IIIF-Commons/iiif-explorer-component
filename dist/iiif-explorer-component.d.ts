// iiif-explorer-component v1.0.2 https://github.com/viewdir/iiif-explorer-component#readme
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
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
        options: _Components.IBaseComponentOptions;
        private _$view;
        private _selected;
        private _current;
        private _parents;
        constructor(options: _Components.IBaseComponentOptions);
        protected _init(): boolean;
        protected _draw(): void;
        protected _sortCollectionsFirst(a: Manifesto.IIIFResource, b: Manifesto.IIIFResource): number;
        gotoBreadcrumb(node: Manifesto.Collection): void;
        protected _switchToFolder(node: Manifesto.Collection): void;
        protected _followWithin(node: Manifesto.IIIFResource): Promise<Manifesto.IIIFResource[]>;
        set(): void;
        data(): IExplorerComponentData;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ExplorerComponent {
    class Events {
        static EXPLORER_NODE_SELECTED: string;
    }
}

declare namespace IIIFComponents {
    interface IExplorerComponentData {
        helper: Manifold.IHelper | null;
        topRangeIndex: number;
        treeSortType: Manifold.TreeSortType;
    }
}
