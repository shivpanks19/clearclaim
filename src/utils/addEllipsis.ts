export default function addEllipsis(text, wordlimit) {
	return text.split(' ').length > 12 ? text.split(' ').slice(0, 12).join(' ') + '...' : text;
}