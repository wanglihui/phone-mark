export interface IOpt extends IParam {
    length: number;
    mark: string;
    start: number;
}

export interface IParam {
    length?: number;
    mark?: string;
    start?: number;
}
const defaultOpt: IOpt = {
    length : 4,
    mark: '*',
    start: 3
}
export function phoneMark(phone: string, opts?: IParam) {
    let {length, mark, start} = (Object.assign(defaultOpt, opts)) as IOpt;
    let arr = phone.split("");
    arr.forEach( (_, index) => {
        if (index >= start && index - length < start) {
            arr[index] = mark;
        }
    });
    return arr.join("");
}