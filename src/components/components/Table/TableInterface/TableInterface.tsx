
export interface ISettings
{
    flagSettings: boolean,
    handleSettings: any
}


export interface ITableData{
    headers: Array<string>,
    lines:   Array<ITableDataLines>
    handleRemove?: any

    settings: ISettings
}

export interface ITableDataLines{
    cells: Array<any>
}


