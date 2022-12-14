import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const getFormarDistanceNow = (date: number) => {
    const formNow = formatDistanceToNow(date, { locale: es });
    return formNow;
}