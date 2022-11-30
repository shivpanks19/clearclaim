function createClass(prefix: string, value: string | number, allowEmptyValue = false, separator = '-'): string {
	if (value || (value === '' && allowEmptyValue)) {
		return `${prefix ?? ''}${prefix ? separator : ''}${value}`;
	}
	else {
		return '';
	}
}

export { createClass };
