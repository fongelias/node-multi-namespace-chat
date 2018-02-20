import { io } from '../index';

export const describeRoom = (req, res) => {
	console.log('describeRoom(' + req.namespace + ')');
	//console.log(io.nsps[req.namespace].connected);

	if(io.nsps[req.namespace]) {
		res.send({
			name: io.nsps[req.namespace].name,
			users: Object.keys(io.nsps[req.namespace].connected),
		});
	} else {
		res.send(false);
	}
}

export const requestRoom = (req, res) => {
	console.log('requestRoom(' + req.namespace + ')');
}


//Param Accessors
export const namespace = (req, res, next, namespace) => {
	req.namespace = '/' + namespace;
	next();
}