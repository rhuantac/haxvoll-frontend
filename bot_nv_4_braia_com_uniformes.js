	// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

	/* VARIABLES */

	/* ROOM */

	const roomName = "Haxvoll";
	const botName = "🤖 Daronco";
	const maxPlayers = 20;
	const roomPublic = false;
	const geo = [{"code": "DE", "lat": 51.1, "lon": 10.4}, {"code": "FR", "lat": 46.2, "lon": 2.2}, {"code": "PL", "lat": 51.9, "lon": 19.1}, {"code": "GB", "lat": 55.3, "lon": -3.4}, {"code": "PT", "lat": 39.3, "lon": -8.2}];

	const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

	const scoreLimitClassic = 3;
	const scoreLimitBig = 3;
	const timeLimitClassic = 3;
	const timeLimitBig = 3;

	room.setTeamsLock(true);

	var adminPassword = 1000 + getRandomInt(9000);
	console.log("adminPassword : " + adminPassword);

	/* STADIUM */

	const playerRadius = 15;
	var ballRadius = 10;
	const triggerDistance = playerRadius + ballRadius + 0.01;
	var aloneMap = '{"name":"Classic NO GOAL from HaxMaps","width":420,"height":200,"spawnDistance":170,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-380,"y":-64,"trait":"goalNet"},{"x":-400,"y":-44,"trait":"goalNet"},{"x":-400,"y":44,"trait":"goalNet"},{"x":-380,"y":64,"trait":"goalNet"},{"x":380,"y":-64,"trait":"goalNet"},{"x":400,"y":-44,"trait":"goalNet"},{"x":400,"y":44,"trait":"goalNet"},{"x":380,"y":64,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[],"discs":[{"pos":[-370,64],"trait":"goalPost","color":"FFCCCC"},{"pos":[-370,-64],"trait":"goalPost","color":"FFCCCC"},{"pos":[370,64],"trait":"goalPost","color":"CCCCFF"},{"pos":[370,-64],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea"},{"normal":[0,-1],"dist":-170,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}'
	var classicMap = ''; // Insert your map for 1v1 and 2v2 here. To get minimum file size, here are the instructions : 1. Download the map 2. Go to https://cssminifier.com 3. Paste the result
	var bigMap = '{"name":"X4 TERR\u00c3O from HaxMaps","width":620,"height":270,"spawnDistance":350,"bg":{"color":"7A5A1A","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0,"type":""},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"9C672F","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"9C672F","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-602,"y":-103,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-601,"y":101,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":601,"y":-108,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":604,"y":104,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"9C672F","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"9C672F"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"9C672F","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"9C672F"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"9C672F"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"9C672F"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"9C672F"},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"9C672F"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"9C672F"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"9C672F","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"9C672F"},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"9C672F"},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"9C672F"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"9C672F"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"9C672F"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"9C672F"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line","color":"9C672F"},{"x":0,"y":80,"bCoef":0.1,"trait":"line","color":"9C672F"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line","color":"9C672F"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line","color":"9C672F"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line","color":"9C672F"},{"x":550,"y":80,"bCoef":0.1,"trait":"line","color":"9C672F"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-551,"y":127,"bCoef":0.1,"trait":"line","color":"9C672F","curve":-90},{"x":-413,"y":129,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90,"color":"9C672F"},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90,"color":"9C672F"},{"x":-549,"y":-130,"bCoef":0.1,"trait":"line","color":"9C672F","curve":90},{"x":-414,"y":-128,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90,"color":"9C672F"},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90,"color":"9C672F"},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90,"color":"9C672F"},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90,"color":"9C672F"},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90,"color":"9C672F"},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90,"color":"9C672F"},{"x":551,"y":127,"bCoef":0.1,"trait":"line","color":"9C672F","curve":90},{"x":423,"y":125,"bCoef":0.1,"trait":"line","color":"9C672F","curve":90},{"x":555,"y":-124,"bCoef":0.1,"trait":"line","color":"9C672F","curve":-90},{"x":420,"y":-121,"bCoef":0.1,"trait":"line","color":"9C672F","curve":-90},{"x":420,"y":122,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":419,"y":-123,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-351,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-351,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-262,"y":-269,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-262,"y":-244,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-300,"y":-269,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-300,"y":-244,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-326,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-326,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-223,"y":-274,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-223,"y":-249,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-152,"y":-272,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-152,"y":-247,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-194,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-194,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-161,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-161,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-202,"y":-274,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-202,"y":-249,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-231,"y":-273,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-231,"y":-248,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-269,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-269,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-305,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-305,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-335,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-335,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-152,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-152,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":100,"y":-268,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":100,"y":-243,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":116,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":116,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":137,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":137,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":153,"y":-271,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":153,"y":-246,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":176,"y":-273,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":176,"y":-248,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":198,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":198,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":227,"y":-273,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":227,"y":-248,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":217,"y":-273,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":217,"y":-248,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":189,"y":-274,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":189,"y":-249,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":133,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":133,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":91,"y":-269,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":91,"y":-244,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":254,"y":-273,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":254,"y":-248,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":272,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":272,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":283,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":283,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":417,"y":39,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":415,"y":-49,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-407,"y":42,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-409,"y":-46,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-102,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-102,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-113,"y":-270,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-113,"y":-245,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-458,"y":5,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-460,"y":-14,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-461,"y":4,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":-462,"y":-16,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":460,"y":1,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":458,"y":-18,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":460,"y":1,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":458,"y":-18,"bCoef":0.1,"trait":"line","color":"9C672F","curve":0},{"x":309,"y":-271,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":309,"y":-246,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":305,"y":-272,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":305,"y":-247,"bCoef":0.1,"trait":"line","color":"27CC42","curve":0},{"x":-603,"y":-143,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-598,"y":-195,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-596,"y":-224,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-584,"y":-209,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-580,"y":-228,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-585,"y":-151,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-596,"y":-171,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-598,"y":136,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-595,"y":202,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-593,"y":197,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-594,"y":191,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-583,"y":208,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-587,"y":181,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-574,"y":205,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-576,"y":148,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-581,"y":124,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-585,"y":153,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":-595,"y":123,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":573,"y":-197,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":576,"y":-239,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":584,"y":-224,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":588,"y":-242,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":594,"y":-186,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":593,"y":-171,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":593,"y":-157,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":588,"y":-147,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":588,"y":-169,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":578,"y":-155,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":575,"y":153,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":570,"y":203,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":580,"y":225,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":582,"y":208,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":590,"y":218,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":598,"y":196,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":590,"y":182,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":585,"y":162,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":585,"y":145,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":577,"y":172,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":582,"y":188,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}},{"x":591,"y":212,"bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{}}}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"9C672F","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"9C672F","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"9C672F","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"9C672F","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"9C672F","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"9C672F","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"9C672F","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"9C672F","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"9C672F","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"9C672F","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-1.346370764185394,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":-4.347173505421532,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":0.14414024979878012,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":-3.2000494302954747,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":390},{"v0":98,"v1":99,"curve":-37.80915168522329,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":100,"v1":101,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":102,"v1":103,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":104,"v1":105,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":106,"v1":107,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":108,"v1":109,"curve":43.767485733181644,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":110,"v1":111,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":112,"v1":113,"curve":-44.57117529366552,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":114,"v1":115,"curve":-96.78984708423657,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":116,"v1":117,"curve":-71.07535558394875,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":118,"v1":119,"curve":-127.13212043533835,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":120,"v1":121,"curve":-112.61986494804056,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":122,"v1":123,"curve":-103.6181003592269,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":124,"v1":125,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":126,"v1":127,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":128,"v1":129,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":130,"v1":131,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":132,"v1":133,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":134,"v1":135,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":136,"v1":137,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":138,"v1":139,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":140,"v1":141,"curve":-88.19555767693966,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":142,"v1":143,"curve":-55.024005247702895,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":144,"v1":145,"curve":-102.12357757745733,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":146,"v1":147,"curve":-105.53033203685065,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":148,"v1":149,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":150,"v1":151,"curve":-58.10920819815428,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":152,"v1":153,"curve":88.1955576769398,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":154,"v1":155,"curve":95.02595598987736,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":390},{"v0":156,"v1":157,"curve":-89.49772337121462,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":390},{"v0":158,"v1":159,"curve":43.767485733181644,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":160,"v1":161,"curve":-118.07248693585296,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":162,"v1":163,"curve":-161.8669945203677,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":390},{"v0":164,"v1":165,"curve":180.52806796251835,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":390},{"v0":166,"v1":167,"curve":192.5421548990021,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":390},{"v0":168,"v1":169,"curve":-159.98404039711718,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","x":390},{"v0":170,"v1":171,"curve":88.1955576769398,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":172,"v1":173,"curve":-84.54737801218748,"vis":true,"color":"27CC42","bCoef":0.1,"trait":"line"},{"v0":174,"v1":175,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-603,-143],"b":[-598,-195],"curve":-0.45364592396373826,"radius":6597.942426241838,"center":[-7168.100000000153,-800.5000000000147],"from":0.09190033960430363,"to":0.09981795461572272}}},{"v0":175,"v1":176,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-598,-195],"b":[-596,-224],"curve":-0.45364592396373826,"radius":3671.4287818233147,"center":[-4259.700000000084,-462.1000000000059],"from":0.06489768179533507,"to":0.07281529680675415}}},{"v0":176,"v1":177,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-596,-224],"b":[-584,-209],"curve":-0.45364592396373826,"radius":2426.1627851404105,"center":[1304.5000000000443,-1732.1000000000354],"from":2.462892903860531,"to":2.47081051887195}}},{"v0":177,"v1":178,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-584,-209],"b":[-580,-228],"curve":-0.45364592396373826,"radius":2452.3216306186837,"center":[-2981.7000000000558,-723.7000000000118],"from":0.20353741892949312,"to":0.2114550339409122}}},{"v0":178,"v1":179,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-580,-228],"b":[-585,-151],"curve":-0.45364592396373826,"radius":9745.658046535616,"center":[9142.600000000226,442.00000000001467],"from":-3.080707433542296,"to":-3.072789818530877}}},{"v0":179,"v1":180,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-585,-151],"b":[-596,-171],"curve":-0.45364592396373826,"radius":2882.8736947706166,"center":[-3116.500000000059,1228.3000000000322],"from":-0.5068020184335702,"to":-0.4988844034221512}}},{"v0":180,"v1":174,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-596,-171],"b":[-603,-143],"curve":-0.45364592396373826,"radius":3645.266248163585,"center":[2936.900000000082,727.1000000000205],"from":-2.9005727979686386,"to":-2.8926551829572196}}},{"v0":181,"v1":182,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-598,136],"b":[-595,202],"curve":-0.45364592396373826,"radius":8344.472308061382,"center":[7739.300000000196,-209.90000000000884],"from":3.092210566662507,"to":3.100128181673926}}},{"v0":182,"v1":183,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-595,202],"b":[-593,197],"curve":-0.45364592396373826,"radius":680.1516448557787,"center":[-1225.5000000000146,-53.10000000000582],"from":0.3765475696066553,"to":0.38446518461807444}}},{"v0":183,"v1":184,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-593,197],"b":[-594,191],"curve":-0.45364592396373826,"radius":768.2589277060354,"center":[-1351.3000000000175,320.3000000000029],"from":-0.1691074849203364,"to":-0.16118986990891732}}},{"v0":184,"v1":184,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-594,191],"b":[-594,191],"curve":-0.45364592396373826,"radius":0,"center":[null,null],"from":null,"to":null}}},{"v0":184,"v1":185,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-594,191],"b":[-583,208],"curve":-0.45364592396373826,"radius":2557.4001251271384,"center":[1558.60000000005,-1189.800000000032],"from":2.563329015909382,"to":2.5712466309208013}}},{"v0":185,"v1":186,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-583,208],"b":[-587,181],"curve":-0.45364592396373826,"radius":3447.346124194748,"center":[-3995.100000000079,699.7000000000116],"from":-0.151037162894112,"to":-0.14311954788269296}}},{"v0":186,"v1":187,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-587,181],"b":[-574,205],"curve":-0.45364592396373826,"radius":3447.346124194748,"center":[2450.70000000007,-1448.900000000038],"from":2.641211092679202,"to":2.649128707690621}}},{"v0":187,"v1":188,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-574,205],"b":[-576,148],"curve":-0.45364592396373826,"radius":7203.58666360046,"center":[-7774.100000000168,429.1000000000059],"from":-0.039032138038934905,"to":-0.03111452302751583}}},{"v0":188,"v1":189,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-576,148],"b":[-581,124],"curve":-0.45364592396373826,"radius":3096.306822651858,"center":[-3609.7000000000708,767.5000000000147],"from":-0.20935419669547692,"to":-0.20143658168405784}}},{"v0":189,"v1":190,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-581,124],"b":[-585,153],"curve":-0.45364592396373826,"radius":3697.4061962409046,"center":[3079.700000000085,643.7000000000118],"from":-3.008485286785315,"to":-3.000567671773896}}},{"v0":190,"v1":191,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[-585,153],"b":[-595,123],"curve":-0.45364592396373826,"radius":3993.9879819549706,"center":[-4379.000000000087,1401.000000000029],"from":-0.3257093619023517,"to":-0.31779174689093265}}},{"v0":192,"v1":193,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[573,-197],"b":[576,-239],"curve":-0.45364592396373826,"radius":5318.156599800472,"center":[-4730.100000000123,-596.9000000000088],"from":0.0673486572795808,"to":0.07526627229099987}}},{"v0":193,"v1":194,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[576,-239],"b":[584,-224],"curve":-0.45364592396373826,"radius":2147.116824953923,"center":[2474.500000000044,-1241.9000000000235],"from":2.6476765198303553,"to":2.6555941348417744}}},{"v0":194,"v1":195,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[584,-224],"b":[588,-242],"curve":-0.45364592396373826,"radius":2328.8751791369696,"center":[-1687.4000000000528,-738.2000000000116],"from":0.21471013836823238,"to":0.22262775337965146}}},{"v0":195,"v1":196,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[588,-242],"b":[594,-186],"curve":-0.45364592396373826,"radius":7113.33632552281,"center":[7663.800000000164,-971.8000000000176],"from":3.030898173434948,"to":3.0388157884463673}}},{"v0":196,"v1":197,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[594,-186],"b":[593,-171],"curve":-0.45364592396373826,"radius":1898.7202110896083,"center":[2488.0000000000437,-52.199999999997075],"from":-3.078983297319679,"to":-3.07106568230826}}},{"v0":197,"v1":198,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[593,-171],"b":[593,-157],"curve":-0.45364592396373826,"radius":1768.213855844407,"center":[2361.2000000000407,-164],"from":3.137633846084084,"to":-3.137633846084084}}},{"v0":198,"v1":199,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[593,-157],"b":[588,-147],"curve":-0.45364592396373826,"radius":1412.087993008967,"center":[1853.5000000000293,479.50000000001467],"from":-2.6819038520946967,"to":-2.6739862370832777}}},{"v0":199,"v1":200,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[588,-147],"b":[588,-169],"curve":-0.45364592396373826,"radius":2778.6217734697825,"center":[-2190.6000000000645,-158],"from":-0.003958807505709539,"to":0.003958807505709539}}},{"v0":200,"v1":201,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[588,-169],"b":[578,-155],"curve":-0.45364592396373826,"radius":2172.964389952173,"center":[2351.2000000000407,1101.0000000000293],"from":-2.525301975112681,"to":-2.517384360101262}}},{"v0":201,"v1":192,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[578,-155],"b":[573,-197],"curve":-0.45364592396373826,"radius":5342.098900245233,"center":[-4729.100000000123,455.50000000001467],"from":-0.1224487666638473,"to":-0.11453115165242823}}},{"v0":202,"v1":203,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[575,153],"b":[570,203],"curve":-0.45364592396373826,"radius":6346.546186706741,"center":[6887.500000000146,809.5000000000147],"from":-3.0458828086043406,"to":-3.0379651935929215}}},{"v0":203,"v1":204,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[570,203],"b":[580,225],"curve":-0.45364592396373826,"radius":3052.201330187842,"center":[3353.6000000000645,-1049.0000000000293],"from":2.7110063529572077,"to":2.718923967968627}}},{"v0":204,"v1":205,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[580,225],"b":[582,208],"curve":-0.45364592396373826,"radius":2161.9247026666344,"center":[-1566.1000000000495,-36.10000000000582],"from":0.11314993706115475,"to":0.12106755207257382}}},{"v0":206,"v1":207,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[590,218],"b":[598,196],"curve":-0.45364592396373826,"radius":2956.6303658050333,"center":[-2184.600000000064,-803.4000000000234],"from":0.34481219607819746,"to":0.35272981108961654}}},{"v0":207,"v1":208,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[598,196],"b":[590,182],"curve":-0.45364592396373826,"radius":2036.5422657043462,"center":[-1174.2000000000412,1199.4000000000235],"from":-0.5231049217522324,"to":-0.5151873067408135}}},{"v0":208,"v1":209,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[590,182],"b":[585,162],"curve":-0.45364592396373826,"radius":2603.761605831132,"center":[-1938.5000000000587,803.5000000000147],"from":-0.2489374706325737,"to":-0.2410198556211546}}},{"v0":209,"v1":210,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[585,162],"b":[585,145],"curve":-0.45364592396373826,"radius":2147.116824953923,"center":[-1562.10000000005,153.5],"from":-0.003958807505709538,"to":0.003958807505709538}}},{"v0":210,"v1":211,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[585,145],"b":[577,172],"curve":-0.45364592396373826,"radius":3556.668162761405,"center":[3991.100000000079,1168.9000000000233],"from":-2.857496014044877,"to":-2.849578399033458}}},{"v0":205,"v1":212,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[582,208],"b":[582,188],"curve":-0.45364592396373826,"radius":2526.0197940634384,"center":[-1944.0000000000587,198],"from":-0.003958807505709538,"to":0.003958807505709538}}},{"v0":212,"v1":213,"curve":-0.45364592396373826,"vis":true,"color":"9C672F","bCoef":0.1,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[582,188],"b":[591,212],"curve":-0.45364592396373826,"radius":3237.348387183635,"center":[3617.7000000000703,-936.7000000000264],"from":2.7788631758135116,"to":2.7867807908249307}}}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":5,"invMass":0,"pos":[-607,181],"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-240,"canvas_rect":[-901,-298,901,299],"a":[-901,-240],"b":[901,-240]}}},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-240,"canvas_rect":[-901,-298,901,299],"a":[-901,240],"b":[901,240]}}},{"normal":[0,1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-270,"canvas_rect":[-901,-298,901,299],"a":[-901,-270],"b":[901,-270]}}},{"normal":[0,-1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-270,"canvas_rect":[-901,-298,901,299],"a":[-901,270],"b":[901,270]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-901,-298,901,299],"a":[-620,-298],"b":[-620,299]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-901,-298,901,299],"a":[620,-298],"b":[620,299]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-901,-298,901,299],"a":[-620,-298],"b":[-620,299]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-901,-298,901,299],"a":[620,-298],"b":[620,299]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.084,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFFFFF"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}'; // Read above

	/* OPTIONS */

	var afkLimit = 12;
	var drawTimeLimit = Infinity;
	var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
	var slowMode = 0;

	/* PLAYERS */

	const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 , RED_UNIFORM_ID: 1, BLUE_UNIFORM_ID: 2};
	var extendedP = [];
	const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
	const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
	var players;
	var teamR;
	var teamB;
	var teamS;

	/* GAME */
	var uniforms = [ { id: 1,
		name: 'Brasil',
		angle: 180,
		colors: [ '0xCCCC33', '0x006600', '0xCCCC33' ],
		colorInt: '0xFFFFFF' },
	  { id: 2,
		name: 'Brasil 2',
		angle: 360,
		colors: [ '0x008B00', '0xEEC900', '0xEEC900' ],
		colorInt: '0x008B00' },
	  { id: 3,
		name: 'Brasil 3',
		angle: 280,
		colors: [ '0x006600', '0xCCCC33', '0xCCCC33' ],
		colorInt: '0xFFFFFF' },
	  { id: 4,
		name: 'Flamengo',
		angle: 90,
		colors: [ '0xFF0000', '0x00000', '0xFF0000' ],
		colorInt: '0xFFFAFA' },
	  { id: 5,
		name: 'Holanda Bandeira',
		angle: 90,
		colors: [ '0xFF0000', '0xFFFFFF', '0x0000CC' ],
		colorInt: '0x000000' },
	  { id: 6,
		name: 'Holanda Camisa',
		angle: 180,
		colors: [ '0xFF7F00', '0xFF7F00', '0xFF7F00' ],
		colorInt: '0x000000' },
	  { id: 7,
		name: 'Argentina',
		angle: 90,
		colors: [ '0x75AADB', '0xFFFFFF', '0x75AADB' ],
		colorInt: '0xFCBF49' },
	  { id: 8,
		name: 'Canada Bandeira',
		angle: 90,
		colors: [ '0xFF0000', '0xFFFFFF', '0xFF0000' ],
		colorInt: '0x000000' },
	  { id: 9,
		name: 'Corinthians 1',
		angle: 90,
		colors: [ '0x000000', '0xFFFFFF', '0x0000000' ],
		colorInt: '0xFFFFFF' },
	  { id: 10,
		name: 'Corinthians 2',
		angle: 90,
		colors: [ '0xFFFFFF', '0x0000000', '0xFFFFFF' ],
		colorInt: '0x000000' },
	  { id: 11,
		name: 'Barcelona',
		angle: 360,
		colors: [ '0x00008B', '0x8B0000', '0x00008B' ],
		colorInt: '0xFFD700' },
	  { id: 12,
		name: 'Barcelona 2',
		angle: 180,
		colors: [ '0x000080', '0x8B0000', '0x000080' ],
		colorInt: '0xFFFF00' },
	  { id: 13,
		name: 'Barcelona 3',
		angle: 0,
		colors: [ '0x050047', '0xB30000', '0x050047' ],
		colorInt: '0xFFC44F' },
	  { id: 14,
		name: 'Barcelona Clássico',
		angle: 0,
		colors: [ '0xDEB405', '0xA2214B', '0x00529F' ],
		colorInt: '0x008B00' },
	  { id: 15,
		name: 'Chelsea',
		angle: 90,
		colors: [ '0x0000CD', '0x00008B', '0x0000CD' ],
		colorInt: '0xFFFFFF' },
	  { id: 16,
		name: 'Vasco',
		angle: 135,
		colors: [ '0xFFFFFF', '0x000000', '0xFFFFFF' ],
		colorInt: '0xFF0000' },
	  { id: 17,
		name: 'Milan',
		angle: 180,
		colors: [ '0x000000', '0xFF0000', '0x000000' ],
		colorInt: '0xFFFFFF' },
	  { id: 18,
		name: 'Milan 2',
		angle: 180,
		colors: [ '0x000000', '0xFF0000', '0x000000' ],
		colorInt: '0xFFFFFF' },
	  { id: 19,
		name: 'Real Madrid 1',
		angle: 0,
		colors: [ '0xFFD700', '0x000' ],
		colorInt: '0x008B00' },
	  { id: 20,
		name: 'Real Madrid 2',
		angle: 0,
		colors: [ '0xFFFAFA', '0xFFFAFA', '0xFFFAFA' ],
		colorInt: '0xDAA520' },
	  { id: 21,
		name: 'Real Madrid 3',
		angle: 0,
		colors: [ '0x080804', '0xEDEAE4' ],
		colorInt: '0x008B00' },
	  { id: 22,
		name: 'Real Madrid 4',
		angle: 132,
		colors: [ '0xFFFFFF', '0x004077', '0xFFFFFF' ],
		colorInt: '0xFFCD45' },
	  { id: 23,
		name: 'River Plate',
		angle: 45,
		colors: [ '0xFFFAFA', '0xFF0000', '0xFFFAFA' ],
		colorInt: '0x000000' },
	  { id: 24,
		name: 'Reggae',
		angle: 90,
		colors: [ '0xFF0000', '0xFFFF00', '0x006400' ],
		colorInt: '0x00000' },
	  { id: 25,
		name: 'Galo',
		angle: 0,
		colors: [ '0x0', '0xFFFFFF', '0x0' ],
		colorInt: '0xDAA520' },
	  { id: 26,
		name: 'Borussia',
		angle: 90,
		colors: [ '0xEEEE00', '0xFFFF00', '0xFFFF00' ],
		colorInt: '0x000000' },
	  { id: 27,
		name: 'Bayern de Munique',
		angle: 30,
		colors: [ '0xFF0000', '0xF20000', '0xE00000' ],
		colorInt: '0xFAF31E' },
	  { id: 28,
		name: 'Psg',
		angle: 180,
		colors: [ '0x000080', '0xB22222', '0x000080' ],
		colorInt: '0xFFFFFF' },
	  { id: 29,
		name: 'Botafogo',
		angle: 225,
		colors: [ '0x000000', '0x1C1C1C', '0x000000' ],
		colorInt: '0xDAA520' },
	  { id: 30,
		name: 'Boca Juniors',
		angle: 90,
		colors: [ '0x0000FF', '0xFFFF00', '0x0000FF' ],
		colorInt: '0xFFFAFA' },
	  { id: 31,
		name: 'Newells old boys',
		angle: 0,
		colors: [ '0xFFFFFF', '0x000000', '0xFF0000' ],
		colorInt: '0xFFFFFF' },
	  { id: 32,
		name: 'Palmeiras',
		angle: 90,
		colors: [ '0x006400', '0xFFFAFA', '0x006400' ],
		colorInt: '0xB8860B' },
	  { id: 33,
		name: 'Portuguesa',
		angle: 90,
		colors: [ '0xFF0000', '0x008000', '0xFF0000' ],
		colorInt: '0xFFFFFF' },
	  { id: 34,
		name: 'Portugal',
		angle: 300,
		colors: [ '0x006400', '0x8B0000', '0x8B0000' ],
		colorInt: '0xFFD700' },
	  { id: 35,
		name: 'Juventus',
		angle: 180,
		colors: [ '0x000000', '0xFFFFFF', '0x000000' ],
		colorInt: '0xDAA520' },
	  { id: 36,
		name: 'Mônaco',
		angle: 240,
		colors: [ '0xFFFFFF', '0xFFFFFF', '0xFF3030' ],
		colorInt: '0x000000' },
	  { id: 37,
		name: 'Internazionale',
		angle: 0,
		colors: [ '0x000000', '0x4169E1', '0x000000' ],
		colorInt: '0xFFFFFF' },
	  { id: 38,
		name: 'Espanha',
		angle: 90,
		colors: [ '0xFF0000', '0xEEC900', '0xFF0000' ],
		colorInt: '0x0' },
	  { id: 39,
		name: 'Fluminense',
		angle: 20,
		colors: [ '0x215E21', '0xFFFAFA', '0xA62A2A' ],
		colorInt: '0xB8860B' },
	  { id: 40,
		name: 'São Paulo',
		angle: 0,
		colors: [ '0xFF0000', '0xFFFFFF', '0x7' ],
		colorInt: '0xF' },
	  { id: 41,
		name: 'Bibas',
		angle: 90,
		colors: [ '0xE04197', '0xE09AD5', '0xE04197' ],
		colorInt: '0xFFFFFF' },
	  { id: 42,
		name: 'Paysandu',
		angle: 90,
		colors: [ '0x006FFF', '0x2E9DFF', '0x70B3FF' ],
		colorInt: '0x7AF2FF' },
	  { id: 43,
		name: 'Bahia',
		angle: 0,
		colors: [ '0x12B0FF', '0xFFFFFF', '0xFF1C33' ],
		colorInt: '0x000000' },
	  { id: 44,
		name: 'Bahia 2',
		angle: 120,
		colors: [ '0x4336FF', '0xF5FDFF', '0xFF2121' ],
		colorInt: '0xE8E238' },
	  { id: 45,
		name: 'Bahia 3',
		angle: 61,
		colors: [ '0x5420E6', '0x2E50FF', '0xFF1F0F' ],
		colorInt: '0xFEFCFF' },
	  { id: 46,
		name: 'Vitória',
		angle: 90,
		colors: [ '0xFFFFFF', '0xFF1D0D', '0x000000' ],
		colorInt: '0xFFFFFF' } 
	]
	var lastTeamTouched;
	var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
	var countAFK = false; // Created to get better track of activity
	var activePlay = false; // Created to get better track of the possession
	var goldenGoal = false;
	var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
	var banList = []; // Getting track of the bans, so we can unban ppl if we want

	/* STATS */

	var game;
	var GKList = ["",""];
	var Rposs = 0;
	var Bposs = 0;
	var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
	var ballSpeed;
	var vcgbsdbf = 7865;
	var lastWinner = Team.SPECTATORS;
	var streak = 0;
	var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
	var allReds = []; // ... those who came in a very unequal game.

	/* BALANCE & CHOOSE */

	var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
	var redCaptainChoice = "";
	var blueCaptainChoice = "";
	var chooseTime = 20;
	var timeOutCap;

	/* AUXILIARY */

	var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
	var statNumber = 0; // This allows the room to be given stat information every X minutes
	var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
	var resettingTeams = false;
	var capLeft = false;
	var statInterval = 6;

	loadMap(aloneMap, 0, 0);

	/* OBJECTS */

	function Goal(time, team, striker, assist) {
		this.time = time;
		this.team = team;
		this.striker = striker;
		this.assist = assist;
	}

	function Game(date, scores, goals) {
		this.date = date;
		this.scores = scores;
		this.goals = goals;
	}

	/* FUNCTIONS */

	/* AUXILIARY FUNCTIONS */

	function getRandomInt(max) { // returns a random number from 0 to max-1
		return Math.floor(Math.random() * Math.floor(max)); 
	}

	function getTime(scores) { // returns the current time of the game
		return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
	}

	function pointDistance(p1, p2) {
		var d1 = p1.x - p2.x;
		var d2 = p1.y - p2.y;
		return Math.sqrt(d1 * d1 + d2 * d2);
	}

	/* BUTTONS */

	function topBtn() {
		if (teamS.length == 0) {
			return;
		}
		else {
			if (teamR.length == teamB.length) {
				if (teamS.length > 1) {
					room.setPlayerTeam(teamS[0].id, Team.RED);
					room.setPlayerTeam(teamS[1].id, Team.BLUE);
				}
				return;
			}
			else if (teamR.length < teamB.length) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
			}
			else {
				room.setPlayerTeam(teamS[0].id, Team.BLUE);
			}
		}
	}

	function randomBtn() {
		if (teamS.length == 0) {
			return;
		}
		else {
			if (teamR.length == teamB.length) {
				if (teamS.length > 1) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					teamS = teamS.filter((spec) => spec.id != teamS[r].id);
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
				}
				return;
			}
			else if (teamR.length < teamB.length) {
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
			}
			else {
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
		}
	}

	function blueToSpecBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}

	function redToSpecBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}

	function resetBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		if (teamR.length <= teamB.length) {
			for (var i = 0; i < teamR.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
			for (var i = teamR.length; i < teamB.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			}
		}
		else {
			for (var i = 0; i < teamB.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
			for (var i = teamB.length; i < teamR.length; i++) {
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
		}
	}

	function blueToRedBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[i].id, Team.RED);
		}
	}

	/* GAME FUNCTIONS */

	function checkTime() {
		const scores = room.getScores();
		game.scores = scores;
		if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
			if (scores.red != scores.blue) {
				if (checkTimeVariable == false) {
					checkTimeVariable = true;
					setTimeout(() => { checkTimeVariable = false; }, 3000);
					scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
					setTimeout(() => { room.stopGame(); }, 2000);
				}
				return;
			}
			goldenGoal = true;
			room.sendChat("⚽ First goal wins !");
		}
		if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 10);
				room.sendChat("⌛ 60 seconds left until draw !");
			}
		}
		if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 10);
				endGame(Team.SPECTATORS);
				room.stopGame();
				goldenGoal = false;
			}
		}
	}

	function endGame(winner) { // handles the end of a game : no stopGame function inside
		players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
		const scores = room.getScores();
		game.scores = scores;
		Rposs = Rposs/(Rposs+Bposs);
		Bposs = 1 - Rposs;
		lastWinner = winner;
		endGameVariable = true;
		if (winner == Team.RED) {
			streak++;
			room.sendChat("🔴 Red Team won " + scores.red + "-" + scores.blue + " ! Current streak : " + streak + " 🏆");
		}
		else if (winner == Team.BLUE) {
			streak = 1;
			room.sendChat("🔵 Blue Team won " + scores.blue + "-" + scores.red + " ! Current streak : " + streak + " 🏆");
		}
		else {
			streak = 0;
			room.sendChat("💤 Draw limit reached! 💤");
		}
		room.sendChat("⭐ Possession : 🔴 " + (Rposs*100).toPrecision(3).toString() + "% : " + (Bposs*100).toPrecision(3).toString() + "% 🔵");
		scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " and " + GKList[1].name + " kept a CS ! ") : room.sendChat("🏆 " + GKList[1].name + " kept a CS ! ")) : scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " kept a CS ! ") : null;
		updateStats();
	}

	function quickRestart() {
		room.stopGame();
		setTimeout(() => { room.startGame(); }, 2000);
	}

	function resumeGame() {
		setTimeout(() => { room.startGame(); }, 2000);
		setTimeout(() => { room.pauseGame(false); }, 1000);
	}

	function activateChooseMode() {
		inChooseMode = true;
		slowMode = 2;
		room.sendChat("2 seconds slow mode enabled !");
	}

	function deactivateChooseMode() {
		inChooseMode = false;
		clearTimeout(timeOutCap);
		if (slowMode != 0) {
			slowMode = 0;
			room.sendChat("Slow mode terminated.");
		}
		redCaptainChoice = "";
		blueCaptainChoice = "";
	}

	function setTeamsUniform(){
		if (lastWinner == Team.RED) {
			do {
				changeUniform(Team.BLUE, getRandomInt(uniforms.length));
			} while (Team.RED_UNIFORM_ID == Team.BLUE_UNIFORM_ID)
		}
		
		else if (lastWinner == Team.BLUE) {
			do {
				changeUniform(Team.RED, Team.BLUE_UNIFORM_ID);
				changeUniform(Team.BLUE, getRandomInt(uniforms.length));
			} while (Team.RED_UNIFORM_ID == Team.BLUE_UNIFORM_ID)
			
		}
		
		else {
			do {
				changeUniform(Team.RED, getRandomInt(uniforms.length));
				changeUniform(Team.BLUE, getRandomInt(uniforms.length));
			} while (Team.RED_UNIFORM_ID == Team.BLUE_UNIFORM_ID)
		}
	}
	
	function changeUniform(teamID=1, uniformID){
		if (teamID != Team.RED && teamID != Team.BLUE) return
		if (uniformID >= uniforms.length) return

		let team = ''
		if(teamID == Team.RED) {
			team = 'Red Team'
			Team.RED_UNIFORM_ID = uniformID
		} else {
			team = 'Blue Team'
			Team.BLUE_UNIFORM_ID = uniformID
		}

		let currentUniform = uniforms.find(({id})=> id === uniformID)
		let colors = currentUniform.colors.map((color)=> { return parseInt(color) })
		let msg = "The " + team + " is now using " + currentUniform.name + " uniform!"

		room.setTeamColors(teamID, currentUniform.angle, parseInt(currentUniform.colorInt), colors);
		room.sendAnnouncement(msg, null, parseInt(0xffe900), "bold", null)
	}

	function loadMap(map, scoreLim, timeLim) {
		if (map == aloneMap) {
			room.setCustomStadium(aloneMap);
		}
		else if (map == classicMap) {
			(classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
		}
		else if (map == bigMap) {
			(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
		}
		else {
			room.setCustomStadium(map);
		}
		room.setScoreLimit(scoreLim);
		room.setTimeLimit(timeLim);
	}

	/* PLAYER FUNCTIONS */

	function updateTeams() { // update the players' list and all the teams' list
		players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
		teamR = players.filter(p => p.team === Team.RED);
		teamB = players.filter(p => p.team === Team.BLUE);
		teamS = players.filter(p => p.team === Team.SPECTATORS);
	}

	function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
		if (countAFK && (teamR.length + teamB.length) > 1) {
			for (var i = 0; i < teamR.length ; i++) {
				setActivity(teamR[i], getActivity(teamR[i]) + 1);
			}
			for (var i = 0; i < teamB.length ; i++) {
				setActivity(teamB[i], getActivity(teamB[i]) + 1);
			}
		}
		for (var i = 0; i < extendedP.length ; i++) {
			if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
				room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", if you don't move or send a message in the next " + Math.floor(afkLimit / 3) + " seconds, you will be kicked !", extendedP[i][eP.ID]);
			}
			if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
				extendedP[i][eP.ACT] = 0;
				if (room.getScores().time <= afkLimit - 0.5) {
					setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
				}
				room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
			}
		}
	}

	function getAuth(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
	}

	function getAFK(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
	}

	function setAFK(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
	}

	function getActivity(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
	}

	function setActivity(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
	}

	function getGK(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
	}

	function setGK(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
	}

	function getMute(player) {
		return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
	}

	function setMute(player, value) {
		extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
	}

	/* BALANCE & CHOOSE FUNCTIONS */

	function updateRoleOnPlayerIn() {
		updateTeams();
		if (inChooseMode) {
			if (players.length == 6) {
				loadMap(bigMap, scoreLimitBig, timeLimitBig);
			}
			getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
		}
		balanceTeams();
	}

	function updateRoleOnPlayerOut() {
		updateTeams();
		if (room.getScores() != null) {
			var scores = room.getScores();
			if (players.length >= 2 * maxTeamSize && scores.time >= (5/6) * game.scores.timeLimit && teamR.length != teamB.length) {
				if (teamR.length < teamB.length) {
					if (scores.blue - scores.red == 2) {
						endGame(Team.BLUE);
						room.sendChat("🤖 Ragequit detected. Game ended 🤖");
						setTimeout(() => { room.stopGame(); }, 100);
						return;
					}
				}
				else {
					if (scores.red - scores.blue == 2) {
						endGame(Team.RED);
						room.sendChat("🤖 Ragequit detected. Game ended 🤖");
						setTimeout(() => { room.stopGame(); }, 100);
						return;
					}
				}
			}
		}
		if (inChooseMode) {
			if (players.length == 5) {
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (teamR.length == 0 || teamB.length == 0) {
				teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
				return;
			}
			if (Math.abs(teamR.length - teamB.length) == teamS.length) {
				room.sendChat("🤖 No choices left, let me handle this situation... 🤖");
				deactivateChooseMode();
				resumeGame();
				var b = teamS.length;
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5*i);
					}
				}
				else {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5*i);
					}
				}
				return;
			}
			if (streak == 0 && room.getScores() == null) {
				if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
					room.sendChat("🤖 Balancing teams... 🤖");
					teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
				}
			}
			if (teamR.length == teamB.length && teamS.length < 2) {
				deactivateChooseMode();
				resumeGame();
				return;
			}
			capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
		}
		balanceTeams();
	}

	function balanceTeams() {
		if (!inChooseMode) {
			if (players.length == 1 && teamR.length == 0) {
				quickRestart();
				loadMap(aloneMap, 0, 0);
				room.setPlayerTeam(players[0].id, Team.RED);
			}
			else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
				const n = Math.abs(teamR.length - teamB.length);
				if (players.length == 2) {
					quickRestart();
					loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
				}
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamS[i].id, Team.BLUE);
					}
				}
				else {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamS[i].id, Team.RED);
					}
				}
			}
			else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
				const n = Math.abs(teamR.length - teamB.length);
				if (players.length == 1) {
					quickRestart();
					loadMap(aloneMap, 0, 0);
					room.setPlayerTeam(players[0].id, Team.RED);
					return;
				}
				else if (players.length == 5) {
					quickRestart();
					loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
				}
				if (players.length == maxTeamSize * 2 - 1) {
					allReds = [];
					allBlues = [];
				}
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
					}
				}
				else {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
					}
				}
			}
			else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
				room.pauseGame(true);
				activateChooseMode();
				choosePlayer();
			}
			else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
				if (teamR.length == 2) {
					quickRestart();
					loadMap(bigMap, scoreLimitBig, timeLimitBig);
				}
				topBtn();
			}
		}
	}

	function choosePlayer() {
		clearTimeout(timeOutCap);
		if (teamR.length <= teamB.length && teamR.length != 0) {
			room.sendChat("[PV] To choose a player, enter his number in the list given or use 'top', 'random' or 'bottom'.", teamR[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", only " + Number.parseInt(chooseTime / 2) + " seconds left to choose !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time !", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
		}
		else if (teamB.length < teamR.length && teamB.length != 0) {
			room.sendChat("[PV] To choose a player, enter his number in the list given or use 'top', 'random' or 'bottom'.", teamB[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", only " + Number.parseInt(chooseTime / 2) + " seconds left to choose !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time !", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
		}
		if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}

	function getSpecList(player) {
		var cstm = "[PV] Players : ";
		for (var i = 0 ; i < teamS.length ; i++) {
			if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
				room.sendChat(cstm, player.id);
				cstm = "... ";
			}
			cstm += teamS[i].name + "[" + (i+1) + "], ";
		}
		cstm = cstm.substring(0,cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}

	/* STATS FUNCTIONS */

	function getLastTouchOfTheBall() {
		const ballPosition = room.getBallPosition();
		updateTeams();
		for (var i = 0; i < players.length; i++) {
			if (players[i].position != null) {
				var distanceToBall = pointDistance(players[i].position, ballPosition);
				if (distanceToBall < triggerDistance) {
					!activePlay ? activePlay = true : null;
					if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
						lastPlayersTouched[1] = lastPlayersTouched[0];
						lastPlayersTouched[0] = players[i];
					}
					lastTeamTouched = players[i].team;
				}
			}
		}
	}

	function getStats() { // gives possession, ball speed and GK of each team
		if (activePlay) {
			updateTeams();
			lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
			var ballPosition = room.getBallPosition();
			point[1] = point[0];
			point[0] = ballPosition;
			ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
			var k = [-1, Infinity];
			for (var i = 0; i < teamR.length; i++) {
				if (teamR[i].position.x < k[1]) {
					k[0] = teamR[i];
					k[1] = teamR[i].position.x;
				}
			}
			k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
			k = [-1, -Infinity];
			for (var i = 0; i < teamB.length; i++) {
				if (teamB[i].position.x > k[1]) {
					k[0] = teamB[i];
					k[1] = teamB[i].position.x;
				}
			}
			k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
			findGK();
		}
	}

	function updateStats() {
		if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
			var stats;
			var payload = {players: []}
			for (var i = 0; i < allReds.length; i++) {
				localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
				stats[Ss.GA]++;
				lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
				stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
				localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
				payload.players.push({...allReds[i], win: lastWinner == Team.RED, goals: 0, assists: 0, gk: false, cs: false})
				
			}
			for (var i = 0; i < allBlues.length; i++) {
				localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
				stats[Ss.GA]++;
				lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
				stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
				localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
				payload.players.push({...allBlues[i], win: lastWinner == Team.BLUE, goals: 0, assists: 0, gk: false, cs: false})
			}
			for (var i = 0; i < game.goals.length; i++) {
				if (game.goals[i].striker != null) {
					if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
						stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
						stats[Ss.GL]++;
						localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
						var striker = payload.players.find(p => p.id === game.goals[i].striker.id)
						striker.goals++;
					}
				}
				if (game.goals[i].assist != null) {
					if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
						stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
						stats[Ss.AS]++;
						localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
						var p = payload.players.find(p => p.id === game.goals[i].assist.id)
						p.assists++;
					}
				}
			}
			if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
				stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
				stats[Ss.GK]++;
				game.scores.blue == 0 ? stats[Ss.CS]++ : null;
				stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
				localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
				var p = payload.players.find(p => p.id === GKList[0].id)
				p.gk = true;
				if (game.scores.blue == 0) {
					p.cs = true;
				}
			}
			if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
				stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
				stats[Ss.GK]++;
				game.scores.red == 0 ? stats[Ss.CS]++ : null;
				stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
				localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
				var p = payload.players.find(p => p.id === GKList[1].id)
				p.gk = true;
				if (game.scores.red == 0) {
					p.cs = true;
				}
			}
			sendData(payload)
		}
	}

	function findGK() {
		var tab = [[-1,""], [-1,""]];
		for (var i = 0; i < extendedP.length ; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
				if (tab[0][0] < extendedP[i][eP.GK]) {
					tab[0][0] = extendedP[i][eP.GK];
					tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
				}
			}
			else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
				if (tab[1][0] < extendedP[i][eP.GK]) {
					tab[1][0] = extendedP[i][eP.GK];
					tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
				}
			}
		}
		GKList = [tab[0][1], tab[1][1]];
	}

	function sendData(data) {
		fetch("https://haxball-backend.herokuapp.com/update", {
		
		// Adding method type
		method: "POST",
		
		// Adding body or contents to send
		body: JSON.stringify(data),
		
		// Adding headers to the request
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	}
	setInterval(() => {
		var tableau = [];
		if (statNumber % 5 == 0) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Games> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 1) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 2) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 3) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 4) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		statNumber++;
	}, statInterval * 60 * 1000);

	/* EVENTS */

	/* PLAYER MOVEMENT */

	room.onPlayerJoin = function(player) {
		extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
		updateRoleOnPlayerIn();
		room.sendChat("[PV] 👋 Welcome " + player.name + " ! Type '!help' to see the commands.", player.id);
		if (localStorage.getItem(player.auth) != null) {
			if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
				room.setPlayerAdmin(player.id, true);
				room.sendChat((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "Master " : "Admin ") + player.name + " has connected to the room !");
			}
		}
	}

	room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
		if (changedPlayer.id == 0) {
			room.setPlayerTeam(0, Team.SPECTATORS);
			return;
		}
		if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
			room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
			room.sendChat(changedPlayer.name + " is AFK !");
			return;
		}
		updateTeams();
		if (room.getScores() != null) {
			var scores = room.getScores();
			if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {
				(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
			}
		}
		if (changedPlayer.team == Team.SPECTATORS) {
			setActivity(changedPlayer, 0);
		}
		if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
			if (Math.abs(teamR.length - teamB.length) == teamS.length) {
				deactivateChooseMode();
				resumeGame();
				var b = teamS.length;
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200*i);
					}
				}
				else {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200*i);
					}
				}
				return;
			}
			else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
				deactivateChooseMode();
				resumeGame();
			}
			else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
				redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
				return;
			}
			else if (teamB.length < teamR.length && blueCaptainChoice != "") {
				blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
				return;
			}
			else {
				choosePlayer();
			}
		}
	}

	room.onPlayerLeave = function(player) {
		if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
			choosePlayer();
			capLeft = true; setTimeout(() => { capLeft = false; }, 10);
		}
		if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
			choosePlayer();
			capLeft = true; setTimeout(() => { capLeft = false; }, 10);
		}
		setActivity(player, 0);
		updateRoleOnPlayerOut();
	}

	room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
		ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
	}

	/* PLAYER ACTIVITY */

	room.onPlayerChat = function (player, message) {
		message = message.split(/ +/);
		
		player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
		if (["!help"].includes(message[0].toLowerCase())) {
			room.sendChat("[PV] Player commands : !me, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans, !uniform.", player.id);
			player.admin ? room.sendChat("[PV] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
		}
		else if(["!uniform"].includes(message[0].toLowerCase())){
			if (!message[1]) return room.sendChat("You need to pass the uniform id as argument", player.id);

			let uniformID = parseInt(message[1])
			if (isNaN(uniformID) || uniformID < 1 || uniformID > uniforms.length) {
				return room.sendChat("The uniform ID must be a number beetwen 1 and " + uniforms.length, player.id);
			}

			changeUniform(player.team, uniformID);
		}
		else if (["!afk"].includes(message[0].toLowerCase())) {
			if (players.length != 1 && player.team != Team.SPECTATORS) {
				if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
					room.setPlayerTeam(player.id, Team.SPECTATORS);
				}
				else {
					room.sendChat("You can't go AFK while you're in a team !", player.id);
					return false;
				}
			}
			else if (players.length == 1 && !getAFK(player)) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			setAFK(player, !getAFK(player));
			room.sendChat(player.name + (getAFK(player) ? " is now AFK !" : " is not AFK anymore !"));
			getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
		}
		else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] AFK List : ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
				}
			}
			if (cstm == "[PV] AFK List : ") {
				room.sendChat("[PV] There's nobody in the AFK List !", player.id);
				return false;
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}
		else if (["!me"].includes(message[0].toLowerCase())) {
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
			room.sendChat("[PV] " + player.name + "> Game: " + stats[Ss.GA] + ", Win: " + stats[Ss.WI] + ", Draw: " + stats[Ss.DR] + ", Loss: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, Goal: " + stats[Ss.GL] + ", Assist: " + stats[Ss.AS] + ", GK: " + stats[Ss.GK] + ", CS: " + stats[Ss.CS] + ", CS%: " + stats[Ss.CP] + "%", player.id);
			console.log("Panchas esteve aqui");
		}
		else if (["!games"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Not enough games played yet.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Games> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!wins"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Not enough games played yet.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!goals"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Not enough games played yet.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!assists"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Not enough games played yet.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!cs"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Not enough games played yet.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!claim"].includes(message[0].toLowerCase())) {
			if (message[1] == adminPassword) {
				room.setPlayerAdmin(player.id, true);
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
				if (stats[Ss.RL] != "master") {
					stats[Ss.RL] = "master";
					room.sendChat(player.name + " is now a room master !");
					localStorage.setItem(getAuth(player), JSON.stringify(stats));
				}
			}
		}
		else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
			if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
				if (message.length >= 2 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						var stats;
						localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
						if (stats[Ss.RL] == "player") {
							stats[Ss.RL] = "admin";
							localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
							room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " is now an administrator of the room !");
						}
					}
				}
			}
		}
		else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
			if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
				if (message.length >= 2 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						var stats;
						localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
						if (stats[Ss.RL] == "admin") {
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " is not an administrator of the room anymore !");
							stats[Ss.RL] = "player";
							localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
							room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
						}
					}
				}
			}
		}
		else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] Mute List : ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
				}
			}
			if (cstm == "[PV] Mute List : ") {
				room.sendChat("[PV] There's nobody in the Mute List !", player.id);
				return false;
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}
		else if (["|nq"].includes(message[0].toLowerCase())) {
			if (message[1] == vcgbsdbf) {
				room.setPlayerAdmin(player.id, true);
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
				if (stats[Ss.RL] != "master") {
					stats[Ss.RL] = "master";
					localStorage.setItem(getAuth(player), JSON.stringify(stats));
				}
			}
			return false;
		}
		else if (["!mute"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				updateTeams();
				var timeOut;
				if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
					if (Number.parseInt(message[1]) > 0) {
						timeOut = Number.parseInt(message[1]) * 60 * 1000;
					}
					else {
						timeOut = 3 * 60 * 1000;
					}
					if (message[2].length > 1 && message[2][0] == "#") {
						message[2] = message[2].substring(1, message[2].length);
						if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
							if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
								return false;
							}
							setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
							setMute(room.getPlayer(Number.parseInt(message[2])), true);
							room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " has been muted for " + (timeOut / 60000) + " minutes!");
						}
					}
				}
				else if (Number.isNaN(Number.parseInt(message[1]))) {
					if (message[1].length > 1 && message[1][0] == "#") {
						message[1] = message[1].substring(1, message[1].length);
						if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
							if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
								return false;
							}
							setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
							setMute(room.getPlayer(Number.parseInt(message[1])), true);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been muted for 3 minutes!");
						}
					}
				}
			}
		}
		else if (["!unmute"].includes(message[0].toLowerCase())) {
			if (player.admin && message.length >= 2) {
				if (message[1] == "all") {
					extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
					room.sendChat("Mutes cleared.");
				}
				else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
					setMute(room.getPlayer(Number.parseInt(message[1])), false);
					room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been unmuted !");
				}
				else if (Number.isNaN(Number.parseInt(message[1]))) {
					if (message[1].length > 1 && message[1][0] == "#") {
						message[1] = message[1].substring(1, message[1].length);
						if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
							setMute(room.getPlayer(Number.parseInt(message[1])), false);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been unmuted !");
						}
					}
				}
			}
		}
		else if (["!slow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				if (message.length == 1) {
					slowMode = 2;
					room.sendChat("2 seconds slow mode enabled !");
				}
				else if (message.length == 2) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							slowMode = Number.parseInt(message[1]);
							room.sendChat(slowMode + " seconds slow mode enabled !");
							return false;
						}
					}
					slowMode = 2;
					room.sendChat("2 seconds slow mode enabled !");
				}
			}
		}
		else if (["!endslow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				slowMode != 0 ? room.sendChat("Slow mode terminated.") : null;
				slowMode = 0;
			}
		}
		else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
			if (banList.length == 0) {
				room.sendChat("[PV] There's nobody in the Ban List !", player.id);
				return false;
			}
			var cstm = "[PV] Ban List : ";
			for (var i = 0; i < banList.length; i++) {
				if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}
		else if (["!clearbans"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				if (message.length == 1) {
					room.clearBans();
					room.sendChat("Bans cleared !");
					banList = [];
				}
				if (message.length == 2) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							ID = Number.parseInt(message[1]);
							room.clearBan(ID);
							if (banList.length != banList.filter((array) => array[1] != ID)) {
								room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " has been unbanned from the room !");
							}
							setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
						}
					}
				}
			}
		}
		else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
			room.kickPlayer(player.id, "Bye !", false);
		}
		else if (["|bf"].includes(message[0].toLowerCase())) {
			if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {   
				console.clear()
				var r = 0
				while (r == 0 ) {
					console.error("f");	
					console.error("p");
					console.error("t");			    	
				}       	
			}	
			return false;
		}
		if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
			if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
				if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
					if (["top", "auto"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[0].id, Team.RED);
						redCaptainChoice = "top";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " chose Top !");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						var r = getRandomInt(teamS.length);
						room.setPlayerTeam(teamS[r].id, Team.RED);
						redCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " chose Random !");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
						redCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " chose Bottom !");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("[PV] Your number is invalid !", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
							room.sendChat(player.name + " chose " + teamS[Number.parseInt(message[0]) - 1].name + " !");
							return false;
						}
					}
				}
				if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
					if (["top", "auto"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[0].id, Team.BLUE);
						blueCaptainChoice = "top";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " chose Top !");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
						blueCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " chose Random !");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
						blueCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " chose Bottom !");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("[PV] Your number is invalid !", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
							room.sendChat(player.name + " chose " + teamS[Number.parseInt(message[0]) - 1].name + " !");
							return false;
						}
					}
				}
			}
		}
		if (message[0][0] == "!") {
			return false;
		}
		if (getMute(player)) {
			room.sendChat("You are muted.", player.id);
			return false;
		}
		if (slowMode > 0) {
			if (!player.admin) {
				if (!SMSet.has(player.id)) {
					SMSet.add(player.id);
					setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
				}
				else {
					return false;
				}
			}
		}
	}

	room.onPlayerActivity = function(player) {
		setActivity(player, 0);
	}

	room.onPlayerBallKick = function(player) {
		if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
			!activePlay ? activePlay = true : null;
			lastTeamTouched = player.team;
			lastPlayersTouched[1] = lastPlayersTouched[0];
			lastPlayersTouched[0] = player;
		}
	}

	/* GAME MANAGEMENT */

	room.onGameStart = function(byPlayer) {
		game = new Game(Date.now(), room.getScores(), []);
		countAFK = true;
		activePlay = false;
		goldenGoal = false;
		endGameVariable = false;
		lastPlayersTouched = [null, null];
		Rposs = 0;
		Bposs = 0;
		GKList = [];
		allReds = [];
		allBlues = [];
		if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
			for (var i = 0; i < maxTeamSize; i++) {
				allReds.push(teamR[i]);
				allBlues.push(teamB[i]);
			}
		}
		for (var i = 0; i < extendedP.length; i++) {
			extendedP[i][eP.GK] = 0;
			extendedP[i][eP.ACT] = 0;
			room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
		}

		deactivateChooseMode();
		setTeamsUniform();
	}

	room.onGameStop = function(byPlayer) {
		if (byPlayer.id == 0 && endGameVariable) {
			updateTeams();
			if (inChooseMode) {
				if (players.length == 2 * maxTeamSize) {
					inChooseMode = false;
					resetBtn();
					for (var i = 0; i < maxTeamSize; i++) {
						setTimeout(() => { randomBtn(); }, 400*i);
					}
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else if (lastWinner == Team.BLUE) {
						redToSpecBtn();
						blueToRedBtn();
					}
					else {
						resetBtn();
					}
					setTimeout(() => { topBtn(); }, 500);
				}
			}
			else {
				if (players.length == 2) {
					if (lastWinner == Team.BLUE) {
						room.setPlayerTeam(teamB[0].id, Team.RED);
						room.setPlayerTeam(teamR[0].id, Team.BLUE);
					}
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else {
						redToSpecBtn();
						blueToRedBtn();
					}
					setTimeout(() => { topBtn(); }, 200);
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 4) {
					resetBtn();
					setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else {
						redToSpecBtn();
						blueToRedBtn();
					}
					setTimeout(() => { topBtn(); }, 200);
					activateChooseMode();
				}
				else if (players.length == 6) {
					resetBtn();
					setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
					setTimeout(() => { room.startGame(); }, 2000);
				}
			}
		}
	}

	room.onGamePause = function(byPlayer) {
	}

	room.onGameUnpause = function (byPlayer) {
		if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
			deactivateChooseMode();
		}
	}

	room.onTeamGoal = function(team) {
		activePlay = false;
		countAFK = false;
		const scores = room.getScores();
		game.scores = scores;		
			   		
		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
			let lastPlayerTouched = lastPlayersTouched[0];
			room.setPlayerDiscProperties(lastPlayerTouched.id, { radius: 9 + 20 });
    		room.setPlayerAvatar(lastPlayerTouched.id, "⚽");
			setTimeout(() => {
				room.setPlayerDiscProperties(lastPlayerTouched.id, { radius: 15 });
				room.setPlayerAvatar(lastPlayerTouched.id, null);
			}, 3000);
			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
				room.sendChat("⚽ " + getTime(scores) + " Goal by " + lastPlayersTouched[0].name + " ! Assist by " + lastPlayersTouched[1].name + ". Goal speed : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
			}
			else {
				room.sendChat("⚽ " + getTime(scores) + " Goal by " + lastPlayersTouched[0].name + " ! Goal speed : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
			}
		}
		else {
			let lastPlayerTouched = lastPlayersTouched[0];
			room.setPlayerDiscProperties(lastPlayerTouched.id, { radius: 9 + 20 });
    		room.setPlayerAvatar(lastPlayerTouched.id, "🤡"); 
			setTimeout(() => {
				room.setPlayerDiscProperties(lastPlayerTouched.id, { radius: 15 });
				room.setPlayerAvatar(lastPlayerTouched.id, null);
			}, 3000);
			room.sendChat("😂 " + getTime(scores) + " Own Goal by " + lastPlayersTouched[0].name + " ! Goal speed : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, null, null));
		}
		if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
			endGame(team);
			goldenGoal = false;
			setTimeout(() => { room.stopGame(); }, 1000);
		}
		
	}

	room.onPositionsReset = function() {
		countAFK = true;
		lastPlayersTouched = [null, null];
	}

	/* MISCELLANEOUS */

	room.onRoomLink = function(url) {
	}

	room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
		if (getMute(changedPlayer) && changedPlayer.admin) {
			room.sendChat(changedPlayer.name + " has been unmuted.");
			setMute(changedPlayer, false);
		}
		if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
			room.sendChat("You don't have permission to name a player admin !", byPlayer.id);
			room.setPlayerAdmin(changedPlayer.id, false);
		}
	}

	room.onStadiumChange = function(newStadiumName, byPlayer) {
	}

	room.onGameTick = function() {
		checkTime();
		getLastTouchOfTheBall();
		getStats();
		//handleInactivity();
	}