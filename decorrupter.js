function(c, a)
{//usage script{ t:#s.user.script, p:{key:value} }
	var z  = /[¡¢Á¤Ã¦§¨©ª]/ig,
		d,
		m,
		i=0

	if(a.p){d = a.t.call(a.p)} 
	else {d = a.t.call()} 
	m = d.pop?true: false	
	d = (d.pop?d.join`
	`:d).replaceAll(/`\w(.)`/g, '$1')
	
	do{
		if(a.p){m = a.t.call(a.p)} 
		else {m = a.t.call()} 
		m = (m.pop?m.join`
		`:m).replaceAll(/`\w(.*?)`/g, '$1')

		d = d.replaceAll(z, function(match, offset, d){
			return m[offset];
		})
		i++
	}while(d.match(z) && i<10)
	
	return d

}
