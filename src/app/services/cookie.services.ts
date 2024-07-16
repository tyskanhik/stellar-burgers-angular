import { Injectable } from "@angular/core";

interface CookieOptions {
    expires?: number | Date | string;
    path?: string;
    [key: string]: string | number | Date | boolean | undefined;
}

@Injectable({
    providedIn: "root"
})

export class CookieService {

    public setCookie(name: string, value: string, option?: CookieOptions): void {
        option = {
            path: '/',
            ...option
        }

        let exp = option?.expires
        if (option?.expires && typeof exp === 'number') {
            const expiresDate = new Date();
            expiresDate.setTime(expiresDate.getTime() + exp * 1000)
            exp = option.expires = expiresDate.toUTCString()
        }

        if (option?.expires && exp instanceof Date) {
            option.expires = exp.toUTCString();
        }

        value = encodeURIComponent(value);
        let updatedCookie = name + '=' + value;
        for (let optionName in option) {
            {
                updatedCookie += ';' + optionName;
                const optionValue = option[optionName];
                if (optionValue !== true && optionValue !== undefined) {
                    updatedCookie += '=' + optionValue;
                }
            }
        }

        document.cookie = updatedCookie;
    }

    public deleteCookie(name: string): void {
        this.setCookie(name, '', { expires: 1 })
    }

    public getCookie(name: string): string {
        const cookieValue = document.cookie.match('(^|;)?' + name + '=([^;]*)(;|$)');
        return cookieValue? decodeURIComponent(cookieValue[2]) : '';
    }
}