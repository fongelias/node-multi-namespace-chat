import * as socketsController from '../controllers/sockets.server.controller';

export default function(app) {
	//params
	app.param('namespace', socketsController.namespace);
	//routes
	app.get('/room/:namespace', socketsController.describeRoom);
}