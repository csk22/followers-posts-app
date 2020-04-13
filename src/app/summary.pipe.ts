import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: any, limit?: number) {
        if (!value) {
            return null;
        }
        const actualLimit = (limit) ? limit : 50;
        return (<string>value).substr(0, actualLimit) + '....';
    }
}
