function(c, a)
{//usage {t:target, p:args
	let //out = a.t.call(p),
	  // timestamp = out.match(/\d{6}\.\d{4}/g), //ex: ['230412.1634', '230412.1649']
	   timestamp = ["230423.1716","230423.1722"],
	   data = #hs.accts.transactions({count:16}),
	   first = (ele) => ele == timestamp[0],
	   last = (ele) => ele == timestamp[1]
	return data[0]['time'].toISOString()
	return data[time]

}	
