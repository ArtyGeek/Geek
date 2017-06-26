export class SidebarItemModel {
    constructor(
        public name: string = '',
        public iconClass: string = '',
        // public link: string = '',
        public children: Array<Object> = []
    ) { }
    static fromJSONArray(arr: Array<Object>): SidebarItemModel[] {
        return arr.map(obj =>
            new SidebarItemModel(
                obj['name'],
                obj['iconClass'],
                // obj['link'],
                obj['children']
            )
        );
    }
}
