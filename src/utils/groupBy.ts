const groupBy = prop => data => {
	return data.reduce((dict, item) => {
		const { [prop]: _, ...rest } = item;
		dict[item[prop]] = [...(dict[item[prop]] || []), rest];
		return dict;
	}, {});
};

export default groupBy