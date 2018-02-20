export class ChatRoom {
	constructor(io, name) {
		//Validate name argument
		this.getName = () => name;

		//Set up socket
		const namespace = io.of('/' + name);
		this.getNamespace = () => namespace;

		//Set up listeners for socket
		namespace.on('connection', (socket) => {
			console.log('someone connected to ' + name);

			socket.on('chat message', (msg) => {
				namespace.emit('chat message', msg);
			})

			socket.on('disconnect', () => {
				console.log('some disconnected from ' + name);
			})
		});
	}
}