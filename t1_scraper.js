function(c, a)
{//usage script{t:#s.corp.loc}
	/*
	(s,a,y,b=/[¡¢ÁÃ¤-ª]/g,c=(q=s.call(a))=>(q.pop?q.join`
	`:q).replace(/`\w(.)`/g,"$1"),r=x=>b.test(x,y=c())?r(x.replace(b,(z,f)=>y[f])):x)=>r(c())
*/
	let i, o, n, m, p, q, r, s="", u
	o = #fs.aidwn.decorrupter({t:a.t}).split('\n').pop().match(/\w+(?= \|)/g) //blog, about
	
	i = #fs.aidwn.decorrupter({t:a.t, p:{}})
	n = String(i.match(/\w+(?=:"\w+"$)/)) //navigation command
	m = String(i.match(/\w+(?="$)/)) //loc page

	p = String(#fs.aidwn.decorrupter({t:a.t, p:{[n]:o[1]}}).match(/(?<=strategy )\w+/)) //password
	q = #fs.aidwn.decorrupter({t:a.t, p:{[n]:o[0]}}).match(/(?<=nues on )\w+|(?<=ook for )\w+|(?<=ters for )\w+|(?<=ments on )\w+/g) //project names

	o = ["p", "pass", "password"]
	for (i of o){
		if(#fs.aidwn.decorrupter({t:a.t, p:{[n]:m, [i]:p}}).length>50){break}
	}
	for(r of q){
		if(#fs.aidwn.decorrupter({t:a.t, p:{[n]:m,[i]:p, project:r}}).length < 999) { 
			s += #fs.aidwn.decorrupter({t:a.t, p:{[n]:m,[i]:p, project:r}}) 
		}
	}
	return s
}
