export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

interface CookieProps {
  path?: string;
  expires?: number | Date | string;
  [key: string]: string | number | Date | boolean | undefined;
}

export function setCookie(
  name: string,
  value: string,
  props: CookieProps = {}
) {
  props = {
    path: '/',
    ...props
  };

  let exp = props.expires;
  if (exp && typeof exp === 'number') {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }

  if (exp && exp instanceof Date) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true && propValue !== undefined) {
      updatedCookie += '=' + propValue;
    }
  }
  
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, '', { expires: -1 });
}
