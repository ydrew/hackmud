function(c, a)
{//usage: user.script{t:#s.npc.loc}
	var p = {}, out, g, k
	var m = [
		["did", "fran_lee"],
		["hou", "robovac"],
		["dir", "sentience"],
		["ons", "sans_comedy"],
		["ie's", "angels"],
		["y's", "minions"],
		["u d", "sisters"],
		["ill", "petra"],
		["fay", "fountain"],
		["n.", "helpdesk"],
		["mem", "bunnybat"],
		["s.", "get_level"],
		["atm", "weathernet"],
		["nit", "eve"],
		["emp", "resource"],
		["ese", "bo"],
		["1", "heard"],
		["a s", "teach"],
		["t t", "outta_juice"],
		["E", "poetry"]
	]
	function go(k, g, p, t)
	{//usage go( k:"lock_name", g:wordlist[], p:dictionary, t:a.t )
	
		let n

		for(let v of g){
			p[k] = v
			n = t.call(p)
			if(!n.match("not the")){return v}
		}
	}
	
	do{
		out = a.t.call(p).replace(/[^]*LOCK_E.*\n/gm, '')
		if(out.match("c00")){
			g = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];
			k = out.match(/c00\w+/)
			p[k] = go(k, g, p, a.t)
			//if(k=="c002"){ p.c002_complement = g[ (g.indexOf(p.c002) + 4) % 8]}
			//if(k=="c003"){ 
			//	p.c003_triad_1 = g[ (g.indexOf(p.c003) + 5) % 8]
			//	p.c003_triad_2 = g[ (g.indexOf(p.c003) + 3) % 8]
			//}
			continue
		}
		
		if(out.match("digit")){
			g = [0,1,2,3,4,5,6,7,8,9]
			k = out.match(/(?<=N)\w*digit/)
			p[k] = go(k, g, p, a.t)
			continue
		}
	
		if(out.match("l0cket")){
			g = ["6hh8xw", "cmppiq", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "xwz7ja"]
			k = "l0cket"
			p[k] = go(k, g, p, a.t)
			continue			
		}
	
			
		if(out.match("DATA_CHECK")){
			p.DATA_CHECK = ""
			out = a.t.call(p).replace(/[^]*LOCK_E.*\n/gm, '')
			let x = "",q ,b
			for(let s of out.split("\n")){
				for ([q, b] of m) {
					if (s.includes(q)) {x += b}
				}
			}
			p.DATA_CHECK = x
			continue
		}
		
		if(out.match("prime")){
			g = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
			k = out.match(/(?<=N)\w*prime/)
			p[k] = go(k, g, p, a.t)
			continue
		}
		
		else if(out.match("EZ")){
			g = ["open", "unlock", "release"]
			k = out.match(/EZ_\d+/)
			p[k] = go(k, g, p, a.t)
			continue
		}
		
		else{return (p + "\n" + a.t.call(p))}
		
		
	}while (!(out.includes("term") ))
	
	return (p + "\n" + a.t.call(p))
	
}
